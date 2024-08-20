<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterSection from './components/FooterSection.vue';
import { onMounted, ref } from 'vue'
import 'aos/dist/aos.css';
import FluidContainer from './components/skill/FluidContainer.vue';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { onMounted } from 'vue';

const windowSize = ref<number>(window.innerWidth);
window.addEventListener('resize', () => {
   windowSize.value = window.innerWidth;
});


</script>

<template>
   <FluidContainer />

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
