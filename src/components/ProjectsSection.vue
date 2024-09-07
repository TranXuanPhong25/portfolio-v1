<script setup lang="ts">
import { ref, onMounted } from 'vue';
const projectsData = [
   {
      title: 'Game Development',
      description: 'My first game project as an assignment in first year of university',
      image: '/img/project/overheaven.png',
      repo: 'https://github.com/TranXuanPhong25/Over-Heaven',
      demo: 'https://www.youtube.com/watch?v=Di--rG62d9g',
   },
   {
      title: 'Web Development',
      description: 'My first Portfolio website',
      image: '/img/project/portfoliov1.png',
      repo: 'https://github.com/TranXuanPhong25/portfolio-v1',
      demo: 'https://portfoliov1-txphong25.vercel.app/',

   }

]
const project = ref<HTMLElement | null>(null);
onMounted(() => {
   project.value.addEventListener('mousemove', (e: MouseEvent) => {
      document.querySelectorAll(".project-card-wrapper").forEach((card: HTMLDivElement) => {
         //add glare effect
         const rect = card.getBoundingClientRect()
         const x = e.clientX - rect.left
         const y = e.clientY - rect.top
         card.style.setProperty("--mouse-x", `${x}px`);
         card.style.setProperty("--mouse-y", `${y}px`);
      });
   });
});
</script>

<template>
   <section class="bg-second/70 flex-col items-center justify-center p-1 z-30 " id="projects" ref="project">
      <div v-for="project in projectsData" :key="project.title"
         class="project-card-wrapper bg-background w-[calc(95vw-20px)] lg:w-[80vw] 2xl:w-[70vw] h-auto overflow-hidden  my-[100px] mx-auto py-1 rounded-lg shadow-md shadow-black"
         data-aos="flip-down">
         <div class="w-[99.5%] project-card bg-background mx-auto  rounded-lg  ">
            <div class="project-card-text w-full z-10 p-5 sm:p-10 " data-aos="fade-right">
               <h1 class="text-4xl sm:text-6xl md:text-8xl font-bold mb-3">{{ project.title }}</h1>
               <p class="text-xl">{{ project.description }}</p>
            </div>
            <div class="project-card-image w-full rounded-lg block group relative overflow-hidden"
               data-aos="zoom-in-down">
               <img :src="project.image" alt="project image"
                  class=" w-full group-hover:blur-[4px] group-hover:brightness-50 duration-300 ">

               <a :href="project.demo" target="_blank"
                  class="border-2 border-main  text-2xl text-white bg-primary rounded-md p-2 m-2 group-hover:top-[35%] top-[-50%] left-[50%] translate-x-[-50%] absolute  duration-300 hover:bg-main hover:text-white">Demo</a>
               <a :href="project.repo" target="_blank"
                  class="border-2 border-main  text-2xl text-white bg-primary rounded-md p-2 m-2 group-hover:top-[calc(35%+55px)] top-[-50%] left-[50%] translate-x-[-50%] absolute  duration-300 hover:bg-main hover:text-white">View
                  source</a>

            </div>
         </div>
      </div>
   </section>
</template>

<style scoped>
.project-card-wrapper {
   position: relative;

   z-index: 10;
}

.project-card {
   position: relative;
   z-index: 10;
}

.project-card-wrapper::before {
   content: "";
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), #4ECCA3, transparent);
   mix-blend-mode: color-dodge;
   pointer-events: none;
   z-index: 0;
}
</style>