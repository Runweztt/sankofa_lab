import React from "react";
import { Parallax } from "react-parallax";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    { title: "Community", desc: "We believe in collective growth through trust, mentorship, and shared learning." },
    { title: "Innovation", desc: "Using technology to transform traditional apprenticeship into modern job creation." },
    { title: "Integrity", desc: "Our work is built on honesty, transparency, and respect for cultural roots." },
    { title: "Empowerment", desc: "We equip youth with digital skills and confidence to build their own ventures." },
  ];

  return (
    <div className="font-inter text-gray-800">
      <Navbar />

      {/* Parallax Header */}
      <Parallax
        bgImage="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
        strength={200}
        bgImageAlt="About Header"
      >
        <section className="min-h-[60vh] flex flex-col justify-center items-center text-center text-white bg-black/40 backdrop-blur-sm px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-5xl font-bold mb-3"
          >
            About <span className="text-blue-400">Sankofa_Lab</span>
          </motion.h1>
          <p className="max-w-2xl text-blue-100 text-sm sm:text-base">
            Pioneering youth employment and innovation through the Igbo Apprenticeship Model and digital transformation.
          </p>
        </section>
      </Parallax>

      {/* Mission Section */}
      <section className="py-16 px-6 md:px-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          At Sankofa_Lab, our mission is to bridge cultural wisdom and modern
          innovation. We empower Nigerian youth through mentorship,
          apprenticeships, and technology-driven learning to build sustainable
          livelihoods and digital enterprises.
        </p>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-blue-50 to-white text-center">
        <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white shadow-lg rounded-2xl p-6 border border-blue-100"
            >
              <h3 className="text-blue-600 font-semibold text-lg mb-2">{v.title}</h3>
              <p className="text-gray-600 text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
