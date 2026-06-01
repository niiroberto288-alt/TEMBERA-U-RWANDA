<script setup>
import { current, state, setLanguage } from '../lang.js'
</script>

<template>
  <nav class="bg-green-800 text-white shadow-md">
    <div class="w-full px-6 py-4 min-h-20 flex flex-wrap items-center justify-between gap-4">
      <div class="flex items-center gap-3 shrink-0">
        <img src="../assets/images/visit-Rwanda.jpg" alt="LOGO" class="w-10 h-10 bg-white rounded-full p-1 object-contain shrink-0" />
        <h1 class="text-lg md:text-2xl font-bold tracking-wide whitespace-nowrap">{{ current.brand }}</h1>
      </div>

      <ul class="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm font-medium items-center whitespace-nowrap">
        <li class="shrink-0"><RouterLink to="/" class="hover:text-yellow-300 transition">{{ current.home }}</RouterLink></li>
        <li class="shrink-0"><RouterLink to="/about" class="hover:text-yellow-300 transition">{{ current.about }}</RouterLink></li>
        <li class="shrink-0"><RouterLink to="/services" class="hover:text-yellow-300 transition">{{ current.services }}</RouterLink></li>
        <li class="shrink-0"><RouterLink to="/contact" class="hover:text-yellow-300 transition">{{ current.contact }}</RouterLink></li>
        <li class="relative group shrink-0">
          <RouterLink to="/gallery" class="hover:text-yellow-300">{{ current.gallery }} <span>V</span></RouterLink>
          <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-40 z-50 pt-2" style="top:100%;left:0">
            <li><RouterLink to="/photos" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ current.photos }}</RouterLink></li>
            <li><RouterLink to="/videos" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ current.videos }}</RouterLink></li>
          </ul>
        </li>
        <li class="relative group shrink-0">
          <a href="#" @click.prevent class="hover:text-yellow-300">{{ current.destination }} <span>V</span></a>
          <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-40 z-50 pt-2" style="top:100%;right:0">
            <li><RouterLink to="/nP" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ current.northern }}</RouterLink></li>
            <li><RouterLink to="/sP" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ current.southern }}</RouterLink></li>
            <li><RouterLink to="/eP" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ current.eastern }}</RouterLink></li>
            <li><RouterLink to="/kigali" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ current.kigali }}</RouterLink></li>
            <li><RouterLink to="/wP" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ current.western }}</RouterLink></li>
          </ul>
        </li>
      </ul>

      <div class="flex gap-2 shrink-0 items-center">
        <button type="button" @click="setLanguage('rw')" :class="['rounded-full border h-10 w-10 text-[11px] md:text-xs transition flex items-center justify-center', state.language === 'rw' ? 'bg-white text-green-900 border-white' : 'bg-white/10 text-white border-white/70 hover:bg-white hover:text-green-900']" title="Kinyarwanda">RW</button>
        <button type="button" @click="setLanguage('fr')" :class="['rounded-full border h-10 w-10 text-[11px] md:text-xs transition flex items-center justify-center', state.language === 'fr' ? 'bg-white text-green-900 border-white' : 'bg-white/10 text-white border-white/70 hover:bg-white hover:text-green-900']" title="Français">FR</button>
        <button type="button" @click="setLanguage('en')" :class="['rounded-full border h-10 w-10 text-[11px] md:text-xs transition flex items-center justify-center', state.language === 'en' ? 'bg-white text-green-900 border-white' : 'bg-white/10 text-white border-white/70 hover:bg-white hover:text-green-900']" title="English">EN</button>
      </div>
    </div>
  </nav>
</template>
