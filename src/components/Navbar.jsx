import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Javoxir</h1>
      </div>
    
          <input type="checkbox" name="burger" id="burger" />
          <label htmlFor="burger">
              <i className={styles.enterBtn} class='bx bx-menu'></i>
              <i className={styles.closeBtn} class='bx bx-x' ></i>
          </label>
        
      <ul className={styles.navLinks}>
        <li>
          <a href="#home"></a>Home
        </li>
        <li>
          <a href="about"></a>About
        </li>
        <li>
          <a href="skills"></a>Skills
        </li>
        <li>
          <a href="projects"></a>Projects
        </li>
        <li>
          <a href="experians"></a>Experience
        </li>
        <li>
          <a href="Roadmap"></a>Roadmap
        </li>
        <li>
          <a href="contact"></a>Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
