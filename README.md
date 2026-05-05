# 🐱 Random Cat Viewer (React App)

## 📌 Project Overview

Random Cat Viewer is a simple React application that fetches and displays random cat data from an API. The app shows cat images along with detailed information like breed, origin, temperament, and multiple rating attributes.

This project demonstrates API integration, state management, reusable components, and responsive UI design using Tailwind CSS.

---

## 🚀 Features

* 🔄 Fetch random cat data from API
* 🖼️ Display cat image dynamically
* 📖 Show detailed breed information
* 📊 Visual rating bars (Adaptability, Energy, Intelligence, etc.)
* ⚡ Loading state handling
* 🔁 "New Cat" button to fetch new data instantly

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Styling:** Tailwind CSS
* **HTTP Client:** Axios
* **State Management:** React Hooks (`useState`, `useEffect`)

---

## 🌐 API Used

```
https://api.freeapi.app/api/v1/public/cats/cat/random
```

---

## 📂 Project Structure

```
src/
 ├── App.jsx
 ├── main.jsx
 ├── index.css
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
https://github.com/ajaykumar1298/random_cat_viewer.git 
```

2. Navigate to project folder:

```bash
cd random-cat-viewer
```

3. Install dependencies:

```bash
npm install
```

4. Run the app:

```bash
npm run dev
```

---

## 📊 Key Concepts Used

* **API Fetching with Axios**
* **React Hooks (useState, useEffect)**
* **Conditional Rendering**
* **Reusable Components (RatingBar)**
* **Dynamic Styling using Tailwind**

---

## 💡 How It Works

* When the app loads, it calls the API and fetches a random cat.
* The response is stored in state.
* UI updates automatically with the fetched data.
* Clicking **"New Cat"** triggers a new API request.

---

## 🔥 Future Improvements

* Add error handling UI
* Add skeleton loader
* Add favorites feature ❤️
* Add animations (Framer Motion)
* Add multiple images carousel

---

## 👨‍💻 Author

**Ajay Kumar**

⭐ Support If you like this project, give it a ⭐ on GitHub!
