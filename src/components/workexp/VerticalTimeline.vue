<template>

   <div class="relative mx-auto py-10  w-full max-w-[960px] vertical-timeline">
      <slot></slot>
   </div>
</template>

<style scoped>
.vertical-timeline::before {
   content: '';
   position: absolute;
   top: 0;
   left: 50%;
   transform: translateX(-50%);
   height: 100%;
   width: 4px;
   @apply bg-second;
}
</style>