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
