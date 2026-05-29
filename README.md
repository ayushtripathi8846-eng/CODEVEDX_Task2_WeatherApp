# Weather App

<img width="1303" height="641" alt="Screenshot 2026-05-29 150910" src="https://github.com/user-attachments/assets/618b00a7-833e-487f-82a1-5fe4d240ca70" />


## Overview
A sleek modern weather application built with **Vite**, **Tailwind CSS**, and the **OpenWeather API**. The UI follows a dark‑mode, glass‑morphism design and is fully responsive.

## Features
- Dark‑mode UI with glass‑morphism effects
- Real‑time weather data for any city
- Responsive layout for mobile and desktop
- Easy theming via Tailwind configuration

## Tech Stack
- **Vite** – Fast bundler and dev server
- **Tailwind CSS** – Utility‑first styling
- **OpenWeather API** – Weather data source
- **JavaScript (ES6+)** – Core logic

## Installation
```bash
# Clone the repository (already done)
git clone https://github.com/ayushtripathi8846-eng/-CODEVEDX_Task2_WeatherApp.git
cd Weather_App

# Install dependencies
npm install
```

## Configuration
Create a `.env` file in the project root (use `.env.example` as a template) and add your OpenWeather API key:
```
VITE_OPENWEATHER_API_KEY=your_api_key_here
```
The `.env` file is ignored by Git via `.gitignore`.

## Usage
```bash
# Start the development server
npm run dev
```
Open `http://localhost:5173` in your browser. Enter a city name to view current weather.

## Build & Deploy
```bash
# Generate a production build
npm run build
```
The static files are output to the `dist/` folder and can be served by any static web host (e.g., GitHub Pages, Netlify, Vercel).

## Contributing
Contributions are welcome! Please fork the repo, create a feature branch, and submit a pull request. Follow the existing code style and run `npm run lint` before committing.

## License
MIT © 2026
