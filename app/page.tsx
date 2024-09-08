"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Sky } from "three/addons/objects/Sky.js";

// importing textures
import floorAlphaImg from "@/public/floor_textures/floorAlphaMap.webp";
import floorARMImg from "@/public/floor_textures/rocky_terrain_arm_1k.webp";
import floorDispImg from "@/public/floor_textures/rocky_terrain_disp_1k.webp";
import floorNormalImg from "@/public/floor_textures/rocky_terrain_nor_gl_1k.webp";
import floorDiffImg from "@/public/floor_textures/rocky_terrain_diff_1k.webp";

import wallsARMImg from "@/public/wall_textures/rock_wall_07_arm_1k.webp";
import wallsDispImg from "@/public/wall_textures/rock_wall_07_disp_1k.webp";
import wallsNormalImg from "@/public/wall_textures/rock_wall_07_nor_gl_1k.webp";
import wallsDiffImg from "@/public/wall_textures/rock_wall_07_diff_1k.webp";

import roofARMImg from "@/public/roof_textures/clay_roof_tiles_02_arm_1k.webp";
import roofDispImg from "@/public/roof_textures/clay_roof_tiles_02_disp_1k.webp";
import roofNormalImg from "@/public/roof_textures/clay_roof_tiles_02_nor_gl_1k.webp";
import roofDiffImg from "@/public/roof_textures/clay_roof_tiles_02_diff_1k.webp";

import bushARMImg from "@/public/bush_textures/bush_arm_1k.jpg";
import bushNormalImg from "@/public/bush_textures/leaves_forest_ground_nor_gl_1k.webp";
import bushDiffImg from "@/public/bush_textures/leaves_forest_ground_diff_1k.webp";

import graveARMImg from "@/public/grave_textures/plastered_stone_wall_arm_1k.webp";
import graveNormalImg from "@/public/grave_textures/plastered_stone_wall_nor_gl_1k.webp";
import graveDiffImg from "@/public/grave_textures/plastered_stone_wall_diff_1k.webp";

import doorAmbientImg from "@/public/door_textures/Door_Wood_001_ambientOcclusion.webp";
import doorNormalImg from "@/public/door_textures/Door_Wood_001_normal.webp";
import doorDiffImg from "@/public/door_textures/Door_Wood_001_basecolor.webp";
import doorRoughnessImg from "@/public/door_textures/Door_Wood_001_roughness.webp";
import doorOpacityImg from "@/public/door_textures/Door_Wood_001_opacity.webp";
import doorMetallicImg from "@/public/door_textures/Door_Wood_001_metallic.webp";
import doorHeightImg from "@/public/door_textures/Door_Wood_001_height.png";

import windowAmbientImg from "@/public/window_textures/Wood_Window_001_ambientOcclusion.webp";
import windowNormalImg from "@/public/window_textures/Wood_Window_001_normal.webp";
import windowDiffImg from "@/public/window_textures/Wood_Window_001_basecolor.webp";
import windowRoughnessImg from "@/public/window_textures/Wood_Window_001_roughness.webp";
import windowOpacityImg from "@/public/window_textures/Wood_Window_001_opacity.webp";
import windowMetallicImg from "@/public/window_textures/Wood_Window_001_metallic.webp";
import windowHeightImg from "@/public/window_textures/Wood_Window_001_height.png";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Render the scene and camera
  useEffect(() => {
    if (containerRef && typeof window !== "undefined") {
      // textures
      const textureLoader = new THREE.TextureLoader();
      const floorAlphaMap = textureLoader.load(floorAlphaImg.src);
      const floorDispMap = textureLoader.load(floorDispImg.src);
      const floorARMMap = textureLoader.load(floorARMImg.src);
      const floorNormalMap = textureLoader.load(floorNormalImg.src);
      const floorDiffMap = textureLoader.load(floorDiffImg.src);

      const wallsARMMap = textureLoader.load(wallsARMImg.src);
      const wallsDispMap = textureLoader.load(wallsDispImg.src);
      const wallsNormalMap = textureLoader.load(wallsNormalImg.src);
      const wallsDiffMap = textureLoader.load(wallsDiffImg.src);

      const roofARMMap = textureLoader.load(roofARMImg.src);
      const roofDispMap = textureLoader.load(roofDispImg.src);
      const roofNormalMap = textureLoader.load(roofNormalImg.src);
      const roofDiffMap = textureLoader.load(roofDiffImg.src);

      const bushARMMap = textureLoader.load(bushARMImg.src);
      const bushNormalMap = textureLoader.load(bushNormalImg.src);
      const bushDiffMap = textureLoader.load(bushDiffImg.src);

      const graveARMMap = textureLoader.load(graveARMImg.src);
      const graveNormalMap = textureLoader.load(graveNormalImg.src);
      const graveDiffMap = textureLoader.load(graveDiffImg.src);

      const doorAmbientMap = textureLoader.load(doorAmbientImg.src);
      const doorNormalMap = textureLoader.load(doorNormalImg.src);
      const doorDiffMap = textureLoader.load(doorDiffImg.src);
      const doorRoughnessMap = textureLoader.load(doorRoughnessImg.src);
      const doorOpacityMap = textureLoader.load(doorOpacityImg.src);
      const doorMetallicMap = textureLoader.load(doorMetallicImg.src);
      const doorHeightMap = textureLoader.load(doorHeightImg.src);

      const windowAmbientMap = textureLoader.load(windowAmbientImg.src);
      const windowNormalMap = textureLoader.load(windowNormalImg.src);
      const windowDiffMap = textureLoader.load(windowDiffImg.src);
      const windowRoughnessMap = textureLoader.load(windowRoughnessImg.src);
      const windowOpacityMap = textureLoader.load(windowOpacityImg.src);
      const windowMetallicMap = textureLoader.load(windowMetallicImg.src);
      const windowHeightMap = textureLoader.load(windowHeightImg.src);

      floorDiffMap.repeat.set(8, 8);
      floorDispMap.repeat.set(8, 8);
      floorNormalMap.repeat.set(8, 8);
      floorARMMap.repeat.set(8, 8);

      wallsDiffMap.repeat.set(2, 2);
      wallsDispMap.repeat.set(2, 2);
      wallsNormalMap.repeat.set(2, 2);
      wallsARMMap.repeat.set(2, 2);

      roofARMMap.repeat.set(3, 1);
      roofNormalMap.repeat.set(3, 1);
      roofDispMap.repeat.set(3, 1);
      roofDiffMap.repeat.set(3, 1);

      bushARMMap.repeat.set(2, 1);
      bushDiffMap.repeat.set(2, 1);
      bushNormalMap.repeat.set(2, 1);

      floorDiffMap.wrapS = THREE.RepeatWrapping;
      floorDispMap.wrapS = THREE.RepeatWrapping;
      floorNormalMap.wrapS = THREE.RepeatWrapping;
      floorARMMap.wrapS = THREE.RepeatWrapping;

      wallsDiffMap.wrapS = THREE.RepeatWrapping;
      wallsDispMap.wrapS = THREE.RepeatWrapping;
      wallsNormalMap.wrapS = THREE.RepeatWrapping;
      wallsARMMap.wrapS = THREE.RepeatWrapping;

      roofDiffMap.wrapS = THREE.RepeatWrapping;
      roofARMMap.wrapS = THREE.RepeatWrapping;
      roofNormalMap.wrapS = THREE.RepeatWrapping;
      roofDispMap.wrapS = THREE.RepeatWrapping;

      bushARMMap.wrapS = THREE.RepeatWrapping;
      bushDiffMap.wrapS = THREE.RepeatWrapping;
      bushNormalMap.wrapS = THREE.RepeatWrapping;

      floorDiffMap.wrapT = THREE.RepeatWrapping;
      floorDispMap.wrapT = THREE.RepeatWrapping;
      floorNormalMap.wrapT = THREE.RepeatWrapping;
      floorARMMap.wrapT = THREE.RepeatWrapping;

      wallsDiffMap.wrapT = THREE.RepeatWrapping;
      wallsDispMap.wrapT = THREE.RepeatWrapping;
      wallsNormalMap.wrapT = THREE.RepeatWrapping;
      wallsARMMap.wrapT = THREE.RepeatWrapping;

      // adding real colors to texture only applicable for diff map
      floorDiffMap.colorSpace = THREE.SRGBColorSpace;
      wallsDiffMap.colorSpace = THREE.SRGBColorSpace;
      roofDiffMap.colorSpace = THREE.SRGBColorSpace;
      bushDiffMap.colorSpace = THREE.SRGBColorSpace;
      graveDiffMap.colorSpace = THREE.SRGBColorSpace;
      doorDiffMap.colorSpace = THREE.SRGBColorSpace;
      windowDiffMap.colorSpace = THREE.SRGBColorSpace;

      const scene = new THREE.Scene();

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);

      // const axexHelper = new THREE.AxesHelper(20);
      // scene.add(axexHelper);

      const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      // setting up the camera
      const camera = new THREE.PerspectiveCamera(
        85,
        sizes.width / sizes.height,
        0.1,
        100
      );
      camera.position.x = 4;
      camera.position.y = 2;
      camera.position.z = 5;
      scene.add(camera);

      window.addEventListener("resize", () => {
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        // Update camera
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        // Update renderer
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });

      // adding floor to the screen
      const floor = new THREE.Mesh(
        new THREE.PlaneGeometry(20, 20, 100, 100),
        new THREE.MeshStandardMaterial({
          alphaMap: floorAlphaMap,
          transparent: true,
          map: floorDiffMap,
          aoMap: floorARMMap,
          roughnessMap: floorARMMap,
          metalnessMap: floorARMMap,
          normalMap: floorNormalMap,
          displacementMap: floorDispMap,
          displacementScale: 0.3,
          displacementBias: -0.1,
        })
      );
      floor.rotation.x = -0.5 * Math.PI;
      scene.add(floor);

      // adding a house group to the scene
      const house = new THREE.Group();
      scene.add(house);

      // adding house elements

      // walls

      const walls = new THREE.Mesh(
        new THREE.BoxGeometry(4, 2.5, 4),
        new THREE.MeshStandardMaterial({
          map: wallsDiffMap,
          aoMap: wallsARMMap,
          roughnessMap: wallsARMMap,
          metalnessMap: wallsARMMap,
          normalMap: wallsNormalMap,
        })
      );
      walls.position.y = 1.25;
      house.add(walls);

      // roof
      const roof = new THREE.Mesh(
        new THREE.ConeGeometry(3.5, 1.5, 4),
        new THREE.MeshStandardMaterial({
          map: roofDiffMap,
          aoMap: roofARMMap,
          roughnessMap: roofARMMap,
          metalnessMap: roofARMMap,
          normalMap: roofNormalMap,
        })
      );
      roof.rotation.y = 0.25 * Math.PI;
      roof.position.y = 3.25;
      house.add(roof);

      // doors
      const door = new THREE.Mesh(
        new THREE.PlaneGeometry(2.2, 2.2, 100, 100),
        new THREE.MeshStandardMaterial({
          map: doorDiffMap,
          aoMap: doorAmbientMap,
          roughnessMap: doorRoughnessMap,
          metalnessMap: doorMetallicMap,
          normalMap: doorNormalMap,
          alphaMap: doorOpacityMap,
          transparent: true,
          displacementMap: doorHeightMap,
          displacementScale: 0.15,
          displacementBias: -0.04,
        })
      );
      door.position.z = 2 + 0.01;
      door.position.y = 1;
      house.add(door);

      // windows
      const windows = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 1),
        new THREE.MeshStandardMaterial({
          map: windowDiffMap,
          aoMap: windowAmbientMap,
          roughnessMap: windowRoughnessMap,
          metalnessMap: windowMetallicMap,
          normalMap: windowNormalMap,
          alphaMap: windowOpacityMap,
          transparent: true,
          displacementMap: windowHeightMap,
          displacementScale: 0.15,
          displacementBias: -0.13,
          color: "skyblue",
        })
      );
      windows.position.x = 2 + 0.01;
      windows.rotation.y = Math.PI / 2;
      windows.position.y = 1.25;
      house.add(windows);
      // window wrapper
      const windowWrapper = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 1),
        new THREE.MeshStandardMaterial({ color: "yellow" })
      );
      windowWrapper.position.x = 2 + 0.01;
      windowWrapper.rotation.y = Math.PI / 2;
      windowWrapper.position.y = 1.25;
      house.add(windowWrapper);

      // bushes
      const bushGeometry = new THREE.SphereGeometry(1, 16, 16);
      const bushMaterial = new THREE.MeshStandardMaterial({
        color: "lightgreen",
        map: bushDiffMap,
        aoMap: bushARMMap,
        roughnessMap: bushARMMap,
        metalnessMap: bushARMMap,
        normalMap: bushNormalMap,
      });
      const bush1 = new THREE.Mesh(bushGeometry, bushMaterial);
      bush1.scale.set(0.5, 0.5, 0.5);
      bush1.position.set(2.2, 0.2, 0.8);
      bush1.rotation.x = 1.75;
      house.add(bush1);

      const bush2 = new THREE.Mesh(bushGeometry, bushMaterial);
      bush2.scale.set(0.25, 0.25, 0.25);
      bush2.position.set(2.2, 0.2, 0.2);
      bush2.rotation.x = 1.75;
      house.add(bush2);

      const bush3 = new THREE.Mesh(bushGeometry, bushMaterial);
      bush3.scale.set(0.5, 0.5, 0.5);
      bush3.position.set(1.2, 0.2, -2.1);
      bush3.rotation.x = 0.75;
      house.add(bush3);

      const bush4 = new THREE.Mesh(bushGeometry, bushMaterial);
      bush4.scale.set(0.25, 0.25, 0.25);
      bush4.position.set(0.7, 0.2, -2.1);
      bush4.rotation.x = 0.75;
      house.add(bush4);

      // adding graves
      const graves = new THREE.Group();
      scene.add(graves);

      const gravesGeometry = new THREE.BoxGeometry(0.4, 0.7, 0.2);
      const gravesMaterial = new THREE.MeshStandardMaterial({
        map: graveDiffMap,
        aoMap: graveARMMap,
        metalnessMap: graveARMMap,
        roughnessMap: graveARMMap,
        normalMap: graveNormalMap,
      });

      for (let i = 0; i < 30; i++) {
        const angle = Math.PI * 2 * Math.random();
        const radius = 3 + Math.random() * 4;
        const posx = Math.sin(angle) * radius;
        const posz = Math.cos(angle) * radius;

        const grave = new THREE.Mesh(gravesGeometry, gravesMaterial);
        grave.position.x = posx;
        grave.position.y = Math.random() * 0.2;
        grave.position.z = posz;

        grave.rotation.x = (Math.random() - 0.5) * 0.5;
        grave.rotation.y = (Math.random() - 0.5) * 0.5;
        grave.rotation.z = (Math.random() - 0.5) * 0.5;

        graves.add(grave);
        console.log("Added");
      }

      const ambientLight = new THREE.AmbientLight("#86cdff", 0.5);
      scene.add(ambientLight);

      // Directional light
      const directionalLight = new THREE.DirectionalLight("#86cdff", 1.5);
      directionalLight.position.set(3, 2, -8);
      scene.add(directionalLight);

      // door light
      const doorLight = new THREE.PointLight("#ff7d46", 3);
      doorLight.position.set(0, 2.2, 2.5);
      house.add(doorLight);

      const windowLight = new THREE.PointLight("#ffcc00", 2);
      windowLight.position.set(
        windowWrapper.position.x + 0.3,
        windowWrapper.position.y + 1.2,
        windowWrapper.position.z
      );
      house.add(windowLight);

      // ghost lights
      const ghostlight1 = new THREE.PointLight("#8800ff", 5);
      const ghostlight2 = new THREE.PointLight("#ff0088", 5);
      const ghostlight3 = new THREE.PointLight("#ff0000", 5);

      scene.add(ghostlight1, ghostlight2, ghostlight3);

      // renderer shadows
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      directionalLight.castShadow = true;
      ghostlight1.castShadow = true;
      ghostlight2.castShadow = true;
      ghostlight3.castShadow = true;

      walls.castShadow = true;
      walls.receiveShadow = true;

      roof.castShadow = true;
      floor.receiveShadow = true;

      for (const grave of graves.children) {
        grave.castShadow = true;
        grave.receiveShadow = true;
      }

      // mapping
      directionalLight.shadow.mapSize.width = 256;
      directionalLight.shadow.mapSize.height = 256;
      directionalLight.shadow.camera.top = 8;
      directionalLight.shadow.camera.bottom = -8;
      directionalLight.shadow.camera.left = -8;
      directionalLight.shadow.camera.right = 8;
      directionalLight.shadow.camera.near = 1;
      directionalLight.shadow.camera.far = 20;

      ghostlight1.shadow.mapSize.width = 256;
      ghostlight1.shadow.mapSize.height = 256;
      ghostlight1.shadow.camera.far = 10;

      ghostlight2.shadow.mapSize.width = 256;
      ghostlight2.shadow.mapSize.height = 256;
      ghostlight2.shadow.camera.far = 10;

      ghostlight3.shadow.mapSize.width = 256;
      ghostlight3.shadow.mapSize.height = 256;
      ghostlight3.shadow.camera.far = 10;

      // sky properties
      const sky = new Sky();
      sky.scale.set(100, 100, 100);
      scene.add(sky);
      sky.material.uniforms["turbidity"].value = 10;
      sky.material.uniforms["rayleigh"].value = 3;
      sky.material.uniforms["mieCoefficient"].value = 0.1;
      sky.material.uniforms["mieDirectionalG"].value = 0.95;
      sky.material.uniforms["sunPosition"].value.set(0.3, -0.038, -0.95);

      // fog properties
      scene.fog = new THREE.Fog("#02343f", 1, 20);

      const controls = new OrbitControls(camera, containerRef.current);
      controls.enableDamping = true;

      renderer.render(scene, camera);

      let lightangles = 0.5;
      const renderScene = () => {
        ghostlight1.position.x = Math.cos(lightangles) * 4;
        ghostlight1.position.z = Math.sin(lightangles) * 4;
        ghostlight1.position.y =
          0.5 +
          Math.sin(lightangles) *
            Math.sin(lightangles * 2.34) *
            Math.sin(lightangles * 3.45);

        ghostlight2.position.x = Math.cos(lightangles * 0.3) * 5.5;
        ghostlight2.position.z = Math.sin(-lightangles * 0.3) * 5.5;
        ghostlight2.position.y =
          0.5 +
          Math.sin(-lightangles) *
            Math.sin(-lightangles * 3.45) *
            Math.sin(lightangles * 2.34);

        ghostlight3.position.x = Math.cos(lightangles * 0.1) * 6.5;
        ghostlight3.position.z = Math.sin(lightangles * 0.1) * 6.5;
        ghostlight3.position.y =
          0.5 +
          Math.sin(lightangles) *
            Math.sin(lightangles * 3.45) *
            Math.sin(lightangles * 2.34);

        lightangles += 0.01;

        renderer.render(scene, camera);
        requestAnimationFrame(renderScene);
      };

      renderScene();
    }
  }, []);
  return <div ref={containerRef} className="bg-slate-300 w-full h-full" />;
}
