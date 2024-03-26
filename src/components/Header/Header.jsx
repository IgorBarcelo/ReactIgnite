import styles from './Header.module.css'
import igniteLogo from '../../assets/images/Ignite-logo.svg';

function Header () {
    return (
        <header className={styles.header}>
        <img src={igniteLogo} alt="Logotipo Ignite"/>
        <strong>Ignite feed</strong>
        </header>
    );
}

export default Header