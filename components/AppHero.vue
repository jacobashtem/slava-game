<template>
  <section
    class="flex items-end bg-cover bg-center h-screen pb-9 relative"
   
  >
      <NuxtImg
              class="absolute top-0 bg-cover object-cover z-0 w-full h-full"
              src="img/hero.webp"
              alt="doc.image.alt"
              sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw 2xl:100vw"
              />
    <div class="flex xs:mx-auto xs:px-8 z-10  mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2
          class="text-3xl sm:text-5xl text-left lg:text-6xl text-white font- uppercase bulgariamoderna"
        >
          {{ $t("hero.title") }}
        </h2>
        <!-- <p class="text-lg md:text-xl text-white mt-4"> -->
        <!-- Zanurz się w świat mitologii słowian!

Enigmatyczna, tajemnicza, praktycznie nie znana, choć niesamowicie intrygująca!
SLAVA! - To gra karciana, w której lepiej poznasz świat swoich przodków, za pośrednictwem unikalnych 180 kart!
Naszą misją jest z jednej strony dostarczenie Tobie niezwykle grywalnej karcianki w unikalnym lore. Z drugiej zaś - propagowanie wiedzy o słowiańszczyźnie.


Na stronie znajdziesz wiele materiałów dotyczących aktualnych prac nad SLAVA!. 
Jeśli nie chcesz przegapić premiery - zapisz się na listę oczekujących! -->
        <!-- </p> -->

        <NewsletterForm />
      </div>
    </div>
  </section>
</template>
