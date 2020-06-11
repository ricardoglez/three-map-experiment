import * as THREE from 'three';
import Vue from 'vue';
import { updateCubeColor, createCustomShape } from './utilities/utils'
var data = {
  height:0,
  width:0,
  color:"#ff0000",
  xRotation: 0.01,
  yRotation: 0.01,
}

var vm = new Vue({
  data: data,
  el: '#app',
  methods: {
    setHeight: function (newHeight) {
      this.height = newHeight
    },
    setWidth: function (newWidth) {
      this.width = newWidth
    },
    setColor:function (event) {
      console.log(event.target.value);
      this.color = event.target.value;
      updateCubeColor( this.color );
    },
    setXRotation: function(e){
      this.xRotation = e.target.value
    },
    setYRotation: function(e){
      this.yRotation = e.target.value
    },
    getXRotation: function(){
      return parseFloat(this.xRotation)
    },
    getYRotation: function(){
      return parseFloat(this.yRotation)
    }
  }
});

const scene = new THREE.Scene;
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer(); 
const geometry = new THREE.BoxGeometry();

var material = new THREE.MeshBasicMaterial( { color: vm.color } );
var cube = new THREE.Mesh( geometry, material );
var shape = createCustomShape();
scene.add(shape);

camera.position.z = 5;
renderer.setSize( window.innerWidth, window.innerHeight );


const animate = ( ) => {
  requestAnimationFrame( animate );
  shape.rotation.y += vm.yRotation;
  shape.rotation.x += vm.xRotation;
  renderer.render( scene, camera );
};  

animate( );

document.getElementById("graphics").appendChild(renderer.domElement);

