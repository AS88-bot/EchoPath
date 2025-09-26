# 🌟 EchoPath – Your Inclusive AI Career Companion

**EchoPath** is a modular, emotionally intelligent career companion built with React and Tailwind CSS. Designed to support users navigating uncertainty, ambition, or burnout in tech, EchoPath adapts to emotional tone and user goals—offering guidance, mentorship suggestions, resume feedback, and empathetic support.

---

## 💡 Why EchoPath?

In a world of generic career bots, EchoPath listens. It doesn’t just give advice—it understands. Whether you're exploring tech roles, revising your resume, or seeking mentorship, EchoPath meets you where you are—with clarity, warmth, and strategic insight.

---

## 🧠 Key Features

- **Intent-Aware Routing** – Detects user goals like resume review, mentorship, or career guidance  
- **Emotional Tone Detection** – Responds empathetically to frustration, burnout, or imposter syndrome  
- **Fallback & Follow-Up Logic** – Gracefully handles vague or emotionally complex inputs  
- **Emotionally Adaptive UI** – Chat bubbles and responses shift based on user tone  
- **Inclusive Branding** – Gradient backgrounds, soft typography, and validating microcopy  

---

## 🛠️ Tech Stack

- **Frontend** – React, Tailwind CSS  
- **Logic Modules** – `IntentRouter.js`, `EmotionRouter.js`, `ToneAnalyzer.js`  
- **Deployment** – Vercel  
- **Editor** – Visual Studio Code  

---

## 📁 Folder Structure

```bash
src/
├── ChatScreen.jsx         # Main UI component
├── App.js                 # Entry point
├── index.js               # React DOM root
├── IntentRouter.js        # Routes user input to intent
├── EmotionRouter.js       # Routes fallback emotional replies
├── screens/
│   └── logic/
│       ├── Responses.js   # Intent-based response map
│       └── ToneAnalyzer.js# Detects emotional tone

prompts/
├── *.qprompt              # Modular prompt logic (legacy or hybrid use)

test_cases/
├── *.txt                  # Scenario-based emotional QA flows


🧪 Testing Strategy
Simulated full user journeys across all intents

Logged emotional tone accuracy and fallback behavior

Refined routing logic based on real-world scenarios

Test cases stored in test_cases/ for reproducibility and QA

🎨 Design Philosophy
EchoPath is built on empathy, clarity, and empowerment. It’s not just a tool—it’s a companion for anyone navigating the emotional and strategic complexities of a tech career. Every response is crafted to feel human-aware, inclusive, and emotionally validating.

👤 Creator
Aisha Sultana Core Graphic Design Member @ WE Hub
Computer Science Undergrad | AI & Cloud Advocate www.linkedin.com/in/aisha-sultana-90a395306 

📌 Future Enhancements
Confidence scoring to adapt tone based on user certainty

Visual onboarding flow and splash screen

Expanded mentorship database integration

Voice-based interaction layer for accessibility

Emotionally intelligent escalation and coaching logic

📣 License
This project is for educational and portfolio purposes. All rights reserved by the creator.
