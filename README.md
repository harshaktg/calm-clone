# 🌙 Calm Clone — Hackathon Submission

A modern, responsive recreation of the **Calm landing page**, rebuilt using **Vue 3**, **TypeScript**, and **Tailwind CSS**. This project replicates Calm's serene design while introducing personalized mood-based theming and ambient soundscapes to create a deeply immersive user experience.

---

## 🚀 Features

### ✅ Cloned from Calm
- Pixel-perfect replica of the **Calm landing page**
- Recreated sections: Hero, Features, Product Highlights, Testimonials, Footer

> ℹ️ **Note:** The original Calm website is a fully static marketing page.  
This project introduces **dynamic personalization features** for an enhanced interactive experience.

---

### ✨ Enhancements
- **Dynamic Mood-Based Themes**  
  - Choose a mood (e.g., Calm, Energetic, Sleepy, Focused)
  - Instantly changes the site's background gradients and color palette
  - Smooth animated transitions between moods
  - **Persisted Mood Preference**: The selected mood is saved in localStorage and restored on revisit

- **Ambient Soundscapes**  
  - Plays curated ambient sounds based on the selected mood
  - Examples: Ocean waves, Rain, Forest sounds, Wind chimes
  - Built-in play/pause functionality tied to mood selection

- **Polished UX Improvements**  
  - Fully responsive mobile-first design
  - Smooth scroll behavior
  - Subtle hover animations and accessibility focus

---

## 🧠 Tech Stack

| Tech | Description |
|------|-------------|
| [Vue 3](https://vuejs.org/) | Composition API with `<script setup>` |
| [TypeScript](https://www.typescriptlang.org/) | Strong typing and maintainability |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework for responsive design |
| [Vite](https://vitejs.dev/) | High-speed build tool and dev server |

---

## 🚧 Challenges Faced

- 🎵 **Seamless Audio Playback with Mood Changes:**  
  Implementing dynamic ambient audio that starts and stops based on mood selection required careful state management to avoid overlapping or leaking audio streams.  
  Vue's reactive system and event-based controls were leveraged to ensure smooth transitions between different sound environments.

- ⚙️ **Browser Autoplay Restrictions:**  
  Due to modern browser security restrictions, audio playback cannot start automatically on page load without explicit user interaction with the DOM (such as clicking a button).  
  Therefore, ambient soundscapes are only activated after the user selects a mood, ensuring compliance with browser autoplay policies.

---

## 📦 Getting Started

### Clone the repo
```bash
git clone https://github.com/your-username/calm-clone.git
cd calm-clone
```

## Install dependencies

```bash
pnpm install
```

## Run in development

```bash
pnpm dev
```

## Build for production

```bash
pnpm build
```

---

## 📱 UX Highlights

- Fully responsive design optimized for mobile, tablet, and desktop
- Dynamic mood selection with visually adaptive themes
- Ambient soundscapes to enhance emotional engagement
- Smooth transitions and animated feedback on user actions
- Persisted mood preferences across sessions

---

## 📸 Screenshots

Add screenshots showcasing:
- Mood selector in action
- Different theme variations (Calm, Energetic, Sleepy, Focused)
- Responsive mobile layout
- Ambient music player UI (if applicable)

---

## 🏁 Final Notes

This clone is built as a Pixel Plus Hackathon submission to showcase frontend precision, creative UX personalization, and immersive sensory design — extending beyond the original Calm landing page experience.

---

## 📝 License

MIT

---

## 🔗 Links

[**Live Demo:**](https://calm-clone-three.vercel.app/)

Built with ❤️ for mindfulness, music, and innovation.
