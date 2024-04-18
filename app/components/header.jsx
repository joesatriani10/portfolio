import styles from '../components/header.module.css';
import glow from '../glowEffect.module.css';
import SocialMedia from "@/app/components/social-media";

const Header = () => {
    return (
        <header className={`${styles.header} ${glow.header}`}>
            <h1>Angel Montes de Oca</h1>
            <p>Software Engineer</p>
            <div className={styles.rightContainer}>
                <SocialMedia/>
            </div>
        </header>
    );
};
export default Header;