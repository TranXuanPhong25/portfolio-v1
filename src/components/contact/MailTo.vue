<template>

   <span class="wrapper absolute top-0 right-1/2 translate-x-1/2 ">
      <span class=" span-text-1">
         <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tranxuanphong26525@gmail.com" target="_blank">
            Mail
         </a>
      </span>
      <span class=" span-text-2"> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tranxuanphong26525@gmail.com"
            target="_blank">
            me
         </a></span>
      <span class=" span-text-3"> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tranxuanphong26525@gmail.com"
            target="_blank">
            now
         </a></span>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tranxuanphong26525@gmail.com" target="_blank"
         class="flex justify-center items-center bg-sescond  absolute top-1/2 p-5 z-30">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-12">
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path
               d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
         </svg>

      </a>
   </span>


</template>
<style scoped>
.wrapper {
   height: 100vh;
   /* width: 50vw; */
   width: 100vw;
   overflow: hidden;
   /* padding: 100px;    */
   text-align: center;
   display: flex;
   justify-content: center;
   z-index: 10;
}


.wrapper span {

   -webkit-text-stroke-width: 1.25px;
   -webkit-text-stroke-color: #000;
   font-size: 100px;
   text-shadow: 0 0px #f3c623, 0 0px #f2aaaa;
   transform: translate(0, 55vh) rotate(4deg);
   display: inline-block;
   font-family: "Titan One", cursive;
   color: #fff;
   margin: 0 10px;

}

.span-text-1 {
   animation: jump 2.6s ease-in-out infinite;

   animation-delay: 0.15s;
}

.span-text-2 {
   animation: jump 2.6s ease-in-out infinite;

   animation-delay: 0.3s;
}

.span-text-3 {
   animation: jump 2.6s ease-in-out infinite;

   animation-delay: 0.45s;
}

@keyframes jump {
   33% {
      text-shadow: 0 60px #f37121, 0 150px #f2aaaa;
      z-index: 10;
   }

   50% {
      transform: translate(0, -15vh) rotate(-4deg);
      text-shadow: 0 0px #8fc0a9, 0 0px #84a9ac;
      z-index: 10;
   }

   66.67% {
      text-shadow: 0 -60px #d54062, 0 -150px #8fc0a9;
      z-index: 10;
   }
}



@media screen and (max-height: 200px) {
   .wrapper {
      transform: scale(0.3, 0.3);
   }
}

@media screen and (max-width: 576px) {
   .wrapper {
      span {
         font-size: 60px;
      }
   }
}
</style>