<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterSection from './components/FooterSection.vue';
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import 'aos/dist/aos.css';

// import { onMounted } from 'vue';

document.addEventListener('mousemove', (e) => {
   const trails = document.createElement('div');
   trails.classList.add('trail');
   document.body.appendChild(trails);
   gsap.fromTo(trails, {
      x: e.clientX + 10,
      y: e.clientY + 10,
      opacity: 0
   }, {
      duration: 0.8,
      x: e.clientX + Math.random() * 100 - 50,
      y: e.clientY + Math.random() * 200 + 50,
      opacity: 1,
      stagger: 0.02
      , onComplete: () => {
         setTimeout(() => {
            trails.remove()
         }, 200)
         // trails.remove()
      }
   });
});
const windowSize = ref<number>(window.innerWidth);
onMounted(() => {
   window.addEventListener('resize', () => {
      windowSize.value = window.innerWidth;
   });
});
document.addEventListener('hashchange', () => {
   console.log('hash changed');
});
</script>

<template>

   <div v-if="windowSize < 1000">
      My App currently doesn't support mobile view. Please view it on a desktop.
   </div>
   <template v-else>
      <HeaderComponent data-aos="fade-down" />
      <RouterView />

      <FooterSection />
   </template>
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