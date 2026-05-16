import './stats.css';

const LABELS = ["4K", "3.5K", "3K", "2.5K", "2K", "1K", "500", "0"];
const DATA = [
  { month: "Jan", pct: 60 },
  { month: "Feb", pct: 45 },
  { month: "Mar", pct: 75 },
  { month: "Apr", pct: 30 },
  { month: "May", pct: 85 },
  { month: "Jun", pct: 50 },
  { month: "Jul", pct: 65 },
  { month: "Aug", pct: 40 },
];

const Stats = () => {
  return (
    <div className="stats">
      <div className="stat-card">

        <ul className="stat-revenue-breakdown">
          {LABELS.map((l) => <li key={l}>{l}</li>)}
        </ul>

        <div className="stat-plot">
          {DATA.map(({ month, pct }) => (
            <div key={month} className="plot-col">
              <div className="plot-line">
                <div className="plot-gray" style={{ height: `${100 - pct}%` }} />
                <div className="plot-fill" style={{ height: `${pct}%` }} />
              </div>
              <span className="plot-month">{month}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Stats;