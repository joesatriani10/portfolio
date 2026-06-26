'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

export default function BombScene({ countdown }) {
    return (
        <div className="bombScene" aria-hidden="true">
            <Canvas camera={{ position: [0, 0.8, 5.7], fov: 38 }} dpr={[1, 1.75]}>
                <color attach="background" args={['#020617']} />
                <ambientLight intensity={0.65} />
                <directionalLight position={[3.5, 4.5, 5]} intensity={2.4} />
                <pointLight position={[-2.5, 1.2, 2.5]} intensity={7} color="#d946ef" />
                <pointLight position={[2.7, 1.1, 2.4]} intensity={7} color="#0ea5e9" />
                <Bomb countdown={countdown} />
            </Canvas>
        </div>
    );
}

function Bomb({ countdown }) {
    const group = useRef(null);
    const spark = useRef(null);
    const fusePoints = useMemo(
        () => [
            new THREE.Vector3(-0.25, 1.23, 0.05),
            new THREE.Vector3(0.15, 1.95, 0.05),
            new THREE.Vector3(1.35, 1.95, 0.02),
            new THREE.Vector3(1.7, 1.25, 0.02),
        ],
        []
    );

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();

        if (group.current) {
            group.current.rotation.y = Math.sin(time * 0.45) * 0.18;
            group.current.rotation.x = Math.sin(time * 0.32) * 0.06;
            group.current.position.y = Math.sin(time * 1.4) * 0.04;
        }

        if (spark.current) {
            const panic = Math.max(1, 6 - countdown);
            spark.current.intensity = 1.6 + Math.sin(time * 10 * panic) * 0.9;
            spark.current.scale.setScalar(0.75 + Math.sin(time * 13) * 0.18);
        }
    });

    return (
        <group ref={group}>
            <mesh position={[0, -0.2, 0]} scale={[1.55, 1.4, 0.58]} castShadow>
                <sphereGeometry args={[1.28, 64, 64]} />
                <meshStandardMaterial color="#080c14" roughness={0.36} metalness={0.72} />
            </mesh>
            <PanelPlates />
            <FrontDisplay countdown={countdown} />
            <AmBadge />
            <mesh position={[0, 1.22, 0]} scale={[1.18, 0.28, 1.18]}>
                <cylinderGeometry args={[0.48, 0.58, 0.5, 48]} />
                <meshStandardMaterial color="#111827" roughness={0.3} metalness={0.84} />
            </mesh>
            <mesh position={[0, 1.48, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.58, 0.055, 18, 64]} />
                <meshStandardMaterial color="#1f2937" roughness={0.28} metalness={0.86} />
            </mesh>
            <Fuse points={fusePoints} />
            <SideCanister />
            <NeonBars />
            <mesh position={[0, -1.52, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <circleGeometry args={[1.95, 64]} />
                <meshBasicMaterial color="#000000" transparent opacity={0.28} />
            </mesh>
            <Spark sparkRef={spark} position={[1.7, 1.25, 0.02]} />
        </group>
    );
}

function FrontDisplay({ countdown }) {
    return (
        <group position={[0, -0.23, 0.78]}>
            <mesh position={[0, 0, -0.03]}>
                <boxGeometry args={[2.6, 0.88, 0.08]} />
                <meshStandardMaterial color="#020617" roughness={0.24} metalness={0.76} />
            </mesh>
            <mesh position={[0, 0, 0.02]}>
                <boxGeometry args={[2.25, 0.58, 0.035]} />
                <meshStandardMaterial color="#f8fafc" roughness={0.16} metalness={0.08} emissive="#ffffff" emissiveIntensity={0.25} />
            </mesh>
            <LabelPlane text={String(countdown)} position={[0, 0, 0.045]} scale={[1.18, 0.36, 1]} variant="countdown" />
            <NeonFrame />
        </group>
    );
}

function NeonFrame() {
    return (
        <group>
            <NeonBox position={[-1.37, 0, 0.045]} size={[0.035, 0.86, 0.035]} color="#d946ef" />
            <NeonBox position={[1.37, 0, 0.045]} size={[0.035, 0.86, 0.035]} color="#0ea5e9" />
            <NeonBox position={[-0.62, 0.46, 0.045]} size={[1.45, 0.03, 0.035]} color="#d946ef" />
            <NeonBox position={[0.62, 0.46, 0.045]} size={[1.45, 0.03, 0.035]} color="#0ea5e9" />
            <NeonBox position={[-0.62, -0.46, 0.045]} size={[1.45, 0.03, 0.035]} color="#d946ef" />
            <NeonBox position={[0.62, -0.46, 0.045]} size={[1.45, 0.03, 0.035]} color="#0ea5e9" />
        </group>
    );
}

function AmBadge() {
    return (
        <group position={[0, 0.64, 0.81]}>
            <LabelPlane text="{AM}" position={[0, 0, 0]} scale={[1.1, 0.42, 1]} variant="am" />
            <NeonBox position={[-0.8, -0.08, -0.02]} size={[0.45, 0.05, 0.035]} color="#d946ef" />
            <NeonBox position={[0.8, -0.08, -0.02]} size={[0.45, 0.05, 0.035]} color="#0ea5e9" />
        </group>
    );
}

function PanelPlates() {
    const plates = [
        [-1.35, 0.15, 0.7, 0.45, 0.95, '#111827'],
        [1.35, 0.15, 0.7, 0.45, 0.95, '#0b1220'],
        [-0.86, -0.96, 0.72, 0.82, 0.18, '#0b1220'],
        [0.86, -0.96, 0.72, 0.82, 0.18, '#111827'],
        [-0.95, 0.92, 0.7, 0.8, 0.18, '#111827'],
        [0.95, 0.92, 0.7, 0.8, 0.18, '#0b1220'],
    ];

    return (
        <group>
            {plates.map(([x, y, z, width, height, color]) => (
                <mesh key={`${x}-${y}`} position={[x, y, z]}>
                    <boxGeometry args={[width, height, 0.035]} />
                    <meshStandardMaterial color={color} roughness={0.42} metalness={0.65} />
                </mesh>
            ))}
        </group>
    );
}

function SideCanister() {
    return (
        <group position={[1.78, 0.62, 0.1]} rotation={[0, 0, -0.42]}>
            <mesh>
                <cylinderGeometry args={[0.24, 0.28, 1.05, 32]} />
                <meshStandardMaterial color="#0b1220" roughness={0.32} metalness={0.84} />
            </mesh>
            <mesh position={[0, 0.58, 0]}>
                <cylinderGeometry args={[0.26, 0.26, 0.12, 32]} />
                <meshStandardMaterial color="#1f2937" roughness={0.28} metalness={0.9} />
            </mesh>
            <mesh position={[0, -0.58, 0]}>
                <cylinderGeometry args={[0.28, 0.28, 0.12, 32]} />
                <meshStandardMaterial color="#1f2937" roughness={0.28} metalness={0.9} />
            </mesh>
        </group>
    );
}

function NeonBars() {
    return (
        <group>
            <NeonBox position={[-1.55, -0.58, 0.72]} rotation={[0, 0, -0.7]} size={[0.48, 0.04, 0.035]} color="#d946ef" />
            <NeonBox position={[1.55, -0.58, 0.72]} rotation={[0, 0, 0.7]} size={[0.48, 0.04, 0.035]} color="#0ea5e9" />
            <NeonBox position={[-1.58, 0.6, 0.72]} rotation={[0, 0, 0.72]} size={[0.36, 0.035, 0.035]} color="#d946ef" />
            <NeonBox position={[1.58, 0.6, 0.72]} rotation={[0, 0, -0.72]} size={[0.36, 0.035, 0.035]} color="#0ea5e9" />
        </group>
    );
}

function NeonBox({ position, rotation = [0, 0, 0], size, color }) {
    return (
        <mesh position={position} rotation={rotation}>
            <boxGeometry args={size} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
        </mesh>
    );
}

function Fuse({ points }) {
    const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points]);

    return (
        <mesh>
            <tubeGeometry args={[curve, 44, 0.07, 12, false]} />
            <meshStandardMaterial color="#111827" roughness={0.34} metalness={0.78} />
        </mesh>
    );
}

function LabelPlane({ text, position, scale, variant }) {
    const texture = useMemo(() => createTextTexture(text, variant), [text, variant]);

    return (
        <mesh position={position} scale={scale}>
            <planeGeometry args={[1, 0.42]} />
            <meshBasicMaterial map={texture} transparent />
        </mesh>
    );
}

function createTextTexture(text, variant) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 512;
    canvas.height = 216;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    if (variant === 'countdown') {
        context.fillStyle = '#0f172a';
        context.font = '900 132px Arial, sans-serif';
        context.fillText(text, 256, 112);
    } else {
        context.shadowColor = '#38bdf8';
        context.shadowBlur = 16;
        context.lineWidth = 5;
        context.strokeStyle = '#111827';
        context.fillStyle = '#dbeafe';
        context.font = '900 104px Arial, sans-serif';
        context.strokeText(text, 256, 112);
        context.fillText(text, 256, 112);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
}

function Spark({ sparkRef, ...props }) {
    return (
        <group {...props}>
            <pointLight ref={sparkRef} color="#f97316" intensity={2.4} distance={4} />
            <mesh>
                <sphereGeometry args={[0.13, 24, 24]} />
                <meshBasicMaterial color="#fbbf24" />
            </mesh>
            <mesh rotation={[0, 0, Math.PI / 4]}>
                <coneGeometry args={[0.12, 0.42, 5]} />
                <meshBasicMaterial color="#fb923c" transparent opacity={0.82} />
            </mesh>
        </group>
    );
}
