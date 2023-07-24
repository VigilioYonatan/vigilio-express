<script setup lang="ts">
import { ref } from 'vue';
const num = ref(1)
</script>
<template>
    <div class="bg-black bg-opacity-40  w-[300px] mx-auto rounded-md">
        <div class="flex justify-center items-center gap-2 mt-6">
            <img alt="vite-logo" loading="lazy" src="vite.png" width="120" height="120"/>
            <img alt="vue-logo" loading="lazy" src="vue.png" width="90" height="90"/>
        </div>
              
        <div class="flex flex-col gap-4 my-8  py-2">
            <p class=" text-white font-bold text-center ">Counter</p>
            <p class="text-center text-white font-bold uppercase text-4xl ">{{ num }}</p>
            <div class="flex gap-3 justify-center ">
                <button type="button" @click="num++" class="bg-black text-white px-4 py-2 rounded-md bg-opacity-80">+</button>
                <button type="button" @click="num--" class="bg-black text-white px-5 py-2 rounded-md bg-opacity-80">-</button>
            </div>
        </div> 
    </div>
 
</template>
