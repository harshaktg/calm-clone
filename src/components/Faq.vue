<script setup lang="ts">
import { ref } from 'vue'

const faqs = [
    {
        category: 'GENERAL',
        items: [
            {
                question: 'What is Calm?',
                answer: `<p class="text-[#1c1c1c] text-lg mb-4 leading-7">Calm is the #1 mental health app designed to help you manage stress, sleep better, and live a happier, healthier life. Our research-based tools help you build life-changing habits to support your mental health. If you're having trouble falling asleep, our 500+ <a class="text-[#1a3e6f] underline" href="/app/class/sleep-popular-sleep-stories">Sleep Stories</a>®, soundscapes, and guided <a class="text-[#1a3e6f] underline" href="/app/sleep/meditations">sleep meditations</a> can lull you to sleep. If you're spiraling in negative thoughts and need immediate relief, our 60-second Breathe Bubble grounds you in the moment and helps your body return to a state of relaxation. If you're overwhelmed at work and need a breather, our <a class="text-[#1a3e6f] underline" href="/app/class/work-managing-overwhelm">stress and burnout specialists</a> can guide you through exercises to help calm your mind. We're here for you whenever or wherever you need us with more content and tools being added monthly.</p>`
            },
            {
                question: `What's included in a Calm subscription?`,
                answer: `<p class="text-[#1c1c1c] text-lg mb-4 leading-7">A Calm subscription unlocks our full library of <a class="text-[#1a3e6f] underline" href="/app/class/meditate-quick-and-easy">meditations</a>, <a class="text-[#1a3e6f] underline" href="/app/class/sleep-popular-sleep-stories">Sleep Stories</a>, <a class="text-[#1a3e6f] underline" href="/app/music">music</a>, and other features. The subscription includes:</p><ul class="list-disc pl-10 mb-4 text-lg"><li class="list-item">Multiple original <a class="text-[#1a3e6f] underline" href="/app/dailies">daily offerings</a> from a range of teachers to give your day a dose of wisdom, gratitude and encouragement</li><li class="list-item">Hours of <a class="text-[#1a3e6f] underline" href="/app/class/meditate-quick-and-easy">guided meditations</a> covering sleep, anxiety, stress, gratitude, and much more</li><li class="list-item">Our entire library of more than 500+ <a class="text-[#1a3e6f] underline" href="/app/class/sleep-popular-sleep-stories">Sleep Stories</a>, with new stories added every week</li><li class="list-item">Exclusive <a class="text-[#1a3e6f] underline" href="/app/music">music</a> tracks for focus, relaxation, and sleep</li></ul>`
            },
            {
                question: 'Where should I get started once I download the app?',
                answer: `<p class="text-[#1c1c1c] text-lg mb-4 leading-7">If you have come to Calm to learn relaxation techniques and improve aspects of your mental health, we recommend beginning with the <a class="text-[#1a3e6f] underline" href="/app/program/qK3IeqhiJP">7 Days of Calm</a>, our introductory program that offers the basics of meditation, and then move on to the <a class="text-[#1a3e6f] underline" href="/app/program/YAcrQol9Wv">21 Days of Calm</a>. With that foundation, you can explore our library of sessions and programs, which address themes such as <a class="text-[#1a3e6f] underline" href="/app/meditate/anxiety">anxiety</a>, <a class="text-[#1a3e6f] underline" href="/app/sleep">sleep</a>, <a class="text-[#1a3e6f] underline" href="/app/meditate/focus">focus</a>, and <a class="text-[#1a3e6f] underline" href="/app/meditate/self-care">gratitude</a>. Additionally, for moments of acute stress or anxiety, we offer in-the-moment calming exercises via our <a class="text-[#1a3e6f] underline" href="/app/program/_kCx96PwDb">Panic SOS</a>, <a class="text-[#1a3e6f] underline" href="/app/program/whzIxMJxVR">Body Scan</a>, and breathing exercise features.</p><p>If you have come to Calm to improve your sleep, we have a collection of over 500 <a class="text-[#1a3e6f] underline" href="/app/class/sleep-popular-sleep-stories">Sleep Stories</a> to help you drift off to restful sleep, ranging from <a class="text-[#1a3e6f] underline" href="/app/player/h5JpJ0Fqb2">classic literature</a> to <a class="text-[#1a3e6f] underline" href="/app/class/tagged-sleep-nature">nature essays</a>, <a class="text-[#1a3e6f] underline" href="/app/class/tagged-sleep-kids">children's tales</a>, scientific articles, and more. We update our Sleep Stories selection with new options to listen to every week. We also have a collection of soothing Sleep Music.</p>`
            },
            {
                question: 'What devices support the Calm app?',
                answer: `<p class="text-[#1c1c1c] text-lg mb-4 leading-7">Calm is available on iOS, Android, Web, in addition to Apple TV, Apple Watch, Google WearOS, Samsung Health, Samsung TV and Sonos.</p>`
            },
            {
                question: 'How do I cancel?',
                answer: `<p class="text-[#1c1c1c] text-lg mb-4 leading-7">You can cancel your Calm subscription's auto-renewal or free trial at any time.</p><p>To cancel your Calm subscription:</p><ol class="list-decimal pl-10 mb-4 text-lg"><li class="list-item">Tap 'Profile' on your app's Home screen.</li><li class="list-item">Tap the 'Settings' gear icon in the top left corner of your screen.</li><li class="list-item">Tap 'Manage Subscription' and follow the instructions here to cancel your subscription.</li><li class="list-item">For subscriptions purchased through Apple and Google Play, tap the word 'here' on your Manage Subscription page to be redirected to your device's subscription settings.</li></ol>`
            }
        ]
    },
    {
        category: 'MEDITATION & MINDFULNESS',
        items: [
            {
                question: 'What is meditation?',
                answer: `<p class="text-[#1c1c1c] text-lg mb-4 leading-7">Meditation is the practice of allowing thoughts to come and go, as you learn to recognize and release them without judgment. Studies show that a long-term meditation practice can actually help shift your nervous system out of fight or flight and into the relaxed parasympathetic mode producing a wide array of benefits* including:</p><ul class="list-disc pl-10 mb-4 text-lg"><li class="list-item">Decreased anxiety and depression symptoms</li><li class="list-item">Chronic pain management</li><li class="list-item">Lower stress levels</li><li class="list-item">Improved sleep quality</li></ul>`
            },
            {
                question: 'What is mindfulness?',
                answer: `<p class="text-[#1c1c1c] text-lg mb-4 leading-7">Mindfulness is a practice that involves intentionally bringing one's attention and awareness to the present moment without judgment. It's about being fully present and engaged in the here and now, rather than dwelling on the past or worrying about the future. Mindfulness encourages a non-judgmental attitude towards one's thoughts, emotions and sensations, allowing them to arise and pass without any added stress. By cultivating mindfulness, people often develop a greater sense of clarity, calmness and overall wellbeing, as well as enhance their ability to respond skillfully to the challenges of life.</p>`
            }
        ]
    },
    {
        category: 'STRESS & ANXIETY',
        items: [
            {
                question: 'What causes stress and anxiety?',
                answer: `<p class="text-[#1c1c1c] text-lg mb-4 leading-7">Stress and anxiety can have various causes and can differ greatly from person to person. Here are a few common factors that contribute to stress and anxiety:</p><ol class="list-decimal pl-10 mb-4 text-lg"><li class="list-item">Major life changes: Significant life events such as moving, getting married (or divorced), starting a new job or experiencing the loss of a loved one can trigger it.</li><li class="list-item">Work or school pressure: High workloads, tight deadlines, challenging bosses, or work pressure can lead to stress and anxiety.</li><li class="list-item">Financial challenges: Job loss, debt, or just struggling to make ends meet can be a significant source of stress and anxiety.</li><li class="list-item">Relationships: Whether romantic, familial or social, strain or conflict in relationships can cause stress and anxiety.</li><li class="list-item">Health concerns: Managing chronic illness, physical pain or battling a health condition can be a cause, as well.</li><li class="list-item">Traumatic experiences: Experiencing a traumatic event, such as an accident, abuse or even a natural disaster can lead to anxiety-related conditions.</li><li class="list-item">Uncertainty and change: Experiencing frequent change (even positive change!) or feeling uncertain about the future can be a common cause of anxiety.</li></ol><p>It's important to note that not everyone experiences stress and anxiety in the same way. If you're dealing with stress and anxiety, it's recommended to seek support from a mental health professional who can provide personalized guidance.</p>`
            },
            {
                question: 'How can I manage my stress and anxiety?',
                answer: `<p class="text-[#1c1c1c] text-lg mb-4 leading-7">Once you're in the Calm app, we recommend using a Breathing Bubble exercise if you're looking for immediate stress or anxiety relief. Breathwork elicits the body's relaxation response which reduces tension and lowers stress.</p><p>We also have other content programs, including our <a class="text-[#1a3e6f] underline" href="/app/program/3ePnY22GC6">Overcome Stress and Anxiety</a> collection in partnership with clinical psychologist, Dr. Julie Smith. In this series, Dr. Julie guides listeners through high stress moments in real time, including panic attacks, negative thought spirals, and more.</p><p>In addition to Dr. Julie's series, you can find more guided breathing exercises and meditations in our <a class="text-[#1a3e6f] underline" href="/app/meditate/anxiety">Reduce Stress &amp; Anxiety</a> collection. Let experts such as <a class="text-[#1a3e6f] underline" href="/app/class/popular-daily-jay">Jay Shetty</a>, <a class="text-[#1a3e6f] underline" href="/app/class/practice-tips-with-tamara">Tamara Levitt</a>, and <a class="text-[#1a3e6f] underline" href="/app/player/0ADJHJs5a6">Chibs Okereke</a> help guide you into peaceful mindfulness and relaxation.</p>`
            }
        ]
    },
    {
        category: 'SLEEP',
        items: [
            {
                question: 'Why do I have trouble sleeping?',
                answer: `<p class="text-[#1c1c1c] text-lg mb-4 leading-7">There can be various reasons why you may be experiencing trouble sleeping. Here are a few common factors that can contribute to sleep difficulties:</p><ol class="list-decimal pl-10 mb-4 text-lg"><li class="list-item">Stress and Anxiety: High levels of stress or anxiety can make it difficult to relax and fall asleep. Racing thoughts, worry, or an overactive mind can keep you awake at night.</li><li class="list-item">Poor Sleep Habits: Irregular sleep patterns, inconsistent bedtime routines, excessive caffeine or alcohol consumption, and engaging in stimulating activities before bed can disrupt your sleep.</li><li class="list-item">Environmental Factors: Uncomfortable sleeping environment, excessive noise, extreme temperatures, or inadequate lighting can interfere with your ability to fall asleep or stay asleep.</li><li class="list-item">Medical Conditions: Certain medical conditions, such as chronic pain, sleep apnea, restless leg syndrome, or hormonal imbalances, can disrupt your sleep.</li><li class="list-item">Mental Health Issues: Depression, bipolar disorder, post-traumatic stress disorder (PTSD), and other mental health disorders can affect sleep patterns and quality.</li></ol><p>If you're consistently having trouble sleeping, it's advisable to consult with a healthcare professional who can help assess your specific situation and provide guidance that's tailored to your needs.</p>`
            },
            {
                question: 'How can I sleep better naturally?',
                answer: `<p class="text-[#1c1c1c] text-lg mb-4 leading-7">In the Calm app, we recommend starting with our Fall Asleep collection, which features our most popular <a class="text-[#1a3e6f] underline" href="/app/class/sleep-popular-sleep-stories">Sleep Stories</a>®, <a class="text-[#1a3e6f] underline" href="/app/class/music-mood-wind-down">soundscapes</a>, <a class="text-[#1a3e6f] underline" href="/app/music">music</a>, and <a class="text-[#1a3e6f] underline" href="/app/meditate">meditations</a> based on your goals:</p><ul class="list-disc pl-10 mb-4 text-lg"><li class="list-item">Help falling asleep: natural sleep aids</li><li class="list-item">Getting back to sleep: reactive tools used to soothe and lull you back to sleep</li><li class="list-item">Unwinding before bed: proactive tools to help start a sleep routine and focuses on sleep hygiene - this means focusing on building habits and an environment designed for optimal sleep</li></ul><p>Our most popular sleep offering is our <a class="text-[#1a3e6f] underline" href="/app/class/sleep-popular-sleep-stories">Sleep Stories</a>®, which are bedtime stories designed to help you drift off to sleep. Many of our narrators are also names you may already be familiar with, from artists like <a class="text-[#1a3e6f] underline" href="/app/player/2QQEAZ7IsG">Harry Styles</a> and <a class="text-[#1a3e6f] underline" href="/app/program/nVKU_KxPlm">Michael Bublé</a> to actors and actresses such as <a class="text-[#1a3e6f] underline" href="/app/player/TvmOdIeBVj">Jennifer Garner</a> and <a class="text-[#1a3e6f] underline" href="/app/feeds/narrator-u141IqAGf">Matthew McConaughey</a>.</p><p>With over 500 Sleep Stories® in our library, we have a library fit for both adults and kids, making our app something the whole family can enjoy. Kids can enjoy exclusive Sleep Stories® featuring favorite characters such as <a class="text-[#1a3e6f] underline" href="/app/player/NK30cxIQzy">Peppa Pig</a>, <a class="text-[#1a3e6f] underline" href="/app/player/sjWv03z4KI">Minions</a>, <a class="text-[#1a3e6f] underline" href="/app/program/SjF_l5VVyT">Winnie the Pooh</a>, <a class="text-[#1a3e6f] underline" href="/app/player/YHgB8hl8yN">Transformers</a>, and more.</p><p>In addition to Sleep Stories®, we also have soothing soundscapes and music that have been sonically-engineered to help you sleep. Choose from nature sounds such as <a class="text-[#1a3e6f] underline" href="/app/player/1nLymYtw9L">rainstorms</a> and <a class="text-[#1a3e6f] underline" href="/app/player/D7lklLoUJ">ocean waves</a>, to different frequency pitches including <a class="text-[#1a3e6f] underline" href="/app/player/61i9y0yxqI">white</a>, <a class="text-[#1a3e6f] underline" href="/app/player/cqa16VacfZ">brown</a>, and <a class="text-[#1a3e6f] underline" href="/app/player/VI5Swv6gaz">green</a> noise. With over 500 different options and new offerings being added monthly, our Sleep Sounds library has something for everyone—whether you're looking to relax, focus, or fall asleep.</p><p>If you're looking for something that provides a bit more guidance, Calm also offers a variety of sleep meditations and breathwork. These exercises help lower the heart rate, which shifts your nervous system out of fight or flight and into a relaxed parasympathetic mode, enabling your body to fall into a deeper sleep.</p><p>Lastly, we also have a Sleep Check-In feature which offers a new way to track your sleep. Check in with your nightly sleep quality, and we'll show you patterns to guide you towards better sleep habits and health.</p>`
            },
            {
                question: 'Are Sleep Stories® good for kids and adults?',
                answer: `<p class="text-[#1c1c1c] text-lg mb-4 leading-7">Absolutely! In a Calm Science study of 900+ parents (US) who use Calm Kids with their kids at least once a week, parents reported they had lower stress and slept better, and that their kids fell asleep faster and had less stress and anxiety.</p><ul class="list-disc pl-10 mb-4 text-lg"><li class="list-item">74% felt that Calm Kids helped lower their parenting-stress</li><li class="list-item">63% felt that Calm Kids helped their own sleep</li><li class="list-item">95% say Calm Kids Sleep Stories® help their child fall asleep faster</li><li>75% say Calm Kids meditations help their child</li></ul>`
            }
        ]
    },
    {
        category: 'SOUNDSCAPES',
        items: [
            {
                question: 'How do different sound frequencies affect your brain?',
                answer: `<p class="text-[#1c1c1c] text-lg mb-4 leading-7">Although it's commonly known now that there are different 'colors' of noises, it might not be known what the difference between them are. Different types of noise have distinct frequency characteristics, which means that the energy of the sound is distributed differently across the frequency spectrum. As a result, how you perceive each noise can affect the use-case of each frequency.</p><p>White noise has equal power in every frequency band, between 20 hertz and 20,000 hertz, and gives your brain something relaxing to focus on; this can help block out distractions and make it perfect for sleep. Similarly, brown noise has more energy at lower frequencies, giving it a deep, 'booming' noise. It is commonly used for relaxation and sleep.</p><p>Pink noise has less energy at higher frequencies. Pink noise is often described as having a "fuller" sound compared to white noise. Naturally occurring examples of pink noise are rustling leaves, wind, and heartbeats.</p><p>Lastly, it is theorized that green noise is calming because it simulates the spectrum of natural noise without human-made noises; this noise has more energy at mid-range frequencies and is sometimes used in sound masking for tinnitus.</p>`
            },
            {
                question: 'How do binaural beats help improve focus and reduce anxiety?',
                answer: `<p class="text-[#1c1c1c] text-lg mb-4 leading-7">Binaural beats are a type of sound therapy that involves playing two different tones in each ear, creating a perceived beat frequency that is thought to affect brain waves. The idea is that when the brain hears two slightly different frequencies, it tries to "reconcile" them by producing a third frequency that is the difference between the two. This is known as the "frequency following response," and it is believed to influence brain waves in a way that can be beneficial for focus and relaxation.</p><p>Some research suggests that listening to binaural beats can help improve focus and reduce anxiety by promoting a state of relaxation and reducing stress levels. One theory is that binaural beats can influence the production of alpha waves in the brain, which are associated with relaxation and reduced anxiety.</p><p>Another theory is that binaural beats can help entrain the brain to a specific frequency associated with improved focus or creativity. For example, some studies have suggested that listening to binaural beats in the alpha or theta frequency range can help improve cognitive performance and enhance creativity.</p><p>However, while some research has shown potential benefits of binaural beats for certain conditions, such as anxiety and depression, the evidence is not yet conclusive.</p>`
            }
        ]
    }
]

const open = ref(faqs.map(cat => cat.items.map(() => false)))

function toggle(catIdx: number, qIdx: number) {
    open.value[catIdx][qIdx] = !open.value[catIdx][qIdx]
}
</script>

<template>
    <section
        class="faq-container mt-0 mx-auto max-w-[1440px] pt-0 px-5 pb-[60px] text-center lg:pt-0 lg:px-[136px] lg:pb-[100px]">
        <h2 class="text-2xl mb-8 leading-[60px] text-[#1a3e6f] font-bold lg:text-4xl" id="faq-heading">Frequently Asked
            Questions</h2>
        <div aria-labelledby="faq-heading" class="list-none pl-0">
            <template v-for="(cat, catIdx) in faqs" :key="cat.category">
                <h3
                    class="font-bold text-[#1a3e6f] text-xl mx-0 mb-4 text-left mt-10 lg:text-[22.5px] lg:mb-[20px] lg:mt-[40px] first-of-type:mt-0">
                    {{ cat.category }}</h3>
                <div v-for="(item, qIdx) in cat.items" :key="item.question" class="question-item">
                    <span :id="`react-aria-${catIdx * 100 + qIdx * 2 + 4}`" class="Collapsible__trigger"
                        :class="{ 'is-closed': !open[catIdx][qIdx], 'is-open': open[catIdx][qIdx] }" tabindex="0"
                        :aria-expanded="open[catIdx][qIdx] ? 'true' : 'false'" aria-disabled="false"
                        :aria-controls="`react-aria-${catIdx * 100 + qIdx * 2 + 3}`" role="button"
                        @click="toggle(catIdx, qIdx)">
                        <div class="flex cursor-pointer items-center min-h-12 justify-between flex-row-reverse">
                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center">
                                <svg class="caret-icon" :class="{ 'open': open[catIdx][qIdx] }" width="1em" height="1em"
                                    viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M7.059 6.073 12.76.371a.614.614 0 1 1 .868.868l-6.57 6.57-6.57-6.57a.612.612 0 0 1 0-.868c.24-.24.628-.24.867 0L7.06 6.073Z"
                                        fill="#C6C6C6"></path>
                                </svg>
                            </span>
                            <span class="text-lg font-bold pr-4">{{ item.question }}</span>
                        </div>
                    </span>
                    <div :id="`react-aria-${catIdx * 100 + qIdx * 2 + 3}`"
                        class="Collapsible__contentOuter text-[#1c1c1c] hover:text-[#1c1c1c]"
                        :style="open[catIdx][qIdx] ? 'height:auto;overflow:visible' : 'height:0;overflow:hidden;transition:height 200ms ease-in-out;'"
                        role="region" :aria-labelledby="`react-aria-${catIdx * 100 + qIdx * 2 + 4}`">
                        <div class="Collapsible__contentInner">
                            <div class="sc-dCFHLb bYgPDL">
                                <div v-html="item.answer"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </section>
</template>

<style scoped>
.question-item {
    @apply text-left py-1.5 px-0 text-[#1c1c1c] hover:text-[#1a3e6f];
    border-top: 1px solid rgba(0, 0, 0, 0.2);
}

.caret-icon {
    @apply w-4 h-4;
    transition: transform 0.2s ease-in-out;
    transform: rotate(0deg);
}

.caret-icon path {
    @apply w-full h-full;
    fill: rgb(34, 117, 211);
}

.caret-icon.open {
    transform: rotate(180deg);
}
</style>