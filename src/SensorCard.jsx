export default function SensorCard({ name, value, unit }) {
  return (
    <div className="sensor-card">
      <h2 className="sensor-name">{name}</h2>
      <p className="sensor-value">
        {value}<span className="sensor-unit">{unit}</span>
      </p>
    </div>
  );
                                          }
