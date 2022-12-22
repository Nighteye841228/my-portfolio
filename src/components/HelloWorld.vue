<script setup>
import { ref } from "vue";
import GetRepos from "./GitRepos.vue";
import HeaderNavbar from "./HeaderNavbar.vue";
import JobExperience from "./JobExperience.vue";

const isHeaderFixed = ref(true);
const prevScrollTop = ref(0);
const hideHeader = (e) => {
  console.log(e.srcElement.scrollTop);
  if (e.srcElement.scrollTop < prevScrollTop) {
    isHeaderFixed.value = true;
    prevScrollTop.value = e.srcElement.scrollTop;
    return;
  }
  prevScrollTop.value = e.srcElement.scrollTop;
  if (e.srcElement.scrollTop > 100) {
    isHeaderFixed.value = false;
  } else {
    isHeaderFixed.value = true;
  }
};

const informs = ref([
  {
    id: 1,
    name: "test1",
    url: "ggg.com",
    description: "test 1",
  },
  {
    id: 2,
    name: "test2",
    url: "aaa.com",
    description: "test 2",
  },
  {
    id: 3,
    name: "test3",
    url: "xxx.com",
    description: "test 3",
  },
]);
</script>

<template>
  <div class="relative justify-start" @scroll="hideHeader($event)">
    <HeaderNavbar :isFixed="isHeaderFixed"></HeaderNavbar>
    <div class="relative sm:px-6 lg:px-16 xl:px-32 h-full">
      <div class="flex flex-col mt-8 bg-white">
        <div class="flex flex-row items-center gap-x-4 px-4">
          <div
            class="basis-20 lg:basis-28 xl:basis-32 lg:mr-8 flex flex-row justify-end"
          >
            <img
              class="rounded-full drop-shadow-md"
              src="../assets/photo.jpg"
              alt=""
            />
          </div>
          <div class="flex flex-col justify-start">
            <div
              class="flex flex-row col-start-4 col-span-8 typewriter items-center mb-2"
            >
              <p class="text-sm lg:text-xl font-game">李旭恩</p>
            </div>
            <div
              class="flex flex-row col-start-4 col-span-8 typewriter items-center mb-1"
            >
              <p class="text-xs lg:text-base font-game">
                台灣大學 <br class="sm:hidden" />資訊網路與多媒體研究所
                <!-- <span class="hidden lg:flex">資訊網路與多媒體研究所</span> -->
              </p>
            </div>
            <div
              class="flex flex-row col-start-4 col-span-8 typewriter items-center"
            >
              <p class="text-xs lg:text-base font-game">
                victor70412@gmail.com
              </p>
            </div>
            <div
              class="flex flex-row col-start-4 col-span-8 typewriter items-center"
            >
              <p class="text-xs lg:text-base font-game">
                github: nighteye841228
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col mt-8 text-xs lg:text-base leading-5 xl:leading-7 xl:mt-[70px]"
      >
        <div class="flex flex-row">
          <p
            class="font-game border-r-2 border-black pl-4 pr-1.5 sm:pr-2 lg:px-8 py-2"
          >
            學歷
          </p>
          <div class="flex flex-col items-start px-4 py-2">
            <p class="font-game">台灣大學資訊工程學系</p>
            <p class="font-game">台灣大學資訊網路與多媒體研究所</p>
          </div>
        </div>
        <div class="flex flex-row">
          <p
            class="font-game border-r-2 border-black pl-4 pr-1.5 sm:pr-2 lg:px-8 py-2"
          >
            工作
          </p>
          <div class="flex flex-col items-start px-4 py-2">
            <p class="font-game mb-1 sm:mb-0">
              2019 藍星球資訊股份有限公司<br class="sm:hidden" />實習生
            </p>
            <JobExperience></JobExperience>
            <p class="font-game">
              2022 台大數位人文研究中心<br
                class="sm:hidden"
              />研發工程師(替代役)
            </p>
          </div>
        </div>
        <div class="flex flex-row">
          <p
            class="font-game border-r-2 border-black pl-4 pr-1.5 sm:pr-2 lg:px-8 py-2 ease-in-out duration-1000"
          >
            技能
          </p>
          <div class="flex flex-col items-start px-4 py-2">
            <div class="font-game">前端 - Vue 3, Vite, JQuery, Tailwind</div>
            <div class="font-game">後端 - Laravel PHP Framework</div>
            <div class="font-game">資料庫 - MariaDB 10</div>
            <div class="font-game">伺服器 - Apache 2.4</div>
            <div class="font-game">協作 - GIT</div>
          </div>
        </div>
        <div class="flex flex-row">
          <p
            class="font-game border-r-2 border-black pl-4 pr-1.5 sm:pr-2 lg:px-8 py-2"
          >
            語言
          </p>
          <div class="flex flex-col items-start px-4 py-2">
            <p class="font-game">英文—TOEFL ITP 680</p>
            <p class="font-game">日文—普通聽讀</p>
          </div>
        </div>
        <!-- <div v-for="i in 100">wow</div> -->
      </div>
    </div>
    <!-- <section
      class="h-screen overflow-scroll scrollbar-hide flex justify-start items-center"
    >
      <div class="typewriter">
        <h1>The cat and the hat.</h1>
      </div>
    </section> -->
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.typewriter p {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */

  letter-spacing: 0.1em; /* Adjust as needed */
  animation: typing 2.5s steps(20, end), blink-caret 0.75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}
</style>
