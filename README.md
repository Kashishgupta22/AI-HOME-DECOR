# 🏠 AI Home Decor Experience

## 📌 Overview

This project is an **interactive 3D Home Decor Application** built using **Three.js** and basic AI-style logic to simulate interior design suggestions.

Users can:

* 🎨 Change wall colors dynamically
* 🤖 Generate decor suggestions based on style input
* 🛋️ Apply furniture elements in a 3D room

The goal is to provide a **visual and interactive home decoration experience** directly in the browser.

---

## 🚀 Features

* 🧱 3D Room Rendering using Three.js
* 🎨 Dynamic Wall Color Customization
* 🤖 AI-based Decor Suggestions (rule-based logic)
* 🛋️ Interactive Furniture Placement
* 💡 Real-time Scene Updates

---

## 🛠️ Tech Stack

* **HTML5**
* **CSS3**
* **JavaScript**
* **Three.js (3D Rendering Library)**

---

## 🧠 How It Works

### 🎨 Wall Customization

Users can select different wall colors using buttons, which dynamically update the wall material in the 3D scene.

---

### 🤖 AI Decor Generator

* User inputs a style (e.g., *Modern*, *Luxury*)
* System generates decor suggestions using keyword-based logic
* Suggestions are displayed interactively

---

### 🛋️ Furniture Rendering

* Objects like **Sofa, Table, Lamp, Rug** are pre-created in the scene
* Initially hidden → become visible when selected from suggestions

---

## 📂 Project Structure

```id="proj123"
├── index.html        # Main UI layout
├── style.css         # Styling
├── script.js         # Three.js logic & interactivity
```

---

## ⚙️ 3D Scene Setup

### Scene Components:

* Floor (Plane Geometry)
* Walls (Box Geometry with texture)
* Lighting:

  * Ambient Light
  * Directional Light

### Camera:

* Perspective Camera positioned for room view

---

## 🛋️ Available Decor Elements

* Sofa
* Coffee Table
* Lamp
* Rug

---

## ▶️ How to Run

### 1. Clone the Repository

```id="run1"
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Open in Browser

Simply open:

```id="run2"
index.html
```

---

## 🎮 How to Use

1. Select a wall color from sidebar
2. Enter a decor style (e.g., *modern*, *luxury*)
3. Click **Generate Suggestions**
4. Click on suggestions to apply them in the 3D scene

---

## ⚠️ Limitations

* AI suggestions are rule-based (not actual ML model)
* Limited furniture objects
* No drag-and-drop interaction yet

---

## 🔮 Future Improvements

* 🤖 Integrate real AI APIs (OpenAI / ML models)
* 🖱️ Add drag-and-drop furniture placement
* 🪑 Import realistic 3D models (GLTF/OBJ)
* 🎨 Texture customization for furniture
* 🌐 Deploy as a web app

---

