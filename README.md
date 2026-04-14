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
