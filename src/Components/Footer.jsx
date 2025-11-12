
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import sanlogo from "../assets/sanlogo.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#0504aa] text-white overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 via-[#0504aa] to-blue-700 opacity-90" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {/* Logo + Description */}
        <div className="space-y-4">
          <img
            src={sanlogo}
            alt="Sankofa Lab Logo"
            className="h-14 w-auto object-contain"
          />
          <p className="text-sm text-blue-100 leading-relaxed">
            Sankofa_Lab is a digital think tank from the African Leadership
            University ecosystem — building sustainable job creation through
            entrepreneurship, mentorship, and modernised apprenticeship systems.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Quick Links
          </h3>
          <ul className="space-y-2 text-blue-100 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <a href="#elab" className="hover:text-white transition">
                E-Lab Journey
              </a>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mission */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Our Mission</h3>
          <p className="text-sm text-blue-100 leading-relaxed">
            To reduce youth unemployment by blending traditional apprenticeship
            wisdom with modern digital innovation — empowering young Africans to
            become creators, not just job seekers.
          </p>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://www.instagram.com/sankofa_lab"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/sankofa-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:contact@sankofalab.org"
              className="hover:text-yellow-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/20 py-4 text-center text-xs sm:text-sm text-blue-100 bg-[#04047a]/50 backdrop-blur-lg">
        © {new Date().getFullYear()} Sankofa_Lab — All Rights Reserved.  
        <span className="block sm:inline">
          {" "}Built with  innovation & purpose.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
