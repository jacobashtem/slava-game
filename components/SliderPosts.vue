<template>
    <section class="md:container md:mx-auto -mt-96 md:-mt-48 relative px-4 xs:px-8">
      <h2 class="text-white">{{$t("blog.title")}}</h2>
      <div class="flex max-w-16 h-8 items-center border-white border mb-4 cursor-pointer">
        <div
          class="hover:bg-white mt-0 hover:transition-all hover:text-black w-full swiper-button-prev-custom text-center text-white text-3xl flex justify-center"
        >
          <Icon icon="ic:twotone-keyboard-arrow-left"></Icon>
        </div>
        <div
          class="w-full hover:bg-white hover:text-black mt-0 hover:transition-all swiper-button-next-custom text-center text-white text-3xl justify-center"
        >
          <Icon icon="ic:twotone-keyboard-arrow-right"></Icon>
        </div>
      </div>
      <div class="flex">
        <Swiper
          class="relative w-full"
          :modules="[SwiperNavigation]"
          :navigation="{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }"
          :swiper-controller="true"
          :slides-per-view="1"
          :breakpoints="{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }"
        >
          <SwiperSlide v-for="post in sliderPosts" :key="post._id">
            <PostCard :insideSlider="true" :key="post._id" :post="post" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  </template>
  
  <script setup>  
  const props = defineProps({
    sliderPosts: {
      type: Array,
      required: true
    }
  });
  </script>
  