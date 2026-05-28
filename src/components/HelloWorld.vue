<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <main class="flex-grow flex items-center justify-center py-12">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-4">SCHOOL ADMINISTRATION</h1>
        
        <div class="flex justify-center gap-2 text-lg text-gray-700 mb-6">
          <span class="font-bold">HEAD MASTER:</span>
          <span>Jean de Dieu</span>
        </div>
        <div class="flex justify-center gap-2 text-lg text-gray-700 mb-6">
          <span class="font-bold">DIRECTOR of Studies:</span>
          <span>Zackarie</span>
        </div>
        <div class="flex justify-center gap-2 text-lg text-gray-700 mb-6">
          <span class="font-bold">DIRECTOR of Discipline:</span>
          <span>Louis Marceille</span>
        </div>
        
        <button @click="count++" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 shadow-md transition-all">
          Count is: {{ count }}
        </button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>
