<script setup lang="ts">
import { computed } from 'vue';

import { RouterLink } from 'vue-router'
const props = defineProps({
   name: String,
   path: String,
   active: Boolean
})
const handleActive = computed(() => {
   return props.active ? 'opacity-100' : 'opacity-50'
})
</script>

<template>
   <RouterLink :to="path">
      <div class="buttons-navigator duration-300 hover:opacity-100" :class="handleActive">
         <button class="btn-navigator  active:bg-emerald-400/30"><span></span>
            <p data-text="start!" :data-title="name">
               <span>
                  <slot>{{ name }}</slot>
               </span>
            </p>
         </button>
      </div>
   </RouterLink>
</template>
