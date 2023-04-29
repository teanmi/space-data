import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import camera from "./camera";

function tweenCamera(targetPosition, duration = 2000) {
  let position = new THREE.Vector3().copy(camera.position);

  new TWEEN.Tween(position)
    .to(targetPosition, duration)
    .easing(TWEEN.Easing.Quadratic.Out)
    .onUpdate(function () {
      camera.position.copy(position);
    })
    .onComplete(function () {
      camera.position.copy(targetPosition);
    })
    .start();
}

export default tweenCamera;
