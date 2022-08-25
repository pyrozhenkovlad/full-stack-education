import "../Styles/Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const { dataPoints } = props;
  const dataPointValues = dataPoints.map((e) => e.value);
  const totalMax = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {dataPoints.map((e) => (
        <ChartBar
          key={e.label}
          value={e.value}
          maxValue={totalMax}
          label={e.label}
        />
      ))}
    </div>
  );
};

export default Chart;
