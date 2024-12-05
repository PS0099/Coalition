import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import PatentFullDashBoard from "./Components/PaitentFullD";

function App() {
  const [patient, setPatient] = useState(null);

  const fetchPatientData = async () => {
    const res = await fetch(
      "https://fedskillstest.coalitiontechnologies.workers.dev",
      {
        method: "GET",
        headers: {
          Authorization: "Basic " + btoa("coalition:skills-test"),
        },
      }
    );
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetchPatientData();
      const jData = data.filter((p) => p.name === "Jessica Taylor");

      setPatient(jData);
    };

    getData();
  }, []);

  console.log(patient);
  return (
    <>
      <Header />
      <PatentFullDashBoard patient={patient} />
    </>
  );
}

export default App;
