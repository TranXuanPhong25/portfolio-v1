<script setup lang="ts">
import anime from 'animejs/lib/anime.es.js';
import { ref, onMounted } from 'vue';
import silhouette from '@/assets/undraw_personal_info_re_ur1n (1).svg'; // Adjust the path as necessary
import GetCVButton from '../hero/GetCVButton.vue';
import VanillaTilt from 'vanilla-tilt';
const tilt = ref<HTMLElement | null>(null);
onMounted(() => {

   if (tilt.value) {
      VanillaTilt.init(tilt.value, {
         max: 5,
         speed: 1000,
         glare: true,
         'max-glare': 0.05,

      });
   }
});
</script>
<template>

   <div
      class="mx-auto text-left relative p-6 md:p-8 lg:p-12 rounded-lg md:rounded-[25px] z-10 max-w-[880px] w-[95%] h-[700px] md:h-[600px] bg-background "
      ref="tilt" data-aos="zoom-in-up">
      <div name="Silhouette" data-aos="fade-up"
         class=" absolute z-10 top-[-13%] lg:-top-[90px] right-[-10px] lg:right-[-5%] w-[80%] md:w-[62%] h-[80%] md:h-[62%] select-none pointer-events-none hidden md:block">
         <img :src="silhouette" alt="">
      </div>
      <h1
         class=" font-bold md:font-semibold text-white md:text-main text-5xl md:text-2xl text-center md:text-left tracking-widest sml:tracking-[0.16em]  md:tracking-wide">
         ABOUT ME</h1>
      <h1 class="text-6xl lg:text-7xl font-bold text-last hidden md:block">PROFILE</h1>

      <div class="w-full h-1 bg-second/50 my-7  rounded-full"></div>
      <p class="text-xl my-7 text-justify">
         I'm a junior year Computer Science major at the University of Engineering and Technology in Vietnam, with a
         strong passion for full-stack development.
         I specialize in building beautiful and functional websites.
      </p>
      <div class="w-full h-1 bg-second/50 my-7 rounded-full"></div>
      <div class=" sml:text-lg flex  justify-center text-center">
         <div class=" md:grid md:grid-cols-11 w-full ">
            <!-- First Column -->
            <div class="space-y-4 col-span-5">
               <div class=" md:grid grid-cols-3 ">
                  <span class="col-span-1 font-semibold text-gray-600 ">Fullname:</span>
                  <span class="ml-3 md:ml-0 text-main col-span-2">Tran Xuan Phong</span>
               </div>
               <div class=" md:grid grid-cols-3">
                  <span class="col-span-1 font-semibold text-gray-600 ">Age:</span>
                  <span class="ml-3 md:ml-0 text-main col-span-2">19 Years</span>
               </div>
               <div class=" md:grid grid-cols-3">
                  <span class="col-span-1 font-semibold text-gray-600 ">Occupation:</span>
                  <span class="ml-3 md:ml-0 text-main col-span-2">Fullstacks Developer</span>
               </div>
            </div>

            <!-- Second Column -->
            <div class=" space-y-4 col-span-6 py-4 md:py-0">
               <div class="md:grid grid-cols-11">
                  <span class="font-semibold text-gray-600 col-span-3">Email:</span>
                  <span class="ml-3 md:ml-0 text-main col-span-8">tranxuanphong26525@gmail.com</span>
               </div>
               <div class="md:grid grid-cols-11">
                  <span class="font-semibold text-gray-600 col-span-3">Address:</span>
                  <span class="ml-3 md:ml-0 text-main col-span-8">Hanoi, Vietnam</span>
               </div>
               <div class="md:grid grid-cols-11">
                  <span class="font-semibold text-gray-600 col-span-3">Experience:</span>
                  <span class="ml-3 md:ml-0 text-main col-span-8">Under one year</span>
               </div>
            </div>
         </div>
      </div>

      <GetCVButton buttonLink="#about" buttonText="Download My CV">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
            class="size-6 animate-bounce">
            <path stroke-linecap="round" stroke-linejoin="round"
               d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
         </svg>
      </GetCVButton>
   </div>
</template>
