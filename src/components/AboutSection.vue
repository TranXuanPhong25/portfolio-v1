<script setup lang="ts">
import AOS from 'aos';
import 'aos/dist/aos.css';

import VerticalTimeline from './about/VerticalTimeline.vue';
import VerticalTimelineItem from './about/VerticalTimelineItem.vue';
import VerticalTimelineContent from './about/VerticalTimelineContent.vue';
import { onMounted } from 'vue';

onMounted(() => {
   AOS.init({
      duration: 1200,
   });
})

</script>


<template>
   <section id="about" class="py-20 bg-gray-800">
      <div class="container mx-auto text-center">
         <h2 class="text-4xl font-semibold">About Me</h2>
         <!-- <img src="path-to-your-profile-picture.jpg" alt="Profile Picture" class="mx-auto mt-8 rounded-full w-32 h-32"> -->
         <p class="mt-4 max-w-2xl mx-auto">Một đoạn văn ngắn giới thiệu về bạn, kinh nghiệm, và mục tiêu nghề nghiệp.
         </p>
         <div class="mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div class="bg-gray-700 p-4 rounded">HTML</div>
            <div class="bg-gray-700 p-4 rounded">CSS</div>
            <div class="bg-gray-700 p-4 rounded">JavaScript</div>
            <div class="bg-gray-700 p-4 rounded">Vue.js</div>
         </div>
      </div>
      <div class="py-16 mx-auto px-4">
         <VerticalTimeline>
            <VerticalTimelineItem align="left" aos="fade-up">
               <VerticalTimelineContent>
                  <h3 class="font-bold text-lg">2023</h3>
                  <p>Started working as a Senior Developer at XYZ Company.</p>
               </VerticalTimelineContent>
            </VerticalTimelineItem>

            <VerticalTimelineItem align="right" aos="fade-up">
               <VerticalTimelineContent>
                  <h3 class="font-bold text-lg">2021</h3>
                  <p>Completed Master's Degree in Computer Science.</p>
               </VerticalTimelineContent>
            </VerticalTimelineItem>

            <VerticalTimelineItem align="left" aos="fade-up">
               <VerticalTimelineContent>
                  <h3 class="font-bold text-lg">2019</h3>
                  <p>Graduated with a Bachelor's Degree in Computer Science.</p>
               </VerticalTimelineContent>
            </VerticalTimelineItem>

            <VerticalTimelineItem align="right" aos="fade-up">
               <VerticalTimelineContent>
                  <h3 class="font-bold text-lg">2021</h3>
                  <p>Completed Master's Degree in Computer Science.</p>
               </VerticalTimelineContent>
            </VerticalTimelineItem>

            <VerticalTimelineItem align="left" aos="fade-up">
               <VerticalTimelineContent>
                  <h3 class="font-bold text-lg">2019</h3>
                  <p>Graduated with a Bachelor's Degree in Computer Science.</p>
               </VerticalTimelineContent>
            </VerticalTimelineItem>

            <VerticalTimelineItem align="right" aos="fade-up">
               <VerticalTimelineContent>
                  <h3 class="font-bold text-lg">2021</h3>
                  <p>Completed Master's Degree in Computer Science.</p>
               </VerticalTimelineContent>
            </VerticalTimelineItem>
            <VerticalTimelineItem align="left" aos="fade-up">
               <VerticalTimelineContent>
                  <h3 class="font-bold text-lg">2019</h3>
                  <p>Graduated with a Bachelor's Degree in Computer Science.</p>
               </VerticalTimelineContent>
            </VerticalTimelineItem>

            <VerticalTimelineItem align="right" aos="fade-up">
               <VerticalTimelineContent>
                  <h3 class="font-bold text-lg">2021</h3>
                  <p>Completed Master's Degree in Computer Science.</p>
               </VerticalTimelineContent>
            </VerticalTimelineItem>
            <VerticalTimelineItem align="left" aos="fade-up">
               <VerticalTimelineContent>
                  <h3 class="font-bold text-lg">2019</h3>
                  <p>Graduated with a Bachelor's Degree in Computer Science.</p>
               </VerticalTimelineContent>
            </VerticalTimelineItem>

            <VerticalTimelineItem align="right" aos="fade-up">
               <VerticalTimelineContent>
                  <h3 class="font-bold text-lg">2021</h3>
                  <p>Completed Master's Degree in Computer Science.</p>
               </VerticalTimelineContent>
            </VerticalTimelineItem>
            <!-- Add more timeline items as needed -->
         </VerticalTimeline>
      </div>
   </section>
</template>
