# Vo Bich Loan — Academic & Professional CourseWork Website
**Generative AI — Homework Assignment #1**  
**Student:** Võ Bích Loan (Vo Bich Loan / 武碧鸞)  
**Student ID:** M1444023  
**Institution:** Chang Gung University — Department of Information Management  
**Degree Program:** Master of Information Management (Sep 2025 – Present)  

---

## 🌟 Overview
This project is an academic and professional portfolio website created for **Generative AI (Homework #1)**. It bridges over four years of commercial auditing expertise at **Grant Thornton** (Financial Audit & IT Audit) and **CPA Australia** accreditation with graduate research in **AI Assurance, Financial NLP, and Multi-Modal Corporate Distress Modeling** at **Chang Gung University**.

### 📋 Homework Requirements Checklist
- [x] **Section 1: About:** Name in English (*Vo Bich Loan*), Chinese (*武碧鸞*), and Vietnamese (*Võ Bích Loan*), Student ID (*M1444023*), Master's program at Chang Gung University (Sep 2025 – Present), CPA Australia credential, and skills overview.
- [x] **Section 2: Career Evolution & Motivation:** A dedicated three-phase narrative connecting **Financial Audit &rarr; IT Audit &rarr; Data Science / AI Assurance**.
- [x] **Section 3: Thesis & Research Direction:** Multi-Modal Corporate Bankruptcy Prediction using SEC Form 10-K Disclosures (Item 1, 1A, 7) and Graph Neural Networks (GNNs).
- [x] **Section 4: Education & Experience:** Complete timeline of Grant Thornton engagements, CPA Australia, UEL Auditing degree, and technical certifications.
- [x] **Section 5: Featured Projects:** 5 in-depth research and engineering systems (Master's Thesis Model, FraudEye: Real-Time Credit Card Fraud Detection with LightGBM & SHAP, Voice-to-Voice Companion for the Elderly, Smart Panorama Stitching with Stable Diffusion, BBC News Discourse Analysis with BERTopic).
- [x] **Section 6: Contact & Links:** Verified email, phone, university address, and interactive contact form.
- [x] **Visual Elements:** Authentic portrait photo, project output plots, and architecture diagrams.
- [x] **Responsive & Modern UI:** Glassmorphism design, dark/light mode toggle with `localStorage` persistence, interactive project filter tabs, and mobile navigation drawer.
- [x] **Required Deliverables Included:**
  - `index.html`, `style.css`, `script.js`, `assets/`
  - `AI_Interaction_Log.md` (5 detailed prompts, outputs, and critique notes)
  - `Reflection.md` (398 words reflecting on human-AI collaboration)

---

## 🚀 Quick Deployment Guide (GitHub Pages in 2 Minutes)

To publish this website and obtain your public URL for submission:

### Option A: Using GitHub Pages (Recommended)
1. **Create a GitHub Repository:**
   - Log in to your GitHub account and create a new public repository (e.g., `vo-bich-loan-portfolio` or `cgu-genai-hw1`).
2. **Push the `website/` files:**
   ```bash
   cd "C:\Users\Bich Loan\Desktop\LV\CGU course\T115.1\Generative AI\Homework 1\website"
   git init
   git add .
   git commit -m "Initial release of coursework website"
   git branch -M main
   git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git
   git push -u origin main
   ```
3. **Enable GitHub Pages:**
   - Go to your repository on GitHub &rarr; **Settings** &rarr; **Pages** (under Code and automation).
   - Under **Build and deployment** &rarr; **Branch**, select `main` and folder `/(root)`, then click **Save**.
   - Your live website will be live in 1-2 minutes at:  
     `https://<your-github-username>.github.io/<your-repo-name>/`

### Option B: Deploying via Vercel (Drag-and-Drop)
1. Go to [vercel.com](https://vercel.com) and log in.
2. Drag and drop the `website` folder directly into the dashboard.
3. Your site will instantly be deployed with a live URL (e.g., `https://vo-bich-loan-portfolio.vercel.app`).

---

## 💻 Local Preview

You can preview the website locally by simply **double-clicking `index.html`** in File Explorer, or running a lightweight Python server:

```powershell
cd "C:\Users\Bich Loan\Desktop\LV\CGU course\T115.1\Generative AI\Homework 1\website"
python -m http.server 8000
```
Then visit [http://localhost:8000](http://localhost:8000) in your web browser.

---

## 📁 Project Directory Structure
```
website/
├── index.html                   # Main single-page portfolio application
├── style.css                    # Custom styles, glassmorphism, animations
├── script.js                    # Theme switcher, filters, modal, and interactivity
├── AI_Interaction_Log.md        # Homework Deliverable #3 (AI Prompt Log)
├── Reflection.md                # Homework Deliverable #4 (Reflective Essay: 398 words)
├── README.md                    # Project documentation and deployment guide
└── assets/                      # Authentic images, figures, and documents
    ├── avatar.jpg               # Professional portrait of Vo Bich Loan
    ├── CV_Vo_Bich_Loan.pdf      # Complete official CV (PDF)
    ├── ghibli_artwork.jpg       # Sample output from Image Processing project
    ├── panorama_stitch.jpg      # Sample panorama output
    ├── sentiment_analysis.png   # Sentiment plot from Text Mining project
    └── topic_distribution.png   # Topic distribution plot from Text Mining project
```
