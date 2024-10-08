<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { NavButton } from '@/types';
import NavigatorButton from './header/NavigatorButton.vue'
import CursorEffect from './CursorEffect.vue';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import anime from 'animejs';

gsap.registerPlugin(ScrollTrigger);

const TRIGGER_HAMBURGER_SCREENSIZE = 1024
const BUTTON_ICON_PATHS = [
   "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
   "M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z",
   "M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3",
   "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z",
   "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
   "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
];

const CLOSE_ICON_PATH = "M6 18L18 6M6 6l12 12"
const HAMBURGER_ICON_PATH = "M4 6h16M4 12h16m-7 6h7"

const menuOpen = ref<boolean>(false);
const menuIcon = ref<SVGSVGElement | null>(null);
const navBar = ref<HTMLElement | null>(null);
const allowToggle = ref<boolean>(true)
const screenSize = ref<number>(window.innerWidth)

const BUTTONS: NavButton | any = ref([
   { name: "Home", path: "#", active: false },
   { name: "About", path: "#about", active: false },
   { name: "Skills", path: "#skills", active: false },
   { name: "Works", path: "#works", active: false },
   { name: "Projects", path: "#projects", active: false },
   { name: "Contact", path: "#contact", active: false },
])

const handleResizeScreen = () => {
   if (window.innerWidth > TRIGGER_HAMBURGER_SCREENSIZE) {
      navBar.value.classList.remove('hidden')
      navBar.value.classList.add('flex')
      navBar.value.childNodes.forEach((child: HTMLElement) => {
         child.style.transform = 'translateX(0px)'
         child.style.opacity = '1'
      })
      navBar.value.style.opacity = '1'
   } else {
      navBar.value.classList.add('hidden')
   }
   if (menuOpen.value) {
      menuOpen.value = false;
      animateIcon();
   }
   screenSize.value = window.innerWidth
}

const toggleMenu = () => {
   if (!allowToggle.value) return;
   menuOpen.value = !menuOpen.value;
   if (screenSize.value > 1024) return;
   animateIcon();
   animateNavBar();
}

const animateIcon = () => {
   if (menuOpen.value) {
      anime({
         targets: menuIcon.value.querySelectorAll('path'),
         d: [
            { value: CLOSE_ICON_PATH } // Close icon path
         ],
         easing: 'easeInOutQuad',
         duration: 300
      });
   } else {
      anime({
         targets: menuIcon.value.querySelectorAll('path'),
         d: [
            { value: HAMBURGER_ICON_PATH } // Hamburger icon path
         ],
         easing: 'easeInOutQuad',
         duration: 300
      });
   }
}

const animateNavBar = () => {
   if (menuOpen.value) {
      anime({
         targets: navBar.value,
         translateY: [-100, 0],
         opacity: [0, 1],
         easing: 'easeInOutQuad',
         duration: 300,
         begin: () => {
            allowToggle.value = false;
            navBar.value.classList.remove('hidden')
            navBar.value.classList.add('flex')
         }

      });
      anime({
         targets: navBar.value.children,
         translateX: [300, 0],
         opacity: [0, 1],
         easing: 'easeInOutQuad',
         duration: 400,
         delay: anime.stagger(100),
         complete() {
            allowToggle.value = true;
         }
      });
   } else {
      anime({
         targets: navBar.value.children,
         translateX: [0, 300],
         opacity: [1, 0],
         easing: 'easeInOutQuad',
         duration: 100,
         delay: anime.stagger(33),
         begin() {
            allowToggle.value = false;
         },
         complete: () => {
            allowToggle.value = true;
            navBar.value.classList.add('hidden')
            navBar.value.classList.remove('flex')
         }
      });
   }
}

const currrentPath: string = window.location.hash
if (currrentPath === "" || currrentPath === "#") {
   BUTTONS.value[0].active = true
}
BUTTONS.value.forEach((button: NavButton | any, index: number) => {
   if (button.path === currrentPath) {
      BUTTONS.value[index].active = true
   }
})

// click event
const handleActive = (index: number) => {
   //temporary handle menu
   allowToggle.value = true;
   toggleMenu();
   BUTTONS.value.forEach((button: NavButton | any, i: Number) => {
      if (i === index) {
         button.active = true
         window.location.hash = button.path
      } else {
         button.active = false
      }
   })
}

const changeActiveButton = () => {
   const currrentPath: string = window.location.hash

   BUTTONS.value.forEach((button: NavButton | any, index: number) => {
      if (button.path === currrentPath) {
         BUTTONS.value[index].active = true
      } else {
         BUTTONS.value[index].active = false
      }
   })
   if (currrentPath === "#" || currrentPath === "#home") {
      BUTTONS.value[0].active = true
   }
}


const header = ref<HTMLElement | null>(null)
onMounted(() => {
   window.addEventListener('hashchange', changeActiveButton)
   window.addEventListener('pseudohashchange', changeActiveButton)
   window.addEventListener('resize', handleResizeScreen)
   const showAnim = gsap.from(header.value, {
      top: "-150px",
      paused: true,
      duration: 0.3,
      backgroundColor: "rgb(34,40,49)"
   }).progress(1);
   ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
         if (menuOpen.value) return;
         self.direction === -1 ? showAnim.play() : showAnim.reverse()
      }
   });
})

</script>
<template>
   <header
      class="flex w-screen justify-center py-3 z-[1000] transition-colors duration-600 sticky top-0 left-0 lg:mt-10 h-[60px] lg:h-auto  bg-background/70 "
      ref="header">

      <nav ref="navBar"
         class="flex-col hidden lg:flex lg:flex-row absolute left-0 lg:relative top-0  items-center w-screen lg:w-auto h-screen lg:h-auto text-4xl lg:text-base lg:bg-transparent">

         <div class=" bg-second lg:bg-transparent h-full w-screen lg:h-0 lg:w-0"></div>

         <NavigatorButton class=" bg-second lg:bg-transparent" v-for="(button, index) in BUTTONS" :key="index" @click="(e) => {
            e.preventDefault();
            handleActive(index);
         }" v-bind="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="size-10 lg:size-6">
               <path stroke-linecap="round" stroke-linejoin="round" :d="BUTTON_ICON_PATHS[index]" />
            </svg>
         </NavigatorButton>

         <div class=" bg-second lg:bg-transparent h-full w-screen lg:h-0 lg:w-0"></div>

         <CursorEffect />
      </nav>
      <!-- hamburger -->
      <button @click="toggleMenu" class="z-[100] absolute top-1/2 -translate-y-1/2 right-[4vw] lg:hidden"
         aria-label="menu">
         <svg ref="menuIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
            stroke="#4ECCA3" class="size-10 transition-transform duration-300">
            <path stroke-linecap="round" stroke-linejoin="round" :d="HAMBURGER_ICON_PATH" />
         </svg>
      </button>
   </header>
</template>

<style></style>