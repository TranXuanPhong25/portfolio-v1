<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps({
   name: String,
   path: String
})

</script>

<template>
   <RouterLink :to="path">
      <div class="buttons-navigator">
         <button class="btn-navigator"><span></span>
            <p data-text="start!" :data-title="name">
               <span>
                  <slot>{{ name }}</slot>
               </span>
            </p>
         </button>
      </div>
   </RouterLink>
</template>
