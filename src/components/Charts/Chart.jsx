import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  // Extracting the values from dataPoints objects array
  const dataPointValuesArr = props.dataPoints.map(
    (dataPoint) => dataPoint.value
  );
  // Calculate the maxValue to determine the height of highest ChartBar
  const maxValue = Math.max(...dataPointValuesArr);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
