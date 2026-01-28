import { useState } from 'react';
import styles from './About.module.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('bio');

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume/Javoxir.docx'; 
    link.download = 'Javoxir_Resume.docx'; 
    link.click();
  };
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        
        <div className={styles.header}>
          <span className={styles.badge}>Men haqimda</span>
          <h2 className={styles.title}>Tanishib Chiqing</h2>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.contentGrid}>
          
          <div className={styles.leftSection}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageGlow}></div>
              <img 
                src="profile.webp" 
                alt="Javoxir" 
                className={styles.profileImage}
              />
              <div className={styles.floatingCard}>
                <img 
                  src="https://img.icons8.com/?size=100&id=104267&format=png&color=000000" 
                  alt="lightning" 
                  className={styles.cardIcon}
                />
                <div>
                  <h4>3+ Yil</h4>
                  <p>Tajriba</p>
                </div>
              </div>
            </div>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h3>50+</h3>
                <p>Tugallangan Loyihalar</p>
              </div>
              <div className={styles.statCard}>
                <h3>30+</h3>
                <p>Mamnun Mijozlar</p>
              </div>
            </div>
          </div>

          <div className={styles.rightSection}>
            
            <div className={styles.tabNav}>
              <button 
                className={`${styles.tabBtn} ${activeTab === 'bio' ? styles.active : ''}`}
                onClick={() => setActiveTab('bio')}
              >
                Tarjimai hol
              </button>
              <button 
                className={`${styles.tabBtn} ${activeTab === 'interests' ? styles.active : ''}`}
                onClick={() => setActiveTab('interests')}
              >
                Qiziqishlar
              </button>
              <button 
                className={`${styles.tabBtn} ${activeTab === 'education' ? styles.active : ''}`}
                onClick={() => setActiveTab('education')}
              >
                Ta'lim
              </button>
            </div>

            <div className={styles.tab2Content}>
              
              {activeTab === 'bio' && (
                <div className={styles.bioContent}>
                  <p className={styles.description}>
                    Men go'zal, moslashuvchan va foydalanuvchilarga qulay veb-ilovalar yaratishga 
                    ixtisoslashgan ishtiyoqli Frontend Dasturchiman. Dizaynga kuchli e'tibor va 
                    toza kodga muhabbat bilan g'oyalarni qiziqarli raqamli tajribalarga aylantirib beraman.
                  </p>
                  <p className={styles.description}>
                    Mening tajribam zamonaviy JavaScript frameworklariga, ayniqsa React'ga asoslangan. 
                    Men samaradorlik va foydalanuvchi tajribasiga ustuvor ahamiyat beradigan kengaytiriladigan 
                    ilovalar yaratamann. Doimo o'rganish va eng so'nggi veb texnologiyalari bilan 
                    yangilanib turaman.
                  </p>
                  
                  <div className={styles.highlights}>
                    <div className={styles.highlightItem}>
                      <img src="https://img.icons8.com/fluency/48/goal.png" alt="focus" className={styles.highlightIcon}/>
                      <div>
                        <h4>E'tibor</h4>
                        <p>Toza Kod va Eng Yaxshi Amaliyotlar</p>
                      </div>
                    </div>
                    <div className={styles.highlightItem}>
                      <img src="https://img.icons8.com/fluency/48/idea.png" alt="approach" className={styles.highlightIcon}/>
                      <div>
                        <h4>Yondashuv</h4>
                        <p>Foydalanuvchiga Yo'naltirilgan Dizayn</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'interests' && (
                <div className={styles.interestsContent}>
                  <div className={styles.interestGrid}>
                    <div className={styles.interestCard}>
                      <img 
                        src="https://img.icons8.com/fluency/96/source-code.png" 
                        alt="web-dev" 
                        className={styles.interestIcon}
                      />
                      <h4>Veb Dasturlash</h4>
                      <p>Eng so'nggi texnologiyalar bilan zamonaviy veb ilovalar qurish</p>
                    </div>
                    <div className={styles.interestCard}>
                      <img 
                        src="https://img.icons8.com/fluency/96/design.png" 
                        alt="ui-ux" 
                        className={styles.interestIcon}
                      />
                      <h4>UI/UX Dizayn</h4>
                      <p>Intuitiv va chiroyli foydalanuvchi interfeyslarini yaratish</p>
                    </div>
                    <div className={styles.interestCard}>
                      <img 
                        src="https://img.icons8.com/fluency/96/smartphone-tablet.png" 
                        alt="mobile" 
                        className={styles.interestIcon}
                      />
                      <h4>Mobile First</h4>
                      <p>Barcha qurilmalar uchun moslashuvchan dizayn</p>
                    </div>
                    <div className={styles.interestCard}>
                      <img 
                        src="https://img.icons8.com/fluency/96/rocket.png" 
                        alt="performance" 
                        className={styles.interestIcon}
                      />
                      <h4>Ishlash Tezligi</h4>
                      <p>Tezlik va samaradorlik uchun ilovalarni optimallashtirish</p>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'education' && (
                <div className={styles.educationContent}>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <div className={styles.timelineContent}>
                      <span className={styles.year}>2020 - 2024</span>
                      <h4>Kompyuter Fanlari bo'yicha Bakalavr</h4>
                      <p>Universitet Nomi</p>
                      <p className={styles.desc}>Veb texnologiyalari va dasturiy ta'minot muhandisligi tamoyillariga e'tibor qaratildi</p>
                    </div>
                  </div>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <div className={styles.timelineContent}>
                      <span className={styles.year}>2023</span>
                      <h4>Ilg'or React va Frontend Dasturlash</h4>
                      <p>Onlayn Kurs - Sertifikatlangan</p>
                      <p className={styles.desc}>Ilg'or React naqshlari va zamonaviy frontend arxitekturasini o'zlashtirdim</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.ctaSection}>
              <button className={styles.primaryBtn} onClick={handleDownload}>
                <img 
                  src="https://img.icons8.com/fluency/48/pdf.png" 
                  alt="resume" 
                  className={styles.btnIcon}
                />
                Resume Yuklab Olish
                <span className={styles.btnGlow}></span>
              </button>
              <button className={styles.secondaryBtn}>
                <img 
                  src="https://img.icons8.com/fluency/48/chat.png" 
                  alt="contact" 
                  className={styles.btnIcon}
                />
                Bog'lanish
              </button>
            </div>
          </div>
        </div>
        <div className={styles.bgCircle1}></div>
        <div className={styles.bgCircle2}></div>
      </div>
    </section>
  );
};

export default About;
