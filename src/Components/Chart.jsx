import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DiagnosisChart = ({ patient }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (Array.isArray(patient) && patient.length > 0) {
      let diagnosis_history = patient.flatMap((e) => e.diagnosis_history);
      if (!diagnosis_history || diagnosis_history.length === 0) {
        setChartData(null);
        return;
      }

      const months = diagnosis_history.map((item) => item.month);
      const bloodPressureSystolic = diagnosis_history.map(
        (item) => item.blood_pressure.systolic.value
      );
      const bloodPressureDiastolic = diagnosis_history.map(
        (item) => item.blood_pressure.diastolic.value
      );
      const heartRate = diagnosis_history.map((item) => item.heart_rate.value);
      const respiratoryRate = diagnosis_history.map(
        (item) => item.respiratory_rate.value
      );
      const temperature = diagnosis_history.map((item) => item.temperature.value);

      const data = {
        labels: months,
        datasets: [
          {
            label: "Blood Pressure (Systolic)",
            data: bloodPressureSystolic,
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            fill: false,
            tension: 0.1,
          },
          {
            label: "Blood Pressure (Diastolic)",
            data: bloodPressureDiastolic,
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            fill: false,
            tension: 0.1,
          },
          {
            label: "Heart Rate",
            data: heartRate,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            fill: false,
            tension: 0.1,
          },
          {
            label: "Respiratory Rate",
            data: respiratoryRate,
            borderColor: "rgba(153, 102, 255, 1)",
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            fill: false,
            tension: 0.1,
          },
          {
            label: "Temperature",
            data: temperature,
            borderColor: "rgba(255, 159, 64, 1)",
            backgroundColor: "rgba(255, 159, 64, 0.2)",
            fill: false,
            tension: 0.1,
          },
        ],
      };

      setChartData(data);
    } else if (patient && patient.diagnosis_history) {
      const { diagnosis_history } = patient;

      const months = diagnosis_history.map((item) => item.month);
      const bloodPressureSystolic = diagnosis_history.map(
        (item) => item.blood_pressure.systolic.value
      );
      const bloodPressureDiastolic = diagnosis_history.map(
        (item) => item.blood_pressure.diastolic.value
      );
      const heartRate = diagnosis_history.map((item) => item.heart_rate.value);
      const respiratoryRate = diagnosis_history.map(
        (item) => item.respiratory_rate.value
      );
      const temperature = diagnosis_history.map((item) => item.temperature.value);

      const data = {
        labels: months,
        datasets: [
          {
            label: "Blood Pressure (Systolic)",
            data: bloodPressureSystolic,
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            fill: false,
            tension: 0.1,
          },
          {
            label: "Blood Pressure (Diastolic)",
            data: bloodPressureDiastolic,
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            fill: false,
            tension: 0.1,
          },
          {
            label: "Heart Rate",
            data: heartRate,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            fill: false,
            tension: 0.1,
          },
          {
            label: "Respiratory Rate",
            data: respiratoryRate,
            borderColor: "rgba(153, 102, 255, 1)",
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            fill: false,
            tension: 0.1,
          },
          {
            label: "Temperature",
            data: temperature,
            borderColor: "rgba(255, 159, 64, 1)",
            backgroundColor: "rgba(255, 159, 64, 0.2)",
            fill: false,
            tension: 0.1,
          },
        ],
      };

      setChartData(data);
    } else {
      setChartData(null);
    }
  }, [patient]);

  return (
    <div>{chartData ? <Line data={chartData} /> : <p>Loading chart...</p>}</div>
  );
};

export default DiagnosisChart;
