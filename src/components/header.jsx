import React, { useEffect, useState } from "react";
import "./header.css";
import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Header = () => {
  useEffect(() => {
    /*

      FUNCTIONS

    */

    function animate() {
      let rotationAmount = 0.005;

      requestAnimationFrame(animate);

      saturn.rotation.x += rotationAmount;
      saturn.rotation.y += rotationAmount;
      saturn.rotation.z += rotationAmount;

      saturnRing.rotation.x += rotationAmount;
      saturnRing.rotation.y += rotationAmount;
      saturnRing.rotation.z += rotationAmount;

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
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    /*

      GEOMETRY SHAPES

    */

    const saturnGeometry = new THREE.SphereGeometry(2, 32, 16);
    const saturnMaterial = new THREE.MeshBasicMaterial({
      color: 0xfae5bf,
    });

    const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);

    saturn.position.x = 7.5;
    saturn.position.y = 7.5;
    saturn.position.z = 7.5;

    const saturnRingGeometry = new THREE.RingGeometry(3.5, 2.5, 32);
    const saturnRingMaterial = new THREE.MeshStandardMaterial({
      color: 0xab604a,
      side: THREE.DoubleSide,
    });

    const saturnRing = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);

    saturnRing.position.x = 7.5;
    saturnRing.position.y = 7.5;
    saturnRing.position.z = 7.5;

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

    scene.add(lightHelper);
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
    </div>
  );
};

export default Header;
