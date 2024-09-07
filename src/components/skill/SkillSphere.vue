<template>
   <div ref="container" class="icon-cloud" data-aos="zoom-in-down"></div>

</template>
<style>
.icon-cloud {
   backdrop-filter: blur(10px) brightness(0.8);
   width: 800px;
   height: 800px;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   overflow: hidden;
   z-index: 30;
   border-radius: 50%;
   cursor: grab;
}

@media screen and (max-width: 768px) {
   .icon-cloud {
      border-radius: 20px;
      width: 100vw !important;
      height: 70vh !important;
      ;

   }
}

@media screen and (max-width: 900px) {
   .icon-cloud {
      width: 90vw;
      height: 90vw;
   }

}
</style>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Reference to the container div
const container = ref(null);
const iconTextures = [
   "/img/skill/icons8-c-144.png",
   "/img/skill/icons8-vue-js-144.png",
   "/img/skill/icons8-nodejs-144.png",
   "/img/skill/icons8-java-144.png",
   "/img/skill/icons8-git-144.png",
   "/img/skill/icons8-javascript-144.png",
   "/img/skill/icons8-html-96.png",
   "/img/skill/icons8-css-144.png",
   "/img/skill/icons8-tailwind-css-144.png",
   "/img/skill/icons8-typescript-144.png",
   "/img/skill/icons8-unity-144.png",
   "/img/skill/icons8-ubuntu-96.png",
   "/img/skill/icons8-c-sharp-logo-144.png",
   "/img/skill/icons8-postgresql-144.png",
   "/img/skill/icons8-react-native-144.png",
   "/img/skill/icons8-mongodb-144.png",
];
let camera, scene, renderer;
const initThreeJS = () => {
   scene = new THREE.Scene();
   camera = new THREE.PerspectiveCamera(45, container.value.clientWidth / container.value.clientHeight, 0.1, 1000);
   renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
   renderer.setSize(container.value.clientWidth, container.value.clientHeight);
   container.value.appendChild(renderer.domElement);

   // Create OrbitControls for user interaction
   const controls = new OrbitControls(camera, renderer.domElement);
   controls.enableDamping = true; // Smooth rotation
   controls.dampingFactor = 0.25; // Higher value for smoother rotation
   controls.minDistance = 5; // Limit how close you can zoom in
   controls.maxDistance = 7; // Limit how far you can zoom out
   controls.enablePan = false; // Disable panning to keep the focus on rotation
   controls.rotateSpeed = 0.3; // Rotation speed

   scene.fog = new THREE.Fog(0x222831, 5, 10); // Linear fog with near and far distances

   const radius = 2;

   // const geometry = new THREE.BoxGeometry();
   // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
   // const cube = new THREE.Mesh(geometry, material);
   // cube.position.set(0, 0, 5);
   // scene.add(cube);



   iconTextures.forEach((texturePath, index) => {
      const texture = new THREE.TextureLoader().load(texturePath, (texture) => {
         // Ensure the texture is loaded correctly
         texture.encoding = THREE.sRGBEncoding;
      });

      const material = new THREE.SpriteMaterial({
         map: texture,
         color: 0xffffff,

      });

      const sprite = new THREE.Sprite(material);

      const ICONS_PER_RING = 4;
      const NUM_OF_RING = 4;
      const phi = (index % ICONS_PER_RING / ICONS_PER_RING) * Math.PI * 2 + Math.PI / 4;
      const theta = (Math.floor(index / ICONS_PER_RING) + 1) / (NUM_OF_RING + 1) * Math.PI;

      sprite.position.set(
         radius * Math.sin(theta) * Math.cos(phi),
         radius * Math.sin(theta) * Math.sin(phi),
         radius * Math.cos(theta)
      );

      sprite.scale.set(0.7, 0.7, 0.7); // Initial scale

      sprite.userData = { originalScale: sprite.scale.clone() };

      // Add sprite to the scene
      scene.add(sprite);
   });


   camera.position.z = 6;

   // Mouse movement effect
   let mouseX = 0, mouseY = 0;

   container.value.addEventListener('mousemove', (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

   });


   const animate = () => {

      requestAnimationFrame(animate);

      // Rotate the entire group of icons based on mouse movement
      scene.rotation.x += (mouseY * 0.05 - scene.rotation.x) * 0.2;
      scene.rotation.y += (mouseX * 0.05 - scene.rotation.y) * 0.2;
      scene.rotation.z += 0.005;

      controls.update();
      renderer.render(scene, camera);
   };

   animate();

};
// Handle window resizing to keep the aspect ratio correct
const onWindowResize = () => {
   camera.aspect = container.value.clientWidth / container.value.clientHeight;
   camera.updateProjectionMatrix();
   renderer.setSize(container.value.clientWidth, container.value.clientHeight);
};

// Clean up the event listener when the component is unmounted
onBeforeUnmount(() => {
   window.removeEventListener('resize', onWindowResize);
});

onMounted(() => {
   container.value.addEventListener('mousedown', () => {
      container.value.style.cursor = 'grabbing';
   });
   container.value.addEventListener('mouseup', () => {
      container.value.style.cursor = 'grab';
   });
   initThreeJS();
});
</script>
