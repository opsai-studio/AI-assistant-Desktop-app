# AI PDF Bot (Desktop App)

Turn any PDF into a smart AI assistant you can chat with — running locally on your desktop.

---

## 🚀 Features

- Upload any PDF
- Ask questions in plain English
- Get instant AI responses
- Runs locally (private & secure)

---

## 🛠 Tech Stack

- Python (Flask backend)
- Electron (desktop app)
- HTML, CSS, JavaScript (UI)

---

## 📁 Project Structure

backend/ → AI processing + PDF handling  
desktop/ → Electron app  
desktop/renderer/ → UI (HTML, JS, CSS)

---

## ⚙️ Setup Guide

### 1️⃣ Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py

2️⃣ Desktop App Setup
cd desktop
npm install
npm start
🔐 Important Notes
Add your API key in .env
Do NOT upload:
.env
venv
node_modules
Make sure backend is running before starting the desktop app
💬 Want the full project files?

Comment "PDF BOT" on the YouTube video and I’ll share everything.

🚀 Coming Next

Mobile app version (Android + iOS)


---

# 💻 **3. Git Commands (COPY THIS)**

```bash
cd D:\YouTube-Projects\downloadable-pdf-bot-desktop

git init
git add .
git commit -m "Initial commit for desktop app"

git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/ai-pdf-bot-desktop.git
git push -u origin main
