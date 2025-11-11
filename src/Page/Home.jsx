import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Home = () => {
  const stats = [
    { value: "2,000+", label: "Apprentices Reached" },
    { value: "120+", label: "Businesses Supported" },
    { value: "15+", label: "Regions Engaged" },
    { value: "100+", label: "Digital Projects Built" },
  ];

  const steps = [
    {
      title: "Identify Potential",
      desc: "We scout ambitious youth across Nigeria who show passion and drive to innovate through the Igbo Apprenticeship model.",
    },
    {
      title: "Train & Mentor",
      desc: "We combine traditional mentorship with digital skills training to help apprentices launch sustainable digital ventures.",
    },
    {
      title: "Launch & Empower",
      desc: "Graduates transform ideas into digital startups and community-based businesses that generate jobs and growth.",
    },
  ];

  const videos = [
    {
      url: "https://youtu.be/nCt5r1raN0M",
      title: "Sankofa e_Lab — Digital Apprenticeship Story",
      takeaway:
        "Our pilot blended online learning and community mentorship, producing the first 20 digital apprentices.",
    },
    {
      url: "https://youtu.be/HuwMs6zU1GU",
      title: "Our Challenges & Growth Journey",
      takeaway:
        "How we turned funding, connectivity and training challenges into opportunities for innovation.",
    },
    {
      url: "https://youtu.be/I1anWVQVmhE",
      title: "Empowering Youth through Mentorship",
      takeaway:
        "Mentorship is the backbone of our program—each apprentice is guided by experienced professionals.",
    },
    {
      url: "https://youtu.be/IaCjoq3xhOI",
      title: "The Igbo Apprenticeship Transformation",
      takeaway:
        "Bridging tradition and technology to modernise apprenticeship for Nigeria’s future economy.",
    },
  ];

  const team = [
    {
      name: "Amina Yusuf",
      role: "Program Director",
      photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      bio: "Leads strategy, operations, and partnerships across Nigeria.",
    },
    {
      name: "Ifeanyi Okoro",
      role: "Lead Engineer",
      photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      bio: "Architect of our digital apprenticeship platform and innovation tools.",
    },
    {
      name: "Ngozi Chika",
      role: "Finance & Impact Lead",
      photo: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      bio: "Manages grants, partnerships and impact evaluation metrics.",
    },
    {
      name: "Tosin Ade",
      role: "Mentorship Coordinator",
      photo: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg",
      bio: "Connects mentors and apprentices, ensuring guidance quality.",
    },
    {
      name: "Caleb O.",
      role: "Media & Outreach",
      photo: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
      bio: "Drives storytelling, communications and brand visibility.",
    },
  ];

  const insights = [
    {
      question: "What inspired Sankofa Lab?",
      answer:
        "To modernise Nigeria’s apprenticeship culture through digital tools, mentorship and innovation labs that create jobs.",
    },
    {
      question: "Main challenges in our pilot?",
      answer:
        "Infrastructure gaps and access to devices. We built community micro-labs and offline mentorship sessions to bridge them.",
    },
    {
      question: "Our measure of success?",
      answer:
        "Growth in apprentices’ income, startup creation rate, and regional replication of our mentorship model.",
    },
    {
      question: "How partners can support?",
      answer:
        "By funding training equipment, mentoring apprentices, offering internships and supporting seed projects.",
    },
  ];

  const toEmbed = (url) => {
    try {
      if (!url) return "";
      const id = url.includes("youtu.be/")
        ? url.split("youtu.be/")[1].split(/[?&]/)[0]
        : url.split("watch?v=")[1].split(/[?&]/)[0];
      return `https://www.youtube.com/embed/${id}`;
    } catch {
      return "";
    }
  };

  return (
    <div className="bg-[#f8faff] text-gray-800 font-inter">
      <Navbar />

      {/* HERO (Parallax) */}
      <Parallax
        bgImage="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
        strength={250}
        bgImageAlt="Sankofa Hero Background"
      >
        <section className="relative flex flex-col items-center text-center py-24 px-4 sm:px-6 md:px-16 lg:px-24 bg-blue-900/30 backdrop-blur-sm text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl"
          >
            <h1 className="text-3xl mt-25 sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
              Empowering Job Creation Through{" "}
              <span className="text-blue-300">
                Igbo Apprenticeship Innovation
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Sankofa_Lab is Nigeria’s digital think tank pioneering pathways
              for youth employment through cultural apprenticeship and
              technology.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#journey"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition"
              >
                Explore Our Work
              </a>
              <a
                href="#contact"
                className="border border-blue-300 text-blue-300 px-8 py-3 rounded-full font-semibold hover:bg-blue-300 hover:text-blue-900 transition"
              >
                Join the Movement
              </a>
            </div>
          </motion.div>
        </section>
      </Parallax>

      {/* STATS */}
      <section className="py-16 bg-white border-t border-b border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center px-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl sm:text-4xl font-bold text-blue-600">
                {s.value}
              </p>
              <p className="text-gray-600 text-sm sm:text-base mt-1">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* JOURNEY */}
      <section
        id="journey"
        className="py-20 px-4 sm:px-6 md:px-16 lg:px-24 bg-gradient-to-b from-blue-50 to-white text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12">
          Our E-Lab Journey
        </h2>
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="bg-white border border-blue-100 shadow-lg rounded-2xl p-6 sm:p-8 text-left"
            >
              <div className="text-blue-600 text-4xl font-extrabold mb-4">
                {`0${i + 1}`}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PARALLAX VIDEOS */}
      <Parallax
        bgImage="https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg"
        strength={300}
        bgImageAlt="Video Section Background"
      >
        <section
          id="elab-videos"
          className="py-24 px-4 sm:px-6 md:px-16 lg:px-24 bg-[#0b1022]/70 text-white backdrop-blur-md"
        >
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
              Inside the e_Lab Experience
            </h2>

            <div className="grid gap-10 md:grid-cols-2 mb-12">
              {videos.map((v, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl overflow-hidden shadow-xl bg-[#0f1933]/80 border border-[#1a2542]"
                >
                  <div className="aspect-video">
                    <iframe
                      src={toEmbed(v.url)}
                      title={v.title}
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-5 text-left">
                    <h3 className="font-semibold text-lg">{v.title}</h3>
                    <p className="text-sm text-gray-300 mt-2">
                      {v.takeaway}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Insights */}
            <div className="max-w-5xl mx-auto text-left">
              <h4 className="text-xl font-bold text-white mb-4">
                Lessons, Insights & Future Vision
              </h4>
              <div className="space-y-3">
                {insights.map((item, i) => (
                  <details
                    key={i}
                    className="bg-[#071224]/90 border border-[#142235] rounded-lg p-4"
                  >
                    <summary className="font-semibold text-white cursor-pointer">
                      {item.question}
                    </summary>
                    <p className="text-gray-300 mt-2">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Parallax>

      {/* PARALLAX TEAM */}
      <Parallax
        bgImage="https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg"
        strength={200}
        bgImageAlt="Team Background"
      >
        <section
          id="team"
          className="py-24 px-4 sm:px-6 md:px-16 lg:px-24 bg-blue-50/70 text-center"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Meet the Sankofa_Lab Team
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {team.map((m, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="bg-white/80 backdrop-blur-md border border-blue-100 shadow-lg rounded-2xl p-4 flex flex-col items-center"
                >
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover mb-4 shadow-md"
                  />
                  <h3 className="text-base sm:text-lg font-semibold text-blue-700">
                    {m.name}
                  </h3>
                  <p className="text-sm text-gray-600">{m.role}</p>
                  <p className="text-xs text-gray-500 mt-2">{m.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Parallax>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 md:px-16 lg:px-24 text-center bg-[#0504aa] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-blue-600 to-blue-700 opacity-90" />
        <motion.div
          className="relative z-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Join Sankofa_Lab in Building the Next Generation of Entrepreneurs
          </h2>
          <p className="text-blue-100 mb-10 text-sm sm:text-base">
            Together we can empower communities through apprenticeship,
            technology and innovation.
          </p>
          <a
            href="#contact"
            className="bg-white text-blue-700 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
          >
            Get Involved
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
