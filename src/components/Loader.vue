<template>
  <div class="h-[100vh] flex justify-center items-center">
    <div class="flex space-x-1 font-[900] sm:-ml-5">
      <img src="@/assets/img/logo.png" alt="Logo" class="w-12 sm:w-12 ml-10" />
      <div class="-space-y-2">
        <h3
          class="font-extrabold text-2xl text-[#475569] sm:text-[20px] text-stroke"
        >
          ALBORADA
        </h3>
        <p class="text-[10px] font-bold text-[#475569]">FISIOCENTER</p>
      </div>
    </div>
    <div >
      <ProgressSpinner
        style="width: 60px; height: 60px"
        strokeWidth="10"
        fill="transparent"
        animationDuration=".5s"
        aria-label="Custom ProgressSpinner"
      />
    </div>
  </div>
</template>
