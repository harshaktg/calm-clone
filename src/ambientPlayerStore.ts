import { ref } from 'vue'

export const isPlaying = ref(false)
export const isMuted = ref(false)

export function play() { isPlaying.value = true }
export function pause() { isPlaying.value = false }
export function togglePlay() { isPlaying.value = !isPlaying.value }
export function mute() { isMuted.value = true }
export function unmute() { isMuted.value = false }
export function toggleMute() { isMuted.value = !isMuted.value } 