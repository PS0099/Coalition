import React from "react";
import DiagnosisChart from "./Chart";


const PatientInfo = ({ patient }) => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <div className="max-w-4xl w-full p-5 bg-white rounded-2xl shadow-lg">
          {patient && patient.length > 0 ? (
            patient.map((e, index) => (
              <div key={index} className="mb-10">
                {/* Patient Image and Name */}
                <div className="flex items-center justify-center mb-5">
                  <img
                    src={e.profile_picture}
                    alt="Patient"
                    className="w-24 h-24 rounded-full mr-5"
                  />
                  <h1 className="text-3xl font-semibold text-gray-800">
                    {e.name || "N/A"}
                  </h1>
                </div>

                {/* Patient Details */}
                <div className="flex flex-col items-start">
                  {/* DOB */}
                  <div className="flex items-center mb-5">
                    <img
                      src="src/assets/BirthIcon/BirthIcon.png"
                      alt="DOB"
                      className="w-8 h-8 mr-3"
                    />
                    <div>
                      <p className="text-sm text-gray-600">{e.date_of_birth}</p>
                    </div>
                  </div>
                  {/* Gender */}
                  <div className="flex items-center mb-5">
                    <img
                      src="src/assets/FemaleIcon/FemaleIcon.png"
                      alt="Gender"
                      className="w-8 h-8 mr-3"
                    />
                    <div>
                      <p className="text-sm text-gray-600">{e.gender}</p>
                    </div>
                  </div>
                  {/* Contact Info */}
                  <div className="flex items-center mb-5">
                    <img
                      src="src/assets/PhoneIcon/PhoneIcon.png"
                      alt="Phone"
                      className="w-8 h-8 mr-3"
                    />
                    <div>
                      <p className="text-sm text-gray-600">{e.phone_number}</p>

                    </div>
                  </div>
                  {/* Emergency Contact */}
                  <div className="flex items-center mb-5">
                    <img
                      src="src/assets/PhoneIcon/PhoneIcon.png"
                      alt="Emergency Contact"
                      className="w-8 h-8 mr-3"
                    />
                    <div>
                      <p className="text-sm text-gray-600">{e.emergency_contact}</p>
                    </div>
                  </div>
                  {/* Insurance Provider */}
                  <div className="flex items-center mb-5">
                    <img
                      src="src/assets/InsuranceIcon/InsuranceIcon.png"
                      alt="Insurance"
                      className="w-8 h-8 mr-3"
                    />
                    <div>
                      <p className="text-sm text-gray-600">{e.insurance_type}</p>
                    </div>
                  </div>
                </div>

                {/* Show All Info Button */}
                <div className="flex justify-center mt-5">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
                    Show All Info
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center">No patient data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
