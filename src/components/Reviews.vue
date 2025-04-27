<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, inject } from 'vue'
import type { Ref } from 'vue'

type Mood = 'default' | 'calm' | 'energetic' | 'sleepy' | 'focused'

const reviews = [
    {
        text: 'When I cannot fall asleep, I turn on this app and am out within 5 minutes.',
        author: 'Brandy from Houston',
    },
    {
        text: 'I have a very busy brain and can find it hard to unwind. Now a daily practice is actually so wonderful and healing for me.',
        author: 'John from Chicago',
    },
    {
        text: 'Calm has changed my life in immeasurable ways. I am more resilient and feel so much more connected to myself.',
        author: 'Allison from San Jose',
    },
    {
        text: `Whenever I need to unwind from a stressful work day I meditate with Calm's soundscapes and it automatically sends me to my happy place.`,
        author: 'Jasmine from Bend',
    },
    {
        text: 'Calm cuts through my stress, anxiety, irregular sleep schedule and brings me to deep sleep. I usually fall asleep within 5 minutes.',
        author: 'Mathieu from New Orleans',
    },
    {
        text: 'My family loves Calm! Out of the three meditation apps I have on my phone, Calm is the one I actually use.',
        author: 'Kristie from Irvine',
    },
    {
        text: `I have tried other meditation and gratitude apps, but this one has everything and the best teachers.`,
        author: 'Jen from Scarsdale',
    },
    {
        text: `My wife and I have listened to Calm for well over 2 years. Cannot express how easy it is to fall asleep listening to this app.`,
        author: 'Aaron from Louisville',
    },
    {
        text: `Medication isn't for me, so I decided to give Calm a try. Now I begin and end every day with guided meditations.`,
        author: 'Tracy from Newark',
    },
]

const current = ref(0)
const itemWidth = ref(475)
const gap = ref(16) // px, default mobile gap-4
const listRef = ref<HTMLElement | null>(null)

const currentMood = inject<Ref<Mood>>('currentMood')
const moodThemes = inject<any>('moodThemes')
const theme = computed(() => moodThemes && currentMood ? moodThemes[currentMood.value] : { bg: '', text: '', accent: '' })
const reviewsBg = computed(() => currentMood?.value === 'default' ? moodThemes?.[currentMood?.value ?? 'default']?.blogBg : 'bg-transparent')

function goLeft() {
    if (current.value > 0) current.value--
}
function goRight() {
    if (current.value < reviews.length - 1) current.value++
}

function updateWidth() {
    // Responsive width: 475px for desktop, 90vw for mobile
    if (window.innerWidth >= 1024) {
        itemWidth.value = Math.min(window.innerWidth * 0.3, 365)
        gap.value = 24 // gap-6 for desktop
    }
    else if (window.innerWidth >= 768) {
        itemWidth.value = Math.min(window.innerWidth * 0.7, 475)
        gap.value = 16 // gap-4 for mobile
    }
    else {
        itemWidth.value = Math.min(window.innerWidth * 0.9, 475)
        gap.value = 16 // gap-4 for mobile
    }
}

onMounted(() => {
    updateWidth()
    window.addEventListener('resize', updateWidth)
})
onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
})

const translateX = computed(() => `translateX(-${current.value * (itemWidth.value + gap.value)}px)`)
const carouselWidth = computed(() => `${reviews.length * itemWidth.value + (reviews.length - 1) * gap.value}px`)
</script>

<template>
    <div :class="['reviews-container', reviewsBg]">
        <section class="w-full overflow-hidden">
            <section
                class="my-0 mx-auto max-w-[1440px] pb-0 pt-[60px] px-5 text-center lg:pt-0 lg:px-[136px] lg:pb-[100px]">
                <h2 class="lg:text-4xl lg:mb-10 text-2xl mb-8 m-0 text-[#1a3e6f] leading-[60px] font-bold">
                    Over 2 million 5-star reviews.
                </h2>
                <!-- <div class="relative w-full overflow-hidden"> -->
                <ul ref="listRef"
                    class="h-[356px] lg:h-[456px] list-none m-0 p-0 relative z-0 w-full flex transition-transform duration-200 ease-in-out gap-4 lg:gap-6"
                    :style="{ width: carouselWidth, transform: translateX }">
                    <li v-for="(review, idx) in reviews" :key="idx"
                        class="h-[356px] lg:h-[456px] flex-shrink-0 flex-grow-0" :style="{ width: `${itemWidth}px` }"
                        aria-hidden="false">
                        <div class="h-full flex items-center justify-center">
                            <article class="article-item">
                                <svg width="65" height="58" viewBox="0 0 65 58" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M60.8833 0L64.5426 4.38372C59.2061 8.95478 55.2038 13.5258 52.5356 18.0969C49.9436 22.593 48.6476 27.1641 48.6476 31.8101C48.6476 32.8592 48.6476 33.646 48.6476 34.1705C48.7238 34.6202 48.8001 35.1072 48.8763 35.6318C49.0288 35.6318 49.2194 35.6318 49.4481 35.6318C51.5827 35.332 53.1074 35.1822 54.0222 35.1822C57.3003 35.1822 59.9304 36.1938 61.9125 38.2171C63.9708 40.2403 65 42.938 65 46.3101C65 49.6822 63.9327 52.4922 61.7981 54.7403C59.6636 56.9134 56.9191 58 53.5648 58C49.3718 58 45.7888 56.314 42.8156 52.9419C39.8425 49.4948 38.3559 45.2984 38.3559 40.3527C38.3559 33.084 40.2618 26.0026 44.0735 19.1085C47.9615 12.1395 53.5648 5.77003 60.8833 0ZM22.2987 0L26.0723 4.38372C20.6597 8.95478 16.6192 13.5258 13.951 18.0969C11.359 22.593 10.063 27.1641 10.063 31.8101C10.063 32.8592 10.063 33.646 10.063 34.1705C10.1392 34.6202 10.2155 35.1072 10.2917 35.6318C10.4442 35.6318 10.6348 35.6318 10.8635 35.6318C12.998 35.332 14.5227 35.1822 15.4376 35.1822C18.7919 35.1822 21.4601 36.1938 23.4422 38.2171C25.5006 40.2403 26.5297 42.938 26.5297 46.3101C26.5297 49.6822 25.4243 52.4922 23.2135 54.7403C21.0789 56.9134 18.3345 58 14.9802 58C10.8635 58 7.31855 56.314 4.34539 52.9419C1.44846 49.4948 0 45.2984 0 40.3527C0 33.009 1.90587 25.8902 5.71762 18.9961C9.52936 12.1021 15.0564 5.77003 22.2987 0Z"
                                        fill="white" fill-opacity="0.2"></path>
                                </svg>
                                <blockquote>
                                    <p class="font-medium text-xl leading-[150%] mx-0 mt-6 mb-3 lg:text-[22.5px]">
                                        {{ review.text }}
                                    </p>
                                </blockquote>
                                <p class="mb-3 text-lg leading-[28px] text-[#ffffffcc]">{{ review.author }}</p>
                                <svg width="136" height="24" viewBox="0 0 136 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" aria-label="Rating 5 star">
                                    <path
                                        d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                                        fill="#F8D22D"></path>
                                    <path
                                        d="M40 0L42.6942 8.2918H51.4127L44.3593 13.4164L47.0534 21.7082L40 16.5836L32.9466 21.7082L35.6407 13.4164L28.5873 8.2918H37.3058L40 0Z"
                                        fill="#F8D22D"></path>
                                    <path
                                        d="M68 0L70.6942 8.2918H79.4127L72.3593 13.4164L75.0534 21.7082L68 16.5836L60.9466 21.7082L63.6407 13.4164L56.5873 8.2918H65.3058L68 0Z"
                                        fill="#F8D22D"></path>
                                    <path
                                        d="M96 0L98.6942 8.2918H107.413L100.359 13.4164L103.053 21.7082L96 16.5836L88.9466 21.7082L91.6407 13.4164L84.5873 8.2918H93.3058L96 0Z"
                                        fill="#F8D22D"></path>
                                    <path
                                        d="M124 0L126.694 8.2918H135.413L128.359 13.4164L131.053 21.7082L124 16.5836L116.947 21.7082L119.641 13.4164L112.587 8.2918H121.306L124 0Z"
                                        fill="#F8D22D"></path>
                                </svg>
                            </article>
                        </div>
                    </li>
                </ul>
                <ul class="my-6 mx-0 p-0 items-center flex justify-center list-none lg:justify-end">
                    <li>
                        <button data-testid="button-element-type"
                            :class="['navigation-button left-arrow h-8 w-8 mx-2 p-0 rounded-[100px] text-lg md:py-3.5 inline-flex items-center justify-center font-medium leading-7 relative z-0 no-underline transition-all duration-300 ease-in-out', current === 0 ? 'bg-[#00000033] text-white cursor-not-allowed opacity-50' : 'bg-[#00000066] text-white hover:bg-blue-500 hover:text-white']"
                            aria-label="previous" type="button" :disabled="current === 0" @click="goLeft">
                            <div class="flex items-center justify-center h-5 w-5">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="96" height="96" viewBox="0 0 96 96">
                                    <path
                                        d="M57.99975,81.99975 C57.48775,81.99975 56.97675,81.80475 56.58575,81.41375 L24.58575,49.41375 C23.80475,48.63275 23.80475,47.36675 24.58575,46.58575 L56.58575,14.58575 C57.36675,13.80475 58.63275,13.80475 59.41375,14.58575 C60.19475,15.36675 60.19475,16.63275 59.41375,17.41375 L28.82875,47.99975 L59.41375,78.58575 C60.19475,79.36675 60.19475,80.63275 59.41375,81.41375 C59.02275,81.80475 58.51175,81.99975 57.99975,81.99975"
                                        fill="#000000" fill-rule="evenodd"></path>
                                </svg>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button data-testid="button-element-type"
                            :class="['navigation-button right-arrow h-8 w-8 mx-2 p-0 rounded-[100px] text-lg md:py-3.5 inline-flex items-center justify-center font-medium leading-7 relative z-0 no-underline transition-all duration-300 ease-in-out', current === reviews.length - 1 ? 'bg-[#00000033] text-white cursor-not-allowed opacity-50' : 'bg-[#00000066] text-white hover:bg-blue-500 hover:text-white']"
                            aria-label="next" type="button" :disabled="current === reviews.length - 1" @click="goRight">
                            <div class="flex items-center justify-center h-5 w-5">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/2000/svg"
                                    width="96" height="96" viewBox="0 0 96 96">
                                    <path
                                        d="M57.99975,81.99975 C57.48775,81.99975 56.97675,81.80475 56.58575,81.41375 L24.58575,49.41375 C23.80475,48.63275 23.80475,47.36675 24.58575,46.58575 L56.58575,14.58575 C57.36675,13.80475 58.63275,13.80475 59.41375,14.58575 C60.19475,15.36675 60.19475,16.63275 59.41375,17.41375 L28.82875,47.99975 L59.41375,78.58575 C60.19475,79.36675 60.19475,80.63275 59.41375,81.41375 C59.02275,81.80475 58.51175,81.99975 57.99975,81.99975"
                                        fill="#000000" fill-rule="evenodd"></path>
                                </svg>
                            </div>
                        </button>
                    </li>
                </ul>
                <!-- </div> -->
            </section>
        </section>
    </div>
</template>

<style scoped>
.right-arrow {
    transform: rotate(180deg);
}

.navigation-button::before {
    background: rgba(0, 0, 0, 0.15);
    box-shadow: none;
    border-radius: 100px;
    transition: 0.3s ease-out;
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: -1;
}

.navigation-button::after {
    border-radius: 100px;
    box-shadow: none;
    content: "";
    display: block;
    position: absolute;
    inset: 0px;
    border: 2px solid rgb(26, 62, 111);
    transition: margin 0.3s ease-out, opacity 0.3s ease-out;
    margin: 0px;
    opacity: 0;
}

.navigation-button svg {
    @apply h-5 w-5;
}

.navigation-button svg path {
    fill: rgba(255, 255, 255);
}

.article-item {
    @apply h-full text-left py-10 px-8 text-white rounded-[20px];
    background: linear-gradient(rgb(36, 119, 170) 0%, rgb(100, 97, 224) 100%);
}
</style>