<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import WorkExperience from '@/components/WorkExperience.vue';
import SkillsStack from '@/components/SkillsStack.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import { onMounted } from 'vue';
// gsap.to('body', { duration: 0.5, opacity: 1 });
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
   const sections: Array<any> = gsap.utils.toArray("section[id]");
   sections.forEach((section: any, index: number) => {
      ScrollTrigger.create({
         trigger: section,
         start: "top center",
         onEnter: () => {
            // i have no idea about this
            if (section.id === "home") {
               history.replaceState(null, null, `#`);
               return;
            }
            history.replaceState(null, null, `#${section.id}`);
            window.dispatchEvent(new Event('pseudohashchange'));
            window.dispatchEvent(new Event('hashchange'));
         },
         onLeaveBack: () => {
            if (section.id === "home") {
               history.replaceState(null, null, `#`);
               return;
            }
            history.replaceState(null, null, `#${sections[index - 1].id}`);
            window.dispatchEvent(new Event('pseudohashchange'));
            window.dispatchEvent(new Event('hashchange'));


         }
      });

   });

})
</script>

<template>
   <HeroSection />
   <AboutSection />
   <SkillsStack />
   <WorkExperience />
   <ProjectsSection />
   <ContactSection />
</template>
