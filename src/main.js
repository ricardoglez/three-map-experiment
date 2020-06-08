import * as THREE from 'three';
import { getJSONData } from './utilities/utils';

const scene = new THREE.Scene;
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer(); 
const geometry = new THREE.BoxGeometry();

var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );

scene.add(cube);

camera.position.z = 5;
renderer.setSize( window.innerWidth, window.innerHeight );

const animate = () => {
  console.log('Animate...3');
  requestAnimationFrame( animate );
  cube.rotation.y += 0.02;
  cube.rotation.x += 0.01;
  renderer.render( scene, camera );
};  

getJSONData().then( data => {
  console.log('DATA:');
  console.log(data);
  animate();
}).catch(error => console.error(error));

document.body.appendChild(renderer.domElement);

