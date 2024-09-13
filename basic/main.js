/**
 * This code creates a scene with three objects: a torus knot, a box and a torus.
 * The objects are positioned in a line and are rotating.
 * The scene is lit with a directional light.
 * The renderer is set up to render the scene in the browser window.
 * The animate function is called to start the animation loop.
 */
import * as THREE from 'three';

//1. Create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

//2. Add the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;
//3. Create and add a cube object
const geometry = new THREE.TorusKnotGeometry();
const geometry2 = new THREE.BoxGeometry();
const geometry3 = new THREE.TorusGeometry();
const material = new THREE.MeshLambertMaterial({color: '#468585', emissive: '#468585'});
const material2 = new THREE.MeshLambertMaterial({color: '#44b887', emissive: '#468585'});
const material3 = new THREE.MeshLambertMaterial({color: '#44b887', emissive: 'pink'});

//3. Add three objects to the scene
const cube = new THREE.Mesh(geometry,material);
const box = new THREE.Mesh(geometry2, material2);
const dodge = new THREE.Mesh(geometry3, material3);

cube.position.set(-4,0,0);
box.position.set(0,0,0);
dodge.position.set(4,0,0);

scene.add(cube);
scene.add(box);
scene.add(dodge);

//4. Add Lighting
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1,1,1);
scene.add(light);
//5. Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); //setting size to be rendered
document.body.appendChild(renderer.domElement);//manipulation of dom - appending renderer to dom
//6. Animate the scene

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;

    dodge.rotation.x += 0.01;
    dodge.rotation.y += 0.01;
    renderer.render(scene, camera); 
}

animate();
