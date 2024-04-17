<template>
  <article class="prose dark:prose-invert max-w-none min-h-[1400px] mt-0">
    <section class="mt-0 h-screen md:h-[80vh] md:container md:mx-auto flex md:items-center justify-center bulgariamoderna px-4 xs:px-8">
      <NuxtLink class="no-underline mt-28"  :to="firstPost._path">
        <NuxtImg
                v-if="firstPost.image" 
                class="absolute left-0 top-0 bg-cover object-cover z-0 w-full h-[80vh] mt-0 brightness-50"
                :src="firstPost.image.src"
                sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw 2xl:100vw"
        />
        <p v-if="firstPost.category"  class="capitalize pl-0 text-customPrimary-500 bold font-semibold relative text-center mt-0 mb-0">{{ firstPost.category }}</p>
        <h3 class="text-white text-4xl md:text-6xl 2xl:text-8xl text-center md:my-auto md:mx-auto z-10 relative no-underline mt-0">{{firstPost.title}}</h3>
      </NuxtLink>
    </section>
    <section class="md:container md:mx-auto -mt-96 md:-mt-48 relative px-4 xs:px-8">
      <h2 class="text-white">{{$t("blog.title")}}</h2>
      <div class="flex max-w-16 h-8 items-center border-white border mb-4 cursor-pointer">
        <div class="hover:bg-white mt-0 hover:transition-all hover:text-black w-full swiper-button-prev-custom text-center text-white text-3xl flex justify-center"> <Icon icon="ic:twotone-keyboard-arrow-left"></Icon> </div>
        <div class="w-full hover:bg-white hover:text-black mt-0 hover:transition-all swiper-button-next-custom text-center text-white text-3xl justify-center"> <Icon icon="ic:twotone-keyboard-arrow-right"></Icon> </div>
      </div>
      <div class="flex">
        <Swiper
        class="relative"
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
          <SwiperSlide class="mr-5" v-for="post in sliderPosts" :key="post._id">
            <PostCard :insideSlider="true" :key="post._id" :post="post" />
          </SwiperSlide>
        </Swiper>
      </div>  
    </section>
    <section class="md:container md:mx-auto relative px-4 xs:px-8">
      <h2 class="text-black">{{$t("blog.other")}}</h2>
      <div class="grid grid-cols-3 gap-5 mb-8">
          <PostCard v-for="post in otherPosts" :key="post._id" :post="post"/>
      </div>
    </section>
  </article>
</template>

<script setup>
const { locale } = useI18n();
const { posts,totalPages, fetchPosts } = useFetchPosts( locale);

const firstPost = ref({});
const sliderPosts = ref([]);
const otherPosts = ref([]);

watch(posts, () => {
    if (posts.value.length > 0) {
        firstPost.value = posts.value[0];
        sliderPosts.value = posts.value.slice(1, 9); 
        otherPosts.value = posts.value.slice(9,15); 
    }
});

onMounted(() => {
  fetchPosts();
});

</script>

<style scoped>
.swiper-button-disabled {
  cursor: default;
}
</style>