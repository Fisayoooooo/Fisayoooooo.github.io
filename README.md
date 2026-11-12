# Oluwafisayomi Oyolola — Information Systems Portfolio

A single-page personal portfolio website for **Oluwafisayomi Oyolola** (B.S. in Information Systems, UMBC Honors College, CWIT Cyber Scholar). Built with an authentic retro desktop-OS aesthetic featuring a clean warm cream background, sage & olive green palettes, outlined retro window cards, and tactile folder navigation.

---

## 📁 File Structure

```text
Portfolio/
├── index.html       # Desktop viewport layout, folder cards & bottom taskbar
├── style.css        # Retro OS styling (graph paper grid, windows, responsive rules)
├── content.js       # Central data file containing all research, projects, honors, and bio
├── app.js           # Dynamic modal window controller, keyboard accessibility & live clock
├── photo.jpg        # [OPTIONAL] Headshot photo for the Profile retro badge
└── README.md        # Portfolio documentation & instructions
```

---

## 🎓 Populated Content Summary

- **Desktop Welcome Widget (Home Screen)**: Pinned desktop operator card featuring your headshot (`new headshot finnally.jpeg`), a warm greeting ("Hi, I'm Fisayo!"), and a quick-action button to open your full profile.

1. **Profile (`Profile_Oluwafisayomi.sys`)**:
   - **Retro User Badge**: Square framed photo (`new headshot finnally.jpeg`) with sage green palette and caption "Fisayo Oyolola".
   - **Academic Details**: B.S. in Information Systems at UMBC (Expected May 2028), Honors College.
   - **Credentials**: CWIT Cyber Scholar, URA Scholar.
   - **Coursework**: Database Design, Management IS, Cisco 2 Switching/Routing/Wireless, Cisco 1 Intro to Networks, Security Fundamentals, PC Diagnostics, PC OS, Applied Calculus, Statistics.
   - **Certifications**: CompTIA A+ (2023), Adobe Web Design & Visual Design.
   - **Technical & Tools**: Java, HTML, CSS, SQL, Wireshark, Cisco Packet Tracer, Eclipse, Visual Studio, Photoshop.

2. **Experience (`Experience_Log.dir`)**:
   - **UMBC Information Systems Dept (Feb 2026 – Present)**: *Everyday Ethics Project* — Qualitative analysis, Human-Centered Computing (HCC), UX methods, narrative analysis, affinity diagramming, and scenario-based caselets.
   - **Applied Research Laboratory for Intelligence and Security - ARLIS (Jun 2026 – Aug 2026)**: *RISC Intern* — 500+ file multimodal synthetic dataset (CAD, SQL, CSV, logs, images, videos) for Army TSMO LLM threat & breach triage, metadata tracking, and dataset governance.
   - **Carnegie Mellon University - Human-Computer Interaction Institute (May 2025 – Aug 2025)**: *Research Assistant* — Child UX playtesting, protocol design, 15 student playtest interviews for an emotional regulation video game.

3. **Updates (`Updates_and_Activity.log`)**:
   - **Tapia Celebration of Diversity in Computing (Fall 2026)**: Conference participation, HCI and AI governance technical sessions, and networking.
   - **ARLIS Defense AI Research Milestone (Summer 2026)**: Delivering the 500+ file multimodal synthetic dataset to Army TSMO stakeholders.
   - **CWIT Peer Mentorship Recognition (Spring 2026)**: Receiving the 2026 Exemplary Peer Mentor Award and guiding first-year students.
   - **UMBC Crafters Club Leadership (Academic Year 2025–2026)**: Coordinating campus events, fundraisers, and creative student spaces as Vice President.

4. **Awards (`Honors_and_Scholars.log`)**:
   - UMBC Center for Women in Technology (CWIT) Cyber Scholar
   - UMBC Undergraduate Research Award (URA) Scholar
   - UMBC Honors College Scholar
   - 2026 Exemplary Peer Mentor Award (CWIT)
   - CompTIA A+ Certified & Adobe Certified Professional

5. **Resume / Contact (`Resume_and_Contact.cfg`)**:
   - Direct Email: `oyololafisayo@gmail.com`
   - LinkedIn: `https://www.linkedin.com/in/oluwafisayomi-oyolola`
   - One-click resume download button

---

## 📄 Adding Your Resume PDF

To make the resume download button download your exact PDF:
1. Save your resume PDF inside this folder: `C:\Users\oyolo\Documents\Portfolio\resume.pdf`
2. Open [`content.js`](file:///c:/Users/oyolo/Documents/Portfolio/content.js) and change:
   ```javascript
   resumePdf: "resume.pdf",
   ```

---

## 🚀 How to View Locally

Double-click [`index.html`](file:///c:/Users/oyolo/Documents/Portfolio/index.html) to open it in your default web browser, or launch a lightweight local server:

```bash
# Using Python
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.
