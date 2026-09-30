export const flagshipRepos = [
  {
    id: "01",
    repo: null,
    title: "Real-Time Stock Anomaly Detector",
    description: "Engineered a 4-layer ensemble ML pipeline detecting irregular market behaviour across 3 live tickers at a 60-second interval; presented at SVCE Student Research Day 2026 and deployed live on Render.",
    architecture: ["Python", "Scikit-learn", "TensorFlow", "SQLite", "Streamlit", "yfinance"]
  },
  {
    id: "02",
    repo: "chennai-weather-prediction",
    title: "Chennai Weather Prediction System",
    description: "Built an ensemble-based ML model to forecast hourly Sunday weather for Chennai; achieved Top 12 ranking in competition.",
    architecture: ["XGBoost", "LightGBM", "Python"]
  },
  {
    id: "03",
    repo: "attendance-tracker",
    title: "Campus Attendance Tracker",
    description: "Cloud-synced attendance platform for college students, reducing onboarding from 15 minutes to 30 seconds via shareable timetable templates and real-time sync.",
    architecture: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"]
  }
];

export const internships = [
  {
    id: "future-interns",
    company: "Future Interns",
    role: "Machine Learning Intern",
    duration: "1 Month",
    bullets: [
      "Built multiple end-to-end ML pipelines — Customer Churn Prediction Web App, Sales Forecasting system, and a Customer Support Semantic Chat-bot.",
      "Covered full project life-cycle: dataset preprocessing, model building, evaluation, deployment integration, and usability improvements."
    ]
  },
  {
    id: "3skill",
    company: "3Skill",
    role: "Machine Learning Intern",
    duration: "2 Months",
    bullets: [
      "Developed an end-to-end Wine Quality Prediction system using Python, Pandas, and Scikit-learn.",
      "Implemented data preprocessing, feature engineering, model training, hyperparameter tuning, and evaluation to predict wine quality from physicochemical attributes."
    ]
  }
];

export const hackathons = [
  {
    id: "sih-2026",
    name: "Smart India Hackathon 2026",
    project: "Sovereign AI Workbench",
    description: "Sovereign On-Premise Agentic AI Workbench using Open-Weight Multimodal LLMs for Confidential Industrial Work.",
    achievement: "Shortlisted in Internal Hackathon",
    architecture: ["Agentic AI", "Multimodal LLMs"]
  },
  {
    id: "blueprints-2026",
    name: "Blueprints 2026",
    project: "Digital Pulse",
    description: "AI-powered real-time virality intelligence platform to monitor, analyze, and forecast digital trends using engagement signals and narrative discovery.",
    achievement: "Developed The Contextual Cultural Intelligence Engine",
    architecture: ["Next.js 14", "FastAPI", "Supabase", "Sentence Transformers", "BERTopic"]
  },
  {
    id: "heatcode",
    name: "HEATCODE 2025",
    project: "Chennai Weather Predictor",
    description: "ML competition organized by FODSE SVCE to predict Chennai's Sunday temperature.",
    achievement: "Built Predictive ML Model",
    architecture: ["Machine Learning", "Python", "Data Science"]
  },
  {
    id: "dec-algo-2025",
    name: "A December of Algorithms 2025",
    project: "Algorithmic Challenges",
    description: "Month-long algorithms and data structures coding challenge conducted by ACM SVCE.",
    achievement: "Participant",
    architecture: ["Algorithms", "Problem Solving"]
  }
];
