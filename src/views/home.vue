<script setup>
import { current } from '../lang.js'
</script>
<template>
  <main class="home-page overflow-hidden">
    <section class="relative min-h-screen bg-cover bg-center text-white" style="background-image:url('/assets/images/Wonderful-Rwanda.jpg');">
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p class="mb-4 inline-flex rounded-full bg-emerald-700/90 px-4 py-2 text-sm uppercase tracking-[0.3em] text-emerald-100">{{ current.visitRwanda }}</p>
        <h1 class="text-4xl font-extrabold leading-tight md:text-6xl">{{ current.homeHero }}</h1>
        <p class="mx-auto mt-6 max-w-3xl text-lg text-emerald-100/90 md:text-xl">{{ current.homeSubtitle }}</p>
        <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a href="/About" class="rounded-full bg-yellow-400 px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-yellow-300">{{ current.learnMore }}</a>
          <a href="/Contact" class="rounded-full border border-white/80 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:border-yellow-300 hover:bg-white/20">{{ current.planYourTrip }}</a>
        </div>
      </div>
    </section>

    <section class="bg-slate-950 text-slate-100 py-20 px-6 md:px-12">
      <div class="mx-auto max-w-6xl">
        <div class="text-center mb-14">
          <p class="text-sm uppercase tracking-[0.4em] text-emerald-300">{{ current.rwandaAtGlance }}</p>
          <h2 class="mt-4 text-3xl font-bold md:text-4xl">{{ current.welcomeDestination }}</h2>
          <p class="mx-auto mt-4 max-w-2xl text-slate-400">{{ current.exploreDescription }}</p>
        </div>

        <div class="grid gap-8 md:grid-cols-3">
          <article class="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-black/20">
            <span class="inline-flex rounded-full bg-emerald-600 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white">{{ current.natureLabel }}</span>
            <h3 class="mt-6 text-2xl font-semibold">{{ current.natureTitle }}</h3>
            <p class="mt-4 leading-7 text-slate-300">{{ current.natureDesc }}</p>
          </article>

          <article class="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-black/20">
            <span class="inline-flex rounded-full bg-emerald-600 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white">{{ current.cultureLabel }}</span>
            <h3 class="mt-6 text-2xl font-semibold">{{ current.cultureTitle }}</h3>
            <p class="mt-4 leading-7 text-slate-300">{{ current.cultureDesc }}</p>
          </article>

          <article class="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-black/20">
            <span class="inline-flex rounded-full bg-emerald-600 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white">{{ current.cityLifeLabel }}</span>
            <h3 class="mt-6 text-2xl font-semibold">{{ current.cityLifeTitle }}</h3>
            <p class="mt-4 leading-7 text-slate-300">{{ current.cityLifeDesc }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-emerald-950 text-white py-20 px-6 md:px-12">
      <div class="mx-auto max-w-5xl text-center">
        <p class="text-sm uppercase tracking-[0.4em] text-emerald-200">{{ current.whyChooseRwanda }}</p>
        <h2 class="mt-4 text-3xl font-bold md:text-4xl">{{ current.smallCountry }}</h2>
        <div class="mt-10 grid gap-6 md:grid-cols-3">
          <div class="rounded-3xl bg-emerald-900/80 p-8 shadow-lg shadow-black/20">
            <h3 class="text-xl font-semibold">{{ current.safeAccessibleTitle }}</h3>
            <p class="mt-3 text-slate-200">{{ current.safeAccessibleDesc }}</p>
          </div>
          <div class="rounded-3xl bg-emerald-900/80 p-8 shadow-lg shadow-black/20">
            <h3 class="text-xl font-semibold">{{ current.richWildlifeTitle }}</h3>
            <p class="mt-3 text-slate-200">{{ current.richWildlifeDesc }}</p>
          </div>
          <div class="rounded-3xl bg-emerald-900/80 p-8 shadow-lg shadow-black/20">
            <h3 class="text-xl font-semibold">{{ current.meaningfulTravelTitle }}</h3>
            <p class="mt-3 text-slate-200">{{ current.meaningfulTravelDesc }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
