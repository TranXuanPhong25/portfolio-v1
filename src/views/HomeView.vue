<script setup lang="ts">
import SocialBar from '@/components/SocialBar.vue';
import HeroSection from '@/components/HeroSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import gsap from 'gsap';
gsap.to('body', { duration: 0.5, opacity: 1 });
</script>

<template>
   <HeroSection />
   <SocialBar />
   <AboutSection />
</template>
