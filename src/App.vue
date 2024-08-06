<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import SocialBar from './components/SocialBar.vue';
</script>

<template>
   <HeaderComponent />
   <SocialBar />
   <RouterView />
   <!-- <div class=" min-h-[2 00rem]"></div> -->
</template>
