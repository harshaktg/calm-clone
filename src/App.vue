<script setup lang="ts">
import { ref, provide, computed } from 'vue'
import MoodSelector from './components/MoodSelector.vue'
import AmbientPlayer from './components/AmbientPlayer.vue'
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Features from './components/Features.vue';
import MusicBanner from './components/MusicBanner.vue';
import Reviews from './components/Reviews.vue';
import TrailSection from './components/TrailSection.vue';
import Blogs from './components/Blogs.vue';
import Faq from './components/Faq.vue';
import Footer from './components/Footer.vue';

type Mood = 'default' | 'calm' | 'energetic' | 'sleepy' | 'focused'
const moodThemes: Record<Mood, { bg: string; text: string; accent: string; blogBg: string }> = {
  default: {
    bg: '', // original background
    text: '',
    accent: '',
    blogBg: 'bg-gradient-to-b from-[rgba(226,234,255,0)] to-[rgb(226,234,255)]',
  },
  calm: {
    bg: 'bg-gradient-to-br from-blue-100 to-blue-300',
    text: 'text-blue-900',
    accent: 'text-blue-600',
    blogBg: 'bg-gradient-to-b from-blue-100 to-blue-200',
  },
  energetic: {
    bg: 'bg-gradient-to-br from-yellow-200 via-orange-200 to-yellow-400',
    text: 'text-yellow-900',
    accent: 'text-orange-600',
    blogBg: 'bg-gradient-to-b from-yellow-100 to-orange-100',
  },
  sleepy: {
    bg: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900',
    text: 'text-purple-300',
    accent: 'text-indigo-300',
    blogBg: 'bg-gradient-to-b from-indigo-900 to-purple-900',
  },
  focused: {
    bg: 'bg-gradient-to-br from-green-100 to-green-300',
    text: 'text-green-900',
    accent: 'text-green-600',
    blogBg: 'bg-gradient-to-b from-green-100 to-green-200',
  },
}
const currentMood = ref<Mood>('default')
const moodModel = computed({
  get: () => currentMood.value,
  set: (val) => { currentMood.value = val }
})
provide('currentMood', currentMood)
provide('moodThemes', moodThemes)
</script>

<template>
  <div
    :class="[moodThemes[currentMood].bg, moodThemes[currentMood].text, 'min-h-screen transition-colors duration-500']">
    <AmbientPlayer />
    <MoodSelector v-model="moodModel" />
    <Navbar />
    <main id="main-content" :class="['-mt-16 relative lg:-mt-[100px]',
      (currentMood === 'default' ? 'bg-[#f7f7f7]' : moodThemes[currentMood].bg)
    ]">
      <Hero />
      <Features />
      <MusicBanner />
      <Reviews />
      <TrailSection />
      <div :class="moodThemes[currentMood].blogBg + ' blog-container'">
        <Blogs />
        <Faq />
      </div>
      <Footer />
    </main>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
