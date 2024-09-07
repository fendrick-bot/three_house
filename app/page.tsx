"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Render the scene and camera
  useEffect(() => {
    if (containerRef && typeof window !== "undefined") {
      const scene = new THREE.Scene();
      
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);

      const axexHelper = new THREE.AxesHelper(20);
      scene.add(axexHelper);
      
      const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      // setting up the camera
      const camera = new THREE.PerspectiveCamera(
        75,
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
        new THREE.PlaneGeometry(20, 20),
        new THREE.MeshStandardMaterial({color: 'green'})
      );
      floor.rotation.x = -0.5 * Math.PI;
      scene.add(floor);

      // adding a house group to the scene
      const house = new THREE.Group();
      scene.add(house);

      // adding house elements

      // walls
      
      const walls = new THREE.Mesh( new THREE.BoxGeometry(4,2.5,4), new THREE.MeshStandardMaterial({color : 'yellow'}) );
      walls.position.y = 1.25;
      house.add(walls);

      // roof
      const roof = new THREE.Mesh( new THREE.ConeGeometry(3.5, 1.5, 4), new THREE.MeshStandardMaterial({color: 'red'}) );
      roof.rotation.y = 0.25 * Math.PI;
      roof.position.y = 3.25;
      house.add(roof);

      // doors
      const door = new THREE.Mesh( new THREE.PlaneGeometry(2.2, 2.2), new THREE.MeshStandardMaterial({color : 'brown'}) );
      door.position.z = 2 + 0.01;
      door.position.y = 1;
      house.add(door);

      // windows
      const windows = new THREE.Mesh( new THREE.PlaneGeometry(1, 1), new THREE.MeshStandardMaterial({color : 'skyblue'}) );
      windows.position.x = 2 + 0.01;
      windows.rotation.y = Math.PI / 2;
      windows.position.y =1.25;
      house.add(windows);

      // bushes
      const bushGeometry = new THREE.SphereGeometry(1,16,16);
      const bushMaterial = new THREE.MeshStandardMaterial({color : 'lightgreen'});
      const bush1 = new THREE.Mesh( bushGeometry,bushMaterial);
      bush1.scale.set(0.5, 0.5, 0.5);
      bush1.position.set(2.2,0.2,0.8);
      house.add(bush1);

      const bush2 = new THREE.Mesh( bushGeometry,bushMaterial);
      bush2.scale.set(0.25, 0.25, 0.25);
      bush2.position.set(2.2,0.2,0.2);
      house.add(bush2);

      const bush3 = new THREE.Mesh( bushGeometry,bushMaterial);
      bush3.scale.set(0.5, 0.5, 0.5);
      bush3.position.set(1.2,0.2,-2.1);
      house.add(bush3);

      const bush4 = new THREE.Mesh( bushGeometry,bushMaterial);
      bush4.scale.set(0.25, 0.25, 0.25);
      bush4.position.set(0.7,0.2,-2.1);
      house.add(bush4);

      // adding graves
      const graves = new THREE.Group();
      scene.add(graves);

      const gravesGeometry = new THREE.BoxGeometry(0.4,0.7,0.2);
      const gravesMaterial = new THREE.MeshStandardMaterial({color: 'darkgrey'});

      for( let i = 0; i < 30; i++ ) {
        const angle = Math.PI * 2 * Math.random();
        const radius = 3 + Math.random() * 4;
        const posx = Math.sin(angle) * radius;
        const posz = Math.cos(angle) * radius;

        const grave = new THREE.Mesh( gravesGeometry, gravesMaterial);
        grave.position.x = posx;
        grave.position.y = Math.random() * 0.2;
        grave.position.z = posz;

        grave.rotation.x = (Math.random() - 0.5)* 0.5;
        grave.rotation.y = (Math.random() - 0.5) * 0.5;
        grave.rotation.z = (Math.random() - 0.5) * 0.5;

        graves.add(grave);
        console.log("Added");
      }

      const ambientLight = new THREE.AmbientLight("#ffffff", 0.5);
      scene.add(ambientLight);

      // Directional light
      const directionalLight = new THREE.DirectionalLight("#ffffff", 1.5);
      directionalLight.position.set(3, 2, -8);
      scene.add(directionalLight);

      const controls = new OrbitControls(camera, containerRef.current);
      controls.enableDamping = true;


      renderer.render(scene, camera);

      const renderScene = () => {
        renderer.render(scene, camera);
        requestAnimationFrame(renderScene);
      };

      renderScene();
    }
  }, []);
  return <div ref={containerRef} className="bg-slate-300 w-full h-full" />;
}
function extend(arg0: { OrbitControls: typeof OrbitControls }) {
  throw new Error("Function not implemented.");
}
