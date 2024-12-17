<script setup>
import { ref, onMounted } from "vue";
</script>
<template>
  <div class="flex flex-wrap justify-center w-full items-center z-10 mt-20 lg:h-[100vh] 2xl:h-[100vh]">
    <!-- Tarjeta de Información -->
    <div class="w-screen max-w-md 2xl:max-w-2xl justify-center sm:max-w-sm sm:z-20 md:z-20">
      <div class="rounded-lg text-center sm:max-w-sm justify-center">
        <div class="bg-white justify-center grid">
          <h1 class="text-4xl whitespace-nowrap sm:whitespace-normal flex  sm:break-normal justify-center sm:w-[280px] bg-white font-bold text-[#05191d]">
            Lic. IVAN PEPITO PEREZ
          </h1>
          <p
            class="mt-4 sm:hidden md:hidden text-gray-600 text-lg 2xl:text-[25px] bg-white leading-relaxed"
          >
            Abordo en su centro Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Duis porta, odio id aliquam dictum, nisi ante
            aliquam sem, nec pretium diam lorem et libero. In libero nulla,
            condimentum at mauris sed, molestie fringilla nibh.
          </p>
          <p class="mt-0 font-semibold text-[#05191d] 2xl:text-[25px]">CMP: 165198</p>
        </div>
        <div class="sm:hidden md:hidden">
          <img
            src="@/assets/img/firma.png"
            alt="Firma"
            class="mx-auto 2xl:w-[150px] w-24 h-auto"
          />
        </div>
      </div>
    </div>

    <!-- Imagen -->

    <div class="relative flex justify-center sm:mt-[-40px] lg:w-[57%] 2xl:w-1/2">
      <div class="absolute -z-1 mt-[150px] ">
        <svg
          class="!w-[91%] !h-[420px] sm:!h-[400px] sm:mt-[-30px] lg:!w-full 2xl:!w-full -rotate-12"
          viewBox="0 0 500 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M250,100 C300,50 400,50 450,150 C500,250 400,350 300,320 C200,290 150,250 100,200 C50,150 100,50 250,100 Z"
            fill="#F7B600"
          />

          <circle
            cx="450"
            cy="80"
            r="15"
            stroke="#F7B600"
            stroke-width="2"
            fill="none"
          />
          <line
            x1="420"
            y1="90"
            x2="470"
            y2="70"
            stroke="#F7B600"
            stroke-width="2"
          />
          <circle
            cx="100"
            cy="350"
            r="30"
            stroke="#F7B600"
            stroke-width="2"
            fill="none"
          />
          <line
            x1="80"
            y1="370"
            x2="120"
            y2="330"
            stroke="#F7B600"
            stroke-width="2"
          />
        </svg>
      </div>
      <img
        src="@/assets/img/doctor.png"
        alt="Doctor"
        class="relative z-10 rounded-md lg:w-full 2xl:w-full object-cover"
      />
    </div>
  </div>
</template>
<style scoped>
.triangle {
  width: 200px; /* Ajusta el tamaño del ancho */
  height: 150px; /* Ajusta el tamaño del alto */
}
</style>
