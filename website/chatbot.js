// AI Chat Box – answers visitors' questions about Võ Bích Loan
// The AI call goes through a Cloudflare Worker (see /chat-worker) so the API key stays secret.

// 1) After deploying the Worker, paste its URL here, e.g.
//    "https://loan-portfolio-chat.<your-subdomain>.workers.dev"
//    If left empty (or the Worker is unreachable), the box answers from the offline FAQ below.
const CHAT_API_URL = "https://loan-portfolio-chat.bichloanvo9.workers.dev";

(function () {
  const history = []; // [{role: "user"|"assistant", content: "..."}]

  const SUGGESTIONS = [
    "Who is Loan?",
    "What is her Master's thesis about?",
    "Tell me about FraudEye",
    "What certifications does she have?",
    "How can I contact her?",
  ];

  // Offline FAQ used when the AI service is not configured or unavailable.
  const FAQ = [
    { keys: ["contact", "email", "phone", "liên hệ", "联系", "mail"],
      answer: "You can reach Loan by email at bichloanvo9@gmail.com or by phone/WhatsApp at 0916695842. She is based in Taoyuan City, Taiwan." },
    { keys: ["thesis", "bankruptcy", "luận văn", "論文", "10-k", "gnn"],
      answer: "Her Master's thesis predicts corporate bankruptcy of U.S. public firms with a multi-modal framework: 12 financial ratios (XGBoost, LightGBM, Random Forest), SEC Form 10-K narrative text with transformer embeddings, and Graph Neural Networks for credit contagion, explained with SHAP." },
    { keys: ["fraud", "fraudeye", "gian lận"],
      answer: "FraudEye is her real-time credit card fraud detection system trained on IEEE-CIS data. LightGBM achieved the best ROC-AUC of 0.9725, with SHAP explanations and a Flask dashboard for batch and single-transaction predictions." },
    { keys: ["certif", "cpa", "chứng chỉ", "证书"],
      answer: "She passed 3 CPA Australia subjects (Financial Reporting with High Distinction, Auditing, Taxation), plus 2025 data certifications (SQL for Data Science, Data Visualization, Data Analytics) and a 2018 IT Auditing certificate from PwC Vietnam & REMANN Korea." },
    { keys: ["language", "ielts", "toeic", "tocfl", "chinese", "english", "ngôn ngữ", "语言"],
      answer: "Vietnamese is her native language. English: IELTS 7.0 (Writing 7.5) and TOEIC 940. Chinese: TOCFL Level 3 with a score of 1000." },
    { keys: ["experience", "work", "grant thornton", "job", "kinh nghiệm", "工作", "audit"],
      answer: "At Grant Thornton Vietnam she was an Audit Senior Associate (08/2021–11/2023), auditing financial statements under VAS and IFRS, and then an IT Audit Senior Associate (12/2023–06/2025), evaluating IT General Controls and ERP controls." },
    { keys: ["education", "study", "university", "master", "degree", "học", "学"],
      answer: "She is pursuing a Master of Information Management at Chang Gung University, Taiwan (since Sep 2025), and holds a Bachelor in Auditing (Honors, GPA 8.33/10) from the University of Economics and Law, VNU-HCM." },
    { keys: ["project", "portfolio", "dự án", "项目"],
      answer: "Her projects include the multi-modal bankruptcy prediction thesis, FraudEye fraud detection, a voice-to-voice AI companion for the elderly, smart panorama stitching with AI outpainting, and a BBC News topic & sentiment analysis of 42,115 articles." },
    { keys: ["who", "about", "loan", "lena", "giới thiệu", "là ai", "是谁"],
      answer: "Võ Bích Loan (Lena Vo, 武碧鸞) is a graduate researcher in AI Assurance at Chang Gung University, Taiwan. She moved from financial audit to IT audit at Grant Thornton, and now combines audit expertise with ML to help businesses trust the AI systems they deploy." },
  ];

  function faqAnswer(question) {
    const q = question.toLowerCase();
    const hit = FAQ.find(item => item.keys.some(k => q.includes(k)));
    return hit
      ? hit.answer
      : "I'm not sure about that one. Try asking about her education, experience, thesis, projects or certifications — or email her at bichloanvo9@gmail.com.";
  }

  // ---------- Build the widget ----------
  const root = document.createElement("div");
  root.className = "chatbot";
  root.innerHTML = `
    <button class="chatbot-toggle" aria-label="Open AI chat" aria-expanded="false">
      <i class="fas fa-comments"></i>
    </button>
    <div class="chatbot-panel" role="dialog" aria-label="Ask about Loan" hidden>
      <div class="chatbot-header">
        <div class="chatbot-avatar"><img src="assets/avatar.jpg" alt=""></div>
        <div class="chatbot-title">
          <strong>Ask about Loan</strong>
          <span>AI assistant · usually answers instantly</span>
        </div>
        <button class="chatbot-close" aria-label="Close chat">&times;</button>
      </div>
      <div class="chatbot-messages" aria-live="polite"></div>
      <div class="chatbot-suggestions"></div>
      <form class="chatbot-form">
        <input type="text" class="chatbot-input" placeholder="Ask a question about Loan..." maxlength="1000" autocomplete="off" aria-label="Your question">
        <button type="submit" class="chatbot-send" aria-label="Send"><i class="fas fa-paper-plane"></i></button>
      </form>
    </div>
  `;
  document.body.appendChild(root);

  const toggleBtn = root.querySelector(".chatbot-toggle");
  const panel = root.querySelector(".chatbot-panel");
  const closeBtn = root.querySelector(".chatbot-close");
  const messagesEl = root.querySelector(".chatbot-messages");
  const suggestionsEl = root.querySelector(".chatbot-suggestions");
  const form = root.querySelector(".chatbot-form");
  const input = root.querySelector(".chatbot-input");
  const sendBtn = root.querySelector(".chatbot-send");

  function addMessage(role, text) {
    const bubble = document.createElement("div");
    bubble.className = `chatbot-msg chatbot-msg-${role}`;
    bubble.textContent = text; // textContent = safe against HTML injection
    messagesEl.appendChild(bubble);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return bubble;
  }

  function setOpen(open) {
    panel.hidden = !open;
    toggleBtn.setAttribute("aria-expanded", String(open));
    toggleBtn.classList.toggle("is-open", open);
    if (open) input.focus();
  }

  toggleBtn.addEventListener("click", () => setOpen(panel.hidden));
  closeBtn.addEventListener("click", () => setOpen(false));

  SUGGESTIONS.forEach(text => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chatbot-chip";
    chip.textContent = text;
    chip.addEventListener("click", () => ask(text));
    suggestionsEl.appendChild(chip);
  });

  addMessage("assistant", "Hi! 👋 I'm Loan's AI assistant. Ask me anything about her background, research, projects or how to contact her. (English, Tiếng Việt, 中文 all welcome!)");

  async function getReply() {
    if (!CHAT_API_URL) return faqAnswer(history[history.length - 1].content);
    try {
      const res = await fetch(CHAT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      const data = await res.json();
      if (!res.ok || !data.reply) throw new Error(data.error || `HTTP ${res.status}`);
      return data.reply;
    } catch (err) {
      console.warn("AI chat unavailable, using offline FAQ:", err);
      return faqAnswer(history[history.length - 1].content);
    }
  }

  let busy = false;
  async function ask(question) {
    question = question.trim();
    if (!question || busy) return;
    busy = true;
    sendBtn.disabled = true;
    suggestionsEl.hidden = true;

    addMessage("user", question);
    history.push({ role: "user", content: question });
    input.value = "";

    const typing = addMessage("assistant", "");
    typing.classList.add("chatbot-typing");
    typing.innerHTML = "<span></span><span></span><span></span>";

    const reply = await getReply();
    typing.remove();
    addMessage("assistant", reply);
    history.push({ role: "assistant", content: reply });

    busy = false;
    sendBtn.disabled = false;
    input.focus();
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    ask(input.value);
  });
})();
