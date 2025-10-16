import { useEffect, useRef, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [openStartup, setOpenStartup] = useState(false);
  const [openEvent, setOpenEvent] = useState(false);
  const [openManage, setOpenManage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // 👉 Replace with Redux later
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuRef = useRef(null);

  // ✅ Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenStartup(false);
        setOpenEvent(false);
        setOpenManage(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    // 👉 Add your logout logic here (ex: clear token)
    setIsLoggedIn(false);
  };

  // 🌀 Framer Motion Variants
  const dropdownAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  };

  return (
    <header className="w-full top-2 left-0 z-50 fixed mb-14">
      <nav
        ref={menuRef}
        className="max-w-7xl mx-auto bg-white rounded-full shadow-md px-6 py-3 flex justify-between items-center relative"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-12 h-12 bg-[#4b919e] rounded-lg flex items-center justify-center text-white font-bold">
            MDH
          </div>
          <div>
            <h1 className="text-lg font-bold">Maroc</h1>
            <p className="text-xs text-gray-500 -mt-1">Digital Hub</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-[#222e53] font-medium relative">
          <Link to="/" onClick={() => setOpenStartup(false)} className="hover:text-[#4b919e]">
            Home
          </Link>

          {/* Startups Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 hover:text-[#4b919e]"
              onClick={() => {
                setOpenStartup(!openStartup);
                setOpenEvent(false);
                setOpenManage(false);
              }}
            >
              Startups {openStartup ? <BiChevronUp size={18} /> : <BiChevronDown size={18} />}
            </button>
            <AnimatePresence>
              {openStartup && (
                <motion.ul
                  variants={dropdownAnimation}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute mt-3 bg-white shadow-lg rounded-lg w-48 space-y-2 p-3 z-50"
                >
                  <li>
                    <Link to="/startups" onClick={() => setOpenStartup(false)} className="block px-3 py-2 hover:bg-gray-100">
                      Liste startups
                    </Link>
                  </li>
                  <li>
                    <Link to="/addstartup" onClick={() => setOpenStartup(false)} className="block px-3 py-2 hover:bg-gray-100">
                      Ajouter Startup
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Events Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 hover:text-[#4b919e]"
              onClick={() => {
                setOpenEvent(!openEvent);
                setOpenStartup(false);
                setOpenManage(false);
              }}
            >
              Evenements {openEvent ? <BiChevronUp size={18} /> : <BiChevronDown size={18} />}
            </button>
            <AnimatePresence>
              {openEvent && (
                <motion.ul
                  variants={dropdownAnimation}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute mt-3 bg-white shadow-lg rounded-lg w-48 space-y-2 p-3 z-50"
                >
                  <li>
                    <Link to="/events" onClick={() => setOpenEvent(false)} className="block px-3 py-2 hover:bg-gray-100">
                      Prochains événements
                    </Link>
                  </li>
                  <li>
                    <Link to="/myevents" onClick={() => setOpenEvent(false)} className="block px-3 py-2 hover:bg-gray-100">
                      Mes événements
                    </Link>
                  </li>
                  <li>
                    <Link to="/addEvent" onClick={() => setOpenEvent(false)} className="block px-3 py-2 hover:bg-gray-100">
                      Ajouter événements
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <Link to="/dashboard" className="hover:text-[#4b919e]">Dashboard</Link>

          {/* Management Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 hover:text-[#4b919e]"
              onClick={() => {
                setOpenManage(!openManage);
                setOpenStartup(false);
                setOpenEvent(false);
              }}
            >
              Managements {openManage ? <BiChevronUp size={18} /> : <BiChevronDown size={18} />}
            </button>
            <AnimatePresence>
              {openManage && (
                <motion.ul
                  variants={dropdownAnimation}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute mt-3 bg-white shadow-lg rounded-lg w-48 space-y-2 p-3 z-50"
                >
                  <li><Link to="/listusers" onClick={() => setOpenManage(false)} className="block px-3 py-2 hover:bg-gray-100">Utilisateurs</Link></li>
                  <li><Link to="/listevents" onClick={() => setOpenManage(false)} className="block px-3 py-2 hover:bg-gray-100">Evénements</Link></li>
                  <li><Link to="/liststartup" onClick={() => setOpenManage(false)} className="block px-3 py-2 hover:bg-gray-100">Startups</Link></li>
                  <li><Link to="/listsectors" onClick={() => setOpenManage(false)} className="block px-3 py-2 hover:bg-gray-100">Sectors</Link></li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <Link to="/forum" className="hover:text-[#4b919e]">Forum</Link>
        </ul>

        {/* Auth Button */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="hidden md:block bg-gradient-to-r from-[#4b919e] to-[#eaada2] text-white font-semibold px-6 py-2 rounded-full shadow-md hover:opacity-90 transition"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="hidden md:block bg-gradient-to-r from-[#4b919e] to-[#eaada2] text-white font-semibold px-6 py-2 rounded-full shadow-md hover:opacity-90 transition"
          >
            Se connecter
          </Link>
        )}

        {/* Burger Icon for Mobile */}
        <div className="md:hidden cursor-pointer" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 right-0 w-full bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4 md:hidden z-50"
            >
              <Link to="/" onClick={() => setIsMobileOpen(false)}>Home</Link>
              <Link to="/startups" onClick={() => setIsMobileOpen(false)}>Startups</Link>
              <Link to="/events" onClick={() => setIsMobileOpen(false)}>Evenements</Link>
              <Link to="/dashboard" onClick={() => setIsMobileOpen(false)}>Dashboard</Link>
              <Link to="/forum" onClick={() => setIsMobileOpen(false)}>Forum</Link>
              {isLoggedIn ? (
                <button
                  onClick={() => { handleLogout(); setIsMobileOpen(false); }}
                  className="bg-gradient-to-r from-[#4b919e] to-[#eaada2] text-white font-semibold px-6 py-2 rounded-full shadow-md hover:opacity-90 transition"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMobileOpen(false)}
                  className="bg-gradient-to-r from-[#4b919e] to-[#eaada2] text-white font-semibold px-6 py-2 rounded-full shadow-md hover:opacity-90 transition"
                >
                  Se connecter
                </Link>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Navbar;
