<script setup>
import { ref, onMounted } from "vue";
import {
  Navbar,
  Introduccion,
  Servicios,
  Testimonios,
  Contacto,
  Loader,
} from "./components";

const testimoniosKey = ref(0);

// Función para recargar el componente Testimonios
const reloadTestimonios = () => {
  testimoniosKey.value++; // Cambia el valor de la clave
};

onMounted(() => {
  window.addEventListener("resize", reloadTestimonios);
});

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});
</script>

<template>
  <!-- Navbar-->
  <div v-if="isLoading">
    <Loader />
  </div>
  <div v-else class="scroll-container">
    <header class="bg-white">
      <div class="bg-white">
        <Navbar />
      </div>
      <div class="bg-white sm:max-w-full">
        <Introduccion />
        <Servicios />
        <Testimonios :key="testimoniosKey" />
        <Contacto />
      </div>
    </header>
  </div>
</template>

<style>
/* Estilos globales para el scroll */
::-webkit-scrollbar {
  width: 12px; /* Ancho del scrollbar */
}

::-webkit-scrollbar-thumb {
  background-color: #ababab; /* Color del thumb (barra desplazable) */
  border-radius: 6px; /* Esquinas redondeadas */
}

::-webkit-scrollbar-track {
  background-color: transparent; /* Color del track (pista) */
  border-radius: 6px;
}

/* Opcional: hover */
::-webkit-scrollbar-thumb:hover {
  background-color: #ababab; /* Color del thumb al pasar el mouse */
}
</style>
