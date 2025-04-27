<script setup lang="ts">
import { inject, ref, watch, computed } from 'vue'
import type { Ref } from 'vue'
import { isPlaying, isMuted } from '../ambientPlayerStore'
type Mood = 'default' | 'calm' | 'energetic' | 'sleepy' | 'focused'
const currentMood = inject<Ref<Mood>>('currentMood')

const base = import.meta.env.BASE_URL
const moodSounds: Record<Mood, { label: string; src: string }> = {
    default: { label: 'Ambient', src: base + 'sounds/default.mp3' },
    calm: { label: 'Rain', src: base + 'sounds/rain.mp3' },
    energetic: { label: 'Waves', src: base + 'sounds/waves.mp3' },
    sleepy: { label: 'Forest', src: base + 'sounds/forest.mp3' },
    focused: { label: 'Cafe', src: base + 'sounds/cafe.mp3' },
}
const audioRef = ref<HTMLAudioElement | null>(null)
const currentSound = computed(() => moodSounds[currentMood?.value ?? 'default'])
const shouldAutoPlay = ref(false)

if (currentMood) {
    watch(currentMood, () => {
        if (audioRef.value) {
            audioRef.value.pause()
            audioRef.value.currentTime = 0
            if (isPlaying.value) {
                shouldAutoPlay.value = true
            }
        }
    })
}

function onCanPlay() {
    if (shouldAutoPlay.value && isPlaying.value && audioRef.value) {
        audioRef.value.play()
        shouldAutoPlay.value = false
    }
}

// Watch play/pause
watch(isPlaying, (val) => {
    if (!audioRef.value) return
    if (val) {
        audioRef.value?.play()
    } else {
        audioRef.value?.pause()
    }
})

// Watch mute
watch(isMuted, (val) => {
    if (audioRef.value) {
        audioRef.value.muted = val
    }
})
</script>

<template>
    <audio ref="audioRef" :src="currentSound.src" loop @canplay="onCanPlay" />
</template>

<style scoped>
.fixed {
    box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.10);
}
</style>