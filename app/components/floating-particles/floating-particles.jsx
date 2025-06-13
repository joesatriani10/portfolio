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
                    color: { value: '#930EFF' },
                    links: {
                        enable: true,
                        color: '#930EFF',
                        distance: 120,
                        opacity: 0.4,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: 'none',
                        outModes: { default: 'bounce' },
                    },
                    number: {
                        value: 60,
                        density: { enable: true, area: 800 },
                    },
                    opacity: { value: 0.5 },
                    shape: { type: 'circle' },
                    size: { value: { min: 1, max: 3 } },
                },
                detectRetina: true,
            }}
        />
    );
};

export default FloatingParticles;
