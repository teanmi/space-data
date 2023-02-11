import React, { useEffect } from "react";
import "./header.css";
import * as THREE from "three";
import { isMobile } from "react-device-detect";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Earth from "../images/earth.jpg";
import Moon from "../images/moon.jpg";

const Header = () => {
  useEffect(() => {
    console.log(window.innerWidth)
    /*

      FUNCTIONS

    */

    let r = 1;
    let theta = 0;
    let dTheta = (1.2 * Math.PI) / 600;
    function animate() {
      let rotationAmount = 0.003;

      requestAnimationFrame(animate);

      // earth.rotation.y += rotationAmount / 3;

      theta += dTheta;
      moon.position.x = r * Math.cos(theta) - 3.8;
      moon.position.z = r * Math.sin(theta);
      moon.position.y = r * Math.cos(theta);

      // saturn.rotation.x += rotationAmount;
      // saturn.rotation.y += rotationAmount;
      // saturn.rotation.z += rotationAmount;

      // saturnRing.rotation.x += rotationAmount;
      // saturnRing.rotation.y += rotationAmount;

      // controls.update();

      renderer.render(scene, camera);
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

      let cameraPosition = (window.innerWidth >= 1250) ? 1250 : (window.innerWidth)


      camera.position.setZ(12500 / cameraPosition);
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
      antialias: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    let cameraPosition = (window.innerWidth >= 1250) ? 1250 : (window.innerWidth)
    

    camera.position.setZ(12500 / cameraPosition);

    /*

      GEOMETRY SHAPES

    */

    const sunGeometry = new THREE.SphereGeometry(1.4, 32, 32)
    //texture
    const sunMaterial = new THREE.MeshBasicMaterial({color: 0x325412})
    const sun = new THREE.Mesh(sunGeometry, sunMaterial)

    sun.position.x = -10

    scene.add(sun)

    const mercuryGeometry = new THREE.SphereGeometry(.35, 32, 32)
    //texture
    const mercuryMaterial = new THREE.MeshBasicMaterial({color: 0x325412})
    const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial)

    mercury.position.x = -7
    
    scene.add(mercury)

    const venusGeometry = new THREE.SphereGeometry(.45, 32, 32)
    //texture
    const venusMaterial = new THREE.MeshBasicMaterial({color: 0x325412})
    const venus = new THREE.Mesh(venusGeometry, venusMaterial)

    venus.position.x = -5.5
    
    scene.add(venus)


    const earthGeometry = new THREE.SphereGeometry(.55, 32, 32);
    const earthTexture = new THREE.TextureLoader().load(Earth);
    const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });

    const earth = new THREE.Mesh(earthGeometry, earthMaterial);

    earth.position.x = -3.8;
    // earth.rotation.z = 0.3;
    scene.add(earth);

    const moonGeometry = new THREE.SphereGeometry(.15, 32, 32);
    const moonTexture = new THREE.TextureLoader().load(Moon);
    const moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });

    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    moon.position.x = -3.8;
    moon.position.y = .05;

    scene.add(moon)

    const marsGeometry = new THREE.SphereGeometry(.50, 32, 32)
    //texture
    const marsMaterial = new THREE.MeshBasicMaterial({color: 0x325412})
    const mars = new THREE.Mesh(marsGeometry, marsMaterial)

    mars.position.x = -2
    
    scene.add(mars)

    // const jupiterGeometry = new THREE.SphereGeometry(3.5, 32, 16);
    // const jupiterMaterial = new THREE.MeshBasicMaterial({
    //   color: 0xbcafb2,
    // });

    // const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);

    // jupiter.position.x = -10;
    // jupiter.position.y = -15;

    // const saturnGeometry = new THREE.SphereGeometry(2, 32, 16);
    // const saturnMaterial = new THREE.MeshBasicMaterial({
    //   color: 0xfae5bf,
    // });

    // const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);

    // saturn.position.x = 8;
    // saturn.position.y = 14;
    // saturn.position.z = 0;

    // const saturnRingGeometry = new THREE.RingGeometry(3.5, 2.5, 32);
    // const saturnRingMaterial = new THREE.MeshStandardMaterial({
    //   color: 0xab604a,
    //   side: THREE.DoubleSide,
    // });

    // const saturnRing = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);

    // saturnRing.position.x = 8;
    // saturnRing.position.y = 14;
    // saturnRing.position.z = 0;

    // scene.add(moon);

    // scene.add(jupiter);

    // scene.add(saturn);

    // scene.add(saturnRing);

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

    Array(450).fill().forEach(addStar);

    animate();
  }, []);

  return (
    <div id="header">
      <canvas id="background"></canvas>
    </div>
  );
};

export default Header;
