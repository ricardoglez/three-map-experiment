
import * as THREE from 'three';
const updateCubeColor = (color, cube) => {
  cube.material.color = new THREE.Color(color);
}


const updateCubeSize = ( cube, size ) =>{

} 


const createCustomShape = () => {
  var geom = new THREE.Geometry(); 
  var v1 = new THREE.Vector3(-10,10,0);
  var v2 = new THREE.Vector3(-10,-10,0);
  var v3 = new THREE.Vector3(10,-10,0);
  
  geom.vertices.push(v1);
  geom.vertices.push(v2);
  geom.vertices.push(v3);
  
  geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
  
  var shape = new THREE.Mesh( geom, new THREE.MeshNormalMaterial({ color: new THREE.Color("#ffffff")}));
  shape.position.z = -100;//move a bit back - size of 500 is a bit big
  shape.rotation.y = -Math.PI * .5;//triangle is pointing in depth, rotate it -90 degrees on Y
  return shape
};


export { updateCubeColor, updateCubeSize, createCustomShape };