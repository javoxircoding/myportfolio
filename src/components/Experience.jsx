import styles from "./Experience.module.css";

const Experience = () => {
    const experiences = [
  {
    id: 1,
    title: "Frontend Developer (Junior)",
    date: "2024 - Hozirgi vaqt",
    desc: "React.js, Next.js va zamonaviy UI kutubxonalar (Tailwind, Framer Motion) yordamida interaktiv loyihalar yaratish.",
    img: "https://picsum.photos/400/300?random=1" // Namuna uchun rasm
  },
  {
    id: 2,
    title: "Web Designer & UI/UX",
    date: "2023 - 2024",
    desc: "Figma orqali zamonaviy va foydalanuvchiga qulay interfeys dizaynlarini chizish hamda ularni kodga o'tkazish.",
    img: "https://picsum.photos/400/300?random=2"
  },
  {
    id: 3,
    title: "Freelance Project Manager",
    date: "2023",
    desc: "Kichik va o'rta bizneslar uchun veb-saytlarni noldan rejalashtirish va jamoa bilan birga muvaffaqiyatli topshirish.",
    img: "https://picsum.photos/400/300?random=3"
  }
];

  return (

    <section>
      <div className={styles.header}>
        <span className={styles.badge}>Experiance</span>
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
