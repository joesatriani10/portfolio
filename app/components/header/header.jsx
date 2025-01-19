import '../../global.css';
import styles from './header.module.css';
import SocialMedia from "@/app/components/social-media/social-media";

const Header = () => {
    return (
        <header className={`${styles.header}`}>
            <h1>Angel Montes de Oca</h1>
            <p>Full Stack Developer</p>
            <div className={styles.rightContainer}>
                <SocialMedia/>
            </div>
        </header>
    );
};
export default Header;