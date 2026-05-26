export const siteConfig = {
  name: "Farisi Mohammad",
  title: "Data Scientist / Data Analyst",
  description: "Portfolio website of Farisi Mohammad",
  accentColor: "#e5e5e5",
  social: {
    email: "farisimohammad2003@gmail.com",
    linkedin: "https://linkedin.com/in/farisimohammad",
    github: "https://github.com/fareasy",
  },
  aboutMe:
    "I’m a data analyst interested in data science and machine learning. I like working with data to find patterns, answer questions, and turn information into something useful. I enjoy exploring datasets, building models, and creating clear visualizations. I value structured thinking, practical insights, and clean, reproducible work. Still learning, still building.",
  skills: ["Python","SQL","Data Analysis","Dashboard Building","Tableau"],
  projects: [
    {
      name: "E-Commerce Performance Dashboard",
      description:
        "Built an end-to-end analytics pipeline with PostgreSQL and Tableau on the Olist Brazilian E-Commerce Dataset, featuring an interactive dashboard tracking revenue, orders, customer metrics, top product categories, and regional sales trends",
      link: "https://github.com/fareasy/olist-ecommerce-dashboard",
      skills: ["SQL", "Tableau"],
      image: "/projects/Olist Sales Performance Dashboard.png"
    },
    {
      name: "Football Ball Possession Estimator",
      description:
        "Developed a computer vision pipeline using YOLO and OpenCV to estimate football ball possession from broadcast video through player and ball detection, jersey color-based team classification, and nearest-player ball assignment.",
      link: "https://github.com/fareasy/football-possession-estimator",
      skills: ["Python","Deep Learning","YOLO","PyTorch"],
      image: "/projects/Football Ball Possession Estimator.png"
    },
    {
      name: "PIHPS Price Alert Bot",
      description:
        "Telegram bot that tracks Indonesian commodity prices using PIHPS data with automated alerts based on price changes",
      link: "https://github.com/fareasy/pihps-alert-bot",
      skills: ["Python", "SQLite", "Telegram Bot", "Automation"]
    }
  ],
  experience: [
    {
      company: "RSUD Bhakti Dharma Husada",
      title: "Data Analyst",
      dateRange: "Nov 2025 - May 2026",
      bullets: [
        "Analyzed 282k+ BPJS insurance claims with Python by cleaning raw data from the hospital system and performing variance analysis to highlight major tariff disparities and cost inefficiencies",
        "Built a KPI framework calculating LOS, cost-per-case, and reimbursement gaps, segmented by polyclinic, service class, severity, and ICD diagnosis to identify high-loss patient groups for management review",
        "Produced PowerPoint analytical reports for the Head of Medical Services, summarizing reimbursement gaps, high-loss diagnoses, and utilization trends for routine evaluation and planning"
      ],
    },
    {
      company: "Dinas Kepemudaan dan Olahraga Provinsi Jawa Timur",
      title: "Data Analyst",
      dateRange: "Jan 2024 - Feb 2024",
      bullets: [
        "Analyzed 600+ public survey responses on corruption perception using Excel by performing data cleaning, response categorization, and descriptive statistical analysis to support internal evaluation reporting",
        "Built interactive Google Looker Studio dashboards by defining survey KPIs and creating filterable visualizations, improving accessibility of insights for internal monitoring"
      ],
    },
  ],
  education: [
    {
      school: "Airlangga University",
      degree: "Bachelor of Data Science",
      dateRange: "2021-2025",
      achievements: [
        "Graduated Cum Laude with 3.5 GPA",
        "Presented research at International Conference on Advanced Technology and Multidiscipline (ICATAM) on customer churn prediction using survival analysis (November 2024). DOI: 10.2991/978-94-6463-566-9_25"
      ],
    },
  ],
};
