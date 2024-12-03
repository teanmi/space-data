import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import camera from "../functions/camera";
import { setCameraPosition } from "../functions/cameraPositionFunctions";
import getCameraPositionZModifier from "../functions/getCameraPositionZModifier";
import { getCurrentZoom } from "../functions/currentZoom";

const Start = () => {
  const rocketRef = useRef(null);

  useEffect(() => {
    /* 

      Loading

    */

    let loading = false;

    const loadingManager = new THREE.LoadingManager();

    loadingManager.onLoad = function () {
      //   startLoading();
    };

    /* Function */

    function animate() {
      TWEEN.update();

      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);

      let cameraPosition = window.innerWidth >= 1250 ? 1250 : window.innerWidth;

      let currentZoom = getCurrentZoom();
      camera.position.setZ(currentZoom / cameraPosition);
    }

    /* STARTING VARIABLES */

    const canvas = document.querySelector("#background");

    const scene = new THREE.Scene();

    scene.background = new THREE.Color(0x87ceeb);

    const renderer = new THREE.WebGL1Renderer({
      canvas: canvas,
      antialias: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const cameraPosition = getCameraPositionZModifier();

    setCameraPosition([0, 0, 12500 / cameraPosition]);

    /*

      Geometry

    */
    const textureLoader = new THREE.TextureLoader(loadingManager);

    // Floor
    const floorGeometry = new THREE.PlaneGeometry(10, 10);
    const floorMaterial = new THREE.MeshStandardMaterial({
      color: 0x404040,
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = (3 * Math.PI) / 2; // Make it horizontal
    floor.position.y = -3;
    floor.position.z = 10;
    scene.add(floor);

    // Ceiling
    const ceilingGeometry = new THREE.PlaneGeometry(10, 10);
    const ceilingMaterial = new THREE.MeshStandardMaterial({
      color: 0x808080,
    });
    const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.y = 3; // Position above the camera
    ceiling.position.z = 11;
    scene.add(ceiling);

    // Walls
    const wallMaterial = new THREE.MeshStandardMaterial({
      color: 0x606060,
    });

    // Back Wall
    const backWallGeometry = new THREE.PlaneGeometry(10, 3);
    const backWall = new THREE.Mesh(backWallGeometry, wallMaterial);
    backWall.position.z = 6;
    backWall.position.y = -2;
    scene.add(backWall);

    // Side Walls
    const sideWallGeometry = new THREE.PlaneGeometry(10, 10);

    // Left Wall
    const leftWall = new THREE.Mesh(sideWallGeometry, wallMaterial);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.position.x = -5;
    leftWall.position.y = 1.5;
    leftWall.position.z = 11;
    scene.add(leftWall);

    // Right Wall
    const rightWall = new THREE.Mesh(sideWallGeometry, wallMaterial);
    rightWall.rotation.y = -Math.PI / 2;
    rightWall.position.x = 5;
    rightWall.position.y = 1.5;
    rightWall.position.z = 11;
    scene.add(rightWall);

    // Window Wall (Front Wall)
    const windowWallGeometry = new THREE.PlaneGeometry(10, 4);
    const windowMaterial = new THREE.MeshStandardMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.3, // Simulate glass
    });
    const windowWall = new THREE.Mesh(windowWallGeometry, windowMaterial);
    windowWall.position.z = 6;
    windowWall.position.y = 1.5;
    scene.add(windowWall);

    // Control Tower
    const controlRoomGeometry = new THREE.BoxGeometry(3, 20, 3);
    const controlRoomMaterial = new THREE.MeshStandardMaterial({
      color: 0x808080,
    });
    const controlRoom = new THREE.Mesh(
      controlRoomGeometry,
      controlRoomMaterial
    );
    controlRoom.position.z = -20;
    controlRoom.position.x = -7;
    scene.add(controlRoom);

    const controlWalkwayGeometry = new THREE.BoxGeometry(5, 1, 1);
    const controlWalkwayMaterial = new THREE.MeshStandardMaterial({
      color: 0x808080,
    });
    const controlWalkwayRoom = new THREE.Mesh(
      controlWalkwayGeometry,
      controlWalkwayMaterial
    );
    controlWalkwayRoom.position.z = -20;
    controlWalkwayRoom.position.y = 6;
    controlWalkwayRoom.position.x = -4;
    scene.add(controlWalkwayRoom);

    // Rocket
    const rocketGeometry = new THREE.ConeGeometry(1, 3, 32);
    const rocketMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const rocket = new THREE.Mesh(rocketGeometry, rocketMaterial);
    rocket.position.set(0, 7, -10);
    scene.add(rocket);

    // Rocket Base (Cylinder)
    const baseGeometry = new THREE.CylinderGeometry(1, 1, 4, 32);
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x161616 });
    const rocketBase = new THREE.Mesh(baseGeometry, baseMaterial);
    rocketBase.position.set(0, 3.5, -10); // Positioned below the rocket
    scene.add(rocketBase);

    // thruster
    const thrusterGeometry = new THREE.ConeGeometry(1, 3, 32);
    const thrusterMaterial = new THREE.MeshStandardMaterial({
      color: 0xff0000,
    });
    const thruster = new THREE.Mesh(thrusterGeometry, thrusterMaterial);
    thruster.position.set(0, 2, -10);
    scene.add(thruster);

    // Control Panel
    const panelGeometry = new THREE.BoxGeometry(7, 0.1, 1); // Width, Height, Depth
    const panelMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 }); // Dark gray
    const controlPanel = new THREE.Mesh(panelGeometry, panelMaterial);
    controlPanel.position.set(0, -1.2, 6.4); // Position below the window
    controlPanel.rotation.x = Math.PI / 4; // Lay flat on the panel
    scene.add(controlPanel);

    // Red Button
    const buttonGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.1, 32); // Small cylinder
    const buttonMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 }); // Bright red
    const redButton = new THREE.Mesh(buttonGeometry, buttonMaterial);
    redButton.position.set(0, -1.2, 6.45); // Slightly above the panel
    redButton.rotation.x = Math.PI / 4; // Lay flat on the panel
    scene.add(redButton);

    // Flame (Cone) Material
    const flameMaterial = new THREE.MeshStandardMaterial({
      color: 0xff6600, // Orange color for the flame
      emissive: 0xff6600, // Make it glow
      opacity: 0,
      transparent: true,
      roughness: 0.6,
      metalness: 0.2,
    });

    // Flame Geometry - A cone for the flame
    const flameGeometry = new THREE.ConeGeometry(0.8, 4, 32); // Radius, height, segments
    const flame = new THREE.Mesh(flameGeometry, flameMaterial);
    flame.position.set(0, 1, -10); // Position it below the rocket

    scene.add(flame);

    /*

      Lighting

    */

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(0, 0, 9);

    const sunlight = new THREE.DirectionalLight(0xffffff, 1); // Bright white light
    sunlight.position.set(10, 10, 10); // Position high above the scene
    sunlight.castShadow = true; // Enable shadows if needed

    scene.add(pointLight, sunlight);

    const buttonLight = new THREE.PointLight(0xffff00, 10, 0.5); // yellow glow around the button
    buttonLight.position.set(0, -1.125, 6.55);
    scene.add(buttonLight);

    /*

      FUNCTION CALLS

    */

    // Add event listener for button click to launch the rocket
    function handleButtonClick(event) {
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      // Convert mouse position to normalized device coordinates (-1 to +1)
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      // Check if the ray intersects the red button
      const intersects = raycaster.intersectObject(redButton);
      if (intersects.length > 0) {
        launchRocket();
      }
    }

    // Rocket launch animation
    function launchRocket() {
      // shake the rocket violently
      const shake1 = new TWEEN.Tween(rocket.position)
        .to({ x: -0.1, z: -10.1 }, 60)
        .repeat(25)
        .yoyo(true)
        .start();

      const shake2 = new TWEEN.Tween(rocketBase.position)
        .to({ x: -0.1, z: -10.1 }, 60)
        .repeat(25)
        .yoyo(true)
        .start();

      const shake3 = new TWEEN.Tween(thruster.position)
        .to({ x: -0.1, z: -10.1 }, 60)
        .repeat(25)
        .yoyo(true)
        .start();

      const shake4 = new TWEEN.Tween(flame.position)
        .to({ x: -0.1, z: -10.1 }, 60)
        .repeat(25)
        .yoyo(true)
        .start();

      const flame1 = new TWEEN.Tween(flame.scale)
        .to({ x: 1.2, y: 1.25, z: 1.2 }, 1000) // Scale up the flame as the rocket launches
        .easing(TWEEN.Easing.Quadratic.Out)
        .start();

      const flameReveal = new TWEEN.Tween(flame.material)
        .to(
          {
            opacity: 1,
            emissive: new THREE.Color(0xff6600), // Brighter color
          },
          2000
        )
        .easing(TWEEN.Easing.Quadratic.Out)
        .start();

      setTimeout(() => {
        const rocket1 = new TWEEN.Tween(rocket.position)
          .to({ y: 50, z: -10 }, 10000) // Move the rocket up to simulate launch
          .easing(TWEEN.Easing.Quadratic.Out)
          .start();

        const rocket2 = new TWEEN.Tween(rocketBase.position)
          .to({ y: 46.5, z: -10 }, 10000) // Move the rocket up to simulate launch
          .easing(TWEEN.Easing.Quadratic.Out)
          .start();

        const rocket3 = new TWEEN.Tween(thruster.position)
          .to({ y: 45, z: -10 }, 10000) // Move the rocket up to simulate launch
          .easing(TWEEN.Easing.Quadratic.Out)
          .start();

        const flame2 = new TWEEN.Tween(flame.position)
          .to({ y: 44, z: -10 }, 10000) // Flame follows the rocket as it moves
          .easing(TWEEN.Easing.Quadratic.Out)
          .start();
      }, 1250);

      setTimeout(() => {
        window.location.href = '/menu?planet=earth&score=0';
      }, 5000)
    }

    // Add mouse click event listener to the window
    window.addEventListener("click", handleButtonClick, false);

    window.addEventListener("resize", () => onWindowResize(), false);

    animate();
  });

  return (
    <div id="home">
      <canvas id="background"></canvas>
    </div>
  );
};

export default Start;
