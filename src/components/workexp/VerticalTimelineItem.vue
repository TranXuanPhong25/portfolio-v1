<script setup lang="ts">
import { ref, onMounted } from 'vue';
import VanillaTilt from 'vanilla-tilt';
defineProps({
   align: {
      type: String,
      default: 'left',
   },
   aos: {
      type: String,
      default: ' ',
   },
});
const tilt = ref<HTMLElement | null>(null);
onMounted(() => {
   if (tilt.value) {
      VanillaTilt.init(tilt.value, {
         max: 25,
         speed: 400,
         glare: true,
         'max-glare': 0.5,
      });
   }
});
</script>
<template>
   <div class="vertical-timeline-item flex mb-12 relative"
      :class="{ 'vertical-timeline-item-left': align === 'left', 'vertical-timeline-item-right': align === 'right' }"
      :data-aos="aos">
      <div class="vertical-timeline-marker w-6 h-6 rounded-full bg-last absolute top-0">
         <slot name="icon"></slot>
      </div>
      <div class="vertical-timeline-content p-5 bg-second rounded-[8px] relative w-[45%] text-main" ref="tilt">
         <slot></slot>
      </div>
   </div>
</template>

<style scoped>
.vertical-timeline-item-left .vertical-timeline-marker {
   left: 50%;
   margin-left: -12px;
}

.vertical-timeline-item-right .vertical-timeline-marker {
   left: 50%;
   margin-left: -12px;
}

.vertical-timeline-item-left .vertical-timeline-content {
   left: 55%;
}

.vertical-timeline-item-right .vertical-timeline-content {
   left: 0;
}
</style>