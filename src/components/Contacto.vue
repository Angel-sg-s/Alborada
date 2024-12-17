<template>
  <div
    class="bg-[#00131f] text-white w-full flex sm:flex-col-reverse items-center justify-between mx-auto sm:p-6 mt-5 "
  >
    <!-- Info Section -->
    <div class="md:w-1/2 mt-5  ml-36 sm:ml-0">
      <!-- <h1 class="text-3xl space-y-1 font-bold text-white"><img src="@/assets/img/logoAlborada.png" class="mt-5 max-w-[350px] h-[80px] " alt=""></h1> -->
      <div class="flex space-x-2 font-[900] mb-2">
        <img src="@/assets/img/logo-dark.png" alt="Logo" class="w-10 ml-10 h-auto" />
        <div class="-space-y-2">
          <h2 class="font-extrabold text-2xl text-white  text-stroke-footer">ALBORADA</h2>
          <p class="text-[10px] font-bold  text-white">FISIOCENTER</p>
        </div>
      </div>
      <ul class="space-y-4">
        <li class="flex items-center space-x-4">
          <span class="text-lg">
            <i class="fa-solid fa-location-dot text-[#eaedf0]"></i>
          </span>
          <span>
            <p class="text-[#eaedf0] font-bold">Visitanos en:</p>
            <p class="text-[#eaedf0]">Av mi casa 555, Comas - Lima Perú</p>
          </span>
        </li>
        <li class="flex items-center space-x-4">
          <span class="text-lg">
            <i class="fa-solid fa-phone text-[#eaedf0]"></i>
          </span>
          <span>
            <p class="text-[#eaedf0] font-bold">Llamanos al:</p>
            <p class="text-[#eaedf0]">+51 999 999 998</p>
          </span>
        </li>
        <li class="flex items-center space-x-4">
          <span class="text-lg">
            <i class="fa-regular fa-clock text-[#eaedf0]"></i>
          </span>
          <span class="text-[#eaedf0]">
            <p class="text-[#eaedf0] font-bold">Horarios:</p>
            <p class="text-[#eaedf0]">Lunes - Sábado 8:00 a 20:00</p>
          </span>
        </li>
      </ul>

      <!-- Social Media Icons -->
      <div class="flex ml-20 mt-10 space-x-6 text-[40px] sm:text-[30px]">
        <a href="#" class="hover:text-blue-500">
          <i class="fa-brands fa-facebook text-[#eaedf0]"></i>
        </a>
        <!-- Facebook -->
        <a href="#" class="hover:text-pink-500">
          <i class="fa-brands fa-instagram text-[#eaedf0]"></i>
        </a>
        <!-- Instagram -->
        <a href="#" class="hover:text-gray-300">
          <i class="fa-brands fa-tiktok text-[#eaedf0]"></i>
        </a>
        <!-- TikTok -->
      </div>
    </div>

    <!-- Map Section -->
    <div class="md:w-1/2 w-1/2 sm:w-[100dvw] sm:h-80 sm:-m-6 sm:mb-4">
      <div class="w-full h-96  sm:h-80 bg-gray-700">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31608.3536492158!2d-77.05782061610235!3d-12.04500002554844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce58926f2ec1%3A0xb6dacc41bcdb8a88!2sComas%2C%20Lima%2015301%2C%20Per%C3%BA!5e0!3m2!1sen!2sus!4v1697056428297!5m2!1sen!2sus"
          class="w-full h-full border-none"
       
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="text-center text-sm bg-[#00131f]">
    <p class="p-8 text-[#eaedf0]">
        ● Alborada Fisiocenter, Lima Perú 2024. ●
    </p>
  </footer>
</template>
