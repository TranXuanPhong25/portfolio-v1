<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import gsap from 'gsap'
// import { onMounted } from 'vue';
const numTrails = 20;
const trailsArr = []

document.addEventListener('mousemove', (e) => {
   const trails = document.createElement('div');
   trails.classList.add('trail');
   document.body.appendChild(trails);
   trailsArr.push(trails)
   if (trailsArr.length > numTrails) {
      trailsArr[0].remove()
      trailsArr.shift()
   }
   gsap.fromTo(trails, {
      x: e.clientX + 10,
      y: e.clientY + 10,
      opacity: 0
   }, {
      duration: 0.8,
      x: e.clientX + Math.random() * 50,
      y: e.clientY + Math.random() * 200 + 100,
      opacity: 1,
      stagger: 0.01
   });
});


</script>

<template>

   <HeaderComponent />
   <RouterView />

   <!-- <div class=" min-h-[2 00rem]"></div> -->
</template>

<style>
.trail {
   opacity: 0;
   position: fixed;
   top: 0;
   left: 0;
   width: 4px;
   height: 4px;
   background-color: rgb(138, 235, 135);
   box-shadow: 0 0 20px 2px rgb(138, 235, 135);
   border-radius: 50%;
   pointer-events: none;
   z-index: 0;
}
</style>