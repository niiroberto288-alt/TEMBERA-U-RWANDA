<script setup>
import { current } from '../lang.js'
</script>

<template>
  <main class="min-h-screen bg-slate-50 text-slate-900">
    <section class="relative overflow-hidden bg-cover bg-center py-24" style="background-image:url('/assets/images/Rwanda-flag.jpg');">
      <div class="absolute inset-0 bg-slate-950/60"></div>
      <div class="relative mx-auto max-w-6xl px-6 text-center text-white">
        <p class="text-sm uppercase tracking-[0.35em] text-emerald-200">Video Stories</p>
        <h1 class="mt-4 text-4xl font-extrabold md:text-5xl">{{ current.videos }}</h1>
        <p class="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-200">Watch curated videos from Rwanda’s wildlife, culture, and city scenes.</p>
      </div>
    </section>

    <section class="py-16 px-6 md:px-12">
      <div class="mx-auto max-w-6xl grid gap-8 lg:grid-cols-3">
        <article class="rounded-[2rem] bg-white overflow-hidden shadow-xl border border-slate-200">
          <div class="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
            <iframe
              class="h-full w-full"
              src="https://www.youtube-nocookie.com/embed/sxr5gGdC6dM"
              title="4-Day Rwanda Gorilla Trekking Volcanoes National Park"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="p-8">
            <h2 class="text-2xl font-bold text-slate-900">Wildlife Journeys</h2>
            <p class="mt-4 text-slate-600 leading-7">Watch a real gorilla trek and volcano adventure through Rwanda’s Volcanoes National Park.</p>
          </div>
        </article>

        <article class="rounded-[2rem] bg-white overflow-hidden shadow-xl border border-slate-200">
          <div class="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
            <iframe
              class="h-full w-full"
              src="https://www.youtube-nocookie.com/embed/GS0c4tIWLRw"
              title="Lake Kivu #VisitRwanda"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="p-8">
            <h2 class="text-2xl font-bold text-slate-900">Lake Adventures</h2>
            <p class="mt-4 text-slate-600 leading-7">Experience Lake Kivu from a true Rwandan travel video, featuring lakeshore views and local scenery.</p>
          </div>
        </article>

        <article class="rounded-[2rem] bg-white overflow-hidden shadow-xl border border-slate-200">
          <div class="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
            <iframe
              class="h-full w-full"
              src="https://www.youtube-nocookie.com/embed/6vpma4f8Oo0"
              title="INDENDE CULTURE TROUPES FROM RWANDA"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="p-8">
            <h2 class="text-2xl font-bold text-slate-900">Cultural Stories</h2>
            <p class="mt-4 text-slate-600 leading-7">See real Rwandan traditional dance with the Indende cultural troupe video.</p>
          </div>
        </article>
      </div>

      <div class="mx-auto mt-16 max-w-4xl text-center">
        <p class="text-slate-600 leading-8">These are real YouTube videos embedded directly on the page.</p>
      </div>
    </section>
  </main>
</template>
