<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const blogs = [
    {
        href: "/blog/are-messy-people-more-creative",
        tabindex: 0,
        img: {
            src: "https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/1744761335908-CI8VJADR92OPG4RZNRXC/are+messy+people+more+creative-1x1.jpg",
            alt: "Thumbnail for Are messy people more creative? Here's what science really says",
        },
        category: "Personal Growth",
        title: "Are messy people more creative? Here's what science really says",
        liClass: "sc-2f5be838-1 kPHhcS",
        ariaHidden: false,
    },
    {
        href: "/blog/benefits-of-creativity",
        tabindex: -1,
        img: {
            src: "https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/1744760566400-8GNF1GJGLT1WY8692QE8/benefits+of+creativity-1x1.jpg",
            alt: "Thumbnail for 7 benefits of creativity (and easy ways to be more creative)",
        },
        category: "Mental Health",
        title: "7 benefits of creativity (and easy ways to be more creative)",
        liClass: "sc-2f5be838-1 fajIlr",
        ariaHidden: true,
    },
    {
        href: "/blog/decision-fatigue",
        tabindex: -1,
        img: {
            src: "https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/1744760975210-V16U9X86KKBXXC73QD3T/decision+fatigue-1x1.jpg",
            alt: "Thumbnail for Feeling mentally drained? Here's how to beat decision fatigue",
        },
        category: "Stress & Anxiety",
        title: "Feeling mentally drained? Here's how to beat decision fatigue",
        liClass: "sc-2f5be838-1 fbDRIz",
        ariaHidden: true,
    },
    {
        href: "/blog/comfort-zone",
        tabindex: -1,
        img: {
            src: "https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/1743792535797-VDQSZLSB5RRCGCD1UYTX/comfort+zone-1x1.jpg",
            alt: "Thumbnail for Scared to step out of your comfort zone? Here's how to manage",
        },
        category: "Personal Growth",
        title: "Scared to step out of your comfort zone? Here's how to manage",
        liClass: "sc-2f5be838-1 hxAulv",
        ariaHidden: true,
    },
    {
        href: "/blog/how-to-let-go-of-resentment",
        tabindex: -1,
        img: {
            src: "https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/1744420896800-WYZAI300QWK7O3F8FW20/how+to+let+go+of+resentment-1x1.jpg",
            alt: "Thumbnail for How to (actually) let go of resentment in your relationships",
        },
        category: "Relationships",
        title: "How to (actually) let go of resentment in your relationships",
        liClass: "sc-2f5be838-1 fpQhnD",
        ariaHidden: true,
    },
    {
        href: "/blog/mothers-day-for-grieving-mothers",
        tabindex: -1,
        img: {
            src: "https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/1745006295604-1MFNC9KLSWCVMICED4NX/mothers+day+gifts+for+grieving+mothers-1x1.jpg",
            alt: "Thumbnail for Are you a mom missing someone this Mother's Day? Here's how to cope",
        },
        category: "Women's Health, Mental Health",
        title: "Are you a mom missing someone this Mother's Day? Here's how to cope",
        liClass: "sc-2f5be838-1 vhvTH",
        ariaHidden: true,
    },
    {
        href: "/blog/5-minute-mindfulness",
        tabindex: -1,
        img: {
            src: "https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/1744420480876-VKR454WFJNLEAWBDQ54U/5+minute+mindfulness-1x1.jpg",
            alt: "Thumbnail for 20 mindfulness practices that take five minutes (or less!)",
        },
        category: "Meditation & Mindfulness",
        title: "20 mindfulness practices that take five minutes (or less!)",
        liClass: "sc-2f5be838-1 sSiuU",
        ariaHidden: true,
    },
    {
        href: "/blog/comfortable-with-silence",
        tabindex: -1,
        img: {
            src: "https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/1744420141373-LKZX4R74J1YM9OO7MJC2/comfortable+with+silence-1x1.jpg",
            alt: "Thumbnail for How to get comfortable with silence (and why it matters)",
        },
        category: "Relationships",
        title: "How to get comfortable with silence (and why it matters)",
        liClass: "sc-2f5be838-1 iYpdJe",
        ariaHidden: true,
    },
    {
        href: "/blog/how-to-talk-to-anyone",
        tabindex: -1,
        img: {
            src: "https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/1743746549897-NAQAQA35312OWRDA7SXD/how+to+talk+to+anyone-1x1.jpg",
            alt: "Thumbnail for How to talk to anyone: 12 simple tips for better conversations",
        },
        category: "Relationships",
        title: "How to talk to anyone: 12 simple tips for better conversations",
        liClass: "sc-2f5be838-1 hMmPow",
        ariaHidden: true,
    },
    {
        href: "/blog/thoughtful-mothers-day-gifts",
        tabindex: -1,
        img: {
            src: "https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/1745006371379-I3PFDHSQ1YDQPDGPOT5F/thoughtful+mothers+day+gifts-1x1.jpg",
            alt: "Thumbnail for 38 thoughtful Mother's Day gift ideas she'll truly love",
        },
        category: "Women's Health",
        title: "38 thoughtful Mother's Day gift ideas she'll truly love",
        liClass: "sc-2f5be838-1 krnXwq",
        ariaHidden: true,
    },
    {
        href: "/blog/family-values",
        tabindex: -1,
        img: {
            src: "https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/1744251700151-IXNQKJBQJ5XJ08VNOCHP/family+values-1x1.jpg",
            alt: "Thumbnail for Here's why you should establish family values (and how to do it)",
        },
        category: "Relationships",
        title: "Here's why you should establish family values (and how to do it)",
        liClass: "sc-2f5be838-1 eGFLlH",
        ariaHidden: true,
    },
    {
        href: "/blog/crying-at-work",
        tabindex: -1,
        img: {
            src: "https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/1743642270979-11GKBCKQL8IH2IXWV4KY/crying+at+work-1x1.jpg",
            alt: "Thumbnail for Here's why crying at work may not be a bad thing after all",
        },
        category: "Workplace Wellness",
        title: "Here's why crying at work may not be a bad thing after all",
        liClass: "sc-2f5be838-1 fxXtiu",
        ariaHidden: true,
    },
    {
        href: "/blog/staycation",
        tabindex: -1,
        img: {
            src: "https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/1743809866863-0BJQ4OVHF7MU5IFAXV6E/staycation-1x1.jpg",
            alt: "Thumbnail for Are staycations *actually* better than vacations for real rest?",
        },
        category: "Mental Health",
        title: "Are staycations *actually* better than vacations for real rest?",
        liClass: "sc-2f5be838-1 eLCzjK",
        ariaHidden: true,
    },
    {
        href: "/blog/work-life-balance",
        tabindex: -1,
        img: {
            src: "https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/1743641883680-E589IY3H7PXVKUXJ4CAL/work-life+balance-1x1.jpg",
            alt: "Thumbnail for How to *actually* have a better work-life balance",
        },
        category: "Workplace Wellness",
        title: "How to *actually* have a better work-life balance",
        liClass: "sc-2f5be838-1 cPWUSJ",
        ariaHidden: true,
    },
    {
        href: "/blog/menstrual-cycle-phases",
        tabindex: -1,
        img: {
            src: "https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/1743641539635-94ZBWC3361FAADKWCXHA/menstrual+cycle+phases-1x1.jpg",
            alt: "Thumbnail for How the phases of your menstrual cycle affect mental health",
        },
        category: "Women's Health",
        title: "How the phases of your menstrual cycle affect mental health",
        liClass: "sc-2f5be838-1 krTfth",
        ariaHidden: true,
    },
    {
        href: "/blog/how-to-communicate-better",
        tabindex: -1,
        img: {
            src: "https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/1743810305641-AA921KI1PZH2DO8PT6XD/how+to+communicate+better-1x1.jpg",
            alt: "Thumbnail for How to communicate better with all the people in your life",
        },
        category: "Relationships",
        title: "How to communicate better with all the people in your life",
        liClass: "sc-2f5be838-1 eTQEGt",
        ariaHidden: true,
    },
    {
        href: "/blog/tonglen-meditation",
        tabindex: -1,
        img: {
            src: "https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/1744162528720-D3COT57SGGOIZ4WJQPAS/tonglen+meditation-1x1.jpg",
            alt: "Thumbnail for What is Tonglen meditation? A guide to getting started",
        },
        category: "Meditation & Mindfulness",
        title: "What is Tonglen meditation? A guide to getting started",
        liClass: "sc-2f5be838-1 gDFnpC",
        ariaHidden: true,
    },
    {
        href: "/blog/motherhood-and-loneliness",
        tabindex: -1,
        img: {
            src: "https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/1744162971914-LLJVOV4O2JIJA0D4J5FJ/%28TS%29+motherhood+and+loneliness-1x1.jpg",
            alt: "Thumbnail for Why loneliness is so common in motherhood (and how to cope)",
        },
        category: "Women's Health, Mental Health",
        title: "Why loneliness is so common in motherhood (and how to cope)",
        liClass: "sc-2f5be838-1 genNBk",
        ariaHidden: true,
    },
    {
        href: "/blog/enfp",
        tabindex: -1,
        img: {
            src: "https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/1743747462433-BBC29D9ELNI3NJU0W8MM/ENFP-1x1.jpg",
            alt: "Thumbnail for 10 characteristics of the campaigner personality type (ENFP)",
        },
        category: "Personal Growth",
        title: "10 characteristics of the campaigner personality type (ENFP)",
        liClass: "sc-2f5be838-1 hBEHkK",
        ariaHidden: true,
    },
    {
        href: "/blog/sleep-walking",
        tabindex: -1,
        img: {
            src: "https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/1743747786997-HCVL45TTYMWU5REXMXNG/sleep+walking-1x1.jpg",
            alt: "Thumbnail for What is sleepwalking? Plus, 7 tips to help you manage it",
        },
        category: "Sleep",
        title: "What is sleepwalking? Plus, 7 tips to help you manage it",
        liClass: "sc-2f5be838-1 jEAqbg",
        ariaHidden: true,
    },
];

const currentBlog = ref(0)
const itemWidth = ref(475)
const gap = ref(16) // px, default mobile gap-4
const listRef = ref<HTMLElement | null>(null)

function goLeft() {
    if (currentBlog.value > 0) currentBlog.value--
}
function goRight() {
    if (currentBlog.value < blogs.length - 1) currentBlog.value++
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

const translateX = computed(() => `translateX(-${currentBlog.value * (itemWidth.value + gap.value)}px)`)
const carouselWidth = computed(() => `${blogs.length * itemWidth.value + (blogs.length - 1) * gap.value}px`)
</script>

<template>
    <div class="blog-container">
        <section class="overflow-hidden w-full">
            <div
                class="text-center pt-0 px-5 pb-[60px] max-w-[1440px] mx-auto my-0 lg:pt-0 lg:px-[136px] lg:pb-[100px]">
                <h2
                    class="mt-0 mx-auto mb-8 leading-10 text-[1.6875rem] text-[#1a3e6f] font-bold lg:leading-[48px] lg:text-[1.96875rem] lg:mt-0 lg:mx-auto lg:mb-10 max-w-[748px]">
                    Check out our blog
                    for more meditation, sleep, stress,
                    and mental health resources.</h2>
                <ul ref="listRef"
                    class="h-[338px] lg:h-[492px] list-none relative z-0 w-full flex transition-transform duration-200 ease-in-out gap-4 lg:gap-6"
                    :style="{ width: carouselWidth, transform: translateX }">
                    <li v-for="(blog, idx) in blogs" :key="blog.href"
                        class="blog-item h-[338px] lg:h-[492px] flex-shrink-0 flex-grow-0"
                        :style="{ width: `${itemWidth}px` }" :aria-hidden="currentBlog !== idx">
                        <div class="h-full">
                            <article class="bg-white rounded-[20px] h-full">
                                <a :href="blog.href" :tabindex="blog.tabindex"
                                    class="item-link block relative no-underline">
                                    <img loading="lazy" :src="blog.img.src" :alt="blog.img.alt"
                                        class="rounded-t-[20px] w-full h-[214px] overflow-hidden object-cover lg:h-[300px]">
                                    <div class="p-5 text-left">
                                        <span class="leading-5 text-[0.84375rem] font-medium text-[#1a3e6f] mb-2">{{
                                            blog.category
                                        }}</span>
                                        <h3 class="text-lg m-0 leading-7 text-[#1c1c1c] font-bold">{{ blog.title }}</h3>
                                    </div>
                                </a>
                            </article>
                        </div>
                    </li>
                </ul>
                <ul class="my-6 mx-0 p-0 items-center flex justify-center list-none lg:justify-end">
                    <li>
                        <button data-testid="button-element-type" class="left-button"
                            :class="{ 'bg-[#00000033]': currentBlog === 0, 'bg-[#00000066]': currentBlog !== 0 }"
                            aria-label="previous" type="button" :disabled="currentBlog === 0" @click="goLeft">
                            <div
                                class="navigation-icon flex items-center justify-center w-5 h-5 text-white font-bold leading-7">
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
                        <button data-testid="button-element-type" class="right-button"
                            :class="{ 'bg-[#00000033]': currentBlog === blogs.length - 1, 'bg-[#00000066]': currentBlog !== blogs.length - 1 }"
                            aria-label="next" type="button" :disabled="currentBlog === blogs.length - 1"
                            @click="goRight">
                            <div
                                class="navigation-icon flex items-center justify-center w-5 h-5 text-white font-bold leading-7">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="96" height="96" viewBox="0 0 96 96">
                                    <path
                                        d="M57.99975,81.99975 C57.48775,81.99975 56.97675,81.80475 56.58575,81.41375 L24.58575,49.41375 C23.80475,48.63275 23.80475,47.36675 24.58575,46.58575 L56.58575,14.58575 C57.36675,13.80475 58.63275,13.80475 59.41375,14.58575 C60.19475,15.36675 60.19475,16.63275 59.41375,17.41375 L28.82875,47.99975 L59.41375,78.58575 C60.19475,79.36675 60.19475,80.63275 59.41375,81.41375 C59.02275,81.80475 58.51175,81.99975 57.99975,81.99975"
                                        fill="#000000" fill-rule="evenodd"></path>
                                </svg>
                            </div>
                        </button>
                    </li>
                </ul>
                <a href="https://calm.com/blog"
                    class="text-lg text-black inline-block font-bold underline my-0 mx-auto lg:-translate-y-[56px]">See
                    all blogs</a>
            </div>
        </section>
    </div>
</template>

<style scoped>
.blog-container {
    background: linear-gradient(rgba(226, 234, 255, 0) 0%, rgb(226, 234, 255) 100%);
}

.left-button {
    height: 2rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    width: 2rem;
    min-height: unset;
    min-width: unset;
    padding: 0px;
    border-radius: 100px;
    font-size: 1.125rem;
    border: none;
    color: rgb(255, 255, 255);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: 500;
    line-height: 28px;
    position: relative;
    transition: 0.3s ease-out;
    z-index: 0;
    cursor: initial;
    outline: none;
    text-decoration: none;
}

.right-button {
    transform: rotate(180deg);
    height: 2rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    width: 2rem;
    min-height: unset;
    min-width: unset;
    padding: 0px;
    border-radius: 100px;
    box-shadow: none;
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 28px;
    position: relative;
    transition: 0.3s ease-out;
    z-index: 0;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    color: rgb(255, 255, 255);
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.navigation-icon svg {
    @apply h-5 w-5;
}

.navigation-icon svg path {
    fill: rgba(255, 255, 255);
}

.blog-item {
    transition: transform 0.2s ease-in-out;
}
</style>