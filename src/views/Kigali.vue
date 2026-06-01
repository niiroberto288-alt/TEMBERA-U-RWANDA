<script setup>
import { current } from '../lang.js'
import kigaliImage from '../assets/images/kigali-skyline.jpg'
import visitRwandaPhoto from '../assets/images/visit-Rwanda.jpg'
import rwandaFlag from '../assets/images/Rwanda-flag.jpg'
</script>

<template>
  <main class="min-h-screen bg-slate-50 text-slate-900">
    <section class="relative overflow-hidden bg-cover bg-center py-24" :style="{ backgroundImage: `url(${kigaliImage})` }">
      <div class="absolute inset-0 bg-slate-950/60"></div>
      <div class="relative mx-auto max-w-6xl px-6 text-center text-white">
        <h1 class="text-4xl font-extrabold md:text-5xl">{{ current.kigali }}</h1>
        <p class="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-200">Explore Kigali’s modern culture, markets, museums, and vibrant streets in Rwanda’s capital city.</p>
      </div>
    </section>

    <section class="py-16 px-6 md:px-12">
      <div class="mx-auto max-w-6xl grid gap-8 lg:grid-cols-3">
        <article class="rounded-4xl bg-white p-8 shadow-xl border border-slate-200">
          <h2 class="text-2xl font-bold text-slate-900">City Culture</h2>
          <p class="mt-4 text-slate-600 leading-7">Visit museums, galleries, and local art spaces that celebrate Rwanda’s creative energy.</p>
        </article>
        <article class="rounded-4xl bg-white p-8 shadow-xl border border-slate-200">
          <h2 class="text-2xl font-bold text-slate-900">Markets & Food</h2>
          <p class="mt-4 text-slate-600 leading-7">Discover fresh markets, cafes, and restaurants serving modern Rwandan cuisine and coffee culture.</p>
        </article>
        <article class="rounded-4xl bg-white p-8 shadow-xl border border-slate-200">
          <h2 class="text-2xl font-bold text-slate-900">Urban Life</h2>
          <p class="mt-4 text-slate-600 leading-7">Enjoy vibrant nightlife, green public spaces, and easy access to cultural tours in Kigali.</p>
        </article>
      </div>
    </section>

    <section class="py-16 px-6 md:px-12 bg-slate-950 text-white">
      <div class="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <h2 class="text-3xl font-bold">More About Kigali</h2>
          <p class="mt-6 text-slate-300 leading-8">Kigali is Rwanda’s clean and modern capital city, known for its museums, coffee shops, and welcoming neighborhoods. It’s also a hub for culture, history, and city-based excursions into the country’s natural beauty.</p>
          <ul class="mt-6 space-y-4 text-slate-300">
            <li>• Visit the Kigali Genocide Memorial and learn Rwanda’s story of recovery.</li>
            <li>• Explore craft markets, contemporary art galleries, and local fashion boutiques.</li>
            <li>• Sample Rwandan coffee, street food, and farm-to-table dining in vibrant districts.</li>
          </ul>
        </div>

        <div class="grid gap-6">
          <div class="overflow-hidden rounded-4xl shadow-2xl">
            <img :src="visitRwandaPhoto" alt="Street scene in Kigali" class="h-72 w-full object-cover" />
          </div>
          <div class="overflow-hidden rounded-4xl shadow-2xl">
            <img :src="rwandaFlag" alt="Rwanda flag in Kigali" class="h-72 w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
