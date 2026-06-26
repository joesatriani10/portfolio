'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const BombScene = dynamic(() => import('@/app/components/not-found/bomb-scene'), {
    ssr: false,
    loading: () => <div className="bombFallback" aria-hidden="true">●</div>,
});

const START_SECONDS = 5;

function goHome() {
    window.location.replace('/');
}

export default function NotFound() {
    const [countdown, setCountdown] = useState(START_SECONDS);
    const isDetonating = countdown === 0;

    useEffect(() => {
        if (countdown === 0) {
            const redirect = window.setTimeout(goHome, 420);
            return () => window.clearTimeout(redirect);
        }

        const tick = window.setTimeout(() => setCountdown((current) => current - 1), 1000);

        return () => window.clearTimeout(tick);
    }, [countdown]);

    return (
        <main className={`notFound bombNotFound ${isDetonating ? 'bombDetonating' : ''}`}>
            <div className="bombShell">
                <div className="bombStage">
                    <BombScene countdown={countdown} />
                </div>
                <section className="bombPanel" aria-live="polite">
                    <p className="bombKicker">404: Wrong wire.</p>
                    <h2>This route is unstable.</h2>
                    <p>
                        You found a page that does not exist. Returning to safety in...
                    </p>
                    <strong className="countdownDisplay">{countdown}</strong>
                    <button className="buttonPrimary" type="button" onClick={goHome}>
                        Defuse now
                    </button>
                </section>
            </div>
        </main>
    );
}
