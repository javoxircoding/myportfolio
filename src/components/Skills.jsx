import styles from './Skills.module.css'

const Skills = () => {
    return(
        <section>

        {/* skill qismining headeri */}

            <div className={styles.title}>
                <span>Skill</span>
                <h2>Men nimalarni bilaman</h2>
                <div className={styles.undLine}></div>
            </div>

        {/* skill qismining grid-cardlari */}

            <div className={styles.skillGrid}>

                    {/* skill card 1 */}

                <div className={styles.skillCard}>
                    <div className={styles.cardOne}>
                        <div className={styles.skillIcon}>
                            <i class='bx bxs-zap'></i>
                        </div>
                        <h1>JavaScript</h1>
                        <h3>
                            <span>ES6+</span>
                            <span>Async/Await</span>
                            <span>DOM</span>
                        </h3>
                        <div className={styles.skilLine}></div>
                    </div>
                </div>
                
                    {/* skill card 2 */}

                <div className={styles.skillCard}>
                    <div className={styles.cardTwo}>
                        <div className={styles.skillIcon}>
                            <i class='bx bx-code-alt'></i>
                        </div>
                        <h1>React</h1>
                        <h3>
                            <span>Hooks</span>
                            <span>Component</span>
                            <span>State</span>
                        </h3>
                        <div className={styles.skilLine}></div>
                    </div>
                </div>
                
                    {/* skill card 3 */}

                <div className={styles.skillCard}>
                    <div className={styles.cardThree}>
                        <div className={styles.skillIcon}>
                            <i class='bx bxl-nodejs'></i>
                        </div>
                        <h1>Node-js</h1>
                        <h3>
                            <span>Version Control</span>
                            <span>Braching</span>
                            <span>Merge</span>
                        </h3>
                        <div className={styles.skilLine}></div>
                    </div>
                </div>
                
                    {/* skill card 4 */}

                <div className={styles.skillCard}>
                   <div className={styles.cardFour}>
                         <div className={styles.skillIcon}>
                            <i class='bx bx-globe'></i>
                        </div>
                        <h1>Bootstrap</h1>
                        <h3>
                            <span>Responsive</span>
                            <span>Components</span>
                            <span>Utilites</span>
                        </h3>
                        <div className={styles.skilLine}></div>
                   </div>
                </div>
                
                    {/* skill card 5 */}

                <div className={styles.skillCard}>
                    <div className={styles.cardFive}>
                        <div className={styles.skillIcon}>
                            <i class='bx bx-code-alt'></i>
                        </div>
                        <h1>HTML</h1>
                        <h3>
                            <span>Semantic</span>
                            <span>Accessible</span>
                            <span>SEO-Ready</span>
                        </h3>
                        <div className={styles.skilLine}></div>
                    </div>
                </div>
                
                    {/* skill card 6 */}

                <div className={styles.skillCard}>
                    <div className={styles.cardSix}>
                        <div className={styles.skillIcon}>
                            <i class='bx bx-palette'></i>
                        </div>
                        <h1>CSS</h1>
                        <h3>
                            <span>Flexbox</span>
                            <span>Grid</span>
                            <span>Responsive</span>
                        </h3>
                        <div className={styles.skilLine}></div>
                    </div>
                </div>
                
                    {/* skill card 7 */}

                <div className={styles.skillCard}>
                    <div className={styles.cardSeven}>
                        <div className={styles.skillIcon}>
                            <i class='bx bxl-github'></i>
                        </div>
                        <h1>GitHub</h1>
                        <h3>
                            <span>Colaboration</span>
                            <span>Pull Reaquest</span>
                            <span>Actions</span>
                        </h3>
                        <div className={styles.skilLine}></div>
                    </div>
                </div>

                    {/* skill card 8 */}

                <div className={styles.skillCard}>
                    <div className={styles.cardEight}>
                        <div className={styles.skillIcon}>
                            <i class='bx bx-git-branch' ></i>
                        </div>
                        <h1>Git</h1>
                        <h3>
                            <span>Version Control</span>
                            <span>Braching</span>
                            <span>Merge</span>
                        </h3>
                        <div className={styles.skilLine}></div>
                    </div>
                </div>

                    {/* skills card 9 */}

                <div className={styles.skillCard}>
                    <div className={styles.cardNine}>
                        <div className={styles.skillIcon}>
                            <i class='bx bx-palette'></i>
                        </div>
                        <h1>UI/UX</h1>
                        <h3>
                            <span>Colaboration</span>
                            <span>Pull Reaquest</span>
                            <span>Actions</span>
                        </h3>
                        <div className={styles.skilLine}></div>
                    </div>
                </div>

                </div>
        </section>
    )
}

export default Skills;
