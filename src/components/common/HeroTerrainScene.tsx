'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroTerrainScene = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const wrapper = wrapperRef.current;

        if (!canvas || !wrapper) {
            return;
        }

        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches;

        const renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance',
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        renderer.setClearColor(0x000000, 0);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 100);
        camera.position.set(0, 4.8, 13);
        camera.lookAt(0, 0, 0);

        const ambient = new THREE.AmbientLight(0xffffff, 0.75);
        const point = new THREE.PointLight(0x7dd3fc, 3.8, 40, 2);
        point.position.set(0, 5, 10);
        const side = new THREE.PointLight(0xa855f7, 2.2, 30, 2);
        side.position.set(-10, 3, 4);
        scene.add(ambient, point, side);

        const planeGeometry = new THREE.PlaneGeometry(20, 14, 90, 60);
        const planeMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x0f172a,
            emissive: 0x15254c,
            emissiveIntensity: 0.8,
            metalness: 0.35,
            roughness: 0.42,
            transparent: true,
            opacity: 0.7,
            wireframe: true,
        });

        const terrain = new THREE.Mesh(planeGeometry, planeMaterial);
        terrain.rotation.x = -1.08;
        terrain.position.set(0, -2.3, -1.2);
        scene.add(terrain);

        const haloGeometry = new THREE.TorusGeometry(3.6, 0.07, 24, 140);
        const haloMaterial = new THREE.MeshBasicMaterial({
            color: 0x67e8f9,
            transparent: true,
            opacity: 0.38,
        });
        const halo = new THREE.Mesh(haloGeometry, haloMaterial);
        halo.rotation.x = 1.35;
        halo.position.set(0, 1.3, -2.5);
        scene.add(halo);

        const crystalGeometry = new THREE.IcosahedronGeometry(1.25, 0);
        const crystalMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            emissive: 0x6d28d9,
            emissiveIntensity: 0.9,
            metalness: 0.1,
            roughness: 0.18,
            transparent: true,
            opacity: 0.88,
        });
        const crystalWireMaterial = new THREE.MeshBasicMaterial({
            color: 0x93c5fd,
            wireframe: true,
            transparent: true,
            opacity: 0.42,
        });
        const crystal = new THREE.Mesh(crystalGeometry, crystalMaterial);
        const crystalWire = new THREE.Mesh(
            crystalGeometry,
            crystalWireMaterial,
        );
        crystal.position.set(0, 1.4, 0.8);
        crystalWire.position.copy(crystal.position);
        crystalWire.scale.setScalar(1.18);
        scene.add(crystal, crystalWire);

        const positionAttr = planeGeometry.getAttribute(
            'position',
        ) as THREE.BufferAttribute;
        const basePositions = Float32Array.from(
            positionAttr.array as ArrayLike<number>,
        );

        const resize = () => {
            const bounds = wrapper.getBoundingClientRect();
            const width = Math.max(bounds.width, 1);
            const height = Math.max(bounds.height, 1);
            renderer.setSize(width, height, false);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        const updateTerrain = (time: number) => {
            for (let i = 0; i < positionAttr.count; i += 1) {
                const stride = i * 3;
                const x = basePositions[stride];
                const y = basePositions[stride + 1];

                const waveA = Math.sin(x * 0.8 + time * 1.2);
                const waveB = Math.cos(y * 1.15 + time * 0.85);
                const radial = Math.sin(Math.hypot(x, y) * 1.8 - time * 1.4);

                positionAttr.array[stride + 2] =
                    (waveA + waveB) * 0.28 + radial * 0.24;
            }

            positionAttr.needsUpdate = true;
            planeGeometry.computeVertexNormals();
        };

        let frame = 0;

        const render = () => {
            const time = performance.now() * 0.001;

            updateTerrain(time);
            crystal.rotation.x = time * 0.42;
            crystal.rotation.y = time * 0.58;
            crystal.position.y = 1.35 + Math.sin(time * 1.4) * 0.22;

            crystalWire.rotation.x = -time * 0.34;
            crystalWire.rotation.y = time * 0.48;
            crystalWire.position.copy(crystal.position);

            halo.rotation.z = time * 0.24;
            halo.position.y = 1.2 + Math.sin(time * 0.8) * 0.18;

            renderer.render(scene, camera);

            if (!prefersReducedMotion) {
                frame = window.requestAnimationFrame(render);
            }
        };

        resize();
        render();

        const observer = new ResizeObserver(resize);
        observer.observe(wrapper);
        window.addEventListener('resize', resize);

        return () => {
            window.cancelAnimationFrame(frame);
            observer.disconnect();
            window.removeEventListener('resize', resize);
            planeGeometry.dispose();
            planeMaterial.dispose();
            haloGeometry.dispose();
            haloMaterial.dispose();
            crystalGeometry.dispose();
            crystalMaterial.dispose();
            crystalWireMaterial.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={wrapperRef}
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden="true"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,174,220,0.18),transparent_38%),radial-gradient(circle_at_50%_70%,rgba(133,59,240,0.22),transparent_44%)]" />
            <canvas ref={canvasRef} className="h-full w-full opacity-95" />
        </div>
    );
};

export default HeroTerrainScene;
