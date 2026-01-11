
# Imagify 🎨🤖

**AI-Powered Text-to-Image Generation Platform**

## 📌 Project Description

**Imagify** is a modern full-stack web application that leverages artificial intelligence to transform text descriptions into high-quality visual images. Built using a scalable and secure architecture, Imagify allows users to turn imagination into reality through AI-powered image generation while managing usage via a credit-based system.

This project demonstrates real-world full-stack concepts including authentication, payments, API optimization, and scalable system design.

---

## ✨ Key Features

### 🔹 Core Functionality

* **AI-Powered Image Generation**
  Generate unique, high-quality images from text prompts using the **Clipdrop API**.
* **User Authentication System**
  Secure registration and login with **JWT-based authentication**.
* **Credit-Based Usage Model**
  New users start with **5 free credits**; additional credits can be purchased.
* **Real-Time Image Generation**
  Images are generated within seconds with instant preview and download support.
* **Responsive Design**
  Fully responsive UI for desktop, tablet, and mobile devices.

---

### 🔹 User Experience Features

* **Intuitive Interface**
  Clean and modern UI built with **React** and **Tailwind CSS**.
* **Smooth Animations**
  Polished UI transitions using **Framer Motion**.
* **Toast Notifications**
  Real-time feedback via **React Toastify**.
* **Modal-Based Authentication**
  Login and registration handled through elegant modal overlays.
* **Loading & Progress Indicators**
  Visual feedback during image generation.

---

### 🔹 Business & Monetization Features

* **Multiple Pricing Tiers**
  Flexible plans designed for individuals, creators, and enterprises.
* **Secure Payments**
  Integrated **Razorpay** payment gateway.
* **Credit Management System**
  Real-time tracking of credit balance and usage.
* **Transaction History**
  Complete record of all user payments and purchases.

---

## 🛠️ How It Works

1. **Describe Your Vision**
   Users enter a text prompt describing the desired image.
2. **AI Processing**
   The prompt is sent to the **Clipdrop API** for image generation.
3. **Credit Deduction**
   Each image generation deducts **1 credit** from the user’s balance.
4. **Instant Results**
   The generated image is displayed in seconds.
5. **Download & Repeat**
   Users can download images or generate new ones.

---

## 🧱 Technical Architecture

### 🖥️ Frontend (React)

* **Framework:** React 19 (Vite)
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **State Management:** Context API
* **HTTP Client:** Axios
* **Animations:** Framer Motion
* **Notifications:** React Toastify

---

### 🗄️ Backend (Node.js)

* **Runtime:** Node.js (ES6 modules)
* **Framework:** Express.js
* **Database:** MongoDB with Mongoose
* **Authentication:** JWT (JSON Web Tokens)
* **Password Security:** bcrypt
* **Payments:** Razorpay Integration
* **External API:** Clipdrop AI Image API

---

## 💳 Pricing Plans

| Plan         | Price | Credits | Use Case                            |
| ------------ | ----- | ------- | ----------------------------------- |
| **Basic**    | $10   | 100     | Personal use & experimentation      |
| **Advanced** | $50   | 1,000   | Content creators & small businesses |
| **Business** | $100  | 50,000  | Enterprise & high-volume usage      |

---

## 🚶 User Journey

1. **Landing Page** – Discover platform features
2. **Authentication** – Register or log in
3. **Credit Check** – Verify available credits
4. **Image Generation** – Enter prompt & generate image
5. **Credit Management** – Track balance or purchase more
6. **Download & Repeat** – Save images and continue creating

---

## 🔐 Security Features

* JWT-based authentication
* Password hashing with bcrypt
* Secure API key storage (Clipdrop & Razorpay)
* Server-side input validation
* Configured CORS policies
* Secure payment verification flow



## 🚀 Why Imagify?

Imagify is designed to showcase **production-level thinking**, including:

* API optimization
* Secure authentication
* Payment integration
* Scalable data modeling
* Clean UI/UX design
