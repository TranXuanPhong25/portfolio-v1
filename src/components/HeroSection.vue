<script setup lang="ts">
// import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const main = ref();
let ctx: any;

onMounted(() => {
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
               header.classList.toggle('shadow-md')
               header.classList.toggle('bg-slate-900/40')
               header.classList.toggle('py-3')

            },
            onLeaveBack: () => {
               header.classList.toggle('absolute')
               header.classList.toggle('mt-10')
               header.classList.toggle('fixed')
               header.classList.toggle('top-0')
               header.classList.toggle('bg-background')
               header.classList.toggle('shadow-md')
               header.classList.toggle('bg-slate-900/40')
               header.classList.toggle('py-3')


            }
         },
      });
   }, main.value); // <- Scope!

});

onUnmounted(() => {
   ctx.revert(); // <- Easy Cleanup!
});
</script>
<template>
   <section class="h-screen flex items-center justify-center bg-background " ref="main">
      <div class="text-center">
         <h1 class="text-6xl font-bold">Hello, I'm [Tên Bạn]</h1>
         <p class="text-2xl mt-4">I create beautiful and functional websites/applications</p>
         <a href="#projects" class="mt-8 inline-block bg-white text-gray-900 py-2 px-4 rounded">View My Work</a>
      </div>
      <!-- <DotLottieVue src="https://lottie.host/97788edd-76a3-4869-a48d-57e9a2e56d3b/khmkV8EbCn.json"
      style="width: 1000px; height: 1000px" loop autoplay direction="1" /> -->
   </section>

</template>
