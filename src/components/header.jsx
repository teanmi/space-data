import React, { useEffect } from "react";
import "./header.css";
import * as THREE from "three";
import { isMobile } from "react-device-detect";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Earth from "../images/earth.jpg";
import Moon from "../images/moon.jpg";

const Header = () => {
  useEffect(() => {
    /*

      FUNCTIONS

    */

    let r = 3;
    let theta = 0;
    let dTheta = Math.PI / 1000;
    function animate() {
      let rotationAmount = 0.003;

      requestAnimationFrame(animate);

      earth.rotation.y += rotationAmount / 3;

      theta += dTheta;
      moon.position.x = r * Math.cos(theta);
      moon.position.z = 24 + r * Math.sin(theta);
      moon.position.y = r * Math.cos(theta);

      saturn.rotation.x += rotationAmount;
      saturn.rotation.y += rotationAmount;
      saturn.rotation.z += rotationAmount;

      saturnRing.rotation.x += rotationAmount;
      saturnRing.rotation.y += rotationAmount;

      // controls.update();

      renderer.render(scene, camera);
    }

    function addStar() {
      const starGeometry = new THREE.SphereGeometry(0.25, 24, 24);
      const starMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(starGeometry, starMaterial);

      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100));

      star.position.set(x, y, z);
      scene.add(star);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    if (isMobile) {
      let oldx = 0;
      let oldy = 0;
      window.onmousemove = function (event) {
        let changex = event.x - oldx;
        let changey = event.y - oldy;
        camera.position.x += changex / 100;
        camera.position.y -= changey / 100;

        oldx = event.x;
        oldy = event.y;
      };
    }

    /*

      STARTING VARIABLES

    */

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      90,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGL1Renderer({
      canvas: document.querySelector("#background"),
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight / 1.1);
    camera.position.setZ(30);

    /*

      GEOMETRY SHAPES

    */

    const earthGeometry = new THREE.SphereGeometry(2, 32, 32);
    const earthTexture = new THREE.TextureLoader().load(Earth);
    const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });

    const earth = new THREE.Mesh(earthGeometry, earthMaterial);

    earth.position.z = 24;
    earth.rotation.z = 0.3;
    scene.add(earth);

    const moonGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const moonTexture = new THREE.TextureLoader().load(Moon);
    const moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });

    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    moon.position.x = 2;
    moon.position.y = 2;
    moon.position.z = 24;

    const jupiterGeometry = new THREE.SphereGeometry(3.5, 32, 16);
    const jupiterMaterial = new THREE.MeshBasicMaterial({
      color: 0xbcafb2,
    });

    const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);

    jupiter.position.x = -10;
    jupiter.position.y = -15;

    const saturnGeometry = new THREE.SphereGeometry(2, 32, 16);
    const saturnMaterial = new THREE.MeshBasicMaterial({
      color: 0xfae5bf,
    });

    const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);

    saturn.position.x = 8;
    saturn.position.y = 14;
    saturn.position.z = 0;

    const saturnRingGeometry = new THREE.RingGeometry(3.5, 2.5, 32);
    const saturnRingMaterial = new THREE.MeshStandardMaterial({
      color: 0xab604a,
      side: THREE.DoubleSide,
    });

    const saturnRing = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);

    saturnRing.position.x = 8;
    saturnRing.position.y = 14;
    saturnRing.position.z = 0;

    scene.add(moon);

    scene.add(jupiter);

    scene.add(saturn);

    scene.add(saturnRing);

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

    const lightHelper = new THREE.PointLightHelper(pointLight);
    const gridHelper = new THREE.GridHelper(200, 50);

    // const controls = new OrbitControls(camera, renderer.domElement);

    // scene.add(lightHelper);
    // scene.add(gridHelper)

    /*

      FUNCTION CALLS

    */

    window.addEventListener("resize", () => onWindowResize(), false);

    Array(300).fill().forEach(addStar);

    animate();
  }, []);

  return (
    <div id="header">
      <canvas id="background"></canvas>
      <div className="h">test</div>
    </div>
  );
};

export default Header;
