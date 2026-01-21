import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Javoxir</h1>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#home"></a>
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
