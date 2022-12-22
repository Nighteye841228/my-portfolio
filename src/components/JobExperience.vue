<template>
  <div
    class="flex flex-col relative gap-y-3 font-game my-2 h-[3rem] overflow-hidden"
    :class="{
      'show-jobs': isPlay ? true : false,
    }"
  >
    <div class="z-[5]">
      <div class="flex flex-row items-center">
        <button class="mr-px pointer" @click="playExperience($event)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 text-red-700 fill-white"
            v-if="!isPlay"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 fill-white"
            v-if="isPlay"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <p v-if="isPlay" class="job-animation">{{ works[0].description }}</p>
        <p class="invisible">NONE</p>
      </div>
    </div>
    <div class="z-[5]" v-for="work in works.slice(1)">
      <div
        class="flex flex-row items-center invisible"
        :class="{ 'job-animation': work.isOpen ? true : false }"
      >
        <div class="mr-px" ref="wow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 fill-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <p>{{ work.description }}</p>
      </div>
    </div>
    <div class="z-[1] absolute w-1 ml-2 bg-black" :style="barStyle"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const barStyle = ref({
  height: "0px",
  top: "0px",
});

const works = ref([
  {
    id: 0,
    description: "媒體小農-coupon功能",
    skills: ["PHP", "JQuery"],
    isOpen: true,
  },
  {
    id: 1,
    description: "蛛思爬蟲-規則新增與清理",
    skills: ["JavaScript", "Node.js"],
    isOpen: false,
  },
  {
    id: 2,
    description: "林務局-前後端維護",
    skills: ["PHP", "JQuery", "JavaScript", "CSS"],
    isOpen: false,
  },
  {
    id: 3,
    description: "蛛思-後台建置",
    skills: ["Vue", "ElementUI", "PHP", "Laravel"],
    isOpen: false,
  },
  {
    id: 4,
    description: "國家電影中心-維護與表單功能",
    skills: ["JQuery", "PHP", "Laravel"],
    isOpen: false,
  },
]);

const isPlay = ref(false);

const playExperience = (e) => {
  console.log(e.offsetY);
  isPlay.value = true;
  barStyle.value.top = `${e.offsetY}px`;
  barGrow();
};

const wow = ref([]);
const barGrow = () => {
  let barLength = 1;
  let flag = 1;
  let countDownCloseTick = 6;
  let shownIcon = Array.from(wow.value.map((x) => x.offsetTop - 5));
  const barTick = setInterval(() => {
    barStyle.value.height = `${barLength}px`;
    if (shownIcon.includes(barLength)) {
      works.value[flag].isOpen = true;
      flag++;
    }
    if (flag === works.value.length) {
      countDownCloseTick--;
      if (!countDownCloseTick) {
        clearInterval(barTick);
      }
    }
    barLength++;
  }, 10);
};
</script>

<style scoped>
.job-animation {
  animation: 1s fadeIn;
  animation-fill-mode: forwards;
  visibility: hidden;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
}

.show-jobs {
  overflow: hidden;
  animation-name: boxShow;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}

@keyframes boxShow {
  from {
    height: 33px;
  }
  to {
    height: 100%;
  }
}
</style>
