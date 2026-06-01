<script setup>
import { current } from '../lang.js'
</script>

<template>
  <main class="min-h-screen bg-slate-50 text-slate-900">
    <section class="relative overflow-hidden bg-cover bg-center py-24" style="background-image:url('/assets/images/38421403065964620.jpg');">
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
  </main>
</template>
