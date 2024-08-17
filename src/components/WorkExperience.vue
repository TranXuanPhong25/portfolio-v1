<script setup lang="ts">
import AOS from 'aos';
import 'aos/dist/aos.css';

import VerticalTimeline from './workexp/VerticalTimeline.vue';
import VerticalTimelineItem from './workexp/VerticalTimelineItem.vue';
import VerticalTimelineContent from './workexp/VerticalTimelineContent.vue';
import { onMounted } from 'vue';
import anime from 'animejs/lib/anime.es.js';
onMounted(() => {
   anime({
      targets: '.vertical-timeline-marker',
      translateY: [-5, 5],
      easing: 'easeInOutQuad',
      duration: 1400,
      direction: 'alternate',
      delay: anime.stagger(700),
      loop: true,
   });
   AOS.init({
      duration: 1000,
   });
})

</script>
<template>
   <section id="works" class="py-20 bg-background h-screen">
      <div class="container mx-auto text-center">
         <h2 class="text-7xl font-semibold ">Work Experience</h2>
         <p class="mt-4 max-w-2xl mx-auto text-xl">A timeline of my work experience.</p>
      </div>
      <div class="py-16 mx-auto px-4">
         <VerticalTimeline>
            <VerticalTimelineItem align="left" aos="fade-up">
               <template #icon>
                  <svg name="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="black" class="size-8">
                     <path stroke-linecap="round" stroke-linejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
               </template>
               <VerticalTimelineContent>

                  <h3 class="font-bold text-lg">2025</h3>
                  <p>Junior Year Student</p>
               </VerticalTimelineContent>

            </VerticalTimelineItem>

            <VerticalTimelineItem align="right" aos="fade-up">
               <template #icon>
                  <svg name="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="black" class="size-8">
                     <path stroke-linecap="round" stroke-linejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
               </template>
               <VerticalTimelineContent>
                  <h3 class="font-bold text-lg">2024</h3>
                  <p>Sophomore Year Student</p>
               </VerticalTimelineContent>
            </VerticalTimelineItem>

            <VerticalTimelineItem align="left" aos="fade-up">
               <template #icon>
                  <svg name="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="black" class="size-8">
                     <path stroke-linecap="round" stroke-linejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
               </template>
               <VerticalTimelineContent>
                  <h3 class="font-bold text-lg">2023</h3>
                  <p>Fresher Year Student</p>
               </VerticalTimelineContent>
            </VerticalTimelineItem>
         </VerticalTimeline>
      </div>
   </section>
</template>