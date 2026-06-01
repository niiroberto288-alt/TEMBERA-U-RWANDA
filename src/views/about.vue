<script setup>
import { current } from '../lang.js'
</script>

<template>
  <main class="about-page bg-slate-50 text-slate-900">
    <section class="relative overflow-hidden bg-slate-950 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.25),_transparent_40%),_linear-gradient(180deg,_rgb(6,78,59),_rgb(10,63,48))] px-6 py-20 text-white md:px-12" style="background-image:url('/assets/images/38421403065964620.jpg'); background-size: cover; background-position: center;">
      <div class="absolute inset-0 bg-slate-950/70"></div>
      <div class="relative z-10 mx-auto max-w-5xl text-center">
        <p class="text-sm uppercase tracking-[0.45em] text-emerald-200">{{ current.aboutHeroLabel }}</p>
        <h1 class="mt-4 text-4xl font-extrabold md:text-5xl">{{ current.aboutHeroTitle }}</h1>
        <p class="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-200 md:text-lg">{{ current.aboutHeroSubtitle }}</p>
      </div>
    </section>

    <section class="bg-white py-20 px-6 md:px-12">
      <div class="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p class="text-sm uppercase tracking-[0.3em] text-emerald-600">{{ current.aboutStoryLabel }}</p>
          <h2 class="mt-4 text-3xl font-bold text-slate-900">{{ current.aboutStoryTitle }}</h2>
          <p class="mt-6 text-slate-600 leading-8">{{ current.aboutStoryBody }}</p>
          <div class="mt-8 grid gap-4 sm:grid-cols-2">
            <div class="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <p class="text-sm uppercase tracking-[0.2em] text-emerald-600">{{ current.aboutVisionTitle }}</p>
              <p class="mt-3 text-slate-700">{{ current.aboutVisionBody }}</p>
            </div>
            <div class="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <p class="text-sm uppercase tracking-[0.2em] text-emerald-600">{{ current.aboutMissionTitle }}</p>
              <p class="mt-3 text-slate-700">{{ current.aboutMissionBody }}</p>
            </div>
          </div>
        </div>

        <div class="rounded-[2rem] bg-gradient-to-br from-emerald-800 to-slate-900 p-8 text-white shadow-2xl shadow-emerald-900/20">
          <h3 class="text-2xl font-semibold">{{ current.aboutSpecialTitle }}</h3>
          <ul class="mt-6 space-y-5">
            <li class="rounded-3xl bg-slate-950 border border-slate-800 p-6 shadow-xl">
              <strong class="block text-xl font-semibold text-white">{{ current.aboutSpecialItem1Title }}</strong>
              <span class="block mt-2 text-slate-200">{{ current.aboutSpecialItem1Body }}</span>
            </li>
            <li class="rounded-3xl bg-slate-950 border border-slate-800 p-6 shadow-xl">
              <strong class="block text-xl font-semibold text-white">{{ current.aboutSpecialItem2Title }}</strong>
              <span class="block mt-2 text-slate-200">{{ current.aboutSpecialItem2Body }}</span>
            </li>
            <li class="rounded-3xl bg-slate-950 border border-slate-800 p-6 shadow-xl">
              <strong class="block text-xl font-semibold text-white">{{ current.aboutSpecialItem3Title }}</strong>
              <span class="block mt-2 text-slate-200">{{ current.aboutSpecialItem3Body }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="bg-slate-950 text-white py-20 px-6 md:px-12">
      <div class="mx-auto max-w-5xl text-center">
        <p class="text-sm uppercase tracking-[0.4em] text-emerald-300">{{ current.aboutExperienceLabel }}</p>
        <h2 class="mt-4 text-3xl font-bold md:text-4xl">{{ current.aboutExperienceTitle }}</h2>
        <p class="mx-auto mt-6 max-w-3xl text-slate-300 leading-8">{{ current.aboutExperienceBody }}</p>
      </div>
    </section>
  </main>
</template>