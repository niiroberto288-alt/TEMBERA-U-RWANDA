<script setup>
import { current } from '../lang.js'
import kigaliImage from '../assets/images/kigali-skyline.jpg'
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
  </main>
</template>
