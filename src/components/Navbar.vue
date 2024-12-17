<script setup>

</script>

<template>
  <div class="top-0 left-0 z-50 bg-white">
    <div
      class="flex fixed bg-white w-full z-[99] top-0 justify-between items-center p-4"
    >
      <!-- Logo -->
      <div class="flex space-x-1 font-[900] sm:-ml-5">
        <img src="@/assets/img/logo.png" alt="Logo" class="w-12 sm:w-12 ml-10 h-auto" />
        <div class="-space-y-2">
          <h3 class="font-extrabold text-2xl text-[#475569] sm:text-[20px] text-stroke">ALBORADA</h3>
          <p class="text-[10px] font-bold  text-[#475569]">FISIOCENTER</p>
        </div>
      </div>
      <!-- Botón -->
      <div class="mt-[-10px]">
        <button
          class="flex items-center top-0 bg-[#00d756f6] text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-[#00b830] transition duration-300"
        >
          <i class="fa-brands fa-whatsapp mr-2 text-white"></i>
          Reserva <span class="text-white sm:hidden"> &nbsp;tu cita</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
