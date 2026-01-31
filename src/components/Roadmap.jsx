import styles from "./Roadmap.module.css";

const Roadmap = () =>{
    const roadmap = [
        {
            id: 1,
            quarter: "2026 Q1",
            level: "Frontend Junior+",
            goals: [
                "HTML/CSS/JS/React Mukammalashtirish",
                "Daromadga chiqish(Frelans/Ish)",
                "Backend (Node.js/Express) o'rganishni boshlash"
            ]
        },
        {
            id: 2,
            quarter: "2026 Q2",
            level: "Ingilis tilini organish",
            goals: [
                "Dasturlashda yanada kuchayish",
                "Yaxshi kurs topish",
                "B1 darajaga chiqish"
            ]
        },
        {
            id: 3,
            quarter: "2026 Q3",
            level: "Dasturlash/Ingilis tili",
            goals: [
                "Backend kuchaytirish",
                "Ingilis tilida 6+ bo'lish",
                "Daromadni oshirish"
            ]
        },
        {
            id: 4,
            quarter: "2026 Q4",
            level: "Fullstack/IELTS",
            goals: [
                "Fulstack Junior+/Early midle",
                "IELTS 8.5+ (±8)",
                "Yangi darajaga kotarilish"
            ]
        }
    ];
    return (
    <section className={styles.roadmapSection}>

        <div className={styles.header}>
            <span className={styles.badge}>Roadmap</span>
            <h2 className={styles.title}>Mening Rejalarim (2026)</h2>
            <div className={styles.titleUnderline}></div>
        </div>
      
      <div className={styles.roadmapWrapper}>
        {roadmap.map((item) => (
          <div key={item.id} className={styles.card}>
            {/* Tepasidagi binafsha badge */}
            <div className={styles.cardHeader}>
                <span className={styles.quarterBadge}>{item.quarter}</span>
                <i className="fas fa-bullseye"></i>
            </div>

            <h3 className={styles.levelTitle}>{item.level}</h3>

            {/* Maqsadlar ro'yxati (Checklist) */}
            <ul className={styles.goalList}>
              {item.goals.map((goal, index) => (
                <li key={index} className={styles.goalItem}>
                  <span className={styles.checkbox}></span>
                  {goal}
                </li>
              ))}
            </ul>

            {/* Pastki holat (Status) */}
            <div className={styles.cardFooter}>
                <span className={styles.statusText}>
                   {item.id === 1 ? "⏳ In Progress" : "📅 Planned"}
                </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Roadmap;