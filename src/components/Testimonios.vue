<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const visible = ref(3);
const width = ref(innerWidth);

if (width.value <= 1036) {
  visible.value = 1;
}

const reviews = ref([
  {
    name: "Vladimiro Montesinos",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small_2x/happy-young-cute-illustration-face-profile-png.png",
    review:
      "Mi opinion es Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 1,
  },
  {
    name: "Dina Boluarte",
    image:
      "https://img.freepik.com/fotos-premium/avatar-digital-artista-inteligencia-artificial-generativa_934475-9063.jpg",
    review:
      "Mi opinion es Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 2,
  },
  {
    name: "Alejo Montoya",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPffSOuBdWT5oeq1c-i6EBYDjFZVvjsQxeD_wRAO6tXLxNWOCc",
    review:
      "Mi opinion es Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 3,
  },
  {
    name: "Vladimiro Montesinos",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small_2x/happy-young-cute-illustration-face-profile-png.png",
    review:
      "Mi opinion es Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 1,
  },
  {
    name: "Dina Boluarte",
    image:
      "https://img.freepik.com/fotos-premium/avatar-digital-artista-inteligencia-artificial-generativa_934475-9063.jpg",
    review:
      "Mi opinion es Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 2,
  },
  {
    name: "Alejo Montoya",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPffSOuBdWT5oeq1c-i6EBYDjFZVvjsQxeD_wRAO6tXLxNWOCc",
    review:
      "Mi opinion es Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 3,
  },
  {
    name: "Vladimiro Montesinos",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small_2x/happy-young-cute-illustration-face-profile-png.png",
    review:
      "Mi opinion es Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 1,
  },
  {
    name: "Dina Boluarte",
    image:
      "https://img.freepik.com/fotos-premium/avatar-digital-artista-inteligencia-artificial-generativa_934475-9063.jpg",
    review:
      "Mi opinion es Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 2,
  },
  {
    name: "Alejo Montoya",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPffSOuBdWT5oeq1c-i6EBYDjFZVvjsQxeD_wRAO6tXLxNWOCc",
    review:
      "Mi opinion es Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 3,
  },
]);
const windowWidth = ref();
const updateWidth = () => {
  windowWidth.value = window.innerWidth;
  console.log(windowWidth.value);
  if (windowWidth.value <= 1036) {
    visible.value = 1;
  } else {
    visible.value = 3;
  }
};

// Registrar el evento `resize` al montar el componente y eliminarlo al desmontar
onMounted(() => {
  window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});
</script>
<template>
  <div class="flex flex-col justify-center items-center">
    <!-- <div
      class="h-16 w-80 m-2 justify-center items-center text-[#05191d] text-[20px] font-[900] grid rounded-lg bg-[#ffed89]"
    >
      Testimonios
    </div> -->
    <div>
      <div class="mt-6">
        <Carousel
          pt:contentcontainer:class="lg:ml-[60px] lg:mr-[60px] max-w-[75rem] sm:w-[350px] md:w-[500px]"
          :value="reviews"
          :numVisible="visible"
          :numScroll="1"
          class="custom-carousel"
          autoplayInterval="3000"
          circular
        >
          <template #item="{ data }">
            <div class="card items-center grid h-[420px] m-5 sm:m-0">
              <div class="image-container mt-5 flex justify-center">
                <img :src="data.image" alt="Profile Picture" />
              </div>
              <h3 class="font-bold">{{ data.name }}</h3>
              <p>{{ data.review }}</p>
              <div class="stars">
                <Rating disabled v-model="data.rating" />
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<style>
.p-button-text.p-carousel-next-button path {
  /* color: transparent !important; */
  color: #02948f !important;
}
.p-button-text.p-carousel-prev-button path {
  color: #02948f !important;
  /* color: transparent !important; */
}
.p-carousel-indicator-list {
  display: none !important;
}

.p-carousel-item.p-carousel-item-active.p-carousel-item-start .card {
  margin-top: 40px !important;
  height: 380px !important;
}
.p-carousel-item.p-carousel-item-active.p-carousel-item-end .card {
  margin-top: 40px !important;
  height: 380px !important;
}

@media (max-width: 767px) {
  .p-carousel-item.p-carousel-item-active.p-carousel-item-start .card {
    margin-top: 0px !important;
    height: 420px !important;
  }
  .p-carousel-item.p-carousel-item-active.p-carousel-item-end .card {
    margin-top: 0px !important;
    height: 420px !important;
  }
}
svg {
  width: 30px !important;
  height: 50px !important;
}

.p-disabled {
  opacity: inherit !important;
}

.p-rating-on-icon path {
  background-color: #02948f;
  font-size: 20px;
  color: #fbc02d !important;
  opacity: inherit !important;
}
.p-rating-off-icon path {
  background-color: #b7b4b6 !important;
  font-size: 20px;
  color: #b7b4b6 !important;
  background: #b7b4b6;
}

.custom-carousel .card {
  text-align: center;
  padding: 1rem;
  border: 3px solid #02948f;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: transparent;
}

.custom-carousel .image-container {
  margin-bottom: 1rem;
}

.custom-carousel img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}

.custom-carousel .stars {
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
}

.custom-carousel .pi {
  font-size: 1.5rem;
  margin: 0 0.2rem;
  color: #ccc;
}

.custom-carousel .pi.filled {
  color: #fbc02d;
}
</style>
