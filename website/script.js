// JavaScript for Preface Website Template
// Author: Vo Bich Loan (武碧鸞) - Student ID: M1444023
// Chang Gung University - Master of Information Management

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initPortfolioTabs();
  initModal();
  initContactForm();
  initScrollSpy();
});

// 1. Mobile Menu Toggle
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.navbar-nav');
  const navLinks = document.querySelectorAll('.navbar-nav li a');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
}

// 2. Portfolio Category Tabs
function initPortfolioTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const portItems = document.querySelectorAll('.portfolio-item');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      portItems.forEach(item => {
        const cat = item.getAttribute('data-category') || '';
        if (filter === 'all' || cat.includes(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// 3. Project Details Modal
const projectData = {
  thesis: {
    title: "Master's Thesis: Multi-Modal Corporate Bankruptcy Prediction",
    subtitle: "Chang Gung University · Department of Information Management",
    badge: "Thesis Research Proposal",
    content: `
      <div style="margin: 0 0 16px; border-radius: 6px; overflow: hidden; border: 1px solid #e2e8f0; text-align: center; background: #ffffff; padding: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
        <img src="assets/bankruptcy_pipeline.png" alt="Bankruptcy Prediction Architecture Flowchart" style="max-width: 100%; max-height: 380px; height: auto; object-fit: contain; margin: 0 auto; display: block;">
      </div>
      <p style="margin-bottom:12px;"><strong>Title:</strong> <em>"Predicting Corporate Bankruptcy of U.S. Public Firms: A Multi-Modal Comparative Framework Integrating Financial Ratios and SEC Form 10-K Narrative Disclosures"</em></p>
      <h5 style="color:#00a78e; margin: 15px 0 6px; font-weight:700;">1. Research Objective & Context (2010–2025)</h5>
      <p style="color:#555; margin-bottom:12px;">
        Standard quantitative default models (e.g. Altman Z-score) fail to provide timely early warning during volatile macroeconomic regime shifts (QE, COVID liquidity shock, and 500+ bps Fed rate tightening). This research targets forward-looking qualitative distress signals filed under SEC Form 10-K (Item 1: Business Overview, Item 1A: Risk Factors, Item 7: MD&A).
      </p>
      <h5 style="color:#00a78e; margin: 15px 0 6px; font-weight:700;">2. Three-Phase Comparative Framework</h5>
      <ul style="padding-left:20px; color:#555; margin-bottom:12px; line-height:1.7;">
        <li><strong>Phase I (Baseline):</strong> 12-variable expanded financial ratio benchmark using XGBoost, LightGBM, and Random Forest.</li>
        <li><strong>Phase II (Multimodal Integration):</strong> SEC Form 10-K narrative parsing with transformer contextual embeddings and Text-Based Communicative Value.</li>
        <li><strong>Phase III (Graph Learning):</strong> Graph Neural Networks (GNNs) capturing inter-firm supply-chain linkages and credit contagion risk.</li>
      </ul>
      <h5 style="color:#00a78e; margin: 15px 0 6px; font-weight:700;">3. Audit & AI Assurance Rigor</h5>
      <p style="color:#555;">
        Designed with strict look-ahead bias elimination, extreme class imbalance mitigation, and post-hoc model explainability via SHAP for enterprise loan underwriting and supervisory surveillance.
      </p>
    `
  },
  fraudDetection: {
    title: "FraudEye: Real-Time Credit Card Fraud Detection & Explainable AI",
    subtitle: "Machine Learning Project",
    badge: "LightGBM · SHAP · Flask · IEEE-CIS",
    content: `
      <div style="margin: 0 0 16px; border-radius: 6px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 15px rgba(0,0,0,0.06);">
        <img src="assets/fraudeye_dashboard.png" alt="FraudEye AI Dashboard" style="width: 100%; display: block;">
      </div>
      <p style="color:#555; margin-bottom:14px; line-height: 1.7;">
        An end-to-end intelligent fraud surveillance web application engineered to identify fraudulent e-commerce credit card transactions in real time. Built upon the Vesta Corporation / IEEE-CIS Fraud Detection benchmark, the system addresses extreme class imbalance (3.5% fraud rate) and high-dimensional feature spaces (400+ anonymized variables) to predict fraudulent client card identities rather than isolated transactions.
      </p>

      <h5 style="color:#00a78e; margin: 18px 0 8px; font-weight:700;"><i class="fas fa-cogs"></i> 1. High-Performance Feature Engineering Pipeline</h5>
      <ul style="padding-left:20px; color:#555; line-height:1.7;">
        <li><strong>Card Identity Formulation:</strong> Synthesizes unique client identities by combining <code>card1</code> (Issuer ID), <code>card2</code> (Bank ID), and <code>addr1</code> (Billing State Code) with temporal delta tracking.</li>
        <li><strong>Time-Drift Elimination:</strong> Anchored relative transaction seconds (<code>TransactionDT</code>) against a fixed baseline date (November 1, 2017) to eliminate temporal drift.</li>
        <li><strong>Frequency & Label Encoding:</strong> Captures attribute rarity vs. popularity patterns across customer domains and device fingerprints.</li>
        <li><strong>Dimensionality Reduction:</strong> Selected 33 core predictive features from over 400 original columns, optimizing latency for sub-second web inference.</li>
      </ul>

      <div style="margin: 18px 0 16px; border-radius: 6px; overflow: hidden; border: 1px solid #e2e8f0;">
        <img src="assets/fraudeye_model_comparison.jpg" alt="Model Performance Comparison" style="width: 100%; display: block;">
      </div>

      <h5 style="color:#00a78e; margin: 18px 0 8px; font-weight:700;"><i class="fas fa-chart-line"></i> 2. Model Benchmarking & Performance</h5>
      <p style="color:#555; line-height: 1.7;">
        Evaluated gradient boosting architectures using ROC-AUC and Precision-Recall dynamics across 118,108 evaluated transactions:
      </p>
      <ul style="padding-left:20px; color:#555; line-height:1.7;">
        <li><strong>LightGBM (Rank 1):</strong> Achieved the highest <strong>ROC-AUC of 0.9725</strong> (98.03% global accuracy), demonstrating the lowest false-positive rate and the most robust precision-recall balance on severely skewed data.</li>
        <li><strong>XGBoost (Rank 2):</strong> Strong performance with 0.9671 ROC-AUC, stable across different decision boundaries.</li>
        <li><strong>CatBoost (Rank 3):</strong> 0.9171 ROC-AUC, exhibiting more conservative predictions with higher false positives on sparse categorical encodings.</li>
      </ul>

      <div style="margin: 18px 0 16px; border-radius: 6px; overflow: hidden; border: 1px solid #e2e8f0;">
        <img src="assets/fraudeye_batch_predict.png" alt="Batch prediction" style="width: 100%; display: block; border-bottom: 1px solid #e2e8f0;">
        <img src="assets/fraudeye_shap_explainer.png" alt="SHAP Decision Explainer" style="width: 100%; display: block;">
      </div>

      <h5 style="color:#00a78e; margin: 18px 0 8px; font-weight:700;"><i class="fas fa-brain"></i> 3. Explainable AI (XAI) via Tree-SHAP</h5>
      <p style="color:#555; line-height: 1.7;">
        Demystifies the "black-box" machine learning paradigm for financial auditing and regulatory compliance:
      </p>
      <ul style="padding-left:20px; color:#555; line-height:1.7;">
        <li><strong>Game-Theoretic Feature Attribution:</strong> Computes exact Shapley additive explanations (log-odds contributions) across all features for every evaluated transaction.</li>
        <li><strong>Personalized Local Explanations:</strong> Dynamically extracts the Top 6 risk-contributing drivers (e.g., <code>D12</code>, <code>card3</code>, <code>D7</code>, <code>addr1</code>) so fraud analysts understand exactly <em>why</em> a transaction is flagged.</li>
      </ul>

      <h5 style="color:#00a78e; margin: 18px 0 8px; font-weight:700;"><i class="fas fa-laptop-code"></i> 4. Full-Stack Flask Web Architecture</h5>
      <ul style="padding-left:20px; color:#555; line-height:1.7;">
        <li><strong>Batch Evaluation & Sensitivity Slider:</strong> Upload CSV/XLSX datasets with real-time threshold adjustment that instantly recomputes confusion matrix quadrants (TP, TN, FP, FN).</li>
        <li><strong>Single Transaction Predictor:</strong> Quick-autofill transaction tester with real-time risk scores and human-readable field decoders (card brands, state names).</li>
      </ul>
    `
  },
  voiceAssistant: {
    title: "Voice-to-Voice AI Companion for Elderly Care",
    subtitle: "AI Programming Project · Speech & Emotion Intelligence",
    badge: "Generative AI & Audio",
    content: `
      <div style="margin: 0 0 18px; border-radius: 6px; overflow: hidden; background: #000; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
        <video controls style="width: 100%; max-height: 380px; display: block;" preload="metadata">
          <source src="assets/voice_assistant_demo.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <p style="color:#555; margin-bottom:12px;">
        An end-to-end interactive conversational voice agent designed to provide emotional companionship and safety monitoring for elderly individuals.
      </p>
      <h5 style="color:#00a78e; margin: 15px 0 6px; font-weight:700;">Technical Stack:</h5>
      <ul style="padding-left:20px; color:#555; line-height:1.7;">
        <li><strong>OpenAI Whisper (base):</strong> Converts spoken conversational audio into phonetically accurate text transcripts.</li>
        <li><strong>Fine-Tuned RoBERTa:</strong> Local emotion classifier trained on mental health datasets to detect signs of loneliness, sadness, or anxiety.</li>
        <li><strong>Google Gemini API:</strong> Generates context-aware empathetic responses adapted to patient cognitive profile parameters.</li>
        <li><strong>Interactive Audio UI:</strong> Streamlit voice synthesis playback.</li>
      </ul>
    `
  },
  panorama: {
    title: "Smart Panorama Stitching & Generative Outpainting",
    subtitle: "Image Processing Coursework · Computer Vision & Diffusion",
    badge: "OpenCV · Stable Diffusion · BLIP",
    content: `
      <div style="margin: 0 0 18px; border-radius: 6px; overflow: hidden; background: #000; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
        <video controls style="width: 100%; max-height: 380px; display: block;" preload="metadata">
          <source src="assets/image_stitching_demo.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <p style="color:#555; margin-bottom:12px;">
        A hybrid image processing suite combining classic computer vision feature stitching with generative scene outpainting and an interactive Streamlit GUI.
      </p>
      <h5 style="color:#00a78e; margin: 15px 0 6px; font-weight:700;">Core Capabilities & Pipeline:</h5>
      <ul style="padding-left:20px; color:#555; line-height:1.7;">
        <li><strong>Computer Vision Pipeline:</strong> SIFT/ORB keypoint matching, RANSAC homography estimation, cylindrical warping, and multi-band blending.</li>
        <li><strong>AI Generative Fallback:</strong> When image pairs have zero visual overlap, the pipeline calls BLIP for captioning and feeds prompt guidance into Stable Diffusion to paint coherent scene completions.</li>
        <li><strong>Full Image Editing Suite:</strong> Brightness, contrast, Gaussian blur, and Laplacian sharpening in an interactive Streamlit UI.</li>
      </ul>
    `
  },
  textMining: {
    title: "Multi-Dimensional Analysis of BBC News: Discourse, Sentiment Dynamics & Temporal Trends",
    subtitle: "Text Mining Project",
    badge: "BERTopic · VADER · Time-Series · SpaCy",
    content: `
      <div style="margin: 0 0 16px; border-radius: 6px; overflow: hidden; border: 1px solid #e2e8f0; text-align: center; background: #ffffff; padding: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
        <img src="assets/bbc_emotional_profile.png" alt="RQ2 Emotional Profile per Topic" style="max-width: 100%; max-height: 340px; height: auto; object-fit: contain; margin: 0 auto; display: block;">
      </div>

      <p style="color:#555; margin-bottom:14px; line-height: 1.7;">
        An automated text mining and natural language processing system analyzing <strong>42,115 BBC News articles</strong> published between March 2022 and December 2024. The research investigates news narrative structures, topic dominance, emotional polarity across thematic clusters, and the mathematical correlation between volume surges and sentiment volatility.
      </p>

      <h5 style="color:#00a78e; margin: 18px 0 8px; font-weight:700;"><i class="fas fa-chart-pie"></i> 1. RQ1: Topic Extraction & Popularity Dominance</h5>
      <p style="color:#555; line-height: 1.7;">
        Using <strong>BERTopic</strong> with <code>all-MiniLM-L6-v2</code> transformer contextual embeddings and spaCy POS filtering (synthesizing title and description tokens):
      </p>
      <div style="margin: 14px 0 16px; border-radius: 6px; overflow: hidden; border: 1px solid #e2e8f0; text-align: center; background: #ffffff; padding: 10px;">
        <img src="assets/bbc_topic_volume.png" alt="RQ1 Topic Volume Top 10" style="max-width: 100%; max-height: 320px; height: auto; object-fit: contain; margin: 0 auto; display: block;">
      </div>
      <ul style="padding-left:20px; color:#555; line-height:1.7;">
        <li><strong>Volume Dominance:</strong> Political reporting (<em>Elections, Trump, UK Governance</em> with 8,142 articles) and Sports (<em>World Cup, Premier League</em> with 5,699 articles) make up over 50% of the structured corpus, forming the foundation of daily coverage.</li>
        <li><strong>Crisis Management Clusters:</strong> High-urgency clusters such as Conflict (<em>Gaza, Ukraine, Russia</em> - 4,125 articles) and Socio-economic friction (<em>Inflation, Energy crisis, Cost of living</em> - 2,334 articles) exhibit cyclical surges.</li>
      </ul>

      <h5 style="color:#00a78e; margin: 18px 0 8px; font-weight:700;"><i class="fas fa-heartbeat"></i> 2. RQ2: Sentiment Profiling & Systemic Negativity Bias</h5>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 15px; margin: 14px 0 16px;">
        <div style="border-radius: 6px; overflow: hidden; border: 1px solid #e2e8f0; text-align: center; background: #ffffff; padding: 10px;">
          <img src="assets/bbc_sentiment_distribution.png" alt="Overall Sentiment Distribution" style="max-width: 100%; max-height: 250px; height: auto; object-fit: contain; margin: 0 auto; display: block;">
          <div style="font-size: 11.5px; color: #64748b; margin-top: 6px; font-weight: 600;">Overall Corpus Polarity Distribution</div>
        </div>
        <div style="display: flex; flex-direction: column; justify-content: center; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px;">
          <div style="font-size: 13px; color: #334155; margin-bottom: 8px;"><strong>Corpus Statistics (42,115 Articles):</strong></div>
          <div style="color: #ef4444; font-weight: 700; margin-bottom: 4px;"><i class="fas fa-arrow-down"></i> Negative: 47.3% (19,910 articles)</div>
          <div style="color: #10b981; font-weight: 700; margin-bottom: 4px;"><i class="fas fa-arrow-up"></i> Positive: 36.6% (15,419 articles)</div>
          <div style="color: #64748b; font-weight: 700;"><i class="fas fa-minus"></i> Neutral: 16.1% (6,786 articles)</div>
          <div style="font-size: 12px; color: #64748b; margin-top: 10px; line-height: 1.5;">Demonstrates that mainstream media coverage skews significantly toward negative sentiment due to crisis urgency.</div>
        </div>
      </div>
      <p style="color:#555; line-height: 1.7;">
        <strong>Hard News Negativity:</strong> Conflict & Geopolitics leads with a mean compound score of <code>-0.36</code>, followed by Transportation Accidents (<code>-0.31</code>) and Climate/Disasters (<code>-0.25</code>). Positive sentiment is concentrated in Sports (<code>+0.28</code>) and General Human-Interest Features (<code>+0.32</code>).
      </p>

      <h5 style="color:#00a78e; margin: 18px 0 8px; font-weight:700;"><i class="fas fa-wave-square"></i> 3. RQ3: Temporal Spikes & Sentiment-Volume Correlation</h5>
      <div style="margin: 14px 0 16px; border-radius: 6px; overflow: hidden; border: 1px solid #e2e8f0; text-align: center; background: #ffffff; padding: 10px;">
        <img src="assets/bbc_temporal_trends.png" alt="Temporal Trends for 3 Major Topics" style="max-width: 100%; height: auto; object-fit: contain; margin: 0 auto; display: block;">
      </div>
      <ul style="padding-left:20px; color:#555; line-height:1.7;">
        <li><strong>Negative Pearson Correlation (r &lt; 0):</strong> Across most hard news topics, significant surges in publication volume mathematically correlate with shifts toward negative emotional polarity.</li>
        <li><strong>Real-World Temporal Anchors:</strong> Major volume peaks align precisely with historical milestones: October 2022 UK government crisis (Liz Truss & Rishi Sunak), March 2023 Trump indictment, October 2023 Middle East escalation, and the June 2024 UK General Election.</li>
      </ul>

      <h5 style="color:#00a78e; margin: 18px 0 8px; font-weight:700;"><i class="fas fa-check-double"></i> 4. Audit Rigor: Manual Recheck & Model Limitations</h5>
      <div style="margin: 14px 0 16px; border-radius: 6px; overflow: hidden; border: 1px solid #e2e8f0; text-align: center; background: #ffffff; padding: 8px;">
        <img src="assets/bbc_manual_validation.png" alt="Manual Validation Audit Table" style="max-width: 100%; height: auto; display: block;">
      </div>
      <p style="color:#555; line-height: 1.7;">
        Applying auditing skepticism to evaluate rule-based NLP: Human spot-checking uncovered key false positives where VADER misclassified British legal terminology and colloquial idioms (e.g., misinterpreting <em>"high UK energy bills"</em> or <em>"Ronaldo dropped"</em> due to vocabulary nuances), highlighting the necessity of contextual domain adaptations.
      </p>
    `
  }
};

function initModal() {
  const overlay = document.getElementById('details-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalSub = document.getElementById('modal-sub');
  const modalBadge = document.getElementById('modal-badge');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.getElementById('modal-close-btn');

  window.openModal = function(key) {
    const data = projectData[key];
    if (!data || !overlay) return;

    modalTitle.textContent = data.title;
    modalSub.textContent = data.subtitle;
    modalBadge.textContent = data.badge;
    modalBody.innerHTML = data.content;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  function closeModal() {
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    if (modalBody) {
      const videos = modalBody.querySelectorAll('video');
      videos.forEach(v => v.pause());
    }
  }
}

// 4. Contact Form Handler
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      alert(`Thank you, ${name}! Your message has been prepared. (For direct contact, please also email to bichloanvo9@gmail.com)`);
      form.reset();
    });
  }
}

// 5. Scroll Spy (Active nav link)
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.navbar-nav li a');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const parent = link.parentElement;
      parent.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        parent.classList.add('active');
      }
    });
  });
}
