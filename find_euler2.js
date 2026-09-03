import * as THREE from './node_modules/three/build/three.module.js';
for (let y = 0; y < 360; y += 90) {
  for (let x = -90; x <= 90; x += 90) {
    for (let z = -90; z <= 90; z += 90) {
      const e = new THREE.Euler(
        THREE.MathUtils.degToRad(x),
        THREE.MathUtils.degToRad(y),
        THREE.MathUtils.degToRad(z),
        'YXZ'
      );
      const top = new THREE.Vector3(0, 1, 0).applyEuler(e);
      const front = new THREE.Vector3(0, 0, 1).applyEuler(e);
      if (Math.abs(top.x - 1) < 0.1 && Math.abs(front.y - 1) < 0.1) {
        console.log(`Found match: X=${x}, Y=${y}, Z=${z}`);
      }
    }
  }
}
