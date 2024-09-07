<template>
   <div class="mx-auto py-10  w-full max-w-[960px] vertical-timeline -translate-x-[40%] sm:translate-x-0">
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