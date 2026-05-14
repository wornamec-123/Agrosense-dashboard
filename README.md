# 🌱 AgroSense Dashboard

A React dashboard displaying real-time sensor readings for smart agriculture.

## Features
- Three `SensorCard` components: Soil Moisture, Temperature, Humidity
- Hardcoded sensor values with unit labels (`%`, `°C`, `%`)
- Cards displayed in a **flexbox row**
- Animated progress bar per card
- Dark agricultural theme

## Project Structure
```
agrosense-dashboard/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx       # App entry point
    ├── App.jsx        # Root component — renders 3 SensorCards in a row
    ├── SensorCard.jsx # Reusable sensor card component
    └── index.css      # Global styles & flexbox layout
```

## How to Run
```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Built With
- React 18
- Vite
- CSS Flexbox
