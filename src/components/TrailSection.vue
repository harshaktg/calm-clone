<script setup lang="ts">
import { inject, computed } from 'vue'
import type { Ref } from 'vue'
type Mood = 'calm' | 'energetic' | 'sleepy' | 'focused'
const currentMood = inject<Ref<Mood>>('currentMood')
const moodThemes = inject<Record<Mood, { bg: string; text: string; accent: string }>>('moodThemes')
const theme = computed(() => moodThemes && currentMood ? moodThemes[currentMood.value] : { bg: '', text: '', accent: '' })
</script>

<template>
    <section :class="[theme.text, 'mb-[60px] relative md:mb-[100px]']">
        <div class="absolute inset-0 z-0"><span
                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                    alt=""
                    src="https://calm.com/_next/image?url=%2F_n%2Fimages%2Fhomepage%2Fblue-wave-bg.webp&amp;w=3840&amp;q=75"
                    decoding="async" data-nimg="fill" sizes="100vw"
                    srcset="https://calm.com/_next/image?url=%2F_n%2Fimages%2Fhomepage%2Fblue-wave-bg.webp&amp;w=640&amp;q=75 640w, https://calm.com/_next/image?url=%2F_n%2Fimages%2Fhomepage%2Fblue-wave-bg.webp&amp;w=750&amp;q=75 750w, https://calm.com/_next/image?url=%2F_n%2Fimages%2Fhomepage%2Fblue-wave-bg.webp&amp;w=828&amp;q=75 828w, https://calm.com/_next/image?url=%2F_n%2Fimages%2Fhomepage%2Fblue-wave-bg.webp&amp;w=1080&amp;q=75 1080w, https://calm.com/_next/image?url=%2F_n%2Fimages%2Fhomepage%2Fblue-wave-bg.webp&amp;w=1200&amp;q=75 1200w, https://calm.com/_next/image?url=%2F_n%2Fimages%2Fhomepage%2Fblue-wave-bg.webp&amp;w=1920&amp;q=75 1920w, https://calm.com/_next/image?url=%2F_n%2Fimages%2Fhomepage%2Fblue-wave-bg.webp&amp;w=2048&amp;q=75 2048w, https://calm.com/_next/image?url=%2F_n%2Fimages%2Fhomepage%2Fblue-wave-bg.webp&amp;w=3840&amp;q=75 3840w"
                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover; object-position: center bottom;"><noscript></noscript></span>
        </div>
        <div
            class="my-0 mx-auto max-w-[620px] pt-[60px] pb-[256px] px-5 relative text-center z-1 md:px-0 md:pt-0 md:pb-[330px]">
            <h2 :class="[theme.text, 'mb-5 text-2xl leading-[60px] text-[#1a3e6f] lg:text-[36px] lg:mb-6 font-bold']">
                Start your free
                trial
                of<br>Calm Premium.</h2>
            <ul
                class="flex flex-col justify-around mt-[32px] mb-[8px] overflow-visible list-none pl-0 lg:flex-row lg:gap-x-4 lg:mb-7">
                <li class="grow shrink basis-0"><button data-testid="button-element-type"
                        class="subscribe-buttonmb-3 text-left w-full relative leading-5 bg-white color-white font-bold py-[9px] px-4 rounded-[10px] border-2 text-[0.84375rem] border-[#1a3e6f] items-center justify-center inline-flex lg:py-0.5 lg:px-4 lg:w-full mb-3 lg:h-[72px]"
                        role="radio" name="plan sku" aria-checked="true" type="button" tabindex="0">
                        <div class="flex items-center justify-between h-full w-full">
                            <div><span class="
                                leading-7 text-lg font-bold
                                ">Yearly<br></span><span class="leading-5 text-[0.8435rem]">$49.99/yr.</span></div>
                            <div>$4.17/mo.</div>
                        </div>
                        <div class="badge"><span class="leading-5 text-white text-[0.8435rem]">14-Day Free Trial</span>
                        </div>
                    </button></li>
            </ul>
            <p class="font-medium mb-5 m-0 leading-5 text-[0.8435rem] text-[#00000099]">After your free trial, the
                yearly subscription is
                $49.99
                and automatically renews each year until cancelled. <a href="/terms" target="_blank" rel="noreferrer"
                    class="underline">Terms</a> | <a
                    href="https://support.calm.com/hc/en-us/articles/115002473607-How-to-turn-off-auto-renewal-or-cancel-my-subscription"
                    class="underline" target="_blank" rel="noreferrer">Cancel anytime</a></p>
            <button data-testid="button-element-type" :class="[
                'continue-button py-3.5 text-lg inline-flex items-center rounded-[100px] text-white font-bold leading-7 relative transition-all duration-300 ease-out justify-center w-full',
                (currentMood ?? 'default') === 'default' ? 'continue-button-bg' : theme.bg
            ]" type="button" tabindex="0">Continue</button>
        </div>
    </section>
</template>
<style scoped>
.subscribe-button::before {
    inset: -2px;
    border-radius: 10px;
    height: calc(100% + 4px);
    width: calc(100% + 4px);
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.15);
    box-shadow: none;
    opacity: 0;
    transition: 0.3s ease-out;
    z-index: -1;
}

.subscribe-button::after {
    border-radius: calc(16px);
    content: "";
    display: block;
    position: absolute;
    inset: 0px;
    border: 2px solid #1a3e6f;
    transition: margin 0.3s ease-out, opacity 0.3s ease-out;
    margin: 0px;
    opacity: 0;
    box-shadow: none;
}

.continue-button-bg {
    background: linear-gradient(rgb(36, 119, 170) 0%, rgb(100, 97, 224) 100%);
}

.continue-button {
    text-decoration: none;
    min-height: 48px;
    min-width: 48px;
    padding: 0.75rem 1.11111rem;
}

.badge {
    @apply absolute right-5 -top-[15px] py-1.5 px-3 rounded-[10px] flex items-center;
    background: linear-gradient(135deg, rgb(83, 64, 203) 0%, rgb(137, 70, 163) 100%);
    max-height: 33px;
    z-index: 2;
}
</style>