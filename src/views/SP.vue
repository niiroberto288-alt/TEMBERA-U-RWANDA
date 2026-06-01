<script setup>
import { current } from '../lang.js'
import southernHero from '../assets/images/lake-kivu.jpg'
import teaCountryPhoto from '../assets/images/Wonderful-Rwanda.jpg'
import villagePhoto from '../assets/images/visit-Rwanda.jpg'
</script>

<template>
  <main class="min-h-screen bg-slate-50 text-slate-900">
    <section class="relative overflow-hidden bg-cover bg-center py-24" :style="{ backgroundImage: `url(${southernHero})` }">
      <div class="absolute inset-0 bg-slate-950/60"></div>
      <div class="relative mx-auto max-w-6xl px-6 text-center text-white">
        <h1 class="text-4xl font-extrabold md:text-5xl">{{ current.southern }}</h1>
        <p class="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-200">Visit Rwanda’s southern province for rolling tea hills, lakefront resorts, and cultural villages shaped by tradition.</p>
      </div>
    </section>

    <section class="py-16 px-6 md:px-12">
      <div class="mx-auto max-w-6xl grid gap-8 lg:grid-cols-3">
        <article class="rounded-4xl bg-white p-8 shadow-xl border border-slate-200">
          <h2 class="text-2xl font-bold text-slate-900">Tea Country</h2>
          <p class="mt-4 text-slate-600 leading-7">Walk among emerald tea plantations and learn how Rwanda’s fragrant leaves are grown and harvested.</p>
        </article>
        <article class="rounded-4xl bg-white p-8 shadow-xl border border-slate-200">
          <h2 class="text-2xl font-bold text-slate-900">Lake Kivu</h2>
          <p class="mt-4 text-slate-600 leading-7">Relax along the sandy shores of Lake Kivu at seaside towns with bright sunsets and calm waters.</p>
        </article>
        <article class="rounded-4xl bg-white p-8 shadow-xl border border-slate-200">
          <h2 class="text-2xl font-bold text-slate-900">Cultural Life</h2>
          <p class="mt-4 text-slate-600 leading-7">Experience local crafts, traditional cuisine, and community-led cultural performances.</p>
        </article>
      </div>
    </section>

    <section class="py-16 px-6 md:px-12 bg-white">
      <div class="mx-auto max-w-6xl grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <h2 class="text-3xl font-bold">Southern Province Stories</h2>
          <p class="mt-4 text-slate-700 leading-7">Southern Rwanda is a place of gentle hills, historic tea estates, and lakeside weekends. Discover hidden villages, delicious local meals, and nature trails that welcome slower travel.</p>
          <ul class="mt-6 space-y-3 text-slate-600">
            <li>• Sunrise walks through tea plantations</li>
            <li>• Kayaking and lakeside dining on Lake Kivu</li>
            <li>• Traditional pottery, weaving, and village tours</li>
          </ul>
        </div>
        <div class="grid gap-6">
          <div class="overflow-hidden rounded-[2rem] shadow-2xl">
            <img :src="teaCountryPhoto" alt="Tea plantations in Southern Rwanda" class="h-72 w-full object-cover" />
          </div>
          <div class="overflow-hidden rounded-[2rem] shadow-2xl">
            <img :src="villagePhoto" alt="Southern Rwanda village scene" class="h-72 w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
