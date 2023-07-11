import React, { useEffect } from "react";
import "./header.css";
import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import Sun from "../images/sun.jpg";
import Mercury from "../images/mercury.jpg";
import Venus from "../images/venus.jpg";
import Earth from "../images/earth.jpg";
import Moon from "../images/moon.jpg";
import Mars from "../images/mars.jpg";
import Jupiter from "../images/jupiter.jpg";
import Saturn from "../images/saturn.jpg";
import SaturnRing from "../images/saturnring.png";
import Uranus from "../images/uranus.jpg";
import Neptune from "../images/neptune.jpg";
import MainModal from "./mainModal";
import camera from "../functions/camera";
import { setCameraPosition } from "../functions/cameraPositionFunctions";
import getCameraPositionZModifier from "../functions/getCameraPositionZModifier";
import { getCurrentZoom } from "../functions/currentZoom";
import PlanetModals from "./planetModals";

const Header = () => {
  useEffect(() => {
    /* 

      Loading

    */

    let loading = false;

    const loadingManager = new THREE.LoadingManager();

    loadingManager.onLoad = function () {
      setTimeout(() => {
        startLoading();
      }, 1000);
    };

    /*

      FUNCTIONS

    */

    let r = 1;
    let theta = 0;
    let dTheta = (1.2 * Math.PI) / 600;
    function animate() {
      if (loading === true) {
        document.getElementById("loading-screen").classList.add("fade-out");
        loadModal();
      }

      TWEEN.update();

      let rotationAmount = 0.05;

      requestAnimationFrame(animate);

      mercury.rotation.y += rotationAmount / 700;
      venus.rotation.y += rotationAmount / 3000;
      earth.rotation.y += rotationAmount / 24;
      mars.rotation.y += rotationAmount / 25;
      jupiter.rotation.y += rotationAmount / 10;
      saturn.rotation.y += rotationAmount / 11;
      saturnRing.rotation.z += rotationAmount / 11;
      uranus.rotation.y += rotationAmount / 17;
      neptune.rotation.y += rotationAmount / 16;

      theta += dTheta;
      moon.position.x = r * Math.cos(theta) - 3.8;
      moon.position.z = r * Math.sin(theta);
      moon.position.y = r * Math.cos(theta);

      renderer.render(scene, camera);
    }

    function loadModal() {
      setTimeout(() => {
        document.getElementById("modal-main").classList.add("fade-in");
      }, 1000);
    }

    function addStar() {
      const starGeometry = new THREE.SphereGeometry(0.025, 24, 24);
      const starMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(starGeometry, starMaterial);

      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(50));

      star.position.set(x, y, z);
      scene.add(star);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);

      let cameraPosition = window.innerWidth >= 1250 ? 1250 : window.innerWidth;

      let currentZoom = getCurrentZoom();
      camera.position.setZ(currentZoom / cameraPosition); 
    }

    /*

      STARTING VARIABLES

    */

    const canvas = document.querySelector("#background");

    const scene = new THREE.Scene();

    const renderer = new THREE.WebGL1Renderer({
      canvas: canvas,
      antialias: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const cameraPosition = getCameraPositionZModifier();

    setCameraPosition([0, 0, 12500 / cameraPosition]);
    /*

      GEOMETRY SHAPES

    */

    const textureLoader = new THREE.TextureLoader(loadingManager);

    const sunGeometry = new THREE.SphereGeometry(1.4, 32, 32);
    const sunTexture = textureLoader.load(Sun);
    sunTexture.minFilter = THREE.LinearFilter;

    const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);

    sun.position.x = -10;
    sun.rotation.z = -0.1265364;

    scene.add(sun);

    //

    const mercuryGeometry = new THREE.SphereGeometry(0.4, 32, 32);
    const mercuryTexture = textureLoader.load(Mercury);
    mercuryTexture.minFilter = THREE.LinearFilter;

    const mercuryMaterial = new THREE.MeshBasicMaterial({
      map: mercuryTexture,
    });
    const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);

    mercury.position.x = -7;
    mercury.rotation.z = -0.000175;

    scene.add(mercury);

    //

    const venusGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const venusTexture = textureLoader.load(Venus);
    venusTexture.minFilter = THREE.LinearFilter;

    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);

    venus.position.x = -5.5;
    venus.rotation.z = -3.0944688;

    scene.add(venus);

    //

    const earthGeometry = new THREE.SphereGeometry(0.65, 32, 32);
    const earthTexture = textureLoader.load(Earth);
    earthTexture.minFilter = THREE.LinearFilter;

    const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });

    const earth = new THREE.Mesh(earthGeometry, earthMaterial);

    earth.position.x = -3.8;
    earth.rotation.z = -0.4101524;

    scene.add(earth);

    //

    const moonGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const moonTexture = textureLoader.load(Moon);

    moonTexture.minFilter = THREE.LinearFilter;
    const moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });

    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    moon.position.x = -3.8;
    moon.position.y = 0.05;

    scene.add(moon);

    //

    const marsGeometry = new THREE.SphereGeometry(0.6, 32, 32);
    const marsTexture = textureLoader.load(Mars);

    marsTexture.minFilter = THREE.LinearFilter;
    const marsMaterial = new THREE.MeshBasicMaterial({ map: marsTexture });
    const mars = new THREE.Mesh(marsGeometry, marsMaterial);

    mars.position.x = -2;
    mars.rotation.z = -0.43964844;

    scene.add(mars);

    //

    const jupiterGeometry = new THREE.SphereGeometry(1.4, 32, 16);
    const jupiterTexture = textureLoader.load(Jupiter);

    jupiterTexture.minFilter = THREE.LinearFilter;
    const jupiterMaterial = new THREE.MeshBasicMaterial({
      map: jupiterTexture,
    });

    const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);

    jupiter.position.x = 0.75;
    jupiter.rotation.z = -0.05462881;

    scene.add(jupiter);

    //

    const saturnGeometry = new THREE.SphereGeometry(1.2, 32, 16);
    const saturnTexture = textureLoader.load(Saturn);

    saturnTexture.minFilter = THREE.LinearFilter;
    const saturnMaterial = new THREE.MeshBasicMaterial({
      map: saturnTexture,
    });

    const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);

    //

    const saturnRingGeometry = new THREE.RingGeometry(1.25, 2, 64);
    const saturnRingTexture = textureLoader.load(SaturnRing);

    saturnRingTexture.minFilter = THREE.LinearFilter;
    const pos = saturnRingGeometry.attributes.position;
    const v3 = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v3.fromBufferAttribute(pos, i);
      saturnRingGeometry.attributes.uv.setXY(i, v3.length() < 1.55 ? 0 : 1, 1);
    }

    const saturnRingMaterial = new THREE.MeshBasicMaterial({
      map: saturnRingTexture,
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: true,
    });

    const saturnRing = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);

    saturn.position.x = 4.7;
    // saturn.rotation.z = -0.46652651;
    saturnRing.position.x = 4.7;
    saturnRing.rotation.x = 1.5
    // saturnRing.rotation.y = -0.46652651;

    scene.add(saturn, saturnRing);

    //

    const uranusGeometry = new THREE.SphereGeometry(0.85, 32, 32);
    const uranusTexture = textureLoader.load(Uranus);

    uranusTexture.minFilter = THREE.LinearFilter;
    const uranusMaterial = new THREE.MeshBasicMaterial({ map: uranusTexture });
    const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);

    uranus.position.x = 8;
    uranus.rotation.z = -1.7064084;

    scene.add(uranus);

    //

    const neptuneGeometry = new THREE.SphereGeometry(0.8, 32, 32);
    const neptuneTexture = textureLoader.load(Neptune);

    neptuneTexture.minFilter = THREE.LinearFilter;
    const neptuneMaterial = new THREE.MeshBasicMaterial({
      map: neptuneTexture,
    });
    const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);

    neptune.position.x = 10.8;
    neptune.rotation.z = -0.49427724;

    scene.add(neptune);

    /*

      LIGHTING

    */

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(0, 0, 0);

    const ambientLight = new THREE.AmbientLight(0xffffff);

    scene.add(pointLight, ambientLight);

    /*

      HELPERS

    */

    /*

      FUNCTION CALLS

    */

    window.addEventListener("resize", () => onWindowResize(), false);

    Array(450).fill().forEach(addStar);

    animate();

    /*

      loadingState 

    */

    function startLoading() {
      const circularSpinner = document.querySelector(".circular-spinner");

      circularSpinner.style.opacity = 0;

      const circularProgress = document.querySelector(".circular-progress");
      const circularText = document.querySelector(".loading-text");

      circularProgress.style.opacity = 1;
      circularProgress.style.display = "flex";
      circularText.style.opacity = 1;

      let progressStartValue = 0;
      const progressEndValue = 100,
        speed = 15;

      const progress = setInterval(() => {
        progressStartValue++;

        circularProgress.style.background = `conic-gradient(white ${
          progressStartValue * 3.6
        }deg, black 0deg)`;

        if (progressStartValue >= progressEndValue) {
          loading = true;
          clearInterval(progress);
        }
      }, speed);
    }
  }, []);

  return (
    <div id="header">
      <canvas id="background"></canvas>
      <div id="loading-screen">
        <div className="circular-progress">
          <div className="loading-text">M|T</div>
        </div>
        <div className="circular-spinner"></div>
      </div>
      <MainModal />
      <PlanetModals />
    </div>
  );
};

export default Header;
