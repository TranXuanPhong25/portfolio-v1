<script setup lang="ts">
import AOS from 'aos';
import 'aos/dist/aos.css';

import VerticalTimeline from './workexp/VerticalTimeline.vue';
import VerticalTimelineItem from './workexp/VerticalTimelineItem.vue';
import VerticalTimelineContent from './workexp/VerticalTimelineContent.vue';
import { onMounted } from 'vue';

onMounted(() => {
   AOS.init({
      duration: 1200,
   });
})

</script>
<template>
   <section id="experience" class="py-20 bg-background">
      <div class="container mx-auto text-center">
         <h2 class="text-4xl font-semibold">Work Experience</h2>
         <p class="mt-4 max-w-2xl mx-auto">A timeline of my work experience.</p>
      </div>
      <div class="py-16 mx-auto px-4">
         <VerticalTimeline>
            <VerticalTimelineItem align="left" aos="fade-up">
               <VerticalTimelineContent>
                  <h3 class="font-bold text-lg">2025</h3>
                  <p>Junior Year Student</p>
               </VerticalTimelineContent>
            </VerticalTimelineItem>

            <VerticalTimelineItem align="right" aos="fade-up">
               <VerticalTimelineContent>
                  <h3 class="font-bold text-lg">2024</h3>
                  <p>Sophomore Year Student</p>
               </VerticalTimelineContent>
            </VerticalTimelineItem>

            <VerticalTimelineItem align="left" aos="fade-up">
               <VerticalTimelineContent>
                  <h3 class="font-bold text-lg">2023</h3>
                  <p>Fresher Year Student</p>
               </VerticalTimelineContent>
            </VerticalTimelineItem>
         </VerticalTimeline>
      </div>
   </section>
</template>