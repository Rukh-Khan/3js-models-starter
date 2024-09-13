import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const canvas = document.getElementById('canvas');
//1. Create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

//2. Add the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;

//3.Create cube and 3d flat rectangle
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({color: '#44b887', emissive: '#468585'});
const dodecahedrone = new THREE.Mesh(geometry, material);

const geometry2 = new THREE.BoxGeometry(3,0.1,3);
const material2 = new THREE.MeshStandardMaterial({color: '#b4b4b4', emissive: '#b4b4b4'});
const rectangle = new THREE.Mesh(geometry2, material2);

dodecahedrone.position.set(0,0,0);
rectangle.position.y = -1.5;

scene.add(dodecahedrone);
scene.add(rectangle);

//4. Add Lighting
const light = new THREE.SpotLight(0x9CDBA6, 10);
light.position.set(1,1,1);
scene.add(light);

//5. Set up the renderer
const renderer = new THREE.WebGLRenderer({canvas}); //canavas is passed here so that we can add some controls
renderer.setSize(window.innerWidth, window.innerHeight); //setting size to be rendered
renderer.setPixelRatio(window.devicePixelRatio); //to enable orbit controls on mobiles as well

//6. Add orbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.damplingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

//7. Animate the scene
function animate() {
  requestAnimationFrame(animate);
  dodecahedrone.rotation.x += 0.01;
  dodecahedrone.rotation.y += 0.01;

  rectangle.rotation.y += 0.01;

  controls.update();

  renderer.render(scene, camera);
};

//8. Handle Window resizing
window.addEventListener('resize', () => {

  //calculate camera aspect and update renderer params
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}); 

animate();  
