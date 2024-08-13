<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GetCVButton from './hero/GetCVButton.vue';
import Typed from 'typed.js';
import WaveBackground from './hero/WaveBackground.vue';
import SocialBar from '@/components/hero/SocialBar.vue';

import anime from 'animejs/lib/anime.es.js';

gsap.registerPlugin(ScrollTrigger);

const main = ref();
let ctx: any;
let typed: Typed = null;
onMounted(() => {
   // Generate random circles as background
   typed = new Typed('#typed', {
      strings: [" Phong ^1000", " a Developer", " a Student"],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      smartBackspace: true,
      // backDelay: 1000,
      startDelay: 1000,
      showCursor: true,
      cursorChar: '|',
   });
   // const circles = document.querySelector('.hero-bg');
   // const numCircles = 40;
   // for (let i = 0; i < numCircles; i++) {
   //    const circle = document.createElement('div');
   //    circle.classList.add('circle');
   //    circle.style.animationDelay = `${Math.random() * 2 / 3}s`;
   //    circle.style.left = `${Math.random() * 100}%`;
   //    circle.style.bottom = `${Math.random() * 400 - 300}%`;
   //    circle.style.transform = `scale(${Math.random() + 0.1})`;
   //    circles.appendChild(circle);
   // }
   anime({
      targets: '.circle',
      translateX: () => anime.random(-50, 50) + 'vw',
      translateY: () => anime.random(-50, 50) + 'vh',
      scale: () => anime.random(0.5, 1.5),
      easing: 'easeInOutQuad',
      duration: 6000,
      loop: true,
      direction: 'alternate',
   });
   ctx = gsap.context((self) => {
      const header = document.querySelector('header');
      gsap.to(header, {
         scrollTrigger: {
            trigger: main.value,
            start: 'top -25',
            end: '+=999999 ',
            scrub: true,

            onEnter: () => {
               header.classList.toggle('absolute')
               header.classList.toggle('mt-10')
               header.classList.toggle('fixed')
               header.classList.toggle('top-0')
               // header.classList.toggle('shadow-md')
               header.classList.toggle('bg-background/80')
               // header.classList.toggle('bg-slate-900/40')
               // header.classList.toggle('py-3')
               // header.classList.toggle('backdrop-blur-md')
            },
            onLeaveBack: () => {
               header.classList.toggle('absolute')
               header.classList.toggle('mt-10')
               header.classList.toggle('fixed')
               header.classList.toggle('top-0')
               // header.classList.toggle('shadow-md')
               header.classList.toggle('bg-background/80')
               // header.classList.toggle('bg-slate-900/40')
               // header.classList.toggle('py-3')
               // header.classList.toggle('backdrop-blur-md')

            }
         },
      });
   }, main.value); // <- Scope!


});

onUnmounted(() => {
   ctx.revert(); // <- Easy Cleanup!
   typed.destroy();
});
</script>
<template>
   <section class="w-full h-screen flex items-center justify-center hero-bg relative" ref="main">


      <SocialBar />

      <img src="/version-control-concept-illustration.png" width="860px"
         class="z-10 -m-12 select-none pointer-events-none "
         alt="https://www.freepik.com/free-vector/male-programmer-working-computer-office-wall-with-hanging-reminder-stickers-developer-creating-new-software-interface-coding-programming-system-administrator-designer-character_25273349.htm#fromView=search&page=1&position=21&uuid=3e1c36d6-1a12-4393-a1b3-a90a3f2b353b">
      <a class="absolute bottom-0" href="https://storyset.com/work">Work illustrations by Storyset</a>

      <div class=" ml-20  w-[590px] z-10 relative  ">
         <h1 class="text-3xl font-bold flex items-center ">
            <span class="w-full h-1 bg-second rounded-md "></span>
            <p class="text-main   mx-2">HELLO</p>
            <span class="w-full h-1  bg-second rounded-md "></span>
         </h1>

         <h1 class="text-7xl text-white font-bold hammersmith-one-regular select-none flex items-center justify-center">
            <p class="ml-1"> I'm &nbsp;</p>
            <p id="typed"></p>
         </h1>

         <!-- <p class="text-xl -mt-2 mb-10 maven-pro flex">
         <p id="typed">

         </p>  
         </p> -->


         <GetCVButton buttonLink="#about" buttonText="Get My CV">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="size-6 animate-bounce">
               <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>

         </GetCVButton>
      </div>

      <!-- <DotLottieVue src="https://lottie.host/97788edd-76a3-4869-a48d-57e9a2e56d3b/khmkV8EbCn.json"
      style="width: 1000px; height: 1000px" loop autoplay direction="1" /> -->
      <WaveBackground class="absolute  -bottom-1/4" />

   </section>
</template>
<style>
.hero-bg {
   position: relative;
}

.circle {
   position: absolute;
   width: 50px;
   height: 50px;
   user-select: none;
   border-radius: 50%;
   background-color: rgba(255, 255, 255, 0.2);
   mix-blend-mode: screen;
   z-index: 10;

}
</style>