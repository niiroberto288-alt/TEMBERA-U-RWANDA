<script setup>
import { current } from '../lang.js'
</script>

<template>
  <main class="min-h-screen bg-slate-50 text-slate-900">
    <section class="relative overflow-hidden bg-cover bg-center py-24 text-white" style="background-image:url('/assets/images/38421403065964620.jpg');">
      <div class="absolute inset-0 bg-slate-950/70"></div>
      <div class="relative mx-auto max-w-6xl px-6 text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-emerald-200">Gallery</p>
        <h1 class="mt-4 text-4xl font-extrabold md:text-5xl">{{ current.galleryHeading }}</h1>
        <p class="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-200">Browse Rwanda’s most memorable stories through photographs, video highlights, and destination inspiration.</p>
      </div>
    </section>

    <section class="py-16 px-6 md:px-12">
      <div class="mx-auto max-w-6xl grid gap-8 lg:grid-cols-3">
        <article class="rounded-[2rem] bg-white p-8 shadow-xl border border-slate-200">
          <span class="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700">Photo stories</span>
          <h2 class="mt-6 text-2xl font-bold text-slate-900">Discover landscapes</h2>
          <p class="mt-4 text-slate-600 leading-7">See Rwanda’s volcanoes, lakes, forests and cities through vibrant photography captured by local storytellers.</p>
        </article>
        <article class="rounded-[2rem] bg-white p-8 shadow-xl border border-slate-200">
          <span class="inline-flex rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-700">Videos</span>
          <h2 class="mt-6 text-2xl font-bold text-slate-900">Feel the journey</h2>
          <p class="mt-4 text-slate-600 leading-7">Explore Rwanda with curated video highlights from cultural experiences, wildlife safaris, and city life.</p>
        </article>
        <article class="rounded-[2rem] bg-white p-8 shadow-xl border border-slate-200">
          <span class="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-700">Destinations</span>
          <h2 class="mt-6 text-2xl font-bold text-slate-900">Plan your route</h2>
          <p class="mt-4 text-slate-600 leading-7">Explore each province of Rwanda, from Kigali to the national parks, with stories and imagery that inspire your next trip.</p>
        </article>
      </div>
    </section>

    <section class="pb-20 px-6 md:px-12">
      <div class="mx-auto max-w-6xl">
        <div class="mb-12 text-center">
          <h2 class="text-3xl font-bold text-slate-900">Featured moments</h2>
          <p class="mt-4 text-slate-600">A selection of curated gallery highlights from Rwanda’s mountains, lakes and cultural villages.</p>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div class="overflow-hidden rounded-[2rem] bg-white shadow-xl">
            <img src="/assets/images/38421403065964620.jpg" alt="Rwanda landscape" class="h-72 w-full object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-slate-900">Volcanoes and valleys</h3>
              <p class="mt-3 text-slate-600">Mountain views, misty mornings, and the lush terrain of northern Rwanda.</p>
            </div>
          </div>
          <div class="overflow-hidden rounded-[2rem] bg-white shadow-xl">
            <img src="/assets/images/68743894783.jpg" alt="Lake Kivu" class="h-72 w-full object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-slate-900">Lake Kivu shores</h3>
              <p class="mt-3 text-slate-600">Waterside retreats and sunsets over one of Africa’s most peaceful lakes.</p>
            </div>
          </div>
          <div class="overflow-hidden rounded-[2rem] bg-white shadow-xl">
            <img src="/assets/images/Rwanda-flag.jpg" alt="Kigali city" class="h-72 w-full object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-slate-900">Kigali city life</h3>
              <p class="mt-3 text-slate-600">Modern streets, markets, and the bustling heart of Rwanda’s capital.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>