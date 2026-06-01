<script setup>
import { current } from '../lang.js'
</script>

<template>
  <main class="services-page bg-slate-50">
    <!-- Hero Section with Background Image -->
    <section class="relative overflow-hidden bg-cover bg-center py-32 text-white" style="background-image:url('/assets/images/Wonderful-Rwanda.jpg');">
      <div class="relative mx-auto max-w-6xl px-6 text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-emerald-200">{{ current.servicesHeroLabel }}</p>
        <h1 class="mt-4 text-5xl font-extrabold md:text-6xl">{{ current.servicesHeroTitle }}</h1>
        <p class="mx-auto mt-6 max-w-3xl text-lg text-emerald-100/90">{{ current.servicesHeroBody }}</p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20 px-6 md:px-12">
      <div class="mx-auto max-w-6xl">
        <div class="text-center mb-16">
          <p class="text-sm uppercase tracking-[0.4em] text-emerald-600 mb-2">{{ current.servicesOfferLabel }}</p>
          <h2 class="text-4xl font-bold text-slate-900">{{ current.servicesTitle }}</h2>
        </div>

        <!-- Service Cards -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Card 1: Wildlife Tours -->
          <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition p-8 border-t-4 border-emerald-600">
            <div class="text-4xl mb-4">🦍</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-3">{{ current.wildlifeToursTitle }}</h3>
            <p class="text-slate-600 mb-4">{{ current.wildlifeToursBody }}</p>
            <ul class="text-sm text-slate-600 space-y-2">
              <li>✓ {{ current.wildlifeToursItem1 }}</li>
              <li>✓ {{ current.wildlifeToursItem2 }}</li>
              <li>✓ {{ current.wildlifeToursItem3 }}</li>
            </ul>
          </div>

          <!-- Card 2: Cultural Experiences -->
          <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition p-8 border-t-4 border-yellow-500">
            <div class="text-4xl mb-4">🎭</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-3">{{ current.culturalImmersionTitle }}</h3>
            <p class="text-slate-600 mb-4">{{ current.culturalImmersionBody }}</p>
            <ul class="text-sm text-slate-600 space-y-2">
              <li>✓ {{ current.culturalImmersionItem1 }}</li>
              <li>✓ {{ current.culturalImmersionItem2 }}</li>
              <li>✓ {{ current.culturalImmersionItem3 }}</li>
            </ul>
          </div>

          <!-- Card 3: Adventure Activities -->
          <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition p-8 border-t-4 border-blue-500">
            <div class="text-4xl mb-4">🏔️</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-3">{{ current.adventureActivitiesTitle }}</h3>
            <p class="text-slate-600 mb-4">{{ current.adventureActivitiesBody }}</p>
            <ul class="text-sm text-slate-600 space-y-2">
              <li>✓ {{ current.adventureActivitiesItem1 }}</li>
              <li>✓ {{ current.adventureActivitiesItem2 }}</li>
              <li>✓ {{ current.adventureActivitiesItem3 }}</li>
            </ul>
          </div>

          <!-- Card 4: City Tours -->
          <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition p-8 border-t-4 border-red-500">
            <div class="text-4xl mb-4">🏙️</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-3">{{ current.cityToursTitle }}</h3>
            <p class="text-slate-600 mb-4">{{ current.cityToursBody }}</p>
            <ul class="text-sm text-slate-600 space-y-2">
              <li>✓ {{ current.cityToursItem1 }}</li>
              <li>✓ {{ current.cityToursItem2 }}</li>
              <li>✓ {{ current.cityToursItem3 }}</li>
            </ul>
          </div>

          <!-- Card 5: Luxury Retreats -->
          <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition p-8 border-t-4 border-purple-500">
            <div class="text-4xl mb-4">✨</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-3">{{ current.luxuryRetreatsTitle }}</h3>
            <p class="text-slate-600 mb-4">{{ current.luxuryRetreatsBody }}</p>
            <ul class="text-sm text-slate-600 space-y-2">
              <li>✓ {{ current.luxuryRetreatsItem1 }}</li>
              <li>✓ {{ current.luxuryRetreatsItem2 }}</li>
              <li>✓ {{ current.luxuryRetreatsItem3 }}</li>
            </ul>
          </div>

          <!-- Card 6: Custom Packages -->
          <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition p-8 border-t-4 border-pink-500">
            <div class="text-4xl mb-4">📦</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-3">{{ current.customPackagesTitle }}</h3>
            <p class="text-slate-600 mb-4">{{ current.customPackagesBody }}</p>
            <ul class="text-sm text-slate-600 space-y-2">
              <li>✓ {{ current.customPackagesItem1 }}</li>
              <li>✓ {{ current.customPackagesItem2 }}</li>
              <li>✓ {{ current.customPackagesItem3 }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-16 px-6 md:px-12 bg-emerald-700 text-slate-100">
      <div class="mx-auto max-w-6xl">
        <h2 class="text-4xl font-bold mb-12 text-center text-white">{{ current.servicesWhyTitle }}</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="rounded-3xl bg-emerald-600/90 p-8 shadow-lg shadow-emerald-950/20">
            <div class="text-center">
              <div class="text-5xl mb-4">🎯</div>
              <h3 class="font-bold mb-2">{{ current.serviceGuidesTitle }}</h3>
              <p class="text-slate-100">{{ current.serviceExpertGuides }}</p>
            </div>
          </div>
          <div class="rounded-3xl bg-emerald-600/90 p-8 shadow-lg shadow-emerald-950/20">
            <div class="text-center">
              <div class="text-5xl mb-4">💰</div>
              <h3 class="font-bold mb-2">{{ current.serviceValueTitle }}</h3>
              <p class="text-slate-100">{{ current.serviceBestValue }}</p>
            </div>
          </div>
          <div class="rounded-3xl bg-emerald-600/90 p-8 shadow-lg shadow-emerald-950/20">
            <div class="text-center">
              <div class="text-5xl mb-4">🌿</div>
              <h3 class="font-bold mb-2">{{ current.serviceSustainableTitle }}</h3>
              <p class="text-slate-100">{{ current.serviceSustainable }}</p>
            </div>
          </div>
          <div class="rounded-3xl bg-emerald-600/90 p-8 shadow-lg shadow-emerald-950/20">
            <div class="text-center">
              <div class="text-5xl mb-4">24/7</div>
              <h3 class="font-bold mb-2">{{ current.serviceSupportTitle }}</h3>
              <p class="text-slate-100">{{ current.serviceSupport }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-6 md:px-12">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-4xl font-bold text-slate-900 mb-6">{{ current.servicesCTAHeading }}</h2>
        <p class="text-xl text-slate-600 mb-8">{{ current.servicesCTABody }}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/Contact" class="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition">{{ current.bookJourney }}</a>
          <a href="/About" class="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full font-semibold transition">{{ current.learnMoreAboutUs }}</a>
        </div>
      </div>
    </section>
  </main>
</template>