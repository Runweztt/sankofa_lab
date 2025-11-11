import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import sanlogo from "../assets/sanlogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/40 backdrop-blur-lg border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center transition-transform hover:scale-105 duration-300">
          <img
            src={sanlogo}
            alt="Sankofa Lab Logo"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-[#0504aa] transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#0504aa] transition">
            About
          </Link>
          <a href="#journey" className="hover:text-[#0504aa] transition">
            E-Lab Journey
          </a>
          <Link to="/contact" className="hover:text-[#0504aa] transition">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <button className="hidden md:block bg-[#0504aa] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0504aa] transition-all shadow-md hover:shadow-lg">
          Join the Movement
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800 p-2 rounded-md hover:bg-gray-100 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/90 backdrop-blur-xl border-t border-gray-200 shadow-lg"
          >
            <div className="flex flex-col items-center gap-4 font-medium text-gray-700 py-5">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <a href="#journey" onClick={() => setMenuOpen(false)}>
                E-Lab Journey
              </a>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
              <button
                className="bg-[#0504aa] text-white px-6 py-2 rounded-full hover:bg- transition-all"
                onClick={() => setMenuOpen(false)}
              >
                Join the Movement
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
