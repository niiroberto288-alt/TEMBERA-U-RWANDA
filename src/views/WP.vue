<script setup>
import { current } from '../lang.js'
</script>

<template>
  <main class="min-h-screen bg-slate-50 text-slate-900">
    <section class="relative overflow-hidden bg-cover bg-center py-24" style="background-image:url('/assets/images/Wonderful-Rwanda.jpg');">
      <div class="absolute inset-0 bg-slate-950/60"></div>
      <div class="relative mx-auto max-w-6xl px-6 text-center text-white">
        <h1 class="text-4xl font-extrabold md:text-5xl">{{ current.western }}</h1>
        <p class="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-200">Discover the western province with lush rainforest, Lake Kivu beaches, and scenic waterfalls.</p>
      </div>
    </section>

    <section class="py-16 px-6 md:px-12">
      <div class="mx-auto max-w-6xl grid gap-8 lg:grid-cols-3">
        <article class="rounded-4xl bg-white p-8 shadow-xl border border-slate-200">
          <h2 class="text-2xl font-bold text-slate-900">Nyungwe Forest</h2>
          <p class="mt-4 text-slate-600 leading-7">Explore pristine rainforest trails, canopy walks, and unique wildlife in Nyungwe.</p>
        </article>
        <article class="rounded-4xl bg-white p-8 shadow-xl border border-slate-200">
          <h2 class="text-2xl font-bold text-slate-900">Lake Kivu</h2>
          <p class="mt-4 text-slate-600 leading-7">Enjoy lakeshore retreats, boat rides and relaxed village towns along Lake Kivu.</p>
        </article>
        <article class="rounded-4xl bg-white p-8 shadow-xl border border-slate-200">
          <h2 class="text-2xl font-bold text-slate-900">Waterfalls</h2>
          <p class="mt-4 text-slate-600 leading-7">Visit hidden waterfalls and scenic river valleys tucked into the western hills.</p>
        </article>
      </div>
    </section>
  </main>
</template>
