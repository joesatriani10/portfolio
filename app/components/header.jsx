import styles from '../components/header.module.css';
import glow from '../glowEffect.module.css';

const Header = () => {
    return (
        <header className={`${styles.header} ${glow.header}`}>
            <h1>Angel Montes de Oca</h1>
            <p>Software Engineer</p>
        </header>
    );
};
export default Header;