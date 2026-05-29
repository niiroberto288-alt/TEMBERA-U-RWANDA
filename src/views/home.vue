<script setup></script>
<template>
  <main class="home-page overflow-hidden">
    <section class="relative min-h-screen bg-cover bg-center text-white" style="background-image:url('/assets/images/Wonderful Rwanda….jpg');">
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p class="mb-4 inline-flex rounded-full bg-emerald-700/90 px-4 py-2 text-sm uppercase tracking-[0.3em] text-emerald-100">Visit Rwanda</p>
        <h1 class="text-4xl font-extrabold leading-tight md:text-6xl">Discover Rwanda's Hills, Culture, and Wild Beauty</h1>
        <p class="mx-auto mt-6 max-w-3xl text-lg text-emerald-100/90 md:text-xl">From the misty slopes of Volcanoes National Park to the busy streets of Kigali, experience the heart of Africa in a fresh and welcoming way.</p>
        <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a href="/About" class="rounded-full bg-yellow-400 px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-yellow-300">Learn More</a>
          <a href="/Contact" class="rounded-full border border-white/80 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:border-yellow-300 hover:bg-white/20">Plan Your Trip</a>
        </div>
      </div>
    </section>

    <section class="bg-slate-950 text-slate-100 py-20 px-6 md:px-12">
      <div class="mx-auto max-w-6xl">
        <div class="text-center mb-14">
          <p class="text-sm uppercase tracking-[0.4em] text-emerald-300">Rwanda at a glance</p>
          <h2 class="mt-4 text-3xl font-bold md:text-4xl">A welcoming destination for culture, nature, and adventure</h2>
          <p class="mx-auto mt-4 max-w-2xl text-slate-400">Explore national parks, local markets, lakeside retreats, and unforgettable experiences designed to connect you with Rwanda's people and landscapes.</p>
        </div>

        <div class="grid gap-8 md:grid-cols-3">
          <article class="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-black/20">
            <span class="inline-flex rounded-full bg-emerald-600 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white">Nature</span>
            <h3 class="mt-6 text-2xl font-semibold">Gorillas and Green Hills</h3>
            <p class="mt-4 leading-7 text-slate-300">Track mountain gorillas, hike misty volcanoes, and find peace among Rwanda’s lush hills and lakes.</p>
          </article>

          <article class="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-black/20">
            <span class="inline-flex rounded-full bg-emerald-600 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white">Culture</span>
            <h3 class="mt-6 text-2xl font-semibold">People and Traditions</h3>
            <p class="mt-4 leading-7 text-slate-300">Meet local artisans, enjoy traditional dance, and discover stories from Rwanda’s thriving communities.</p>
          </article>

          <article class="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-black/20">
            <span class="inline-flex rounded-full bg-emerald-600 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white">City Life</span>
            <h3 class="mt-6 text-2xl font-semibold">Kigali & modern hospitality</h3>
            <p class="mt-4 leading-7 text-slate-300">Discover Kigali’s restaurants, galleries, and markets while enjoying warm service and comfortable stays.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-emerald-950 text-white py-20 px-6 md:px-12">
      <div class="mx-auto max-w-5xl text-center">
        <p class="text-sm uppercase tracking-[0.4em] text-emerald-200">Why choose Rwanda?</p>
        <h2 class="mt-4 text-3xl font-bold md:text-4xl">Small country, big experiences</h2>
        <div class="mt-10 grid gap-6 md:grid-cols-3">
          <div class="rounded-3xl bg-emerald-900/80 p-8 shadow-lg shadow-black/20">
            <h3 class="text-xl font-semibold">Safe and accessible</h3>
            <p class="mt-3 text-slate-200">Rwanda is known for clean cities, welcoming people, and well-maintained national parks.</p>
          </div>
          <div class="rounded-3xl bg-emerald-900/80 p-8 shadow-lg shadow-black/20">
            <h3 class="text-xl font-semibold">Rich wildlife</h3>
            <p class="mt-3 text-slate-200">See gorillas, golden monkeys, hippos, and dozens of bird species on guided nature tours.</p>
          </div>
          <div class="rounded-3xl bg-emerald-900/80 p-8 shadow-lg shadow-black/20">
            <h3 class="text-xl font-semibold">Meaningful travel</h3>
            <p class="mt-3 text-slate-200">Support local communities and enjoy authentic experiences rooted in Rwandan culture.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
