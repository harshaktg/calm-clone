<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

const moods = [
    { key: 'default', label: 'Default', emoji: '✨' },
    { key: 'calm', label: 'Calm', emoji: '🧘‍♂️' },
    { key: 'energetic', label: 'Energetic', emoji: '🔥' },
    { key: 'sleepy', label: 'Sleepy', emoji: '🌙' },
    { key: 'focused', label: 'Focused', emoji: '🎯' },
] as const

type Mood = typeof moods[number]['key']

const props = defineProps<{ modelValue: Mood }>()
const emit = defineEmits(['update:modelValue'])

const selected = computed(() => props.modelValue)
const showMenu = ref(false)

function selectMood(mood: Mood) {
    emit('update:modelValue', mood)
    showMenu.value = false
}

// Click outside to close
function handleClickOutside(event: MouseEvent) {
    const el = document.getElementById('mood-selector-fab')
    if (el && !el.contains(event.target as Node)) {
        showMenu.value = false
    }
}
onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside)
})
onBeforeUnmount(() => {
    document.removeEventListener('mousedown', handleClickOutside)
})
</script>

<template>
    <div id="mood-selector-fab" class="fixed bottom-6 right-6 z-50">
        <transition name="fade">
            <div v-if="showMenu"
                class="bg-white/90 dark:bg-[#232b4a] rounded-2xl shadow-lg p-4 flex flex-col gap-2 mb-2">
                <span class="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200">How are you feeling?</span>
                <button v-for="mood in moods" :key="mood.key" :aria-label="mood.label" @click="selectMood(mood.key)"
                    :class="[
                        'rounded-full px-3 py-2 flex items-center gap-2 text-lg font-semibold border transition w-full',
                        selected === mood.key
                            ? 'bg-blue-100 border-blue-400 text-blue-700 shadow dark:bg-[#232b4a] dark:text-blue-200 dark:border-blue-300'
                            : 'bg-white/40 border-transparent text-gray-500 hover:bg-blue-50 hover:text-blue-700 dark:bg-[#181c2a] dark:text-gray-300 dark:hover:bg-[#232b4a] dark:hover:text-blue-200',
                    ]">
                    <span>{{ mood.emoji }}</span>
                    <span>{{ mood.label }}</span>
                </button>
            </div>
        </transition>
        <button
            class="rounded-full shadow-lg bg-white dark:bg-[#232b4a] border border-blue-300 text-lg p-4 flex items-center justify-center transition hover:scale-110"
            @click="showMenu = !showMenu" :aria-label="'Current mood: ' + moods.find(m => m.key === selected)?.label">
            <span>{{moods.find(m => m.key === selected)?.emoji}}</span>
        </button>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>