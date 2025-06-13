import Link from 'next/link';
import CyberBar from './components/cyber-bar/cyber-bar';
import styles from './not-found.module.css';

export default function NotFound() {
    return (
        <main className={styles.notFound}>
            <h2>Page Not Found</h2>
            <p className={styles.message}>
                <CyberBar />
                Sorry, the page you are looking for could not be found.
            </p>
            <Link href="/" className={styles.link}>Go back home</Link>
        </main>
    );
}
