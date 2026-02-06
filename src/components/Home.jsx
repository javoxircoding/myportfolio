import styles from  "./Home.module.css"

const Home = () => {
  return (
    <section id="Home" className={styles.sec}>
      <div className={styles.section}>
        <h1>Assalomu alaykum! <br /> Men Javoxir — Frontend dasturchiman.</h1>
      <h3>Men biznesingiz uchun zamonaviy, tezkor va foydalanuvchilarga qulay veb-saytlar yarataman.</h3>
      <div className={styles.skill}>

        <h2 style={{display: 'flex', alignItems: 'center'}}>
          JavaScript
          <img style={{width: '80px'}} src="/javascript-39395.png" alt="" />
        </h2>

        <h2 style={{display: 'flex', alignItems: 'center'}}>React
        <img style={{width: '50px', marginLeft: '20px'}} src="/React-icon.svg.png" alt="" />
        </h2>

        <h2 style={{display: 'flex', alignItems: 'center'}}>
          UI/UX
          <img style={{width: '50px', marginLeft: '20px'}} src="/ux.png" alt="" />
          </h2>
      </div>
      </div>
       <div className={styles.container}>
      <div className={styles.scene}>
        <div className={styles.cube}>
          <div className={`${styles.cubeFace} ${styles.front}`}>
             <img style={{width: '250px'}} src="javascript-39395.png" alt="" />
          </div>
          <div className={`${styles.cubeFace} ${styles.back}`}>
            <img style={{width: '170px'}} src="ux.png" alt="" />
          </div>
          <div className={`${styles.cubeFace} ${styles.right}`}>
            <img style={{width: '120px'}} src="React-icon.svg.png" alt="" />
          </div>
          <div className={`${styles.cubeFace} ${styles.left}`}>
            <img style={{width: '120px'}} src="html5-logo-31821.png" alt="" />
          </div>
          <div className={`${styles.cubeFace} ${styles.top}`}>
            <img style={{width: '120px'}} src="html5-logo-31813.png" alt="" />
          </div>
          <div className={`${styles.cubeFace} ${styles.bottom}`}>
            <img style={{width: '120px'}} src="github-dark.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    </section>
    
  );
};

export default Home;
