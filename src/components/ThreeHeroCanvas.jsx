import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeHeroCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const width = currentMount.clientWidth || 440;
    const height = currentMount.clientHeight || 440;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Central Tech Orb (Geodesic Sphere)
    const orbGeo = new THREE.IcosahedronGeometry(1.65, 2);
    const orbMat = new THREE.MeshBasicMaterial({
      color: 0x1D4ED8,
      wireframe: true,
      transparent: true,
      opacity: 0.75
    });
    const orbMesh = new THREE.Mesh(orbGeo, orbMat);
    rootGroup.add(orbMesh);

    // Inner Glowing Core
    const innerGeo = new THREE.SphereGeometry(0.95, 24, 24);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x0284C7,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    rootGroup.add(innerMesh);

    // 2. Concentric Circular Rounding Motion Rings
    // Ring 1 - Equator Ring (Royal Blue)
    const ring1Geo = new THREE.RingGeometry(2.3, 2.36, 64);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x1D4ED8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.7
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 2.5;
    rootGroup.add(ring1);

    // Ring 2 - Tilted Orbit (Signal Yellow)
    const ring2Geo = new THREE.RingGeometry(2.7, 2.76, 64);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xFACC15,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 3;
    ring2.rotation.x = Math.PI / 6;
    rootGroup.add(ring2);

    // Ring 3 - Outer Orbital Wave Ring (Supporting Cyan)
    const ring3Geo = new THREE.RingGeometry(3.1, 3.15, 64);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x0284C7,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.65
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.z = Math.PI / 4;
    ring3.rotation.x = -Math.PI / 4;
    rootGroup.add(ring3);

    // Ring 4 - Deep Navy Accent Orbit
    const ring4Geo = new THREE.RingGeometry(3.5, 3.54, 64);
    const ring4Mat = new THREE.MeshBasicMaterial({
      color: 0x1E293B,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45
    });
    const ring4 = new THREE.Mesh(ring4Geo, ring4Mat);
    ring4.rotation.x = Math.PI / 5;
    rootGroup.add(ring4);

    // 3. Orbiting Satellite Nodes on the rings
    const satellites = [];
    const satConfigs = [
      { radius: 2.33, speed: 1.2, color: 0x1D4ED8, size: 0.12, ring: ring1 },
      { radius: 2.73, speed: -0.9, color: 0xFACC15, size: 0.14, ring: ring2 },
      { radius: 3.12, speed: 0.7, color: 0x0284C7, size: 0.13, ring: ring3 },
      { radius: 3.52, speed: -0.6, color: 0x1E293B, size: 0.11, ring: ring4 },
    ];

    satConfigs.forEach((cfg) => {
      const satGeo = new THREE.SphereGeometry(cfg.size, 16, 16);
      const satMat = new THREE.MeshBasicMaterial({ color: cfg.color });
      const satMesh = new THREE.Mesh(satGeo, satMat);
      cfg.ring.add(satMesh);
      satellites.push({ mesh: satMesh, radius: cfg.radius, speed: cfg.speed });
    });

    // 4. Circular Particle Cloud
    const particleCount = 120;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const r = 2.1 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;
      positions[i] = r * Math.cos(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi);
      positions[i + 2] = r * Math.cos(phi) * Math.sin(theta);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x1D4ED8,
      size: 0.07,
      transparent: true,
      opacity: 0.75
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particles);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      const rect = currentMount.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.8;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.8;
    };
    window.addEventListener('mousemove', onMouseMove);

    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.06;
      targetY += (mouseY - targetY) * 0.06;

      rootGroup.rotation.y = targetX * 1.2 + elapsed * 0.12;
      rootGroup.rotation.x = -targetY * 1.2 + Math.sin(elapsed * 0.4) * 0.08;

      // Central Orb rotation
      orbMesh.rotation.y += 0.006;
      orbMesh.rotation.x += 0.004;
      innerMesh.rotation.y -= 0.009;

      // Circular Ring Rounding Motions
      ring1.rotation.z = elapsed * 0.6;
      ring2.rotation.z = -elapsed * 0.45;
      ring3.rotation.z = elapsed * 0.35;
      ring4.rotation.z = -elapsed * 0.25;

      // Orbit satellites around their rings
      satellites.forEach((sat) => {
        const satAngle = elapsed * sat.speed;
        sat.mesh.position.x = sat.radius * Math.cos(satAngle);
        sat.mesh.position.y = sat.radius * Math.sin(satAngle);
      });

      // Particle cloud circular rotation
      particles.rotation.y = -elapsed * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      orbGeo.dispose();
      orbMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      ring4Geo.dispose();
      ring4Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-label="3D Technology Classroom Core with Circular Rounding Motions"
    />
  );
}
