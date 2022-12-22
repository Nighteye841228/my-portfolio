<script setup>
import { ref } from "vue";
const props = defineProps({
  image: String,
});
</script>

<template>
  <div class="flex flex-col h-screen">
    <div class="flex flex-row justify-center bg-white h-[5vh]">
      <div class="text-xl font-serif"><slot>WOW</slot></div>
    </div>
    <div
      class="h-[95vh] bg-fixed bg-orange-400 bg-blend-multiply px-32 py-32"
      :style="{ backgroundImage: `url(${props.image})` }"
    >
      <div class="flex flex-col overflow-y-auto scrollbar-hide h-full">
        <div v-for="i in 100" class="text-white">WOW</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* For Webkit-based browsers (Chrome, Safari and Opera) */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
