<script setup lang="ts">
import { inject, computed } from 'vue'
import type { Ref } from 'vue'
type Mood = 'calm' | 'energetic' | 'sleepy' | 'focused'
const currentMood = inject<Ref<Mood>>('currentMood')
const moodThemes = inject<Record<Mood, { bg: string; text: string; accent: string }>>('moodThemes')
const theme = computed(() => moodThemes && currentMood ? moodThemes[currentMood.value] : { bg: '', text: '', accent: '' })
</script>

<template>
    <section class="min-h-[100svh] flex flex-col pb-0 lg:pb-[140px]">
        <div
            class="image-container grow shrink basis-[180px] h-[180px] max-h-[60vh] relative z-0 lg:h-[480px] lg:mb-10 mb-8">
            <span class="absolute inset-0 block overflow-hidden bg-none opacity-100 border-0 m-0">
                <img alt="" sizes="100vw"
                    srcset="https://calm.com/_next/image?url=%2F_n%2Fimages%2Fjasper-lake.webp&w=640&q=75 640w, https://calm.com/_next/image?url=%2F_n%2Fimages%2Fjasper-lake.webp&w=750&q=75 750w, https://calm.com/_next/image?url=%2F_n%2Fimages%2Fjasper-lake.webp&w=828&q=75 828w, https://calm.com/_next/image?url=%2F_n%2Fimages%2Fjasper-lake.webp&w=1080&q=75 1080w, https://calm.com/_next/image?url=%2F_n%2Fimages%2Fjasper-lake.webp&w=1200&q=75 1200w, https://calm.com/_next/image?url=%2F_n%2Fimages%2Fjasper-lake.webp&w=1920&q=75 1920w, https://calm.com/_next/image?url=%2F_n%2Fimages%2Fjasper-lake.webp&w=2048&q=75 2048w, https://calm.com/_next/image?url=%2F_n%2Fimages%2Fjasper-lake.webp&w=3840&q=75 3840w"
                    src="https://calm.com/_next/image?url=%2F_n%2Fimages%2Fjasper-lake.webp&w=3840&q=75"
                    decoding="async" data-nimg="fill"
                    class="absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover" />
            </span>
        </div>
        <div
            class="flex flex-col items-center justify-between mx-auto max-w-[1440px] px-5 text-center transition-all duration-300 lg:flex-row lg:px-[136px]">
            <div class="mb-10 lg:self-start lg:mb-0 lg:sticky lg:top-[240px]">
                <h1 :class="['leading-[150%] mx-auto mb-2 text-[1.96875rem] max-w-none lg:text-[3.09375rem] font-bold',
                    (currentMood ?? 'default') === 'default' ? 'text-[#1a3e6f]' : theme.text
                ]">
                    Calm your mind. Change your life.
                </h1>
                <p :class="['mb-9 mt-4 text-[1.125rem] leading-7 sm:text-[1.125rem] lg:text-[1.40rem] lg:font-medium',
                    (currentMood ?? 'default') === 'default' ? 'text-[rgba(0,0,0,0.8)]' : theme.text
                ]">
                    The #1 app for sleep, meditation and relaxation
                </p>
                <div class="flex flex-col justify-center items-center gap-4 lg:flex-row lg:gap-3">
                    <button data-testid="button-element-type"
                        class="inline-flex items-center justify-center w-full min-h-[48px] min-w-[48px] px-4 py-3.5 sm:py-[0.875rem] rounded-full border-none font-bold text-white bg-gradient-to-b from-[#2477aa] to-[#6461e0] text-[1.125rem] leading-7 transition-all duration-300 cursor-pointer outline-none no-underline shadow-none lg:max-w-[335px]">
                        Try Calm for Free
                    </button>
                    <button data-testid="button-element-type"
                        class="inline-flex items-center justify-center w-full min-h-[48px] min-w-[48px] px-4 py-3.5 sm:py-[0.875rem] rounded-full border border-[rgba(0,0,0,0.2)] font-bold text-[#383838] bg-white text-[1.125rem] leading-7 transition-all duration-300 cursor-pointer outline-none no-underline shadow-none lg:max-w-[335px]">
                        Already have an account?
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.image-container::after {
    background: linear-gradient(rgba(247, 247, 247, 0) 0%, rgba(247, 247, 247, 0.09) 8.85%, rgb(247, 247, 247) 100%);
    height: 40px;
    bottom: 0px;
    content: "";
    left: 0px;
    position: absolute;
    right: 0px;
}
</style>