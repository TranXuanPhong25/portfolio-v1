<template>
   <section id="projects">
      <div class="flex w-full p-[10%] box-border h-screen">
         <div class="box">
            <img
               src="https://images.unsplash.com/photo-1722352565642-47e4942af628?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8">
            <span>CSS</span>
         </div>
         <div class="box">
            <img
               src="https://plus.unsplash.com/premium_photo-1723200799223-0095f042decb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8">
            <span>Image</span>
         </div>
         <div class="box">
            <img
               src="https://plus.unsplash.com/premium_photo-1723200799223-0095f042decb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8">
            <span>Hover</span>
         </div>
         <div class="box">
            <img
               src="https://plus.unsplash.com/premium_photo-1723200799223-0095f042decb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8">
            <span>Effect</span>
         </div>
      </div>
   </section>
</template>
<style scoped>
.box {
   flex: 1;
   overflow: hidden;
   transition: .5s;
   margin: 0 2%;
   box-shadow: 0 20px 30px rgba(0, 0, 0, .1);
   line-height: 0;
}

.box>img {
   width: 200%;
   height: calc(100% - 10vh);
   object-fit: cover;
   transition: .5s;
}

.box>span {
   font-size: 3.8vh;
   display: block;
   text-align: center;
   height: 10vh;
   line-height: 2.6;
}

.box:hover {
   flex: 1 1 50%;
}

.box:hover>img {
   width: 100%;
   height: 100%;
}
</style>