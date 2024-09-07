<template>
   <section class="w-full h-screen flex justify-center items-center relative overflow-hidden" id="skills">
      <SkillMarquee class="overflow-hidden whitespace-nowrap w-full box-border  p-3 absolute top-0 opacity-30" />
      <SkillMarquee
         class="overflow-hidden whitespace-nowrap w-full box-border  p-3 absolute top-[calc(20vh-20px)] opacity-30" />
      <SkillMarquee
         class="overflow-hidden whitespace-nowrap w-full box-border  p-3 absolute top-[calc(40vh-20px)] opacity-30" />
      <SkillMarquee
         class="overflow-hidden whitespace-nowrap w-full box-border  p-3 absolute top-[calc(60vh-20px)] opacity-30" />
      <SkillMarquee
         class="overflow-hidden whitespace-nowrap w-full box-border  p-3 absolute top-[calc(80vh-20px)] opacity-30" />
      <SkillMarquee
         class="overflow-hidden whitespace-nowrap w-full box-border  p-3 absolute top-[calc(100vh-20px)] opacity-30" />
      <!-- <SkillMarquee class="overflow-hidden whitespace-nowrap w-full box-border  p-3 absolute top-[85%]" /> -->
      <SkillSphere />
   </section>
</template>
<script setup lang="ts">
import SkillMarquee from './skill/SkillMarquee.vue';
import SkillSphere from './skill/SkillSphere.vue';
</script>
