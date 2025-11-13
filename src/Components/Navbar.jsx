import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import sanlogo from "../assets/sanlogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Robust scroll-to-top helper (smooth when possible, with fallbacks)
  const scrollToTop = (smooth = true) => {
    // Try smooth scroll first via requestAnimationFrame
    const doScroll = () => {
      try {
        if (smooth && "scrollBehavior" in document.documentElement.style) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          window.scrollTo(0, 0);
        }
        // extra fallback - directly set the scroll positions (some browsers)
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      } catch (err) {
        // last-resort fallback
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    };

    // Use rAF to ensure run after any render, plus a short timeout fallback
    window.requestAnimationFrame(() => doScroll());
    setTimeout(() => doScroll(), 120);
  };

  // Automatically scroll to top when route changes (use pathname only)
  useEffect(() => {
    scrollToTop(true);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/40 backdrop-blur-lg border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => scrollToTop(true)}
          className="flex items-center transition-transform hover:scale-105 duration-300"
        >
          <img
            src={sanlogo}
            alt="Sankofa Lab Logo"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link
            to="/"
            onClick={() => scrollToTop(true)}
            className="hover:text-[#0504aa] transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => scrollToTop(true)}
            className="hover:text-[#0504aa] transition"
          >
            About
          </Link>

          <Link
            to="/elab"
            onClick={() => scrollToTop(true)}
            className="hover:text-[#0504aa] transition"
          >
            Courses
          </Link>

          <Link
            to="/contact"
            onClick={() => scrollToTop(true)}
            className="hover:text-[#0504aa] transition"
          >
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => {
            navigate("/contact");
            // navigate may be synchronous in SPA; ensure scrolling after nav
            setTimeout(() => scrollToTop(true), 120);
          }}
          className="hidden md:block bg-[#0504aa] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0504aa]/90 transition-all shadow-md hover:shadow-lg"
        >
          Connect
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
            className="md:hidden bg-white/1 backdrop-blur-xl border-t border-gray-200 shadow-lg"
          >
            <div className="flex flex-col items-center gap-4 font-medium text-gray-700 py-5">
              <Link
                to="/"
                onClick={() => {
                  setMenuOpen(false);
                  // small delay so menu close animation doesn't block scroll
                  setTimeout(() => scrollToTop(true), 80);
                }}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => {
                  setMenuOpen(false);
                  setTimeout(() => scrollToTop(true), 80);
                }}
              >
                About
              </Link>
              <Link
                to="/elab"
                onClick={() => {
                  setMenuOpen(false);
                  setTimeout(() => {
                    // navigate handled by Link; ensure top after route change
                    scrollToTop(true);
                  }, 120);
                }}
              >
                Courses
              </Link>
              <Link
                to="/contact"
                onClick={() => {
                  setMenuOpen(false);
                  setTimeout(() => scrollToTop(true), 80);
                }}
              >
                Contact
              </Link>

              <button
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/contact");
                  setTimeout(() => scrollToTop(true), 120);
                }}
                className="bg-[#0504aa] text-white px-6 py-2 rounded-full hover:bg-[#0504aa]/90 transition-all"
              >
                Connect
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
