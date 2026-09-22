import styles from './NavBar.module.css';

function NavBar() {

    return(
      <nav className={styles.container_navBar}>
        <nav className={styles.navBar}>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="#/catalog">CATALOG</a>
            </li>
            <li>
              <a href="/">ABOUT</a>
            </li>
          </ul>
        </nav>
      </nav>
    );
}

export default NavBar