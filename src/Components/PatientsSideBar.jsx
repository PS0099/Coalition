import { FaSearch } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";

const PatientsSideBar = ({ patient }) => {
  return (
    <div className="m-5 bg-slate-600 rounded-2xl shadow-lg w-[378px] h-[700px] overflow-y-auto ">
      {/* Header Section */}
      <div className="flex justify-between items-center p-5 border-b border-gray-300">
        <h3 className="text-white font-semibold text-xl">Patients</h3>
        <FaSearch className="text-white text-xl hover:text-gray-400 cursor-pointer" />
      </div>

      {/* Patients List */}
      {patient && patient.length > 0 ? (
        <div>
          {patient.map((e, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-5 border-b border-gray-400"
            >
              <div className="flex gap-5 items-center">
                {/* Patient Image */}
                <img
                  src={e.profile_picture}
                  alt="Patient"
                  className="w-16 h-16 rounded-full object-cover"
                />
                {/* Patient Info */}
                <div className="text-white">
                  <h3 className="font-semibold text-lg">{e.name}</h3>
                  <p className="text-sm">
                    {e.gender} <span className="font-medium">{e.age}</span>
                  </p>
                </div>
              </div>
              {/* Dots Icon for More Options */}
              <HiDotsHorizontal className="text-white text-2xl hover:text-gray-400 cursor-pointer" />
            </div>
          ))}
        </div>
      ) : (
        <div className="p-5 text-white text-center">
          <p>No patients found.</p>
        </div>
      )}
    </div>
  );
};

export default PatientsSideBar;
