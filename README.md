﻿# 🎬 Netflix-GPT 🎥

A Netflix-inspired movie streaming web app enhanced with GPT-powered search. Built using **React**, **Redux**, **Firebase**, and custom **TMDB API hooks**, this project mimics the core UI/UX of Netflix while offering smart search functionality using GPT-like behavior.

---

## 🚀 Features

- 🔐 **User Authentication** (Sign In / Sign Up) via Firebase
- 🧠 **GPT Movie Search** – toggleable GPT-based recommendation and search
- 🎞️ **Dynamic Movie Sections** – Now Playing, Popular, Top Rated, Upcoming
- 🎨 **Responsive UI** with Tailwind CSS
- ⚛️ **State Management** with Redux Toolkit
- 🔁 **Auto Redirects**:
  - Authenticated users are redirected from `/login` to `/browse`
  - Unauthenticated users cannot access `/browse`
- 💾 **Firebase Integration** for authentication and session persistence

---

## 🛠️ Tech Stack

| Technology    | Purpose                       |
| ------------- | ----------------------------- |
| React         | UI Framework                  |
| Redux Toolkit | Global State Management       |
| Firebase Auth | User Authentication           |
| Tailwind CSS  | Responsive Styling            |
| TMDB API      | Movie Data                    |
| Vite          | Fast React Development Server |
| OpenAI        | GPT-powered search            |

---

## 🌐 Live Demo

🔗 **[Click here to view the deployed project](https://netflix-gpt-f52b9.web.app)**

> ⚠️ **Note:** This project requires a **VPN** to be turned on in order for TMDB API to work properly.

---

## 🖼️ Screenshots

| Home | Browse |
|------|--------|
| ![Home](https://raw.githubusercontent.com/srikanthreddy-2910/Netflix-gpt/refs/heads/main/src/assets/Screenshot%202025-07-08%20183421.png) | ![Browse](https://raw.githubusercontent.com/srikanthreddy-2910/Netflix-gpt/refs/heads/main/src/assets/Screenshot%202025-07-08%20184357.png) |

---


## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/srikanthreddy-2910/Netflix-gpt

# Navigate to the project directory
cd netflix-gpt

# Install dependencies
npm install

# Start the development server
npm run dev
