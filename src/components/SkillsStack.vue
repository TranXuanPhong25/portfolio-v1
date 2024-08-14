<template>
   <section class="w-screen h-screen" id="skills">
      <div ref="container" class="icon-cloud"></div>
   </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Reference to the container div
const container = ref(null);

const initThreeJS = () => {
   const scene = new THREE.Scene();
   const camera = new THREE.PerspectiveCamera(75, container.value.clientWidth / container.value.clientHeight, 0.1, 1000);
   const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
   renderer.setSize(container.value.clientWidth, container.value.clientHeight);
   container.value.appendChild(renderer.domElement);

   const controls = new OrbitControls(camera, renderer.domElement);
   controls.enableDamping = true;
   controls.dampingFactor = 0.1;
   controls.rotateSpeed = 0.5;

   const radius = 3;
   const icons = [];

   const iconTextures = [
      "/vue-icon-512x512-ne4r9aa8.png",
      "/vue-icon-512x512-ne4r9aa8.png",
      "/vue-icon-512x512-ne4r9aa8.png",
      "/vue-icon-512x512-ne4r9aa8.png",

      "/vue-icon-512x512-ne4r9aa8.png",

      "/vue-icon-512x512-ne4r9aa8.png",

      "/vue-icon-512x512-ne4r9aa8.png",

      "/vue-icon-512x512-ne4r9aa8.png",

      "/vue-icon-512x512-ne4r9aa8.png",

      "/vue-icon-512x512-ne4r9aa8.png",

      "/vue-icon-512x512-ne4r9aa8.png",



      // add more icon paths here
   ];

   iconTextures.forEach((texturePath, index) => {
      const texture = new THREE.TextureLoader().load(texturePath);
      const material = new THREE.SpriteMaterial({ map: texture });
      const sprite = new THREE.Sprite(material);

      // Distribute sprites in 3D space using spherical coordinates
      const theta = Math.acos(2 * Math.random() - 1);  // Angle in Z
      const phi = Math.random() * 2 * Math.PI;        // Angle in X-Y plane

      sprite.position.set(
         radius * Math.sin(theta) * Math.cos(phi),
         radius * Math.sin(theta) * Math.sin(phi),
         radius * Math.cos(theta)
      );

      sprite.scale.set(0.5, 0.5, 0.5); // Initial scale

      sprite.userData = { originalScale: sprite.scale.clone() };

      // Hover effect
      sprite.onBeforeRender = () => {
         const distance = sprite.position.distanceTo(camera.position);
         sprite.scale.setScalar(1 / distance); // Size adjusts based on distance from the camera
      };

      // Store the sprite and add it to the scene
      icons.push(sprite);
      scene.add(sprite);
   });

   camera.position.z = 6;

   // Mouse movement effect
   let mouseX = 0, mouseY = 0;
   document.addEventListener('mousemove', (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
   });

   const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the entire group of icons based on mouse movement
      scene.rotation.x += (mouseY * 0.05 - scene.rotation.x) * 0.1;
      scene.rotation.y += (mouseX * 0.05 - scene.rotation.y) * 0.1;

      controls.update();
      renderer.render(scene, camera);
   };

   animate();
};

onMounted(() => {
   initThreeJS();
});
</script>

<style scoped>
.icon-cloud {
   width: 100%;
   height: 100%;
   position: relative;
}
</style>