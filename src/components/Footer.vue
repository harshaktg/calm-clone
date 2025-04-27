<script setup lang="ts">
import { inject, computed } from 'vue'

const footerSections = [
    {
        title: 'Company',
        links: [
            { label: 'About', url: 'https://www.calm.com/blog/about' },
            { label: 'Careers', url: 'https://www.calm.com/careers' },
            { label: 'Press', url: 'https://www.calm.com/blog/press' },
            { label: 'Blog', url: 'https://www.calm.com/mindfulness-tips' },
            { label: 'Meet our Instructor', url: 'https://www.calm.com/blog/tamara-levitt' },
            { label: 'Calm Science', url: 'https://www.calm.com/science' },
        ]
    },
    {
        title: 'Offers',
        links: [
            { label: 'Buy a Gift', url: 'https://www.calm.com/gift' },
            { label: 'Redeem a Gift', url: 'https://www.calm.com/redeem' },
            { label: 'Calm Health', url: 'https://health.calm.com/', target: '_blank' },
            { label: 'Calm for Organizations', url: 'https://health.calm.com/self-serve-checkout/' },
        ]
    },
    {
        title: 'Help',
        links: [
            { label: 'FAQ', url: 'https://www.calm.com/faq/web', target: '_blank' },
            { label: 'Contact Us', url: 'https://support.calm.com/hc/en-us/requests/new', target: '_blank' },
            { label: 'Terms', url: 'https://www.calm.com/terms' },
            { label: 'Privacy Policy', url: '/privacy-policy' },
            { label: 'CCPA Notice', url: '/privacy-policy#information-for-california-residents' },
            { label: 'Opt Out of Targeted Ads', url: null, isButton: true },
            { label: 'Cookies', url: 'https://www.calm.com/cookies' },
            { label: 'Accessibility Statement', url: 'https://www.calm.com/en/accessibility-statement' },
        ]
    }
]

const socialLinks = [
    {
        label: "Link to Calm's Facebook",
        ariaLabel: "Link to Calm's Facebook",
        svg: `<svg class="h-[18px] w-[18px] fill-white" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" title="Facebook Icon"><path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z"></path></svg>`
    },
    {
        label: "Link to Calm's Instagram",
        ariaLabel: "Link to Calm's Instagram",
        svg: `<svg class="h-[18px] w-[18px] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" title="Instagram Icon"><path d="M352 0H160C71.648 0 0 71.648 0 160v192c0 88.352 71.648 160 160 160h192c88.352 0 160-71.648 160-160V160C512 71.648 440.352 0 352 0zm112 352c0 61.76-50.24 112-112 112H160c-61.76 0-112-50.24-112-112V160C48 98.24 98.24 48 160 48h192c61.76 0 112 50.24 112 112v192z"></path><path d="M256 128c-70.688 0-128 57.312-128 128s57.312 128 128 128 128-57.312 128-128-57.312-128-128-128zm0 208c-44.096 0-80-35.904-80-80 0-44.128 35.904-80 80-80s80 35.872 80 80c0 44.096-35.904 80-80 80z"></path><circle cx="393.6" cy="118.4" r="17.056"></circle></svg>`
    },
    {
        label: "Link to Calm's Twitter",
        ariaLabel: "Link to Calm's Twitter",
        svg: `<svg class="h-[18px] w-[18px] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" title="Twitter Icon"><path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"></path></svg>`
    }
]

// Mood theme injection
import type { Ref } from 'vue'
type Mood = 'calm' | 'energetic' | 'sleepy' | 'focused'
const currentMood = inject<Ref<Mood>>('currentMood')
const moodThemes = inject<Record<Mood, { bg: string; text: string; accent: string }>>('moodThemes')
const theme = computed(() => moodThemes && currentMood ? moodThemes[currentMood.value] : { bg: '', text: '', accent: '' })
</script>

<template>
    <footer :class="['py-12 px-5 lg:py-12 lg:px-0 transition-colors',
        (currentMood ?? 'default') === 'default' ? 'bg-[#1b2250]' : theme.bg
    ]">
        <div class="flex justify-center overflow-visible w-full">
            <ul class="list-none gap-x-6 grid grid-cols-1 md:grid-cols-4 w-full lg:gap-x-9 lg:max-w-[960px]">
                <li v-for="section in footerSections" :key="section.title" class="mb-4">
                    <h2 :class="['text-lg font-medium my-2 leading-[28px]',
                        (currentMood ?? 'default') === 'default' ? 'text-white' : theme.text
                    ]">{{ section.title }}</h2>
                    <ul class="p-0 list-none">
                        <li v-for="link in section.links" :key="link.label">
                            <a v-if="!link.isButton" :href="link.url ?? ''" :target="link.target || ''" :class="['font-normal text-base leading-[30px] opacity-80 transition duration-300 ease-out hover:opacity-50',
                                (currentMood ?? 'default') === 'default' ? 'text-white' : theme.text
                            ]">{{
                                link.label }}</a>
                            <a v-else tabindex="0" role="button" aria-haspopup="dialog" aria-expanded="false"
                                aria-controls="cookie-preferences-banner" :class="['font-normal text-base leading-[30px] opacity-80 transition duration-300 ease-out hover:opacity-50',
                                    (currentMood ?? 'default') === 'default' ? 'text-white' : theme.text
                                ]">{{
                                    link.label }}</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul class="flex justify-center p-0 md:justify-end">
                        <li v-for="(social) in socialLinks" :key="social.label"
                            class="block mr-[18px] list-none my-0.5">
                            <a :aria-label="social.ariaLabel" tabindex="0" role="link" class="opacity-80 cursor-pointer"
                                v-html="social.svg"></a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div :class="['my-[22px] mx-auto items-center text-[15px] leading-5 text-center opacity-50 md:mt-12',
            (currentMood ?? 'default') === 'default' ? 'text-white' : theme.text
        ]">
            Copyright ©
            2025 Calm. All rights reserved</div>
    </footer>
</template>