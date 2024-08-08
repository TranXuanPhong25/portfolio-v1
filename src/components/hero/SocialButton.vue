<script setup lang="ts">
defineProps({
   color: {
      type: String,
      default: "transparent"
   }
})

</script>

<template>
   <button class="Btn">
      <span class="svgContainer ">
         <slot>empty</slot>
      </span>
      <span class="BG" :class="color"></span>
   </button>
</template>