<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterSection from './components/FooterSection.vue';
import { onMounted, onUnmounted, ref } from 'vue'
import 'aos/dist/aos.css';
<<<<<<< HEAD
import FluidContainer from './components/FluidContainer.vue';
=======
import FluidContainer from './components/skill/FluidContainer.vue';
>>>>>>> 43a31a7 (Feat/fluid trail toggle (#10))
import gsap from 'gsap'


const windowSize = ref<number>(window.innerWidth);
<<<<<<< HEAD
const dustTrailMode = ref(true)


=======

const handleResize = () => {
   windowSize.value = window.innerWidth;
};
>>>>>>> 43a31a7 (Feat/fluid trail toggle (#10))
function throttle(func, limit) {
   let lastFunc;
   let lastRan;
   return function (...args) {
      const context = this;
      if (!lastRan) {
         func.apply(context, args);
         lastRan = Date.now();
      } else {
         clearTimeout(lastFunc);
         lastFunc = setTimeout(function () {
            if ((Date.now() - lastRan) >= limit) {
               func.apply(context, args);
               lastRan = Date.now();
            }
         }, limit - (Date.now() - lastRan));
      }
   };
}
const handleMouseMove = (e: MouseEvent) => {

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
      stagger: 0.02,
      onComplete: () => {
         setTimeout(() => {
            trails.remove()
         }, 200)
      }
   });

};
<<<<<<< HEAD
const throttledMouseMove = throttle(handleMouseMove, 10); // Throttle to 10ms

onMounted(() => {
   //catch the customEvent from cursorEffect.vue
=======
const dustTrailMode = ref(true)
const throttledMouseMove = throttle(handleMouseMove, 10); // Throttle to 100ms

onMounted(() => {
>>>>>>> 43a31a7 (Feat/fluid trail toggle (#10))
   window.addEventListener('toggleCursorEffect', () => {
      dustTrailMode.value = !dustTrailMode.value;
      if (dustTrailMode.value) {
         document.body.addEventListener('mousemove', throttledMouseMove);
      } else {
         document.body.removeEventListener('mousemove', throttledMouseMove);
      }
   });
   window.addEventListener('resize', handleResize);
   document.body.addEventListener('mousemove', throttledMouseMove);

<<<<<<< HEAD
});
const handleResize = () => {
   windowSize.value = window.innerWidth;
};

onUnmounted(() => {
   window.removeEventListener('resize', handleResize);
   document.body.removeEventListener('mousemove', throttledMouseMove);
});
=======
});

onUnmounted(() => {
   window.removeEventListener('resize', handleResize);
   document.body.removeEventListener('mousemove', throttledMouseMove);
});
>>>>>>> 43a31a7 (Feat/fluid trail toggle (#10))
</script>




<template>
   <FluidContainer v-if="!dustTrailMode" />

   <div v-if="windowSize < 1000">
      My App currently doesn't support mobile view. Please view it on a desktop.
   </div>
   <template v-else>
      <main class="z-[100] relative">
         <HeaderComponent data-aos="fade-down" />
         <RouterView />

         <FooterSection />
      </main>
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
   z-index: 100;
}
</style>