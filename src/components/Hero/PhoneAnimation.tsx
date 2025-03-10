import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const PhoneAnimation = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.offsetWidth / containerRef.current.offsetHeight,
      0.1,
      1000
    );
    const container = containerRef.current;
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(
      containerRef.current.offsetWidth,
      containerRef.current.offsetHeight
    );

    const loader = new GLTFLoader();
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);

    directionalLight.position.set(50, 0, 100);
    scene.add(directionalLight);

    containerRef.current.appendChild(renderer.domElement);
    camera.position.z = 5;
    camera.position.y = 1;

    loader.load(
      "models/iphone_16_pro_max/scene.gltf",
      (gltf) => {
        gltf.scene.scale.set(6, 6, 6);
        gltf.scene.rotation.set(Math.PI / 12, 0, Math.PI / 2);
        scene.add(gltf.scene);
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );

    function animate() {
      renderer.render(scene, camera);
    }
    renderer.setAnimationLoop(animate);

    const handleResize = () => {
      const newWidth = container.offsetWidth;
      const newHeight = container.offsetHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute w-1/2 h-1/2"></div>;
};

export default PhoneAnimation;
