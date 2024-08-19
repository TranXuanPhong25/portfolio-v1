<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GetCVButton from './hero/GetCVButton.vue';
import Typed from 'typed.js';
import HeroIllustration from './hero/HeroBrainstormSVG.vue';
import WaveBackground from './hero/WaveBackground.vue';
import SocialBar from '@/components/hero/SocialBar.vue';


gsap.registerPlugin(ScrollTrigger);

const main = ref();
let typed: Typed = null;
onMounted(() => {
   typed = new Typed('#typed', {
      strings: [" Phong ^1500", " a Developer", " a Student"],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      smartBackspace: true,
      startDelay: 1000,
      showCursor: true,
      cursorChar: '|',
   });


});

onUnmounted(() => {
   typed.destroy();
});
</script>
<template>
   <section class="w-full h-[80vh] flex items-center justify-center hero-bg relative " id="home" ref="main">
      <div class=" absolute bottom-0  w-full">
         <WaveBackground />
      </div>
      <SocialBar data-aos="flip-right" />
      <!-- <img src="/version-control-concept-illustration.png" width="860px" class="-m-12 select-none pointer-events-none "
         alt="https://www.freepik.com/free-vector/male-programmer-working-computer-office-wall-with-hanging-reminder-stickers-developer-creating-new-software-interface-coding-programming-system-administrator-designer-character_25273349.htm#fromView=search&page=1&position=21&uuid=3e1c36d6-1a12-4393-a1b3-a90a3f2b353b">
         -->

      <!-- <HeroIllustration class="-m-12 select-none pointer-events-none " />  -->
      <HeroIllustration class="select-none pointer-events-none w[600px] h-[600px] -m-14 z-10" data-aos="flip-down" />
      <!-- <img src="/version-control-concept-illustration.png" width="860px"
         class="z-10 -m-12 select-none pointer-events-none "
         alt="https://www.freepik.com/free-vector/male-programmer-working-computer-office-wall-with-hanging-reminder-stickers-developer-creating-new-software-interface-coding-programming-system-administrator-designer-character_25273349.htm#fromView=search&page=1&position=21&uuid=3e1c36d6-1a12-4393-a1b3-a90a3f2b353b">
      <a class="absolute bottom-0" href="https://storyset.com/work">Work illustrations by Storyset</a> -->

      <div class=" ml-20  w-[590px] z-10 relative" data-aos="fade-up">
         <h1 class="text-3xl font-bold flex items-center ">
            <span class="w-full h-1 bg-second rounded-md "></span>
            <p class="text-main   mx-2">HELLO</p>
            <span class="w-full h-1  bg-second rounded-md "></span>
         </h1>

         <h1 class="text-7xl text-white font-bold hammersmith-one-regular select-none flex items-center justify-center">
            <p class="ml-1"> I'm &nbsp;</p>
            <p id="typed"></p>
         </h1>

         <GetCVButton buttonLink="#about" buttonText="Get My CV">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="size-6 animate-bounce">
               <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>

         </GetCVButton>
      </div>

      <!-- <DotLottieVue src="https://lottie.host/97788edd-76a3-4869-a48d-57e9a2e56d3b/khmkV8EbCn.json"
      style="width: 1000px; height: 1000px" loop autoplay direction="1" /> -->

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

svg#freepik_stories-version-control:not(.animated) .animable {
   opacity: 0;
}

svg#freepik_stories-version-control.animated #freepik--Window--inject-9 {
   animation: 3s Infinite linear floating;
   animation-delay: 0s;
}

svg#freepik_stories-version-control.animated #freepik--Graphics--inject-9 {
   animation: 1.5s Infinite linear floating;
   animation-delay: 0s;
}

svg#freepik_stories-version-control.animated #freepik--Character--inject-9 {
   animation: 1.5s Infinite linear wind;
   animation-delay: 0s;
}

@keyframes floating {
   0% {
      opacity: 1;
      transform: translateY(0px);
   }

   50% {
      transform: translateY(-10px);
   }

   100% {
      opacity: 1;
      transform: translateY(0px);
   }
}

@keyframes wind {
   0% {
      transform: rotate(0deg);
   }

   25% {
      transform: rotate(1deg);
   }

   75% {
      transform: rotate(-1deg);
   }
}
</style>