<script setup>
import { current } from '../lang.js'
</script>

<template>
  <footer class="bg-green-800 text-white px-8 py-10 mt-10">
    <div class="flex flex-wrap justify-between gap-8">
      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ current.brand }}</h3>
        <p class="text-sm text-green-200">Discover the beauty of the land of a thousand hills</p>
      </div>

      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ current.footerQuickLinks }}</h3>
        <ul class="space-y-2 text-sm">
          <li><RouterLink to="/" class="text-green-200 hover:text-yellow-300">{{ current.home }}</RouterLink></li>
          <li><RouterLink to="/about" class="text-green-200 hover:text-yellow-300">{{ current.about }}</RouterLink></li>
          <li><RouterLink to="/services" class="text-green-200 hover:text-yellow-300">{{ current.services }}</RouterLink></li>
          <li><RouterLink to="/contact" class="text-green-200 hover:text-yellow-300">{{ current.contact }}</RouterLink></li>
        </ul>
      </div>

      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ current.footerDestinations }}</h3>
        <ul class="text-sm space-y-2">
          <li><RouterLink to="/kigali" class="text-green-200 hover:text-yellow-300">{{ current.kigali }}</RouterLink></li>
          <li><RouterLink to="/nP" class="text-green-200 hover:text-yellow-300">{{ current.northern }}</RouterLink></li>
          <li><RouterLink to="/sP" class="text-green-200 hover:text-yellow-300">{{ current.southern }}</RouterLink></li>
          <li><RouterLink to="/eP" class="text-green-200 hover:text-yellow-300">{{ current.eastern }}</RouterLink></li>
          <li><RouterLink to="/wP" class="text-green-200 hover:text-yellow-300">{{ current.western }}</RouterLink></li>
        </ul>
      </div>

      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ current.footerContact }}</h3>
        <ul class="text-sm space-y-2">
          <li class="text-green-300">123 Main Street, Kigali</li>
          <li class="text-green-300">Phone: +250 788 123 456</li>
          <li class="text-green-300">Email: info@temberurwanda.com</li>
        </ul>
      </div>
    </div>

    <div class="border-t border-green-600 mt-8 pt-4 text-sm">
      <p class="text-center">@2026 Visit Rwanda, NIYOMWUNGERI Roberto</p>
    </div>
  </footer>
</template>
