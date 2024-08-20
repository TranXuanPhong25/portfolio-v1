<template>
   <section class="w-full h-screen flex justify-center items-center relative overflow-hidden" id="skills">
      <SkillMarquee class="overflow-hidden whitespace-nowrap w-full box-border  p-3 absolute top-[-3%] opacity-30" />
      <SkillMarquee class="overflow-hidden whitespace-nowrap w-full box-border  p-3 absolute top-[12%] opacity-30" />
      <SkillMarquee class="overflow-hidden whitespace-nowrap w-full box-border  p-3 absolute top-[27%] opacity-30" />
      <SkillMarquee class="overflow-hidden whitespace-nowrap w-full box-border  p-3 absolute top-[42%] opacity-30" />
      <SkillMarquee class="overflow-hidden whitespace-nowrap w-full box-border  p-3 absolute top-[57%] opacity-30" />
      <SkillMarquee class="overflow-hidden whitespace-nowrap w-full box-border  p-3 absolute top-[72%] opacity-30" />
      <!-- <SkillMarquee class="overflow-hidden whitespace-nowrap w-full box-border  p-3 absolute top-[85%]" /> -->
      <SkillSphere />
   </section>
</template>
<script setup lang="ts">
import SkillMarquee from './skill/SkillMarquee.vue';
import SkillSphere from './skill/SkillSphere.vue';
</script>
