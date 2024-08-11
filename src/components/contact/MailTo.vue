<template>
   <button>

      <span class="wrapper overflow-hidden ">
         <span class="span-text-1">Mail</span>
         <span class="span-text-2">me</span>
         <span class="span-text-3">now</span>
      </span>

   </button>
</template>
<style scoped>
button {
   font-family: inherit;

   display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
   -webkit-box-align: center;
   -ms-flex-align: center;
   justify-content: center;
   align-items: center;
   border: none;
   border-radius: 4px;
   overflow: hidden;
   -webkit-transition: all 0.1s ease;
   transition: all 0.2s;
   cursor: pointer;
}

button:active {
   -webkit-transform: scale(0.95);
   -ms-transform: scale(0.95);
   transform: scale(0.95);
}


.wrapper {
   padding-top: 20vh;
   padding-left: 5vh;
   height: 40vh;
   width: 110vw;
   text-align: center;
   /* background-color: #000; */
   display: flex;
   justify-content: center;


}

.wrapper span {

   -webkit-text-stroke-width: 1.25px;
   -webkit-text-stroke-color: #000;
   font-size: 100px;
   text-shadow: 0 0px #f3c623, 0 0px #f2aaaa;
   transform: translate(0, 100%) rotate(4deg);
   animation: jump 2s ease-in-out infinite;
   display: inline-block;
   font-family: "Titan One", cursive;
   color: #fff;
   margin: 0 10px;

}

.span-text-1 {
   animation-delay: 0.15s;
}

.span-text-2 {
   animation-delay: 0.3s;
}

.span-text-3 {
   animation-delay: 0.45s;
}

@keyframes jump {
   33% {
      text-shadow: 0 60px #f37121, 0 150px #f2aaaa;
   }

   50% {
      transform: translate(0, 0) rotate(-4deg);
      text-shadow: 0 0px #8fc0a9, 0 0px #84a9ac;
   }

   66.67% {
      text-shadow: 0 -60px #d54062, 0 -150px #8fc0a9;
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