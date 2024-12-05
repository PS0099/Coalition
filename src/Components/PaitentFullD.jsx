import DReport from "./DaignosisReport";
import PatientInfo from "./PatientInfo";
import PatientsSideBar from "./PatientsSideBar";

const PatentFullDashBoard = ({patient}) => {
  return <div className="flex gap-20">
    <PatientsSideBar patient={patient}></PatientsSideBar>
    <DReport patient={patient}></DReport>
    <PatientInfo patient={patient}></PatientInfo>
  </div>
};

export default PatentFullDashBoard;
