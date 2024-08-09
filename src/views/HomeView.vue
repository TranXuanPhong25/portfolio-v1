<script setup lang="ts">
import SocialBar from '@/components/hero/SocialBar.vue';
import HeroSection from '@/components/HeroSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import SkillsStack from '@/components/SkillsStack.vue';
import gsap from 'gsap';
gsap.to('body', { duration: 0.5, opacity: 1 });
</script>

<template>
   <HeroSection />
   <SocialBar />
   <AboutSection />
   <SkillsStack />
</template>
