import styles from './Header.module.css'
import igniteLogo from '../image/Ignite-logo.svg';

function Header () {
    return (
        <header className={styles.header}>
        <img src={igniteLogo} alt="Logotipo Ignite"/>
        <strong>Ignite feed</strong>
        </header>
    );
}

export default Header