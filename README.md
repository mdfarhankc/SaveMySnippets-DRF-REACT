# 🧠 SaveMySnippet

**SaveMySnippet** is a full-stack web application that allows developers to save, edit, and manage code snippets in multiple programming languages with syntax highlighting, tagging, visibility control (public/private), and an intuitive UI.

---

## 📁 Project Structure

SaveMySnippet/
├── backend/ # Django project (REST API)
│ ├── manage.py
│ └── save_my_snippet/ # Core app
│ └── ...
├── frontend/ # React (Vite + TypeScript) app
│ ├── index.html
│ └── src/
│ └── ...
└── README.md

---

## 🧰 Tech Stack

### 🖥 Frontend

- **React 19** (Vite + TypeScript)
- **Tailwind CSS**
- **ShadCN UI**
- **React Router v7**
- **Zustand** (state management)
- **TanStack Query** (data fetching/caching)
- **Axios** (API calls)
- **React Hook Form + Zod** (forms & validation)
- **Prism.js / shiki** (syntax highlighting)

### 🛠 Backend

- **Django 5.2**
- **Django REST Framework**
- **Simple JWT** (authentication)
- **CORS Headers**
- **PostgreSQL** (or SQLite)

---

## 🚀 Features

- 🔐 **User Authentication** (JWT-based)
- 💾 **Create, View, Edit, Delete Snippets**
- 🧠 **Syntax Highlighting** (based on language extension)
- 🏷️ **Tag Support** (display & future filtering)
- 🌍 **Public/Private Visibility** Control
- ✨ **Inline Editing** on Snippet Detail Page
- ⚡ Fast UI with Suspense-based loading states

---

## 🧑‍💻 Local Development

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Or `venv\Scripts\activate` on Windows
pip install -r requirements.txt

# Apply migrations and run server
python manage.py migrate
python manage.py runserver
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev

```

## Deployment

### Build frontend:

```bash
npm run build

```

### Collect Django static files:

```bash
python manage.py collectstatic

```
