import styles from './Header.module.css';

function Header(){

    return(
        <header>
            <img id={styles.logo} src="src/assets/start_logo.svg"/>
        </header>
    );
}

export default Header