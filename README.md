# Airbnb Listings – Static JavaScript Project

A lightweight, front‑end–only demo that showcases sample Airbnb property listings in the SF area using plain JavaScript, HTML, and CSS. This project was an opportunity to learn how to structure HTML, CSS, and JavaScript elements together using Bootstrap to create multiple dynamic UI elements in the form of a listings page.

## 🚀 Features

- Static dataset of sample Airbnb listings
- Dynamic rendering of listing cards using vanilla JavaScript
- Responsive layout for desktop and mobile
- Filter‑ready architecture for future enhancements
- Zero dependencies — runs in any modern browser

## 📁 Project Structure
```
/project-root
│── index.html         # Main entry point and contains the listings specified
│── about.html         # Webpage about the listings
│── styles.css         # Basic styling for layout and cards
│── data.js            # Static sample listings
│── app.js             # Rendering logic and DOM manipulation
└── assets/           # Images or icons
```

## 🧠 How It Works

- `data.js` contains an array of listing objects (title, price, rating, image, etc.).
- `app.js` loads the data and dynamically generates HTML elements.
- Listings are inserted into the page on load.
- No frameworks, build tools, or servers required.

## ▶️ Getting Started

1. Clone or download the repository.
2. Install Reload or HTTP-Server via npm or your package manager of choice.
3. Navigate to the repository folder and run the http-server.
4. Open up the webpage at the local host specified.
5. Navigate the website!

## 🛠 Customization

You can extend the project by:

- Adding filters (price, location, amenities)
- Integrating a real API
- Enhancing the UI with animations or layout improvements
- Replacing sample data with your own listings

## 📄 License

This project is provided for educational and demonstration purposes per MIT license.


## AI Usage
This README was initially generated using microsoft copilot with the following prompt then modified manually:
```Write an infomative yet concise README file for a static JavaScript project showing sample Airbnb listings```