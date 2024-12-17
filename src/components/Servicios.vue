<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import terapia1 from "@/assets/img/terapia1.jpg";
import terapia2 from "@/assets/img/terapia2.jpg";
import terapia3 from "@/assets/img/terapia3.jpg";
import terapia4 from "@/assets/img/terapia4.jpg";
import terapia5 from "@/assets/img/terapia5.jpg";
import terapia6 from "@/assets/img/terapia6.jpg";
import terapia7 from "@/assets/img/terapia7.jpg";
import terapia8 from "@/assets/img/terapia8.jpg";
import terapia9 from "@/assets/img/terapia9.jpg";
let timer = null; // Dentro del setup

const images = ref([terapia1, terapia2, terapia3]);
const images2 = ref([terapia4, terapia5, terapia6]);
const images3 = ref([terapia7, terapia8, terapia9]);

const currentImageIndex = ref(0);
const currentImage2Index = ref(0);
const currentImage3Index = ref(0);

// Cambiar a la siguiente imagen con throttle
const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length;
  currentImage2Index.value =
    (currentImage2Index.value + 1) % images2.value.length;
  currentImage3Index.value =
    (currentImage3Index.value + 1) % images3.value.length;
};

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

onMounted(() => {
  timer = setInterval(nextImage, 3000); // Cambiar cada 3 segundos
  document.querySelectorAll(".flip-card").forEach((card) => {
    card.addEventListener("click", nextImage); // Cambiar imágenes al hacer clic/tocar
  });
});

onUnmounted(() => {
  clearInterval(timer); // Limpiar el temporizador al desmontar
  document.querySelectorAll(".flip-card").forEach((card) => {
    card.removeEventListener("click", nextImage);
  });
});
</script>

<template>
  <div
    class="grid grid-cols-1 2xl:-mt-[50px] lg:-mt-[95px] z-50 relative sm:grid-cols-2 md:grid-cols-2 max-lg:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 xl:grid-cols-4 gap-0 p-0"
  >
    <!-- Card 1 -->
    <div class="bg-[#02948f]">
      <div class="flip-card">
        <transition name="fade" mode="out-in">
          <img
            :key="images[currentImageIndex]"
            :src="images[currentImageIndex]"
            lazy="true"
            alt="Avatar"
            class="w-full h-full object-cover"
          />
        </transition>
        <!-- <img
     
          src="/src/assets/img/terapia1.jpg"
          alt="Avatar"
          class="w-full object-cover h-full"
        /> -->
      </div>
    </div>

    <!-- Card 2 -->
    <div class="bg-[#02948f]">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div
            class="flip-card-front flex flex-col items-center justify-center p-4 leading-relaxed"
          >
            <i class="fa-solid fa-hands-holding text-white text-6xl mb-4"></i>
            <p class="text-white text-center font-bold w-min">
              Rehabilitacion Neurologica
            </p>
          </div>
          <div class="flip-card-back flex items-center justify-center p-4">
            <p class="text-white text-center font-bold">
              Abordo en su centro Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Duis porta, odio id aliquam dictum, nisi ante
              aliquam sem, nec pretium diam lorem et libero.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="bg-[#02948f]">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div
            class="flip-card-front flex flex-col items-center justify-center p-4"
          >
            <i class="fa-solid fa-bone text-white text-6xl mb-4 -rotate-45"></i>
            <p class="text-white text-center font-bold w-min">
              Rehabilitacion Traumatologica
            </p>
          </div>
          <div class="flip-card-back flex items-center justify-center p-4">
            <p class="text-white text-center font-bold">
              Abordo en su centro Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Duis porta, odio id aliquam dictum, nisi ante
              aliquam sem, nec pretium diam lorem et libero.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Card 4 -->
    <div class="bg-[#02948f]">
      <div class="flip-card">
        <transition name="fade" mode="out-in">
          <img
            :key="images2[currentImage2Index]"
            :src="images2[currentImage2Index]"
            lazy="true"
            alt="Avatar"
            class="w-full h-full object-cover"
          />
        </transition>
        <!-- <img
          src="/src/assets/img/terapia2.jpg"
          alt="Avatar"
          class="w-full h-full object-cover"
        /> -->
      </div>
    </div>
    <!-- Card 5 -->

    <div class="bg-[#02948f]">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div
            class="flip-card-front flex flex-col items-center justify-center p-4"
          >
            <i
              class="fa-solid fa-person-walking-with-cane text-white text-6xl mb-4"
            ></i>
            <p class="text-white text-center font-bold w-min">
              Terapia Geriatrica
            </p>
          </div>
          <div class="flip-card-back flex items-center justify-center p-4">
            <p class="text-white text-center font-bold">
              Abordo en su centro Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Duis porta, odio id aliquam dictum, nisi ante
              aliquam sem, nec pretium diam lorem et libero.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Card 6 -->
    <div class="bg-[#02948f]">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div
            class="flip-card-front flex flex-col items-center justify-center p-4"
          >
            <i class="fa-solid fa-child text-white text-6xl mb-4"></i>
            <p class="text-white text-center font-bold w-min">
              Terapia Pediatrica
            </p>
          </div>
          <div class="flip-card-back flex items-center justify-center p-4">
            <p class="text-white text-center font-bold">
              Abordo en su centro Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Duis porta, odio id aliquam dictum, nisi ante
              aliquam sem, nec pretium diam lorem et libero.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Card 7 -->
    <div class="bg-[#02948f]">
      <div class="flip-card">
        <transition name="fade" mode="out-in">
          <img
            :key="images3[currentImage3Index]"
            :src="images3[currentImage3Index]"
            lazy="true"
            alt="Avatar"
            class="w-full h-full object-cover"
          />
        </transition>
        <!-- <img
          src="/src/assets/img/terapia3.jpg"
          alt="Avatar"
          class="w-full h-full object-cover"
        /> -->
      </div>
    </div>

    <!-- Card 8 -->
    <div class="bg-[#02948f]">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div
            class="flip-card-front flex flex-col items-center justify-center p-4"
          >
            <i class="fa-solid fa-heart text-white text-6xl mb-4"></i>
            <p class="text-white text-center font-bold w-min">
              Terapia Cardiorespiratoria
            </p>
          </div>
          <div class="flip-card-back flex items-center justify-center p-4">
            <p class="text-white text-center font-bold">
              Abordo en su centro Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Duis porta, odio id aliquam dictum, nisi ante
              aliquam sem, nec pretium diam lorem et libero.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.flip-card {
  background-color: transparent;
  width: 100%;
  aspect-ratio: 1 / 1;
  perspective: 1000px;
}

@media (max-width: 767px) {
  .flip-card {
    perspective: 1000px; /* Ya tiene background-color transparente por defecto */
  }
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  will-change: transform; /* Mejora el rendimiento al usar transformaciones */
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-touch .flip-card-inner {
  transform: rotateY(180deg); /* Cambiar el flip al tocar */
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #02948f;
  backface-visibility: hidden;
}

.flip-card-back {
  color: white;
  transform: rotateY(180deg);
}

.flip-card-front {
  color: black;
}

.p-card-body {
  border-style: none !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
