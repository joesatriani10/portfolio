import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="notFound">
            <h2>Page Not Found</h2>
            <p>
                Sorry, the page you are looking for could not be found.
            </p>
            <Link href="/">Go back home</Link>
        </main>
    );
}
