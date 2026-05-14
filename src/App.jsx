import SensorCard from "./SensorCard";
import "./index.css";

export default function App() {
  return (
    <div className="dashboard">
      <header className="dash-header">
        <h1>🌱 AgroSense Dashboard</h1>
        <p>Real-time field sensor dashboard</p>
      </header>

      <div className="cards-row">
        <SensorCard name="Soil Moisture" value={62} unit="%" />
        <SensorCard name="Temperature"   value={28} unit="°C" />
        <SensorCard name="Humidity"      value={74} unit="%" />
      </div>
    </div>
  );
      }
