# 🌟 EchoPath – Your Inclusive AI Career Coach

EchoPath is a modular, emotionally intelligent AI career coach built using Amazon Q Developer. Designed to support users navigating uncertainty, ambition, or burnout in tech, EchoPath adapts to emotional tone and user goals—offering guidance, mentorship suggestions, resume feedback, and empathetic support.

---

## 💡 Why EchoPath?

In a world of generic career bots, EchoPath listens. It doesn’t just give advice—it understands. Whether you're exploring tech roles, revising your resume, or seeking mentorship, EchoPath meets you where you are—with clarity, warmth, and strategic insight.

---

## 🧠 Key Features

- **Intent-Aware Routing**: Automatically detects user goals and routes input to the correct `.qprompt` file
- **Emotional Tone Detection**: Responds empathetically to frustration, burnout, or imposter syndrome
- **Modular Prompt Design**: Each user goal is handled by a dedicated `.qprompt` file
- **Fallback & Follow-Up Logic**: Gracefully handles vague or emotionally complex inputs
- **Inclusive Branding**: Designed with emotional resonance and accessibility in mind

---

## 🛠️ Tech Stack

- **Amazon Q Developer** – Prompt logic and conversational flow
- **Visual Studio Code** – Development environment
- **Git** – Version control
- **Markdown** – Documentation

---

## 📁 Folder Structure

```bash
EchoPath/
├── prompts/
│   ├── router.qprompt
│   ├── welcome.qprompt
│   ├── career_guidance.qprompt
│   ├── resume_review.qprompt
│   ├── mentorship_match.qprompt
│   └── emotional_support.qprompt
├── assets/
│   └── branding/         # Logo, splash screen, color palette
├── logs/
│   └── test_runs/        # Input/output logs from simulation
├── test_cases/
│   ├── career_guidance_tests.txt
│   ├── resume_review_tests.txt
│   ├── emotional_support_tests.txt
│   ├── mentorship_match_tests.txt
│   └── full_journey_simulations.txt
├── docs/
│   └── devpost_draft.md
├── .gitignore
└── README.md

🚀 How to Run
1. Open the EchoPath folder in VS Code

2. Ensure the Amazon Q Developer extension is active

3. Use the chat panel to type user inputs (e.g., “I feel stuck in my career”)

4. EchoPath will auto-route the input using router.qprompt and respond accordingly

🧪 Testing Strategy
Simulated full user journeys across all intents

Logged emotional tone accuracy and fallback behavior

Refined prompt logic based on real-world scenarios

Test cases stored in test_cases/ for reproducibility and QA

🎨 Design Philosophy
EchoPath is built on empathy, clarity, and empowerment. It’s not just a tool—it’s a companion for anyone navigating the emotional and strategic complexities of a tech career. Every response is crafted to feel human-aware, inclusive, and emotionally validating.

👤 Creator
Aisha Sultana Core Graphic Design Member @ WE Hub Computer Science Undergrad | AI & UX Advocate [www.linkedin.com/in/aisha-sultana-90a395306] | [Portfolio] | [Devpost]

📌 Future Enhancements
Confidence scoring to adapt tone based on user certainty

Visual onboarding flow and splash screen

Expanded mentorship database integration

Voice-based interaction layer for accessibility

📣 License
This project is for educational and portfolio purposes. All rights reserved by the creator.