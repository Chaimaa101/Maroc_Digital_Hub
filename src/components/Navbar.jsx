import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [openStartup, setOpenStartup] = useState(false);
  const [openEvent, setOpenEvent] = useState(false);
  const [openManage, setOpenManage] = useState(false);

  return (
    <>
      <header className="w-full top-2 left-0 z-50 fixed">
        <nav className="max-w-7xl mx-auto bg-white rounded-full shadow-md px-6 py-3 flex justify-between items-center relative">
          {/* Logo */}
          <div to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-[#4b919e] rounded-lg flex items-center justify-center text-white font-bold">
              MDH
            </div>
            <div>
              <h1 className="text-lg font-bold">Maroc</h1>
              <p className="text-xs text-gray-500 -mt-1">Digital Hub</p>
            </div>
          </div>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-8 text-[#222e53] font-medium relative">
            <Link to="/" className="hover:text-[#4b919e] cursor-pointer">
              Home
            </Link>

            {/* Startups Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 hover:text-[#4b919e]"
                onClick={() => setOpenStartup(!openStartup)}
              >
                Startups{" "}
                {openStartup ? <BiChevronUp size={18} /> : <BiChevronDown size={18} />}
              </button>

              <ul
                className={`${
                  openStartup
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                } absolute mt-3 bg-white shadow-lg rounded-lg w-48 space-y-2 p-3 z-50 transition-all duration-300`}
              >
                <li>
                  <Link
                    to="/startups"
                    className="block px-3 py-2 hover:bg-gray-100"
                  >
                    Liste startups
                  </Link>
                </li>
                <li>
                  <Link
                    to="/addstartup"
                    className="block px-3 py-2 hover:bg-gray-100"
                  >
                    Ajouter Startup
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <button
                className="flex items-center gap-1 hover:text-[#4b919e]"
                onClick={() => setOpenEvent(!openEvent)}
              >
                Evenements{" "}
                {openEvent ? <BiChevronUp size={18} /> : <BiChevronDown size={18} />}
              </button>

              <ul
                className={`${
                  openEvent
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                } absolute mt-3 bg-white shadow-lg rounded-lg w-48 space-y-2 p-3 z-50 transition-all duration-300`}
              >
                <li>
                  <Link
                    to="/events"
                    className="block px-3 py-2 hover:bg-gray-100"
                  >
                    Prochains événements
                  </Link>
                </li>
                <li>
                  <Link
                    to="/myevents"
                    className="block px-3 py-2 hover:bg-gray-100"
                  >
                    Mes événements
                  </Link>
                </li>
                <li>
                  <Link
                    to="/addEvent"
                    className="block px-3 py-2 hover:bg-gray-100"
                  >
                    Ajouter événements
                  </Link>
                </li>
              </ul>
            </div>

<Link to="/" className="hover:text-[#4b919e] cursor-pointer">
              Dashboard
            </Link>

            <div className="relative">
              <button
                className="flex items-center gap-1 hover:text-[#4b919e]"
                onClick={() => setOpenManage(!openManage)}
              >
                Managements{" "}
                {openManage ? <BiChevronUp size={18} /> : <BiChevronDown size={18} />}
              </button>

              <ul
                className={`${
                  openManage
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                } absolute mt-3 bg-white shadow-lg rounded-lg w-48 space-y-2 p-3 z-50 transition-all duration-300`}
              >
                <li>
                  <Link
                    to="/listusers"
                    className="block px-3 py-2 hover:bg-gray-100"
                  >
                    Utilisateurs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/listevents"
                    className="block px-3 py-2 hover:bg-gray-100"
                  >
                    Evénements
                  </Link>
                </li>
                <li>
                  <Link
                    to="/liststartup"
                    className="block px-3 py-2 hover:bg-gray-100"
                  >
                    Startups
                  </Link>
                </li>
              </ul>
            </div>
            <Link to="/forum" className="hover:text-[#4b919e] cursor-pointer">Forum</Link>
          </ul>

          <Link to="login" className="hidden md:block bg-gradient-to-r from-[#4b919e] to-[#eaada2] text-white font-semibold px-6 py-2 rounded-full shadow-md hover:opacity-90 transition">
            Se connecter
          </Link>
          <FaUser size={30} />

          {/* Mobile Menu Icon */}
          {/* <div className="md:hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#222e53]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div> */}
        </nav>
      </header>
    </>
  );
}

export default Navbar;
