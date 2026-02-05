import styles from "./Contact.module.css";

const Contact = () => {
  // Данные выносим за пределы Return для чистоты
  const contacts = [
    {
      id: 1,
      icon: "pochta.jpg",
      name: "Email",
      value: "javoxirhamidjanov89@gmail.com",
    },
    {
      id: 2,
      icon: "nomer.png",
      name: "Nomer",
      value: "+998 90 499 7682",
    },
    {
      id: 3,
      icon: "manzil.jpg",
      name: "Manzil",
      value: "Uzbekistan/Jizzax",
    },
  ];

  const quickInfo = [
    {
      id: 1,
      iconClass: "bx bx-time-five",
      label: "Response Time",
      text: "< 24 Hours",
    },
    {
      id: 2,
      iconClass: "bx bx-time",
      label: "Availability",
      text: "Mon - Sat",
    },
    {
      id: 3,
      iconClass: "bx bx-message-rounded",
      label: "Preferred Contact",
      text: "Telegram / Email",
    },
  ];

  return (
    <section className={styles.Contact}>
      <div className={styles.header}>
        <span className={styles.badge}>Contact</span>
        <h2 className={styles.title}>Men bilan bog'laning</h2>
        <span className={styles.titleInfo}>
          Loyihangiz bormi yoki shunchaki suhbatlashmoqchimisiz? Fikringizni
          eshitishni istardim.
        </span>
        <div className={styles.titleUnderline}></div>

        <div className={styles.conteyner}>
          <div className={styles.contOne}>
            <div className={styles.row}>
              {/* Секция контактов */}
              {contacts.map((contact, index) => (
                <div
                  key={contact.id}
                  className={`${styles.item} ${index % 2 !== 0 ? styles.reverse : ""}`}
                >
                  <img src={contact.icon} alt={contact.name} />
                  <div>
                    <span>{contact.name}</span>
                    <h3>{contact.value}</h3>
                  </div>
                </div>
              ))}

              {/* Секция Quick Info */}
              <div className={styles.quicInfo}>
                <h2>Quick Info</h2>
                {quickInfo.map((info) => (
                  <div key={info.id} className={styles.item2}>
                    <span className={styles.icon}>
                      <i className={info.iconClass}></i>
                    </span>
                    <div>
                      <span>{info.label}</span>
                      <h3>{info.text}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Твой второй контейнер для формы (наверное?) */}
          <div className={styles.contTwo}>
            <h2>Loyiha boʻyicha bogʻlanish</h2>
            <p>Gʻoyangizni muhokama qilishga tayyormisiz?</p>
            <p> Shaklni toʻldiring va men 24 soat ichida javob beraman.</p>
            <div className={styles.row}>
              
              <div className={styles.gridRow}>
                <div className={styles.inputGroup}>
                    <label htmlFor="user" className={styles.label}>
                        Ismingiz
                    </label>
                    <input type="text" name="username" id="user" placeholder="Ismingizni kiriting"className={styles.inputField}/>
              </div>
              <div className={styles.inputGroup}>
                    <label htmlFor="user" className={styles.label}>
                        Elektron pochtangiz
                    </label>
                    <input type="text" name="username" id="user" placeholder="youremail@gamil.com"className={styles.inputField}/>
              </div>
              </div>

              <div className={styles.inputGroup}>
                    <label htmlFor="user" className={styles.label}>
                        Xabar yuboring
                    </label>
                    <textarea name="user" id="user" placeholder="Taklif va habarlaringizni yuboring"></textarea>
              </div>
                <div className={styles.forButon}>
                  <button>Habarni yuborish</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
