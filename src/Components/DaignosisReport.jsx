import React from "react";
import DiagnosisChart from "./Chart";

const DReport = ({ patient }) => {
  return (
    <div className="m-5">
      {/* Diagnosis History Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-5">Diagnosis History</h3>
        <div className="bg-white  mb-5 rounded-xl">
          <DiagnosisChart patient={patient}></DiagnosisChart>
        </div>

        <div className="flex justify-between gap-5 mt-5">
          {patient && patient.length > 0 ? (
            patient.map((e, i) => (
              <React.Fragment key={i}>
                <div className="bg-[#E0F3FA] text-black p-6 rounded-lg shadow-md w-1/3 flex flex-col items-center">
                  <img
                    src="src\assets\respiratory rate\respiratory rate.png"
                    alt="Respiratory Rate"
                    className="w-16 h-16 mb-4"
                  />
                  <p className="text-lg font-semibold">Respiratory Rate</p>
                  <h3 className="text-xl font-bold">
                    {e.diagnosis_history[0].respiratory_rate?.value || "N/A"} BPM
                  </h3>
                  <p
                    className={`text-sm ${
                      e.diagnosis_history[0].respiratory_rate?.value > 16 &&
                      e.diagnosis_history[0].respiratory_rate?.value < 25
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {e.diagnosis_history[0].respiratory_rate?.levels }
                  </p>
                </div>
                {/* Temperature Card */}
                <div className="bg-[#FFE6E9] text-black p-6 rounded-lg shadow-md w-1/3 flex flex-col items-center">
                  <img
                    src="src\assets\temperature\temperature.png"
                    alt="Temperature"
                    className="w-16 h-16 mb-4"
                  />
                  <p className="text-lg font-semibold">Temperature</p>
                  <h3 className="text-xl font-bold">
                    {e.diagnosis_history[0].temperature.value || "N/A"} °F
                  </h3>
                  <p
                    className={`text-sm ${
                      e.diagnosis_history[0].temperature.value >= 97 && e.diagnosis_history[0].temperature.value <= 99
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {e.diagnosis_history[0].temperature.levels}
                  </p>
                </div>
                {/* Heart Rate Card */}
                <div className="bg-[#FFE6F1] text-black p-6 rounded-lg shadow-md w-1/3 flex flex-col items-center">
                  <img
                    src="src\assets\HeartBPM\HeartBPM.png"
                    alt="Heart Rate"
                    className="w-16 h-16 mb-4"
                  />
                  <p className="text-lg font-semibold">Heart Rate</p>
                  <h3 className="text-xl font-bold">
                    {e.diagnosis_history[0].heart_rate?.value || "N/A"} BPM
                  </h3>
                  <p
                    className={`text-sm ${
                      e.diagnosis_history[0].heart_rate?.value  > 60 && e.diagnosis_history[0].heart_rate?.value  < 100
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {e.diagnosis_history[0].heart_rate?.levels }
                  </p>
                </div>
              </React.Fragment>
            ))
          ) : (
            <div className="text-center text-gray-600 text-lg font-medium w-full">
              No data available. Please check back later.
            </div>
          )}
        </div>
      </div>

      {/* Diagnostic List Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-5">Diagnostic List</h3>
        <div className="bg-slate-500 p-5 rounded-2xl">
          {/* Header Row for Table */}
          <div className="flex justify-between p-4 bg-slate-600 rounded-lg text-white mb-4">
            <h6 className="text-lg font-medium">Problems/Diagnosis</h6>
            <h6 className="text-lg font-medium">Description</h6>
            <h6 className="text-lg font-medium">Status</h6>
          </div>

          {/* Diagnosis Row */}
          <div>
            {patient && patient.length > 0 ? (
              patient.map((e, index) =>
                e.diagnostic_list && e.diagnostic_list.length > 0 ? (
                  e.diagnostic_list.map((diagnosis, diagIndex) => (
                    <div
                      key={diagIndex}
                      className="flex justify-between p-4 bg-white rounded-lg shadow-md mb-4 text-black"
                    >
                      <h6 className="text-lg font-semibold">
                        {diagnosis.name}
                      </h6>
                      <h6 className="text-lg">{diagnosis.description}</h6>
                      <h6 className="text-lg text-yellow-600">
                        {diagnosis.status}
                      </h6>
                    </div>
                  ))
                ) : (
                  <div key={index}>No diagnosis data</div>
                )
              )
            ) : (
              <div>No patient data</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DReport;
