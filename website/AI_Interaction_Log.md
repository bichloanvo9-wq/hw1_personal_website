# AI Interaction Log
**Course:** Generative AI — Homework Assignment #1  
**Student:** Võ Bích Loan
**Student ID:** M1444023  
---

### Prompt 1: Ideation & Information Architecture Design
* **Prompt:**  
  > "I need to design a professional and academic personal website for my Generative AI coursework at Chang Gung University. I have a background in Financial Auditing and IT Auditing at Grant Thornton Vietnam, hold a CPA Australia qualification, and am currently pursuing my Master's in Information Management. I want an architecture that balances my corporate auditing authority with cutting-edge AI research. What sections should I have, and how should they be structured to meet the homework rubric?"
* **Selected AI Output:**  
  The AI proposed a 6-section structure:  
  1. *Hero / Brand Identity:* Highlighting the dual-track identity (Audit Rigor meets Artificial Intelligence) with bilingual naming (English: Lena Vo, Chinese: 武碧鸞, Vietnamese: Võ Bích Loan) and Student ID (M1444023).  
  2. *About Profile:* Summarizing 5+ years of industry experience, education, CPA credential, and core skill matrices.  
  3. *Career Evolution / Motivation:* A dedicated three-phase narrative connecting Financial Audit &rarr; IT Audit &rarr; Data Science & AI Assurance.  
  4. *Research Proposal:* Detailed breakdown of the Master's thesis on multi-modal corporate bankruptcy forecasting using SEC Form 10-K disclosures.  
  5. *Projects:* Interactive showcase of coursework projects (Generative AI Speech Assistant, Computer Vision Panorama, Text Mining).  
  6. *Contact & Links:* Interactive form, verified contact details, and downloadable resume.
* **Brief Notes on What Changed:**  
  I critiqued the initial proposal because it separated education and experience too far from the motivation story. I instructed the AI to position the **Career Evolution** section immediately following the About section to serve as the narrative backbone explaining why an IT Audit Senior chose to pursue advanced AI studies at Chang Gung University.

---

### Prompt 2: Formulating the Career Motivation & Evolution Narrative
* **Prompt:**  
  > "Help me formulate a coherent, compelling career narrative linking my three career phases: (1) Financial Audit (2020–2023 at Grant Thornton), (2) IT Audit (2023–2025 at Grant Thornton), and (3) Data Science / AI Assurance (Sep 2025–Present at Chang Gung University). Why does an auditor transition into AI, and why is AI Assurance the ultimate destination?"
* **Selected AI Output:**  
  The AI formulated the **3-Phase Evolution Paradigm**:  
  - *Phase 1 (Financial Audit):* Grounding in commercial truth, accounting standards (VAS & IFRS), and solvency. Realization: *Historical balance sheets only show past results, while operational vulnerabilities originate in information systems.*  
  - *Phase 2 (IT Audit):* Moving from ledger books to IT General Controls (ITGC), access security, and system development life cycles. Realization: *Enterprises run on algorithms and automated pipelines. Traditional checklist auditing is ill-equipped for machine learning models.*  
  - *Phase 3 (AI Assurance & Data Science):* Combining audit skepticism with deep learning and NLP to pioneer algorithmic governance, model transparency, and multi-modal financial distress forecasting.
* **Brief Notes on What Changed:**  
  The AI's initial draft leaned too heavily into generic data science buzzwords. I revised the phrasing to emphasize **audit-specific terminologies** (such as ITGC, VAS/IFRS, model risk governance, and fiduciary control) so it authentically reflects my professional credentials.

---

### Prompt 3: Technical Implementation & Responsive UI Engineering
* **Prompt:**  
  > "Generate a single-page responsive website using Tailwind CSS and vanilla JavaScript. Include a dark/light mode toggle with localStorage persistence, interactive category filter tabs for my projects, a modal view for detailed research methodologies, and an interactive contact card with quick copy-to-clipboard buttons. Make sure no node build steps are required so it can deploy instantly to GitHub Pages."
* **Selected AI Output:**  
  - Implemented semantic HTML5 layout with Tailwind CSS CDN and custom CSS glassmorphism styles (`style.css`).  
  - Built `script.js` featuring `initTheme()`, `initProjectFilters()`, `initScrollSpy()`, dynamic modal injection, and toast notifications.  
  - Styled project cards with category tags (`genai`, `cv`, `nlp`, `finance`) matching interactive filter buttons.
* **Brief Notes on What Changed:**  
  The generated modal initially lacked support for responsive image heights on mobile displays. I adjusted the modal styling to use max viewport constraints (`max-h-[65vh] overflow-y-auto`) and added keyboard accessibility (`Escape` key listener) for seamless closing.

---

### Prompt 4: Redesigning Layout with Preface Template
* **Prompt:**  
  > "The first website layout looks messy and disconnected. Please redesign it using the clean, structured look of the 'Preface' template. Keep all my interactive buttons and features, but make the spacing, fonts, and sections neat and professional."
* **Selected AI Output:**  
  - Rebuilt the layout using Tailwind CSS based on the Preface template style..  
  - Created a clean header, organized project cards, and fixed color contrast for dark/light mode.  
  * **Brief Notes on What Changed:**  
  The AI fixed the visual layout, but the text it wrote sounded generic and unnatural. I manually rewrote all the small storytelling parts and intro lines myself so the story between my audit career and AI studies feels personal and real.

---

### Prompt 5: Multi-Modal Thesis Extraction & Asset Integration
* **Prompt:**  
  > "Extract the core research design from my Master's thesis proposal document ('Predicting Corporate Bankruptcy of U.S. Public Firms: A Multi-Modal Comparative Framework Integrating Financial Ratios and SEC Form 10-K Narrative Disclosures') and synthesize it into an interactive feature card. Include the 3 research questions (RQ1–RQ3), the 3-phase comparative framework, and link my authentic profile picture and project figures."
* **Selected AI Output:**  
  - Accurately extracted the 3 research phases: Phase I (12-variable financial baseline), Phase II (SEC 10-K narrative text mining via communicative value and transformer embeddings), and Phase III (Relational Graph Neural Networks for cross-firm credit contagion).  
  - Integrated authentic extracted assets: `avatar.jpg`, `ghibli_artwork.jpg`, `sentiment_analysis.png`, and `topic_distribution.png`.
* **Brief Notes on What Changed:**  
  The initial script failed when reading file paths with non-ASCII characters due to character encoding issues on Windows. I corrected the script to use UTF-8 byte stream decoders, copied the portrait asset into an explicit `assets/` directory, and verified that all relative image links resolve without broken paths.

---

### Prompt 6: Multimedia Video Integration & Preface Template Harmonization
* **Prompt:**  
  > "Add my live recorded demonstration video ('Voice-to-Voice Assistant for the Elderly - Google Chrome 2026-06-08 01-35-22.mp4') into the Voice-to-Voice Companion for Elderly project section, embed it within the card and modal, and ensure video controls and playback work smoothly."
* **Selected AI Output:**  
  - Embedded native HTML5 video player into `index.html` within the project thumbnail with `preload="metadata"` and visual "Video Demo" badge.  
  - Integrated video playback within the dynamic JavaScript details modal in `script.js`.  
  - Implemented automatic video pausing upon modal dismissal (`closeModal`) to prevent dangling background audio playback.
* **Brief Notes on What Changed:**  
  I removed the hover overlay blocking the video controls on the card so that visitors can scrub, play, and toggle fullscreen immediately without interference.

