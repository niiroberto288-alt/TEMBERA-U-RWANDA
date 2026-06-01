<script setup>
import { current } from '../lang.js'
import northernHero from '../assets/images/volcano-kalisimb.jpg'
import gorillaPhoto from '../assets/images/gorilla.jpg'
import lakeKivuPhoto from '../assets/images/lake-kivu.jpg'
</script>

<template>
  <main class="min-h-screen bg-slate-50 text-slate-900">
    <section class="relative overflow-hidden bg-cover bg-center py-24" :style="{ backgroundImage: `url(${northernHero})` }">
      <div class="absolute inset-0 bg-slate-950/60"></div>
      <div class="relative mx-auto max-w-6xl px-6 text-center text-white">
        <h1 class="text-4xl font-extrabold md:text-5xl">{{ current.northern }}</h1>
        <p class="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-200">Explore the volcanic highlands of Northern Rwanda, home to gorilla trekking, misty forests, and the twin lakes of Musanze.</p>
      </div>
    </section>

    <section class="py-16 px-6 md:px-12">
      <div class="mx-auto max-w-6xl grid gap-8 lg:grid-cols-3">
        <article class="rounded-4xl bg-white p-8 shadow-xl border border-slate-200">
          <h2 class="text-2xl font-bold text-slate-900">Gorilla Trekking</h2>
          <p class="mt-4 text-slate-600 leading-7">Witness mountain gorillas in Volcanoes National Park with guided treks through lush bamboo forests.</p>
        </article>
        <article class="rounded-4xl bg-white p-8 shadow-xl border border-slate-200">
          <h2 class="text-2xl font-bold text-slate-900">Musanze Caves</h2>
          <p class="mt-4 text-slate-600 leading-7">Adventure through crystal caves carved by ancient rivers beneath the mountain slopes.</p>
        </article>
        <article class="rounded-4xl bg-white p-8 shadow-xl border border-slate-200">
          <h2 class="text-2xl font-bold text-slate-900">Lake Views</h2>
          <p class="mt-4 text-slate-600 leading-7">Enjoy serene lakeside scenery and panoramic vistas across the northern countryside.</p>
        </article>
      </div>
    </section>

    <section class="py-16 px-6 md:px-12 bg-slate-950 text-white">
      <div class="mx-auto max-w-6xl grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <h2 class="text-3xl font-bold">Northern Province Highlights</h2>
          <p class="mt-4 text-slate-300 leading-7">Northern Rwanda offers misty volcanoes, gorilla expeditions, and peaceful lakeside villages. Travel through Musanze and see why this region is the heart of Rwanda’s wildlife and mountain experiences.</p>
          <ul class="mt-6 space-y-3 text-slate-300">
            <li>• Trekking routes through Volcanoes National Park</li>
            <li>• Guided visits to golden monkey habitats</li>
            <li>• Scenic boat rides on nearby lakes</li>
          </ul>
        </div>
        <div class="grid gap-6">
          <div class="overflow-hidden rounded-[2rem] shadow-2xl">
            <img :src="gorillaPhoto" alt="Gorilla trekking in Northern Rwanda" class="h-72 w-full object-cover" />
          </div>
          <div class="overflow-hidden rounded-[2rem] shadow-2xl">
            <img :src="lakeKivuPhoto" alt="Lake Kivu view" class="h-72 w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
