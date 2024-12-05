const Header = () => {
  return (
    <div>
      <div className="p-4 bg-gray-500 flex items-center justify-between rounded-full m-5">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="src/assets/TestLogo/TestLogo.png"
            alt="Test Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Navigation Section */}
        <div>
          <ul className="flex items-center gap-8">
            <li className="flex items-center gap-2">
              <img
                src="src/assets/home_FILL0_wght300_GRAD0_opsz24/home_FILL0_wght300_GRAD0_opsz24.png"
                alt="Home Icon"
                className="w-6 h-6"
              />
              <span className="text-gray-700 font-medium">Overview</span>
            </li>
            <li className="flex items-center gap-2">
              <img
                src="src/assets/group_FILL0_wght300_GRAD0_opsz24/group_FILL0_wght300_GRAD0_opsz24.png"
                alt="Patients Icon"
                className="w-6 h-6"
              />
              <span className="text-gray-700 font-medium">Patients</span>
            </li>
            <li className="flex items-center gap-2">
              <img
                src="src/assets/calendar_today_FILL0_wght300_GRAD0_opsz24/calendar_today_FILL0_wght300_GRAD0_opsz24.png"
                alt="Schedule Icon"
                className="w-6 h-6"
              />
              <span className="text-gray-700 font-medium">Schedule</span>
            </li>
            <li className="flex items-center gap-2">
              <img
                src="src/assets/chat_bubble_FILL0_wght300_GRAD0_opsz24/chat_bubble_FILL0_wght300_GRAD0_opsz24.png"
                alt="Message Icon"
                className="w-6 h-6"
              />
              <span className="text-gray-700 font-medium">Message</span>
            </li>
            <li className="flex items-center gap-2">
              <img
                src="src/assets/credit_card_FILL0_wght300_GRAD0_opsz24/credit_card_FILL0_wght300_GRAD0_opsz24.png"
                alt="Transaction Icon"
                className="w-6 h-6"
              />
              <span className="text-gray-700 font-medium">Transaction</span>
            </li>
          </ul>
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img
              src="src\assets\senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc\senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"
              alt="Doctor Portrait"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="text-white font-bold">Dr. Jose Simmons</h3>
              <p className="text-gray-300 text-sm">General Practitioner</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="src/assets/settings_FILL0_wght300_GRAD0_opsz24/settings_FILL0_wght300_GRAD0_opsz24.png"
              alt="Settings Icon"
              className="w-6 h-6"
            />
            <img
              src="src/assets/more_vert_FILL0_wght300_GRAD0_opsz24/more_vert_FILL0_wght300_GRAD0_opsz24.png"
              alt="More Icon"
              className="h-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
