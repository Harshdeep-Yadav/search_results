# Student Search Application

## 📌 Project Overview
This is a **full-stack** application that allows users to search for students using a **search bar with lazy loading functionality**. The backend is built with **Node.js (Express)**, and the frontend is built with **React (Vite)**. The application provides real-time search suggestions and displays detailed student information when a result is selected.

---

## 🚀 Features
✅ **Fast and responsive search bar** (triggers after 3 characters)
✅ **RESTful API with Express.js**
✅ **Frontend with React & optimized UI**
✅ **Lazy loading & efficient data fetching**
✅ **Handles edge cases gracefully** (case-insensitive search, special characters, etc.)

---

## 📂 Folder Structure
```
student-search-app/
│── student-search-backend/   # Backend (Node.js + Express)
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── data/students.json
│   │   ├── app.js
│   │   ├── server.js
│   ├── package.json
│   ├── README.md
│── student-search-frontend/  # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── App.css
│   ├── package.json
│   ├── README.md
```

---

## ⚙️ Backend Setup (Node.js + Express)

### **1️⃣ Install Dependencies**
```sh
cd student-search-backend
npm install
```

### **2️⃣ Run the Server**
```sh
npm run dev
```
> The backend runs on **`http://localhost:5000`**

### **3️⃣ API Endpoints**
| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/api/students/search?query={name}` | Returns up to 5 matching students |

---

## 🎨 Frontend Setup (React + Vite)

### **1️⃣ Install Dependencies**
```sh
cd student-search-frontend
npm install
```

### **2️⃣ Run the Frontend**
```sh
npm run dev
```
> The frontend runs on **`http://localhost:5173`**

---

## 🛠️ Design Choices & Optimizations
### **1️⃣ Backend**
✅ **MVC Architecture**: Organized code into `controllers`, `routes`, `services` for better maintainability.  
✅ **Error Handling**: Centralized error handling for API failures.  
✅ **File-based Storage**: Used `students.json` to avoid database complexity.  

### **2️⃣ Frontend**
✅ **Optimized API Calls**: Avoids unnecessary requests and ensures smooth searching.  
✅ **Case-Insensitive Search**: Matches results irrespective of letter case.  
✅ **CSS Enhancements**: Improved UI with hidden scrollbars and smooth animations.  


