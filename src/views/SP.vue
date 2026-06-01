<script setup>
import { current } from '../lang.js'
</script>

<template>
  <main class="min-h-screen bg-slate-50 text-slate-900">
    <section class="relative overflow-hidden bg-cover bg-center py-24" style="background-image:url('/assets/images/68743894783.jpg');">
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
  </main>
</template>
