import styles from "./Navbar.module.css";
import { Link } from 'react-scroll';

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
        <Link 
            to="Home"
            smooth={true}  
            duration={50} 
            offset={-80}  
            activeClass="active"
            spy={true}       
          >
            Bosh sahifa
          </Link>
        <li>
          <Link
          to="about"
          smooth={true}
          duration={50}
          spy={true}>
            Men haqimda
          </Link>
        </li>
        <li>
          <Link
          to="skill"
          smooth={true}
          duration={50}
          offset={-10}
          spy={true}>
            Ko'nikmalar
          </Link>
        </li>
        <li>
          <Link
          to="project"
          smooth={true}
          duration={50}
          offset={-10}
          spy={true}>
            Loyihalar
          </Link>
        </li>
        <li>
          <Link
          to="tajriba"
          smooth={true}
          duration={50}
          offset={-10}
          spy={true}>
            Tajriba
          </Link>
        </li>
        <li>
          <Link
          to="roadmap"
          smooth={true}
          duration={50}
          offset={-40}
          spy={true}>
            Yo'l xaritasi
          </Link>
        </li>
        <li>
          <Link
          to="contact"
          smooth={true}
          duration={50}
          offset={-10}
          spy={true}>
            Bog'lanish
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
