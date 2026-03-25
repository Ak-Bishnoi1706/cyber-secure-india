import { useState } from "react";

export default function Navbar({toggleTheme, isDark}) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full shadow-lg z-50 ${isDark ? "darkNav" : "bg-linear-to-r from-blue-900 via-purple-900 to-black text-white"}`}
    >
      <div className="flex justify-between items-center px-6 py-3">
        {/* LOGO + TITLE */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/Logo.png"
            alt="Cyber Secure India"
            className="h-10 w-10 rounded-full border-2 border-purple-400"
          />
          <span className="font-bold text-lg tracking-wide">
            Cyber Secure India
          </span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex justify-center space-x-6 font-medium ml-auto ">
          <li
            className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}
          >
            <a href="#Home" target="_blank">Home</a>
          </li>

          <li
            className={`relative cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}
          >
            <span onClick={() => handleDropdown("security")}>
              <a href="#security">Security</a>
            </span>

            {openDropdown === "security" && (
              <ul className="absolute bg-black bg-opacity-90 text-white mt-2 rounded shadow-lg p-3 space-y-2">
                <li
                  className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}
                >
                  <a href="#BestPractices">Best-Practices</a>
                </li>

                <li
                  className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}
                >
                  <a href="#NetworkSecurity">Network Security</a>
                </li>

                <li
                  className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}
                >
                  <a href="#AccessControl">Access Control</a>
                </li>
              </ul>
            )}
          </li>

          <li
            className={`relative cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}
          >
            <span
              onClick={() => handleDropdown("awareness")}
            >
              Awareness
            </span>
            {openDropdown === "awareness" && (
              <ul className="absolute bg-black bg-opacity-90 text-white mt-2 rounded shadow-lg p-3 space-y-2">
                <li className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}>
                  <a href="#UserTraining">User Training</a>
                </li>
                <li className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}>
                  <a href="#DosAndDonts">Do's and Don'ts</a>
                </li>
              </ul>
            )}
          </li>
          <li className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}>
            <a href="#Emergency">Emergency</a>
          </li>
          <li className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}>
            <a href="#Resources">Resources</a>
          </li>
          <li className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}>
            <a href="#Footer">Contact</a>
          </li>
        </ul>

        {/* Theme toggle + mobile menu button */}
        <div className="flex space-x-3">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full bg-transparent ml-4 transition-all ${isDark ? "hover:bg-green-600/80 hover:ring-2 hover:ring-green-300" : "hover:bg-purple-800/50 hover:ring-2 hover:ring-purple-200"}`}
          >
            {isDark ? "🌞" : "🌙"}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden rounded px-2 ${isDark ? "hover:bg-green-600/80 hover:ring-2 hover:ring-green-300" : "hover:bg-purple-800/50 hover:ring-2 hover:ring-purple-200"}`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black bg-opacity-90 text-white space-y-3 px-6 py-6 font-medium">
          <li
            className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}
          >
            <a href="#Home">Home</a>
          </li>
          <li
            className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}
          >
            <span
              onClick={() => handleDropdown("security")}
              className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}
            >
              <a href="#security">Security</a>
            </span>
            {openDropdown === "security" && (
              <ul className="bg-black bg-opacity-90 text-white mt-2 rounded shadow-lg p-3 space-y-2">
                <li
                  className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}
                >
                  <a href="#BestPractices">Best-Practices</a>
                </li>
                <li
                  className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}
                >
                  <a href="#NetworkSecurity">Network Security</a>
                </li>
                <li
                  className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}
                >
                  <a href="#AccessControl">Access Control</a>
                </li>
              </ul>
            )}
          </li>
          <li
            className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}
          >
            <span
              onClick={() => handleDropdown("awareness")}
              className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}
            >
              Awareness
            </span>
            {openDropdown === "awareness" && (
              <ul className=" bg-black bg-opacity-90 text-white mt-2 rounded shadow-lg p-3 space-y-2">
                <li
                  className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}
                >
                  <a href="#UserTraining">User Training</a>
                </li>
                <li
                  className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}
                >
                  <a href="#DosAndDonts">Do's and Don'ts</a>
                </li>
              </ul>
            )}
          </li>
          <li
            className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}
          >
            <a href="#Emergency">Emergency</a>
          </li>
          <li
            className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}
          >
            <a href="#Resources">Resources</a>
          </li>
          <li
            className={`cursor-pointer ${isDark ? "hover:text-[#00e676]" : "hover:text-purple-300"}`}
          >
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
}
