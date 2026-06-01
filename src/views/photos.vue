<script setup>
import { current } from '../lang.js'
import volcanoImage from '../assets/images/volcano-kalisimb.jpg'
import lakeKivu from '../assets/images/lake-kivu.jpg'
import kigaliSkyline from '../assets/images/kigali-skyline.jpg'
import nyungweForest from '../assets/images/nyungwe-forest.jpg'
import akageraSavannah from '../assets/images/akagera-savannah.jpg'
import rwandanDance from '../assets/images/rwandan-dance.jpg'
</script>

<template>
  <main class="min-h-screen bg-slate-50 text-slate-900">
    <section class="relative overflow-hidden bg-cover bg-center py-24" :style="{ backgroundImage: `url(${lakeKivu})` }">
      <div class="absolute inset-0 bg-slate-950/55"></div>
      <div class="relative mx-auto max-w-6xl px-6 text-center text-white">
        <p class="text-sm uppercase tracking-[0.35em] text-emerald-200">Photo Gallery</p>
        <h1 class="mt-4 text-4xl font-extrabold md:text-5xl">{{ current.photos }}</h1>
        <p class="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-200">Browse beautiful photos of Rwanda’s landscapes, wildlife, and culture.</p>
      </div>
    </section>

    <section class="py-16 px-6 md:px-12">
      <div class="mx-auto max-w-6xl">
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div class="overflow-hidden rounded-4xl bg-white shadow-xl">
            <img :src="volcanoImage" alt="Volcanoes National Park" class="h-72 w-full object-cover" />
            <div class="p-6">
              <h2 class="text-xl font-semibold text-slate-900">Volcanoes Park</h2>
              <p class="mt-3 text-slate-600">Rwanda’s volcanic highlands near Volcanoes National Park, home to mountain gorillas.</p>
            </div>
          </div>
          <div class="overflow-hidden rounded-4xl bg-white shadow-xl">
            <img :src="lakeKivu" alt="Lake Kivu" class="h-72 w-full object-cover" />
            <div class="p-6">
              <h2 class="text-xl font-semibold text-slate-900">Lake Kivu</h2>
              <p class="mt-3 text-slate-600">The calm waters and shoreline villages of Lake Kivu, one of Rwanda’s most scenic lakes.</p>
            </div>
          </div>
          <div class="overflow-hidden rounded-4xl bg-white shadow-xl">
            <img :src="kigaliSkyline" alt="Kigali skyline" class="h-72 w-full object-cover" />
            <div class="p-6">
              <h2 class="text-xl font-semibold text-slate-900">Kigali Skyline</h2>
              <p class="mt-3 text-slate-600">A panoramic view of Kigali’s skyline, showcasing Rwanda’s vibrant capital city.</p>
            </div>
          </div>
          <div class="overflow-hidden rounded-4xl bg-white shadow-xl">
            <img :src="nyungweForest" alt="Nyungwe forest" class="h-72 w-full object-cover" />
            <div class="p-6">
              <h2 class="text-xl font-semibold text-slate-900">Nyungwe Forest</h2>
              <p class="mt-3 text-slate-600">The ancient rainforest of Nyungwe National Park, famous for its biodiversity and canopy walks.</p>
            </div>
          </div>
          <div class="overflow-hidden rounded-4xl bg-white shadow-xl">
            <img :src="akageraSavannah" alt="Akagera National Park" class="h-72 w-full object-cover" />
            <div class="p-6">
              <h2 class="text-xl font-semibold text-slate-900">Akagera Park</h2>
              <p class="mt-3 text-slate-600">Open savannah landscapes in Akagera National Park, home to wildlife and scenic panoramas.</p>
            </div>
          </div>
          <div class="overflow-hidden rounded-4xl bg-white shadow-xl">
            <img :src="rwandanDance" alt="Rwandan dancers" class="h-72 w-full object-cover" />
            <div class="p-6">
              <h2 class="text-xl font-semibold text-slate-900">Cultural Moments</h2>
              <p class="mt-3 text-slate-600">A traditional dance performance that celebrates Rwanda’s culture and community spirit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
