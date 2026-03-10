# 🏋️ AI Fitness Tracker – Full Stack AI Project

A **modern full stack AI-powered fitness tracker** that helps users manage their health by setting fitness goals, tracking calories, logging workouts, and automatically analyzing food images using **Google Gemini AI** to estimate calorie intake.

This project is designed for **developers who want to showcase an AI-integrated full stack project in their portfolio**. It combines modern frontend development with a powerful headless CMS backend and AI capabilities.

---

# 🚀 Features

### 🎯 Fitness Goal Management

* Users can set **daily fitness goals**
* Track progress toward daily calorie targets
* Visual overview of calorie consumption vs burned calories

### 🍔 Food Tracking

* Log daily food intake manually
* Track **calories consumed**
* Maintain a history of meals and nutrition

### 🏃 Workout Tracking

* Log different **fitness activities**
* Track **calories burned**
* Maintain workout history

### 🤖 AI Food Image Analysis

* Upload a **food image**
* The app sends the image to **Google Gemini AI**
* AI detects the food item and **estimates calorie intake automatically**

### 🔐 Authentication System

* Secure **user signup and login**
* Protected routes for authenticated users
* User session management

### 👤 User Profile Management

* Update personal profile information
* Store user fitness preferences
* Manage account settings

### ☁️ Free Deployment

* **Frontend deployed on Vercel**
* **Backend deployed on Strapi Cloud**
* Fully accessible online

---

# 🛠️ Tech Stack

### Frontend

* **React JS** – Modern UI development
* **Tailwind CSS** – Utility-first styling
* **Axios** – API communication

### Backend

* **Strapi** – Headless CMS and API
* **JWT Authentication** – Secure user login

### AI Integration

* **Google Gemini AI** – Food image analysis and calorie estimation

### Deployment

* **Vercel** – Frontend hosting
* **Strapi Cloud** – Backend hosting

---

# 🧠 How AI Works in This Project

1. User uploads a **food image**
2. Image is sent to the **backend API**
3. Backend forwards the image to **Google Gemini AI**
4. Gemini analyzes the food item
5. AI returns:

   * Food name
   * Estimated calories
6. The app automatically logs the calorie intake

---

# 📂 Project Structure

```
AI-Fitness-Tracker
│
├── client (React Frontend)
│   ├── components
│   ├── pages
│   ├── services
│   └── hooks
│
├── server (Strapi Backend)
│   ├── api
│   ├── controllers
│   ├── services
│   └── config
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/ai-fitness-tracker.git
cd ai-fitness-tracker
```

---

## 2️⃣ Setup Backend (Strapi)

```
cd backend
npm install
npm run develop
```

Create required **collections in Strapi**:

* Users
* Meals
* Workouts
* Fitness Goals

---

## 3️⃣ Setup Frontend (React)

```
cd frontend
npm install
npm run dev
```

---

## 4️⃣ Configure Environment Variables

Create `.env` file:

```
VITE_API_URL=your_strapi_api
GEMINI_API_KEY=your_google_gemini_key
```

---

# 🌍 Deployment

### Frontend Deployment

Deploy using **Vercel**

```
vercel
```

### Backend Deployment

Deploy backend using **Strapi Cloud**

---

# 📸 AI Food Tracking Demo

1. Click **AI Food Snap**
2. Upload a food image
3. Gemini AI analyzes the food
4. Calories are automatically logged

---

# 🎯 Learning Outcomes

This project demonstrates:

* Full stack development
* Headless CMS architecture
* AI API integration
* Authentication systems
* Image processing workflows
* Real-world portfolio project design

---

# 📌 Future Improvements

* Nutrition breakdown (Protein / Carbs / Fat)
* Barcode food scanner
* Fitness analytics dashboard
* Mobile app version
* Meal recommendations using AI

---

# ⭐ If You Like This Project

Give it a **star on GitHub ⭐** and feel free to contribute!

---
