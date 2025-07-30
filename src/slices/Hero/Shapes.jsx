"use client";

import React, { Suspense, useEffect, useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import { gsap } from "gsap";

const presets = [
  "studio",
  "sunset",
  "dawn",
  "night",
  "warehouse",
  "forest",
  "apartment",
  "city",
  "park",
  "lobby",
];

export default function Shapes() {
  const randomPreset = useMemo(
    () => presets[Math.floor(Math.random() * presets.length)],
    []
  );

  return (
    <div className="row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0">
      <Canvas
        className="z-0"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
      >
        <Geometries />
        <Suspense fallback={null}>
          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />
          <Environment preset={randomPreset} />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Geometries() {
  // Fixed positions (same as original)
  const positions = [
    [0, 0, 0],
    [1, -0.75, 4],
    [-1.4, 2, -4],
    [-0.8, -0.75, 5],
    [1.6, 1.6, -4],
  ];

  // Extended possible geometries to randomly pick from for slots 2-5
  const possibleGeometries = [
    { geometry: new THREE.CapsuleGeometry(0.5, 1.6, 4, 16), r: 0.4 }, // Pill
    { geometry: new THREE.DodecahedronGeometry(1.5), r: 0.6 }, // Soccer ball
    { geometry: new THREE.TorusGeometry(0.6, 0.25, 16, 32), r: 0.5 }, // Donut
    { geometry: new THREE.OctahedronGeometry(1.5), r: 0.7 }, // Diamond
    { geometry: new THREE.TorusKnotGeometry(0.7, 0.2, 100, 16), r: 0.6 }, // Torus Knot
    { geometry: new THREE.BoxGeometry(1.5, 1.5, 1.5), r: 0.5 }, // Cube
    { geometry: new THREE.SphereGeometry(1.3, 32, 32), r: 0.5 }, // Sphere
    { geometry: new THREE.CylinderGeometry(0.8, 0.8, 2, 32), r: 0.5 }, // Cylinder
    { geometry: new THREE.ConeGeometry(1, 2, 32), r: 0.5 }, // Cone
  ];

  const soundEffects = [
    new Audio("/sounds/hit2.ogg"),
    new Audio("/sounds/hit3.ogg"),
    new Audio("/sounds/hit4.ogg"),
  ];

  const materials = [
    new THREE.MeshStandardMaterial({
      color: 0x2ecc71,
      roughness: 0,
      metalness: 0,
    }), // smooth emerald green
    new THREE.MeshStandardMaterial({
      color: 0xf1c40f,
      roughness: 0.4,
      metalness: 0.2,
    }), // bright gold-ish
    new THREE.MeshStandardMaterial({
      color: 0xe74c3c,
      roughness: 0.1,
      metalness: 0.6,
    }), // shiny red metallic
    new THREE.MeshStandardMaterial({
      color: 0x8e44ad,
      roughness: 0.3,
      metalness: 0.4,
    }), // purple satin
    new THREE.MeshStandardMaterial({
      color: 0x1abc9c,
      roughness: 0.1,
      metalness: 0,
    }), // matte turquoise
    new THREE.MeshStandardMaterial({
      color: 0x2980b9,
      roughness: 0,
      metalness: 0.5,
      emissive: 0x112244,
    }), // glowing deep blue metallic
    new THREE.MeshStandardMaterial({
      color: 0x2c3e50,
      roughness: 0.1,
      metalness: 0.5,
    }), // dark steel
    new THREE.MeshStandardMaterial({
      color: 0xff6347,
      roughness: 0.3,
      metalness: 0,
    }), // soft tomato red
    new THREE.MeshStandardMaterial({
      color: 0x40e0d0,
      roughness: 0.2,
      metalness: 0.3,
    }), // bright turquoise metallic
    new THREE.MeshStandardMaterial({
      color: 0xff69b4,
      roughness: 0.5,
      metalness: 0,
    }), // matte hot pink
    new THREE.MeshStandardMaterial({
      color: 0xff4500,
      roughness: 0.2,
      metalness: 0.7,
    }), // fiery orange metal
    new THREE.MeshStandardMaterial({
      color: 0xdaa520,
      roughness: 0.3,
      metalness: 0,
    }), // goldenrod matte
    new THREE.MeshStandardMaterial({
      color: 0x9acd32,
      roughness: 0.1,
      metalness: 0.1,
    }), // fresh green metallic
    new THREE.MeshStandardMaterial({
      color: 0x7fff00,
      roughness: 0,
      metalness: 0,
    }), // neon chartreuse matte
    new THREE.MeshStandardMaterial({
      color: 0x00ff7f,
      roughness: 0.4,
      metalness: 0,
    }), // spring green matte
    new THREE.MeshStandardMaterial({
      color: 0x4682b4,
      roughness: 0.2,
      metalness: 0.4,
    }), // soft steel blue
    new THREE.MeshStandardMaterial({
      color: 0x6a5acd,
      roughness: 0.3,
      metalness: 0,
    }), // velvety slate blue
    new THREE.MeshStandardMaterial({
      color: 0xff1493,
      roughness: 0.5,
      metalness: 0,
    }), // bright deep pink matte
    new THREE.MeshStandardMaterial({
      color: 0x00ced1,
      roughness: 0,
      metalness: 0.6,
    }), // shiny dark turquoise
    new THREE.MeshStandardMaterial({
      color: 0x1e90ff,
      roughness: 0.1,
      metalness: 0.3,
    }), // metallic dodger blue
    new THREE.MeshStandardMaterial({
      color: 0xffdab9,
      roughness: 0.2,
      metalness: 0,
    }), // smooth peach puff
    new THREE.MeshStandardMaterial({
      color: 0xdeb887,
      roughness: 0.3,
      metalness: 0.2,
    }), // soft burlywood
    new THREE.MeshStandardMaterial({
      color: 0x5f9ea0,
      roughness: 0.1,
      metalness: 0,
    }), // matte cadet blue
    new THREE.MeshStandardMaterial({
      color: 0xffb6c1,
      roughness: 0.4,
      metalness: 0,
    }), // light pink matte
    new THREE.MeshStandardMaterial({
      color: 0x8b4513,
      roughness: 0.5,
      metalness: 0.4,
    }), // rich saddle brown metal
    new THREE.MeshStandardMaterial({
      color: 0x2e8b57,
      roughness: 0,
      metalness: 0,
    }), // smooth sea green
    new THREE.MeshStandardMaterial({
      color: 0x483d8b,
      roughness: 0.1,
      metalness: 0.5,
    }), // dark metallic slate blue
    new THREE.MeshStandardMaterial({
      color: 0xff8c00,
      roughness: 0.2,
      metalness: 0.3,
    }), // metallic dark orange
    new THREE.MeshStandardMaterial({
      color: 0x7cfc00,
      roughness: 0.3,
      metalness: 0,
    }), // lawn green matte
    new THREE.MeshStandardMaterial({
      color: 0xff69b4,
      roughness: 0.1,
      metalness: 0.3,
    }), // metallic pink
    new THREE.MeshStandardMaterial({
      color: 0x4682b4,
      roughness: 0,
      metalness: 0.8,
      emissive: 0x224466,
    }), // glowing steel blue
  ];

  // Compose geometry list: first fixed as IcosahedronGeometry
  const geometries = positions.map((pos, index) => {
    if (index === 0) {
      return {
        position: pos,
        r: 0.3,
        geometry: new THREE.IcosahedronGeometry(3), // Fixed first shape
      };
    } else {
      // Pick a random geometry from possibleGeometries for other positions
      const randomGeo =
        possibleGeometries[
          Math.floor(Math.random() * possibleGeometries.length)
        ];
      return {
        position: pos,
        r: randomGeo.r,
        geometry: randomGeo.geometry,
      };
    }
  });

  return geometries.map(({ position, r, geometry }) => (
    <Geometry
      key={JSON.stringify(position)}
      position={position.map((p) => p * 2)}
      geometry={geometry}
      soundEffects={soundEffects}
      materials={materials}
      r={r}
    />
  ));
}

function Geometry({ r, position, geometry, soundEffects, materials }) {
  const meshRef = useRef();
  const [visible, setVisible] = useState(false);

  const startingMaterial = gsap.utils.random(materials);

  function handleClick(e) {
    const mesh = e.object;

    gsap.utils.random(soundEffects).play();

    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1,0.3)",
      yoyo: true,
    });

    mesh.material = gsap.utils.random(materials);
  }

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      setVisible(true);
      gsap.from(meshRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: gsap.utils.random(0.8, 1.2),
        ease: "elastic.out(1,0.3)",
        delay: gsap.utils.random(0.5, 1),
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <group position={position} ref={meshRef}>
      <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
        <mesh
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={visible}
          material={startingMaterial}
        />
      </Float>
    </group>
  );
}
