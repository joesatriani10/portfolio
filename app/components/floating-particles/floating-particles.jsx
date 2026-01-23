'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadBasic } from 'tsparticles-basic';
import styles from './floating-particles.module.css';

const FloatingParticles = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadBasic(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            className={styles.particles}
            options={{
                fullScreen: { enable: false },
                background: { color: { value: 'transparent' } },
                fpsLimit: 60,
                particles: {
                    color: { value: '#9fb3c8' },
                    links: {
                        enable: true,
                        color: '#9fb3c8',
                        distance: 140,
                        opacity: 0.15,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 0.4,
                        direction: 'none',
                        outModes: { default: 'out' },
                    },
                    number: {
                        value: 28,
                        density: { enable: true, area: 900 },
                    },
                    opacity: { value: 0.2 },
                    shape: { type: 'circle' },
                    size: { value: { min: 1, max: 2 } },
                },
                detectRetina: true,
            }}
        />
    );
};

export default FloatingParticles;
