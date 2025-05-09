<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

function toggleMobileMenu() {
    mobileMenuOpen.value = !mobileMenuOpen.value
}

function handleScroll() {
    scrolled.value = window.scrollY > 5
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <header
        class="header-container flex items-center bg-gradient-to-b from-[#176293] via-[#17629355] to-transparent h-16 px-4 sticky top-0 z-[100] lg:h-[100px] lg:px-10"
        :class="{ 'scrolled': scrolled }">
        <div data-focus-guard="true" tabindex="-1" class="w-px h-0 p-0 overflow-hidden fixed top-px left-px"></div>
        <div class="w-full">
            <nav aria-label="primary" class="flex justify-between w-full p-0">
                <ul class="flex items-center p-0 gap-x-6 list-none xl:gap-x-12">
                    <li class="h-[60px] w-[76px] relative text-center">
                        <a data-testid="Link-element-type"
                            class="app-logo h-[25px] w-[64px] inline-flex items-center bg-transparent rounded-full border-none text-white font-avenir-next text-base font-medium leading-7 justify-center relative transition duration-300 z-0 cursor-pointer outline-none no-underline min-h-[48px] min-w-[48px] px-3 py-3 md:py-3 md:text-lg lg:h-[60px] lg:w-[85px]"
                            :class="{ 'scrolled': scrolled }" aria-label="Calm Logo - Link to calm.com Homepage"
                            tabindex="0" href="/">
                            <span
                                class="hidden h-[25px] w-[64px] left-1/2 absolute top-1/2 -translate-x-1/2 -translate-y-1/2 transition ease-out duration-300 lg:block lg:h-14 lg:w-14"
                                :class="{ 'opacity-0': scrolled, 'opacity-100': !scrolled }">
                                <!-- SVG logo -->
                                <svg class="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 128 128" width="56" height="56">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M99.5 0h-71C12.76 0 0 12.76 0 28.5v71C0 115.24 12.76 128 28.5 128h71c15.74 0 28.5-12.76 28.5-28.5v-71C128 12.76 115.24 0 99.5 0z"
                                        fill="url(#AppIcon_tsx__a)"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M14.767 48.77a34.046 34.046 0 0 0-4.383 7.148c-1.182 2.609-2.073 5.41-2.544 8.32-2.262 15.965 7.44 18.505 9.094 18.816 8.504.992 14.767-3.643 17.727-6.486 1.067 5.329 6.387 5.393 8.72 2.987.595-.614 1.072-1.368 1.442-2.154 1.384 5.037 5.815 3.322 6.336 3.098 2.47-.926 5.053-4.371 6.88-7.26 1.16 3.962 3.4 8.207 7.703 7.752 2.593-.063 9.095-6.984 9.696-6.081.6.747.76 2.119.72 4.166-.04 2.047 1.584 2.15 2.32 1.947 1.135-.315 1.85-2.557 3.039-4.506.932-1.528 1.627-2.393 2.552-3.411.466-.502 2.577-2.69 4.066-1.947 1.489.742 1.641 2.269 1.744 3.113.114.847.115 1.745.151 2.727-.043 3.39 1.547 3.869 1.996 3.994 3.679.995 3.907-5.933 6.606-8.504.253-.262 2.611-2.7 3.958 1.278 1.945 7.19 7.931 9.878 15.989 5.88 1.495-.742 1.788-1.032 2.604-1.64a.788.788 0 0 0 .317-.626v-.01a.783.783 0 0 0-1.165-.682l-.004.002c-.825.458-3.569 1.376-4.436 1.688-3.253.532-7.235.412-9.197-4.346-.591-1.434-1.176-2.725-2.187-4.082-1.143-1.534-4.885-3.36-8.38-.067-.908.833-1.578 1.755-2.16 2.674-.236.376-.455.754-.662 1.132l-.04-.15c-.309-1.066-1.297-5.005-5.405-5.645-.564-.046-2.85-.304-6.012 3.17-1.105 1.206-2.025 2.488-2.882 3.785l-.003.005c-.151-.705-.334-1.347-.515-1.628-2.687-4.141-6.757-.835-8.51.399-3.927 2.765-5.748 6.483-8.142-1.962a35.352 35.352 0 0 1-.743-3.63c2.386-4.06 7.243-16.413 4.455-24.695-.181-.523-1.153-3.196-3.486-3.024-.335.033-2.993-.247-4.446 7.193-1.36 7.192-1.06 16.462-.73 19.535.038.319.107.948.231 1.77-2.3 3.942-5.32 8.424-7.16 8.632-2.39.272-1.724-1.935-3.184-6.838-.251-.636-1.057-3.667-4.685-3.516-1.774.073-3.653.536-6.218 3.346-4.164 4.562-13.662 11.424-20.455 7.112-.738-.574-4.408-3.58-3.056-12.584.4-2.469 1.158-4.907 2.179-7.183a31.758 31.758 0 0 1 3.73-6.293c6.98-8.585 13.024-9.588 14.217-9.536 3.06 0 3.854 3.966 3.851 3.93a1.266 1.266 0 1 0 2.519-.246c-.006-.035.006-1.296-.518-2.494-.479-1.56-1.858-3.01-2.661-3.545-.99-.69-2.301-1.059-3.846-1.059-4.44 0-10.81 3.042-17.027 10.231zM60.493 61.3c-.033-13.982 1.741-17.155 1.872-16.912.677 1.258 2.135 9.13-1.844 17.735l-.029-.823zM37.474 75.037c.052-3.7 4.652-6.025 5.887-3.45.101.21.17.448.235.682-.214.68-.3 1.778-1.023 3.267-.763 1.573-1.962 2.354-3.005 2.354-1.155 0-2.12-.956-2.093-2.853z"
                                        fill="#fff"></path>
                                    <defs>
                                        <linearGradient id="AppIcon_tsx__a" x1="0" y1="0.5" x2="0" y2="40.608"
                                            gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#60B4E7"></stop>
                                            <stop offset="1" stop-color="#6461E0"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                            <span
                                class="block h-[25px] w-[64px] left-1/2 absolute top-1/2 -translate-x-1/2 -translate-y-1/2 transition ease-out duration-300 lg:block lg:h-[30px] lg:w-[75px]"
                                :class="{ 'opacity-100': scrolled, 'opacity-0': !scrolled }">
                                <!-- SVG logo -->
                                <svg class="w-full h-full" width="1em" height="1em" viewBox="0 0 103 41" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M6.527 9.69a30.584 30.584 0 0 0-3.936 6.42C1.529 18.454.729 20.97.305 23.583c-2.031 14.342 6.683 16.623 8.17 16.902 7.638.892 13.263-3.272 15.922-5.826.959 4.787 5.738 4.845 7.833 2.683.535-.551.962-1.229 1.296-1.934 1.242 4.524 5.222 2.983 5.69 2.783 2.22-.833 4.54-3.927 6.18-6.522 1.042 3.558 3.054 7.372 6.92 6.963 2.329-.056 8.169-6.273 8.709-5.462.54.671.682 1.903.647 3.742-.035 1.839 1.422 1.931 2.083 1.748 1.02-.282 1.662-2.296 2.73-4.047.838-1.372 1.462-2.15 2.292-3.063.42-.452 2.316-2.417 3.653-1.75 1.337.668 1.474 2.039 1.566 2.797.103.76.104 1.567.136 2.45-.039 3.045 1.39 3.475 1.793 3.587 3.305.894 3.51-5.329 5.934-7.639.227-.235 2.345-2.425 3.555 1.148 1.747 6.459 7.124 8.873 14.362 5.282 1.343-.666 1.607-.927 2.34-1.473a.709.709 0 0 0 .284-.562v-.01a.704.704 0 0 0-1.047-.613l-.003.003c-.741.411-3.206 1.235-3.985 1.516-2.921.478-6.499.37-8.26-3.904-.532-1.287-1.058-2.447-1.966-3.666-1.026-1.379-4.388-3.018-7.526-.06-.816.748-1.418 1.576-1.94 2.401-.213.338-.41.677-.595 1.017l-.037-.135c-.277-.957-1.164-4.495-4.854-5.07-.507-.042-2.56-.273-5.401 2.848-.993 1.082-1.819 2.234-2.589 3.4l-.002.004c-.136-.634-.3-1.21-.463-1.463-2.413-3.72-6.069-.75-7.643.358-3.528 2.485-5.164 5.824-7.314-1.762a31.755 31.755 0 0 1-.668-3.26c2.143-3.647 6.506-14.743 4.002-22.182-.163-.47-1.035-2.872-3.131-2.717-.301.03-2.689-.221-3.994 6.461-1.221 6.46-.951 14.787-.655 17.548.033.286.096.851.207 1.59-2.066 3.54-4.778 7.566-6.431 7.753-2.148.244-1.55-1.738-2.86-6.143-.226-.57-.95-3.293-4.209-3.158-1.593.066-3.28.482-5.585 3.006-3.74 4.098-12.272 10.262-18.374 6.388-.663-.515-3.96-3.214-2.745-11.303a26.107 26.107 0 0 1 1.957-6.452 28.527 28.527 0 0 1 3.352-5.652C15.909 4.42 21.339 3.52 22.41 3.566c2.747.001 3.46 3.563 3.459 3.53.06.626.616 1.084 1.241 1.023a1.138 1.138 0 0 0 1.02-1.243c-.004-.031.006-1.165-.464-2.24-.43-1.402-1.67-2.704-2.39-3.185-.89-.62-2.068-.95-3.456-.951-3.987 0-9.708 2.733-15.294 9.19M47.6 20.944c-.029-12.559 1.565-15.41 1.682-15.19.608 1.128 1.918 8.2-1.656 15.93-.01-.247-.018-.493-.026-.74m-20.676 12.34c.047-3.323 4.179-5.412 5.288-3.1.091.19.152.403.211.614-.192.611-.27 1.597-.919 2.935-.685 1.413-1.762 2.114-2.7 2.114-1.037 0-1.903-.859-1.88-2.563"
                                        fill="url(#CalmLogoGradient_tsx__a)"></path>
                                    <defs>
                                        <linearGradient id="CalmLogoGradient_tsx__a" x1="0" y1="0.5" x2="0" y2="40.608"
                                            gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#60B4E7"></stop>
                                            <stop offset="1" stop-color="#6461E0"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                            <span
                                class="block h-[25px] w-[64px] left-1/2 absolute top-1/2 -translate-x-1/2 -translate-y-1/2 transition ease-out duration-300 lg:hidden lg:h-[30px] lg:w-[75px]"
                                :class="{ 'opacity-0': scrolled, 'opacity-100': !scrolled }">
                                <!-- SVG logo -->
                                <svg class="w-full h-full" width="1em" height="1em" viewBox="0 0 36 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M2.615 3.24a10.64 10.64 0 0 0-1.37 2.234c-.37.816-.648 1.69-.795 2.6-.707 4.99 2.325 5.783 2.842 5.88 2.657.31 4.614-1.138 5.54-2.027.333 1.666 1.995 1.686 2.724.934a2.5 2.5 0 0 0 .451-.673c.433 1.574 1.817 1.038 1.98.968.772-.29 1.58-1.366 2.15-2.269.363 1.238 1.063 2.565 2.407 2.423.81-.02 2.843-2.183 3.03-1.9.188.233.238.662.225 1.301-.012.64.495.672.725.608.355-.098.578-.799.95-1.408.291-.477.508-.747.797-1.065.146-.157.806-.841 1.271-.609.465.232.513.71.545.973.036.265.036.545.047.852-.013 1.06.484 1.21.624 1.248 1.15.311 1.221-1.854 2.065-2.657.078-.082.815-.844 1.236.4.608 2.246 2.479 3.086 4.997 1.837.467-.232.559-.323.814-.513a.246.246 0 0 0 .099-.195v-.004a.245.245 0 0 0-.364-.213h-.002c-.257.144-1.115.43-1.386.528-1.016.167-2.26.13-2.874-1.358-.185-.448-.367-.851-.683-1.275-.357-.48-1.527-1.05-2.619-.021-.284.26-.493.548-.675.835a6.577 6.577 0 0 0-.207.354l-.012-.047c-.097-.333-.406-1.564-1.69-1.764-.176-.014-.89-.095-1.878.991a9.34 9.34 0 0 0-.901 1.183v.001c-.048-.22-.105-.42-.162-.509-.84-1.294-2.111-.26-2.659.125-1.227.864-1.796 2.026-2.544-.613a11.03 11.03 0 0 1-.233-1.134c.746-1.27 2.264-5.13 1.393-7.717-.057-.164-.36-1-1.09-.946-.105.01-.935-.077-1.39 2.248-.424 2.248-.33 5.145-.227 6.105.011.1.033.296.072.553-.719 1.232-1.663 2.632-2.238 2.698-.747.085-.539-.605-.995-2.137-.078-.2-.33-1.146-1.464-1.1-.554.024-1.141.168-1.943 1.046-1.301 1.426-4.27 3.57-6.392 2.223-.23-.18-1.378-1.118-.955-3.932a9.082 9.082 0 0 1 .68-2.245A9.924 9.924 0 0 1 3.699 4.09c2.18-2.683 4.07-2.996 4.442-2.98.956 0 1.205 1.24 1.204 1.228a.396.396 0 1 0 .787-.076c-.002-.011.002-.405-.162-.78-.15-.487-.58-.94-.832-1.108-.309-.215-.719-.33-1.202-.33-1.387 0-3.377.95-5.32 3.197Zm14.289 3.916c-.01-4.37.544-5.361.585-5.285.212.393.667 2.853-.576 5.542a24.417 24.417 0 0 1-.01-.257ZM9.71 11.449c.016-1.156 1.453-1.883 1.84-1.078.031.066.052.14.073.213-.067.213-.094.556-.32 1.021-.238.492-.613.736-.94.736-.36 0-.661-.3-.653-.892Z"
                                        fill="#fff"></path>
                                </svg>
                            </span>
                        </a>
                    </li>
                    <li class="hidden flex-shrink-0 xl:block xl:font-bold xl:text-lg">
                        <button
                            class="bg-transparent font-avenir-next font-medium relative transition duration-300 z-0 cursor-pointer px-0 m-0 border-none inline-block min-h-[48px] min-w-[48px] lg:font-bold lg:text-lg"
                            :class="{ 'text-[#383841]': scrolled, 'text-white': !scrolled }">
                            Sleep
                        </button>
                    </li>
                    <li class="hidden flex-shrink-0 xl:block xl:font-bold xl:text-lg">
                        <button
                            class="bg-transparent font-avenir-next font-medium relative transition duration-300 z-0 cursor-pointer px-0 m-0 border-none inline-block min-h-[48px] min-w-[48px] lg:font-bold lg:text-lg"
                            :class="{ 'text-[#383841]': scrolled, 'text-white': !scrolled }">
                            Stress & Anxiety
                        </button>
                    </li>
                    <li class="hidden flex-shrink-0 xl:block xl:font-bold xl:text-lg">
                        <button
                            class="bg-transparent font-avenir-next font-medium relative transition duration-300 z-0 cursor-pointer px-0 m-0 border-none inline-block min-h-[48px] min-w-[48px] lg:font-bold lg:text-lg"
                            :class="{ 'text-[#383841]': scrolled, 'text-white': !scrolled }">
                            Mindfulness
                        </button>
                    </li>
                </ul>
                <ul class="flex items-center p-0 gap-x-6 list-none xl:gap-x-12">
                    <li class="hidden flex-shrink-0 lg:block">
                        <button
                            class="bg-transparent font-avenir-next font-medium relative transition duration-300 z-0 cursor-pointer px-0 m-0 border-none inline-block min-h-[48px] min-w-[48px] lg:font-bold lg:text-lg"
                            :class="{ 'text-[#383841]': scrolled, 'text-white': !scrolled }">
                            Screening
                        </button>
                    </li>
                    <li class="hidden flex-shrink-0 lg:block">
                        <button
                            class="bg-transparent font-avenir-next font-medium relative transition duration-300 z-0 cursor-pointer px-0 m-0 border-none inline-block min-h-[48px] min-w-[48px] lg:font-bold lg:text-lg"
                            :class="{ 'text-[#383841]': scrolled, 'text-white': !scrolled }">
                            Calm Health
                        </button>
                    </li>
                    <li class="hidden flex-shrink-0 lg:block">
                        <button data-testid="desktopnav-login-button" aria-label="Log In"
                            class="bg-transparent font-avenir-next font-medium relative transition duration-300 z-0 cursor-pointer px-0 m-0 border-none inline-block min-h-[48px] min-w-[48px] lg:font-bold lg:text-lg"
                            :class="{ 'text-[#383841]': scrolled, 'text-white': !scrolled }">
                            Log In
                        </button>
                    </li>
                    <li class="flex-0 w-[180px] text-center max-w-[180px]">
                        <button data-testid="button-element-type"
                            class="inline-flex items-center font-avenir-next font-bold rounded-full border-none justify-center relative transition duration-300 z-0 cursor-pointer w-full outline-none no-underline min-h-[48px] min-w-[48px] px-[1.11rem] py-3.5 text-lg"
                            :class="{ 'bg-gradient-to-b from-[#2477AA] to-[#6461E0] text-white': scrolled, 'bg-white text-gray-800': !scrolled }">
                            Try Calm for Free
                        </button>
                    </li>
                    <li class="block xl:hidden">
                        <button data-testid="button-element-type" aria-label="Open Mobile menu" aria-expanded="false"
                            aria-controls="mobile-menu"
                            class="inline-flex items-center justify-center relative transition ease-out duration-300 cursor-pointer outline-none no-underline min-h-[48px] min-w-[48px] rounded-full bg-transparent border-none shadow-none text-inherit font-inherit leading-normal appearance-none px-0 py-0 md:py-3 md:text-lg"
                            :class="{
                                'menu-icon z-[990]': !mobileMenuOpen,
                                'close-icon z-[1000]': mobileMenuOpen,
                                'scrolled': scrolled
                            }" @click="toggleMobileMenu">
                            <div class="absolute w-8 h-[2.5px] bg-white rounded-[2.5px] transition ease-out duration-300"
                                :style="!mobileMenuOpen ? `transform: translate3d(0px, -8px, 0px);` : `transform: translate3d(0px, 0px, 0px) rotate(45deg);`">
                            </div>
                            <div class="absolute w-8 h-[2.5px] bg-white rounded-[2.5px] transition ease-out duration-300"
                                :style="!mobileMenuOpen ? `transform: translate3d(0px, 0px, 0px);` : `transform: translate3d(-100%, 0px, 0px) scale(0);`">
                            </div>
                            <div class="absolute w-8 h-[2.5px] bg-white rounded-[2.5px] transition ease-out duration-300"
                                :style="!mobileMenuOpen ? `transform: translate3d(0px, 8px, 0px);` : `transform: translate3d(0px, 0px, 0px) rotate(-45deg);`">
                            </div>
                        </button>
                    </li>
                </ul>
            </nav>
            <nav id="mobile-menu" aria-label="Mobile navigation menu" aria-expanded="false" :class="[
                'fixed inset-0 flex flex-col items-start justify-start text-white h-screen overflow-scroll transition ease-out duration-300 z-[999] bg-gradient-to-b from-[#60b4e7] to-[#6461e0] py-16',
                mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            ]" :style="{ transform: mobileMenuOpen ? 'translate3d(0,0,0)' : 'translate3d(100%,0,0)' }">
                <ul class="pl-4 list-none">
                    <li class="mb-8">
                        <button
                            class="bg-transparent text-white font-avenir-next font-medium text-[1.5rem] md:text-[1.6875rem] px-0 py-0 m-0 border-none inline-block relative transition ease-out duration-300 z-0 cursor-pointer">
                            Sleep
                        </button>
                    </li>
                    <li class="mb-8">
                        <button
                            class="bg-transparent text-white font-avenir-next font-medium text-[1.5rem] md:text-[1.6875rem] px-0 py-0 m-0 border-none inline-block relative transition ease-out duration-300 z-0 cursor-pointer">Stress
                            &amp;
                            Anxiety</button>
                    </li>
                    <li class="mb-8">
                        <button
                            class="bg-transparent text-white font-avenir-next font-medium text-[1.5rem] md:text-[1.6875rem] px-0 py-0 m-0 border-none inline-block relative transition ease-out duration-300 z-0 cursor-pointer">Mindfulness</button>
                    </li>
                    <li class="mb-8">
                        <button
                            class="bg-transparent text-white font-avenir-next font-medium text-[1.5rem] md:text-[1.6875rem] px-0 py-0 m-0 border-none inline-block relative transition ease-out duration-300 z-0 cursor-pointer">Screening</button>
                    </li>
                    <li class="mb-8">
                        <button
                            class="bg-transparent text-white font-avenir-next font-medium text-[1.5rem] md:text-[1.6875rem] px-0 py-0 m-0 border-none inline-block relative transition ease-out duration-300 z-0 cursor-pointer">Calm
                            Health</button>
                    </li>
                    <li class="mb-8">
                        <button
                            class="bg-transparent text-white font-avenir-next font-medium text-[1.5rem] md:text-[1.6875rem] px-0 py-0 m-0 border-none inline-block relative transition ease-out duration-300 z-0 cursor-pointer">Log
                            In</button>
                    </li>
                </ul>
            </nav>
        </div>
        <div data-focus-guard="true" tabindex="-1" class="w-px h-0 p-0 overflow-hidden fixed top-px left-px"></div>
    </header>
</template>

<style scoped>
.app-logo::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.15);
    border-radius: 100px;
    opacity: 0;
    transition: 0.3s ease-out;
    z-index: -1;
}

.app-logo::after {
    content: "";
    display: block;
    position: absolute;
    inset: 0px;
    border: 2px solid rgb(255, 255, 255);
    border-radius: 100px;
    transition: margin 0.3s ease-out, opacity 0.3s ease-out;
    margin: 0px;
    opacity: 0;
}

.app-logo.scrolled::after {
    border: 2px solid rgb(26, 62, 111);
}

.menu-icon::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.15);
    box-shadow: none;
    border-radius: 100px;
    opacity: 0;
    transition: 0.3s ease-out;
    z-index: -1;
}

.menu-icon::after {
    content: "";
    display: block;
    position: absolute;
    inset: 0px;
    border: 2px solid rgb(255, 255, 255);
    border-radius: 100px;
    transition: margin 0.3s ease-out, opacity 0.3s ease-out;
    margin: 0px;
    opacity: 0;
    box-shadow: none;
}

.menu-icon.scrolled div {
    @apply bg-black
}

.header-container::after {
    @apply lg:h-[100px];
    background: rgb(255, 255, 255);
    inset: 0px;
    content: "";
    height: 64px;
    opacity: 0;
    position: absolute;
    transform: translateY(-100%);
    transition: 0.3s ease-out;
    z-index: -1;
}

.header-container.scrolled::after {
    @apply lg:h-[100px] lg:py-[50px];
    background: rgb(255, 255, 255);
    inset: 0px;
    content: "";
    height: 64px;
    opacity: 1;
    position: absolute;
    transform: translateY(0%);
    transition: 0.3s ease-out;
    z-index: -1;
}
</style>
