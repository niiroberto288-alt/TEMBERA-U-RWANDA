<script setup>
import { current } from '../lang.js'
import easternHero from '../assets/images/akagera-savannah.jpg'
import safariPhoto from '../assets/images/akagera-savannah.jpg'
import rwandaPhoto from '../assets/images/visit-Rwanda.jpg'
</script>

<template>
  <main class="min-h-screen bg-slate-50 text-slate-900">
    <section class="relative overflow-hidden bg-cover bg-center py-24" :style="{ backgroundImage: `url(${easternHero})` }">
      <div class="absolute inset-0 bg-slate-950/60"></div>
      <div class="relative mx-auto max-w-6xl px-6 text-center text-white">
        <h1 class="text-4xl font-extrabold md:text-5xl">{{ current.eastern }}</h1>
        <p class="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-200">Travel Rwanda’s east for Akagera safaris, golden savannahs, and lakeside wildlife adventures.</p>
      </div>
    </section>

    <section class="py-16 px-6 md:px-12">
      <div class="mx-auto max-w-6xl grid gap-8 lg:grid-cols-3">
        <article class="rounded-4xl bg-white p-8 shadow-xl border border-slate-200">
          <h2 class="text-2xl font-bold text-slate-900">Akagera Safari</h2>
          <p class="mt-4 text-slate-600 leading-7">Search for elephants, lions, hippos and birdlife on the open plains of Akagera National Park.</p>
        </article>
        <article class="rounded-4xl bg-white p-8 shadow-xl border border-slate-200">
          <h2 class="text-2xl font-bold text-slate-900">Savanna Landscapes</h2>
          <p class="mt-4 text-slate-600 leading-7">Experience wide-open grasslands, gentle hills, and peaceful lakes in eastern Rwanda.</p>
        </article>
        <article class="rounded-4xl bg-white p-8 shadow-xl border border-slate-200">
          <h2 class="text-2xl font-bold text-slate-900">Bird Watching</h2>
          <p class="mt-4 text-slate-600 leading-7">Spot colorful birds, marshland species and rare waterbirds around the lakes and rivers.</p>
        </article>
      </div>
    </section>

    <section class="py-16 px-6 md:px-12 bg-slate-50">
      <div class="mx-auto max-w-6xl grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <h2 class="text-3xl font-bold">Eastern Province Adventures</h2>
          <p class="mt-4 text-slate-700 leading-7">The east of Rwanda mixes wild safari terrain with calm lakes and cultural communities. From Akagera’s big game to river safaris and bird-rich wetlands, you’ll find a quieter side of Rwanda.</p>
          <ul class="mt-6 space-y-3 text-slate-600">
            <li>• Game drives through Akagera National Park</li>
            <li>• Lake shore lodges and boat excursions</li>
            <li>• Birding trips and sunset savanna walks</li>
          </ul>
        </div>
        <div class="grid gap-6">
          <div class="overflow-hidden rounded-[2rem] shadow-2xl">
            <img :src="safariPhoto" alt="Akagera savannah safari" class="h-72 w-full object-cover" />
          </div>
          <div class="overflow-hidden rounded-[2rem] shadow-2xl">
            <img :src="rwandaPhoto" alt="Eastern Rwanda landscape" class="h-72 w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
