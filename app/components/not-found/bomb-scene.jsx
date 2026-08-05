'use client';

import Image from 'next/image';

export default function BombScene({ countdown }) {
    const panic = Math.max(1, 6 - countdown);

    return (
        <div className="bombScene" aria-hidden="true">
            <div className="bombImageWrap">
                <Image
                    src="/bomb.png"
                    alt=""
                    width={1254}
                    height={1254}
                    priority
                    className="bombImageFallback"
                />
                <video
                    className="bombVideo"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="/bomb.png"
                    aria-hidden="true"
                >
                    <source src="/bomb.mp4" type="video/mp4" />
                </video>
                <div className="bombCountdownOnImage">
                    <strong>{countdown}</strong>
                    <span>RETURNING TO SAFETY</span>
                </div>
                <div
                    className="bombSpark"
                    style={{ '--spark-speed': `${0.7 / panic}s` }}
                />
            </div>
        </div>
    );
}
