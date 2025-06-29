# 🎬 Netflix-GPT 🎥

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

## 📦 Installation

1. **Clone the repository**

   git clone https://github.com/srikanthreddy-2910/Netflix-gpt

   cd netflix-gpt

   npm install
