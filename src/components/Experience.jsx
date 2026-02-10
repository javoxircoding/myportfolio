import styles from "./Experience.module.css";

const Experience = () => {
    const experiences = [
  {
    id: 1,
    title: "Frontend Dasturlash (Junior)",
    date: "2026 - Hozirgi vaqt",
    desc: "Hozirda Junior darajasidaman. React, Next.js va TypeScript’da real loyihalar yarataman. Asosiy e’tiborim — sifatli kod va murakkab muammolarga yechim topish.",
    img: "jun.png" 
  },
  {
    id: 2,
    title: "Frontend Web dasturlash",
    date: "2023 - 2024",
    desc: "Oddiy qiziqish vaqt o'tib jiddiy maqsadga aylandi. Bu ikki yil ichida nazariyadan amaliyotga o'tdim, murakkab texnologiyalarni o'rgandim va real loyihalar ustida ishladim. Har bir kod qatori bilimlarimni shakllantirdi.",
    img: "2024.png"
  },
  {
    id: 3,
    title: "Meni dasturlashga kirishim",
    date: "2023",
    desc: "2023-yilda kompyuter nimaligini bilib, uning imkoniyatlariga qiziqqanman. Aynan o'sha yili dasturlash olami meni o'ziga tortgan va o'rganishga ilk qadamlarimni tashlaganman.",
    img: "2023.webp"
  }
];

  return (

    <section id="tajriba">
      <div className={styles.header}>
        <span className={styles.badge}>Tajriba</span>
        <h2 className={styles.title}>Men bosib o'tgan yol</h2>
        <div className={styles.titleUnderline}></div>
      </div>

    <div className={styles.timeline}>
        <div className={styles.centerLine}></div> {/* O'rtadagi oq chiziq */}
  
        {experiences.map((exp, index) => (
        <div key={exp.id} className={`${styles.item} ${index % 2 !== 0 ? styles.reverse : ''}`}>
      <div className={styles.imageBox}>
        <img src={exp.img} alt={exp.title} />
      </div>
      
      <div className={styles.dot}></div> {/* O'rtadagi dumaloq nuqta */}
      
      <div className={styles.infoBox}>
        <h2>{exp.title}</h2>    
        <span>{exp.date}</span>
        <p>{exp.desc}</p>
      </div>
    </div>
  ))}
</div>
      
    </section>
  );
};

export default Experience;
