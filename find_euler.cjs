const THREE = require('./node_modules/three/build/three.js');

const m = new THREE.Matrix4();
// Target orientation:
// Top (+Y) faces Camera (+X) -> col 1 is (1,0,0)
// Front (+Z) faces Up (+Y) -> col 2 is (0,1,0)
// Right (+X) faces Right (-Z) -> col 0 is (0,0,-1)
m.set(
   0, 1, 0, 0,
   0, 0, 1, 0,
  -1, 0, 0, 0,
   0, 0, 0, 1
);

const e = new THREE.Euler().setFromRotationMatrix(m, 'YXZ');
console.log("Y:", e.y, e.y / Math.PI, "PI");
console.log("X:", e.x, e.x / Math.PI, "PI");
console.log("Z:", e.z, e.z / Math.PI, "PI");
