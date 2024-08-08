<template>
   <div class="relative mx-auto px-2 w-full max-w-[960px] vertical-timeline">
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
   background-color: #e9ecef;
}
</style>