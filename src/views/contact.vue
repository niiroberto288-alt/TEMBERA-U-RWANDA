<script setup>
import { current } from '../lang.js'
</script>

<template>
  <main class="contact-page bg-slate-100 text-slate-900">
    <section class="relative overflow-hidden bg-cover bg-center py-24 text-white" style="background-image:url('/assets/images/Rwanda-flag.jpg');">
      <div class="relative mx-auto max-w-6xl px-6 text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-emerald-300">{{ current.contactGetInTouch }}</p>
        <h1 class="mt-4 text-4xl font-bold md:text-5xl">{{ current.contactHeroTitle }}</h1>
        <p class="mx-auto mt-5 max-w-2xl text-base text-slate-200 md:text-lg">{{ current.contactHeroSubtitle }}</p>
      </div>
    </section>

    <section class="py-20 px-6 md:px-12">
      <div class="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div class="space-y-8 rounded-[2rem] bg-white p-8 shadow-2xl shadow-slate-300/40">
          <p class="text-sm uppercase tracking-[0.35em] text-emerald-600">{{ current.contactInfoLabel }}</p>
          <h2 class="text-3xl font-bold text-slate-900">{{ current.contactHelpTitle }}</h2>
          <p class="text-slate-600 leading-8">{{ current.contactHelpBody }}</p>

          <div class="grid gap-5">
            <div class="rounded-3xl bg-slate-50 p-6">
              <p class="text-sm uppercase tracking-[0.3em] text-emerald-600">Email</p>
              <p class="mt-2 text-slate-700">info@visitrwanda.com</p>
            </div>
            <div class="rounded-3xl bg-slate-50 p-6">
              <p class="text-sm uppercase tracking-[0.3em] text-emerald-600">Phone</p>
              <p class="mt-2 text-slate-700">+250 788 123 456</p>
            </div>
            <div class="rounded-3xl bg-slate-50 p-6">
              <p class="text-sm uppercase tracking-[0.3em] text-emerald-600">Location</p>
              <p class="mt-2 text-slate-700">Kigali, Rwanda</p>
            </div>
          </div>
        </div>

        <div class="rounded-[2rem] bg-gradient-to-br from-emerald-900 to-slate-900 p-8 text-white shadow-2xl shadow-emerald-900/25">
          <p class="text-sm uppercase tracking-[0.35em] text-emerald-200">Request a quote</p>
          <h2 class="mt-4 text-3xl font-bold">Send a message</h2>
          <form class="mt-8 space-y-6">
            <label class="block">
              <span class="text-sm font-semibold text-slate-100">Name</span>
              <input class="mt-2 w-full rounded-3xl border border-emerald-600 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-yellow-300" type="text" placeholder="Your name" />
            </label>
            <label class="block">
              <span class="text-sm font-semibold text-slate-100">{{ current.emailLabel }}</span>
              <input class="mt-2 w-full rounded-3xl border border-emerald-600 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-yellow-300" type="email" placeholder="you@example.com" />
            </label>
            <label class="block">
              <span class="text-sm font-semibold text-slate-100">{{ current.messageLabel }}</span>
              <textarea class="mt-2 h-32 w-full rounded-3xl border border-emerald-600 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-yellow-300" placeholder="Tell us about your travel plans"></textarea>
            </label>
            <button type="submit" class="inline-flex w-full justify-center rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-yellow-300">{{ current.sendButton }}</button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>