export const siteConfig = {
  name: "Farisi Mohammad",
  title: "Data Scientist",
  description: "Portfolio website of Farisi Mohammad",
  accentColor: "#1d4ed8",
  social: {
    email: "farisimohammad2003@gmail.com",
    linkedin: "https://linkedin.com/in/farisimohammad",
    github: "https://github.com/fareasy",
  },
  aboutMe:
    "I’m a data analyst interested in data science and machine learning. I like working with data to find patterns, answer questions, and turn information into something useful. I enjoy exploring datasets, building models, and creating clear visualizations. I value structured thinking, practical insights, and clean, reproducible work. Still learning, still building.",
  skills: ["Python","SQL","Data Analysis","Dashboard Building"],
  projects: [
    {
      name: "E-Commerce Performance Dashboard",
      description:
        "Built an end-to-end analytics pipeline with PostgreSQL and Tableau on the Olist Brazilian E-Commerce Dataset, featuring an interactive dashboard tracking revenue, orders, customer metrics, top product categories, and regional sales trends",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["SQL","Tableau","Dashboard Building"],
    },
  ],
  experience: [
    {
      company: "RSUD Bhakti Dharma Husada",
      title: "Data Analyst",
      dateRange: "Nov 2025 - Present",
      bullets: [
        "Analyzed 282k+ BPJS insurance claim records using Python to identify tariff disparities and cost drivers, supporting hospital financial evaluation and planning",
        "Conducted multi-dimensional claim analysis, identifying high-cost diagnoses and key cost drivers",
        "Forecasted next-year patient volume to aid in annual service target planning"
      ],
    },
    {
      company: "Dinas Kepemudaan dan Olahraga Provinsi Jawa Timur",
      title: "Data Analyst",
      dateRange: "Jan 2024 - Feb 2024",
      bullets: [
        "Analyzed 600+ public survey responses on corruption perception using Excel and developed analytical summaries",
        "Built interactive dashboards in Google Looker Studio for internal departmental reporting"
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
        "Presented research at International Conference on Advanced Technology and Multidiscipline (ICATAM) on customer churn prediction using survival analysis"
      ],
    },
  ],
};
