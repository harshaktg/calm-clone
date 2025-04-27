<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Features from './components/Features.vue';
import MusicBanner from './components/MusicBanner.vue';
import Reviews from './components/Reviews.vue';
import TrailSection from './components/TrailSection.vue';
import Blogs from './components/Blogs.vue';
import Faq from './components/Faq.vue';
</script>

<template>
  <Navbar />
  <main id="main-content" class="bg-[#f7f7f7] -mt-16 relative lg:-mt-[100px]">
    <Hero />
    <Features />
    <MusicBanner />
    <Reviews />
    <TrailSection />
    <div class="blog-container">
      <Blogs />
      <Faq />
    </div>
  </main>
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

.blog-container {
  background: linear-gradient(rgba(226, 234, 255, 0) 0%, rgb(226, 234, 255) 100%);
}
</style>
