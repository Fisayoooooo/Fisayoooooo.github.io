/**
 * ==============================================================================
 * PORTFOLIO CONTENT CONFIGURATION
 * ==============================================================================
 * Portfolio data for Oluwafisayomi Oyolola
 * B.S. in Information Systems | UMBC Honors College
 * ==============================================================================
 */

const PORTFOLIO_CONTENT = {
  // General Student & Site Information
  meta: {
    title: "PORTFOLIO",
    studentName: 'Oluwafisayomi "Fisayo" Oyolola',
    degree: "B.S. in Information Systems",
    university: "University of Maryland, Baltimore County (UMBC)",
    gradYear: "Class of 2028",
    tagline: "UMBC Honors College & Center for Women in Technology (CWIT) Cyber Scholar · Research in Human-Computer Interaction & Incident Response Training Data",
    status: "SYSTEM READY // IS_WORKSTATION",
    welcomeGreeting: "Hi, I'm Fisayo!",
    welcomeNote: "Welcome to my digital workstation. I'm an undergraduate Information Systems student and CWIT Cyber Scholar at UMBC exploring Human-Centered Computing and cybersecurity. Click any folder below to check out my experience, updates, and awards!",
    pinnedPhoto: "new headshot finnally.jpeg",
  },

  // Social & External Links (Displayed in the bottom taskbar & contact window)
  links: {
    github: "https://github.com/Fisayoooooo", // Add your specific GitHub username when ready
    linkedin: "https://www.linkedin.com/in/oluwafisayomi-oyolola-a57904329/",
    email: "oyololafisayo@gmail.com",
    resumePdf: "resume.pdf", // Link to your resume PDF file
  },

  // Folder 1: PROFILE
  profile: {
    windowTitle: "Profile_Oluwafisayomi.sys",
    photo: "new headshot finnally.jpeg",
    photoCaption: "Fisayo Oyolola",
    heading: "Oluwafisayomi 'Fisayo' Oyolola",
    subheading: "Information Systems Major · CWIT Cyber Scholar · UMBC Honors College",
    bio: [
      "I am an undergraduate Information Systems student at the University of Maryland, Baltimore County (UMBC) exploring Human-Centered Computing (HCC) and cybersecurity.",
      "As a Center for Women in Technology (CWIT) Cyber Scholar and UMBC Undergraduate Research Award (URA) Scholar, my experience spans qualitative research in tech ethics, developing datasets for LLM threat triage, and conducting UX playtesting research.",
      "I offer a blend of technical tools (Java, Wireshark, SQL, PC architecture) and human-centered research skills (thematic synthesis, affinity diagramming, usability protocol design), coupled with demonstrated student leadership and mentorship."
    ],
    details: [
      { label: "Degree", value: "B.S. Information Systems, Cybersecurity Certificate" },
      { label: "Expected Graduation", value: "May 2028" },
      { label: "Affiliations", value: "CWIT Cyber Scholar · Honors College · URA Scholar" },
      { label: "Location", value: "Baltimore, MD (UMBC)" }
    ],
    skills: {
      technical: [
        "Java",
        "HTML & CSS",
        "SQL & Relational Schemas",
        "Data Analysis"
      ],
      systemsAndTools: [
        "Wireshark",
        "Cisco Packet Tracer",
        "Eclipse & Visual Studio",
        "Microsoft Office Suite",
        "Adobe Photoshop"
      ]
    
    },
    coursework: [
      "Security Fundamentals",
      "PC Repair & Diagnostics",
      "PC Operating Systems",
      "Java",
      "Human-Centered Design",
      "Software & Hardware Concepts",
      "Database Design",
      "Data Communications & Networks"
    ],
    certifications: [
      "CompTIA A+ Certified (2023)",
      "Adobe Web Design & Visual Design"
    ]
  },

  // Folder 2: EXPERIENCE (RESEARCH & INDUSTRY)
  research: {
    windowTitle: "Experience_Log.dir",
    heading: "Technology & Research Experience",
    intro: "Both applied and academic research!",
    items: [
      {
        title: "Everyday Ethics Project: Qualitative Analysis & Scenario-Based Caselets",
        role: "Research Assistant",
        lab: " Everyday Design Lab ",
        period: "Feb 2026 – Present",
        advisors: "PI: Dr. Yasmine Kotturi",
        summary: "Conducting qualitative analysis for the Everyday Ethics Project by analyzing in-depth interviews with early-career tech professionals to formulate scenario-based ethics caselets for UMBC Computer Science and Information Systems courses. Applying Human-Centered Computing (HCC) and UX research methods—including narrative analysis and thematic synthesis—to extract actionable ethical frameworks and stories.",
        tags: ["Human-Centered Computing", "Qualitative Analysis", "Narrative Analysis", "Thematic Synthesis", "Tech Ethics"],
        images: [
          { src: "images/kotturi-lab-logo.png", alt: "Everyday Design Lab logo", fit: "cover" }
        ],
        linkText: "Everyday Design Lab",
        linkUrl: "https://ykotturi.github.io/students/"
      },
      {
        title: "Multimodal Synthetic Dataset for LLM Threat Triage",
        role: "Research for Intelligence and Security Challenges (RISC) Intern",
        lab: "Applied Research Laboratory for Intelligence and Security (ARLIS)",
        period: "Jun 2026 – Aug 2026",
        advisors: "Supporting Army Threat Systems Management Office (TSMO)",
        summary: "Developed a 500+ file multimodal synthetic dataset spanning CAD, SQL, CSV, images, videos, and log files for the Army Threat Systems Management Office (TSMO) to support LLM training for automated threat and breach triage. Engineered a comprehensive metadata tracking system to document classification levels, sensitive content flags, redaction parameters, and searchable tags for dataset navigation.",
        tags: ["Threat & Breach Triage", "Synthetic Data", "LLM Training", "Prompt Engineering", "Dataset Creation", ],
        images: [
          { src: "images/arlis-poster.jpg", alt: "ARLIS RISC Multimodal Synthetic Dataset Research Poster", fit: "cover" }
        ],
        linkText: "ARLIS RISC Program",
        linkUrl: "https://www.arlis.umd.edu/"
      },
      {
        title: "Emotional Regulation Game: User Experience Research",
        role: "Research Assistant",
        lab: "Carnegie Mellon University — Center for Transformational Play (CTP)",
        period: "May 2025 – Aug 2025",
        advisors: "PI: Dr. Jessica Hammer",
        summary: "Collaborated with the Allegheny Health Network on the 'Chill Room' project to help middle school students build resilience and emotional regulation. Was a part of the research team to design interview questions assessing user experience with the emotional regulation game, and conducted interviews for 15 student playtests by coordinating with local schools and clinics, iteratively testing our protocol over a 10-week period. I also designed supporting materials to facilitate user research and deployment studies, and collected and analyzed playtest data to deliver findings to the tech team and guide usability improvements.",
        tags: ["HCI", " UX", "Playtesting", "Interview Design", "Qualitative Coding"],
        images: [
          { src: "images/ahn_chill_room_tidbit.png", alt: "Allegheny Health Network & CMU Chill Room: Pocket Edition", fit: "contain" }
        ],
        linkText: "Learn more about 'Chill Room: Pocket Edition'",
        linkUrl: "https://www.cmu.edu/ctp/projects/ahn_chill_room.html"
      }
    ]
  },

  // Folder 3: UPDATES & ACTIVITY
  projects: {
    windowTitle: "Updates_and_Activity.log",
    heading: "Recent Updates & Activity",
    intro: "A running dispatch of conferences attended, internship milestones, and what I've been up to...",
    items: [
      {
        title: "Attending the 2026 Tapia Celebration of Diversity in Computing",
        category: "Conference & Networking · Atlanta, Georgia",
        date: "Fall 2026",
        summary: "Attended the ACM Richard Tapia Celebration of Diversity in Computing, connecting with scholars, industry mentors, and researchers across human-computer interaction, cybersecurity, and data systems. Participated in technical workshops exploring AI governance and equitable technology design.",
        highlights: [
          "Attended through UMBC's Center for Women in Technology (CWIT), which sponsors students each year. This year's theme: Frontier AI, Assistive Technologies, and Cybersecurity.",
          "Agentic AI tutorial with Matthew T. Dearing of Argonne National Laboratory: a refresher on AI and generative AI, then agentic frameworks and how to build software tools with LLMs.",
          "Panel \"Who Gets Recognized by Speech AI? Equity, Access, and the Future of Voice Computing\" by Chibuzor Okocha and Kweku Y., PhD students at the University of Florida, on how a voice carries more than words (language, accent, identity, emotion, fluency) that text alone can't capture.",
          "The Black in Computing session: a candid space to talk about navigating computing as a Black student and professional, and a reminder to slow down and celebrate wins."
        ],
        images: [
          { src: "images/tapia-1.jpg", alt: "Fisayo and a fellow student holding up their Tapia conference badges and ribbons in front of the CMD-IT and Tapia backdrop" },
          { src: "images/tapia-2.jpg", alt: "Fisayo standing next to the CMD-IT banner at the Tapia conference" },
          { src: "images/tapia-3.jpg", alt: "Fisayo with four other attendees in front of the Tapia and CMD-IT backdrop" }
        ],
        tags: ["Tapia 2026", "Diversity in Tech", "HCI & Cybersecurity", "Networking"],
        linkText: "Tapia Conference Info",
        linkUrl: "https://tapiaconference.cmd-it.org/"
      },
      {
        title: "Wrapping Up Applied Research at ARLIS (RISC Internship)",
        category: "Internship Milestone",
        date: "Summer 2026",
        summary: "Concluded the 10-week Research for Intelligence and Security Challenges (RISC) summer fellowship at the Applied Research Laboratory for Intelligence and Security (ARLIS). Successfully developed and delivered a 500+ file multimodal synthetic dataset and metadata tracking platform to the Army Threat Systems Management Office (TSMO).",
        images: [
          { src: "images/arlis-poster.jpg", alt: "Fisayo and a teammate standing on either side of their RISC program research poster" },
          { src: "images/arlis-logo.jpg", alt: "University of Maryland Applied Research Laboratory for Intelligence and Security (ARLIS) logo", fit: "contain" }
        ],
        tags: ["ARLIS RISC", "AI", "Synthetic Datasets", "Army TSMO"],
        linkText: "ARLIS Research",
        linkUrl: "https://www.arlis.umd.edu/"
      },
      {
        title: "Mentoring First-Year Students & CWIT Exemplary Peer Mentor Award",
        category: "Leadership & Community",
        date: "Spring 2026",
        summary: "Honored to receive the 2026 Exemplary Peer Mentor Award from the UMBC Center for Women in Technology (CWIT). Met biweekly with freshman Information Systems students to share strategies for academic success, and navigating university life.",
        images: [
          { src: "images/peer_mentor_award.png", alt: "CWIT Exemplary Peer Mentor Award recognition", fit: "contain" }
        ],
        tags: ["CWIT", "Peer Mentorship", "Student Leadership", "Award"],
        linkText: null,
        linkUrl: null
      },
      {
        title: "UMBC Crafters Club: Campus Creative Spaces",
        category: "Campus Life & Outreach",
        date: "Academic Year 2026–2027",
        summary: "Serving as Vice President of the UMBC Crafters Club, coordinating general body meetings, workshop logistics, campus fundraisers, and community collaborations to provide students with a creative and welcoming de-stress space.",
        images: [
          { src: "images/crafters.png", alt: "UMBC Crafters Club campus creative spaces and community activities" }
        ],
        tags: ["Student Organization", "Event Planning", "Community", "Student Leadership"],
        linkText: null,
        linkUrl: null
      }
    ]
  },

  // Folder 4: AWARDS
  awards: {
    windowTitle: "Honors_and_Scholars.log",
    heading: "Honors, Scholarships & Certifications",
    intro: "Competitive academic scholarships, university research grants, peer mentorship recognition, and industry certifications.",
    items: [
      {
        title: "UMBC Center for Women in Technology (CWIT) Cyber Scholar",
        issuer: "UMBC Center for Women in Technology & National Science Foundation / Industry Partners",
        date: "2024 – Present",
        description: "Prestigious merit scholarship awarded to high-achieving undergraduate students committed to cybersecurity, technology, and advancing gender diversity in computing fields. Awarded $10,000 per year."
      },
      {
        title: "UMBC Undergraduate Research Award (URA) Scholar",
        issuer: "UMBC Division of Academic Affairs & Office of Undergraduate Research",
        date: "2026 – 2027",
        description: "Competitive university research grant providing dedicated funding to undergraduate scholars conducting independent or departmental research under faculty mentorship. Awarded $1,000."
      },
      {
        title: "UMBC Honors College Scholar",
        issuer: "University of Maryland, Baltimore County Honors College",
        date: "2024 – Present",
        description: "Admitted into UMBC's rigorous honors curriculum, participating in specialized interdisciplinary honors coursework and academic enrichment programs."
      },
      {
        title: "2026 Exemplary Peer Mentor Award",
        issuer: "UMBC Center for Women in Technology (CWIT)",
        date: "2026",
        description: "Selected for exceptional dedication, biweekly guidance, and positive impact supporting first-year Information Systems students transitioning into university academics."
      },
      {
        title: "CompTIA A+ Certification",
        issuer: "CompTIA (Computing Technology Industry Association)",
        date: "Issued 2023",
        description: "Industry-standard professional credential validating core knowledge in hardware diagnostics, networking concepts, operating systems, security fundamentals, and operational procedures."
      },
      {
        title: "Adobe Web Design & Visual Design Certification",
        issuer: "Adobe Certified Professional",
        date: "Issued 2023",
        description: "Professional certification validating digital media creation, web design standards, UI visual design principles, and proficiency in Adobe creative applications."
      }
    ]
  },

  // Folder 5: RESUME / CONTACT
  contact: {
    windowTitle: "Resume_and_Contact.cfg",
    heading: "Get in Touch & Resume Information",
    intro: "Open to discussing research and internship opportunities. Feel free to reach out directly via email or LinkedIn.",
    resumeSection: {
      headline: "Oluwafisayomi Oyolola — Resume",
      description: "Download my complete one-page resume highlighting my work at UMBC, ARLIS, and Carnegie Mellon, in addition to coursework, and certifications.",
      downloadText: "Download Resume.pdf",
      fileName: "resume.pdf"
    },
    contactMethods: [
      {
        label: "Direct Email",
        value: "oyololafisayo@gmail.com",
        action: "mailto:oyololafisayo@gmail.com"
      },
      {
        label: "LinkedIn Profile",
        value: "linkedin.com/in/oluwafisayomi-oyolola",
        action: "https://www.linkedin.com/in/oluwafisayomi-oyolola-a57904329/"
      }
    ],
    quickMessageNotice: "For official academic transcripts or research inquiries, please reach out via email or LinkedIn."
  }
};
