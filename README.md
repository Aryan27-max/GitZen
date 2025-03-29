# 🧠 GitZen – Elevate Your Dev Journey

Welcome to **GitZen**, an AI-powered developer platform designed to enhance your productivity and skillset with a futuristic, Matrix-themed interface.

> From AI Git assistants to multiplayer code duels – GitZen is your one-stop dev hub. 💡

---

## 🚀 Live Features

### 1. 🤖 **GitHelpBot**
Your AI assistant for all Git commands and workflows. Ask anything Git-related and get instant, accurate help.

### 2. 📅 **CodeScheduler**
Create personalized daily or weekly coding timetables to stay focused and on track.

### 3. ⚔️ **DevDuel**
Challenge your friends or random players in **1v1 or multiplayer** coding duels with real-time scoreboards and timed constraints.

### 4. 📁 **Snippify**
Save, search, and organize your favorite code snippets by tags and categories across multiple languages.

### 5. ✨ **CleanCode Coach**
Paste your messy code and watch it get auto-formatted, optimized, and explained using AI.

### 6. 📄 **Resume Builder**
Build a professional, developer-focused resume and **export it as PDF**, complete with live preview and styling.

---

## 🛠 Tech Stack

### 🎯 Frontend
- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- ShadCN UI
- Framer Motion for animations

### ⚙️ Backend (FastAPI)
- [FastAPI](https://fastapi.tiangolo.com/) – High performance backend
- Pydantic – Data validation
- Uvicorn – ASGI server
- Modular API structure (`chatbot.py`, `devduel.py`, `github.py`, etc.)
- `.env` with **GitHub Token** + **OpenAI API Key** integration
- Routes:
  - `/chatbot`
  - `/devduel`
  - `/cleancode`
  - `/snippify`
  - `/github`

---

## 🧩 How It Works

### 🔧 Run the Backend (FastAPI)

```bash
python -m venv venv
pip install -r requirements.txt
uvicorn app.main:app --reload
```

- Open [http://127.0.0.1:8000](http://127.0.0.1:8000) for the main server
- Use [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) for Swagger API docs

### 🌐 Run the Frontend

```bash
pnpm install
pnpm dev
```

> Ensure your `.env` keys are configured correctly before running.

---

## 👐 How to Contribute (Fork & Run GitZen)

### 1. ⭐ Fork the Repository
Click the **Fork** button on the top-right of this repo.

### 2. 📥 Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/GitZen.git
cd GitZen
```

### 3. 🛠 Setup Locally

```bash
# Setup frontend
cd GitZen\ FrontEnd
pnpm install
pnpm dev

# In another terminal, setup backend
cd gitzen-backend\ done
python -m venv venv
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### 4. 🔀 Create a New Branch

```bash
git checkout -b feature/your-feature-name
```

### 5. ✅ Commit and Push

```bash
git add .
git commit -m "Added new feature to GitZen"
git push origin feature/your-feature-name
```

### 6. 📬 Open a Pull Request
Go to your forked GitHub repo and open a PR to the main branch of the original.

---

## 👨‍👩‍👧‍👦 Team & Collaborators

- **Aryan Raj Gupta** – Backend dev, system designer, AI integrator  
- **Aarambh Maan Shrestha** – Frontend design lead, animations & UX  
- **Aarushi Agarwal** – Feature planning, Resume Builder & GitHelpBot UX  
- **Sourya Varma Datla** – Multiplayer logic (DevDuel), testing & refactoring

> Special thanks to the entire open-source community ❤️

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 💬 Feedback

We'd love your thoughts! Open issues, suggest features, or reach out for collaboration.

---
> “Code like a Zen master. Push like a pro. GitZen awaits.” 🧘‍♂️🖥️
```

