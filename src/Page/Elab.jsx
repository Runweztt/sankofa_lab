import React from "react";
import { Parallax } from "react-parallax";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

const Elab = () => {
  const stages = [
    {
      title: "Identify Potential",
      desc: "We scout ambitious youth across Nigeria with drive and creativity to join the apprenticeship movement.",
      icon: "🎯",
    },
    {
      title: "Train & Mentor",
      desc: "Apprentices undergo hands-on digital skill training guided by experienced mentors and industry experts.",
      icon: "🧠",
    },
    {
      title: "Build & Collaborate",
      desc: "Teams work on real-world digital projects that strengthen local economies and innovation.",
      icon: "⚙️",
    },
    {
      title: "Launch & Empower",
      desc: "Graduates establish startups or tech-enabled businesses, creating jobs and fostering community growth.",
      icon: "🚀",
    },
  ];

  return (
    <div className="font-inter text-gray-800">
      <Navbar />

      {/* Parallax Header */}
      <Parallax
        bgImage="https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg"
        strength={250}
      >
        <section className="min-h-[60vh] flex flex-col justify-center items-center text-center text-white bg-black/40 backdrop-blur-sm px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-5xl font-bold mb-3"
          >
            Our <span className="text-blue-400">E-Lab Journey</span>
          </motion.h1>
          <p className="max-w-2xl text-blue-100 text-sm sm:text-base">
            Transforming the Igbo Apprenticeship System through innovation, mentorship, and technology.
          </p>
        </section>
      </Parallax>

      {/* Process Stages */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-blue-50 to-white text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-900">Our Approach</h2>
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {stages.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white shadow-lg rounded-2xl p-6 border border-blue-100"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-semibold text-blue-600 text-lg mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video / Story Section */}
      <section className="py-20 px-6 md:px-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-900">Stories of Transformation</h2>
        <div className="max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/nCt5r1raN0M"
            title="Sankofa E-Lab Story"
            allowFullScreen
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Elab;
