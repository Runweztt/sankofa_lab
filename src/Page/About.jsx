
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import sankofateam from "../assets/sankofa_team.jpg"; // use const if in public

const About = () => {
  const team = [
    {
      name: "Emmanuel Amarikwa",
      role: "Project Lead & Strategy Coordinator",
      img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      desc: "Integrates research, mentorship feedback, and community data to align our initiatives with job creation outcomes in Nigeria.",
    },
    {
      name: "Magnificat Marie Augusta Umutesi",
      role: "Research & Systems Design Lead",
      img: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg",
      desc: "Leads the documentation of our think tank’s learning process, using ALU’s entrepreneurial approach to strengthen the apprenticeship model.",
    },
    {
      name: "Eminente Muhimpundu",
      role: "Digital Learning & Innovation Lead",
      img: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg",
      desc: "Transforms ideas into actionable digital learning experiences — from training tools to apprenticeship tracking platforms.",
    },
    {
      name: "Daniel Nakolah",
      role: "Partnerships & Field Engagement Lead",
      img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      desc: "Connects Sankofa_Lab with communities and business mentors to bridge traditional apprenticeship and modern digital markets.",
    },
    {
      name: "Ajang Biar",
      role: "Technology & Operations Lead",
      img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
      desc: "Builds and manages the technical backbone of our projects, ensuring scalability, usability, and measurable outcomes.",
    },
  ];

  return (
    <div className="bg-[#f8faff] text-gray-800 font-inter">
    

      {/* HERO */}
      <Parallax
        bgImage="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
        strength={250}
      >
        <section className="text-center py-32 px-6 md:px-16 bg-blue-900/40 backdrop-blur-sm text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            About <span className="text-blue-300">Sankofa_Lab</span>
          </motion.h1>
          <p className="max-w-3xl mx-auto text-blue-100 text-lg">
            We’re reimagining how Africa creates jobs — by blending mentorship,
            cultural heritage, and technology to empower young entrepreneurs.
          </p>
        </section>
      </Parallax>

      {/* MISSION & STORY */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-8 text-blue-700"
          >
            Our Mission
          </motion.h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Sankofa_Lab’s mission is to reduce youth unemployment and drive
            inclusive growth in Nigeria by reimagining the{" "}
            <strong>Igbo Apprenticeship System</strong> — combining traditional
            mentorship with digital entrepreneurship. We believe the path to
            sustainable development lies in empowering local innovators to build
            global solutions rooted in culture and technology.
          </p>
        </div>
      </section>

      {/* PROBLEM & SOLUTION */}
      <Parallax
        bgImage="https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg"
        strength={300}
      >
        <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#0b1022]/70 text-white backdrop-blur-md">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              The Problem & Our Solution
            </h2>
            <div className="grid md:grid-cols-2 gap-10 text-left">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-[#101735]/70 border border-blue-900 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">
                  The Problem
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Millions of young Nigerians are skilled but unemployed because
                  traditional apprenticeship systems have not evolved for the
                  digital economy. Apprentices in fashion, mechanics, and
                  crafts often lack digital literacy, marketing, and business
                  management skills to scale their trade.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-[#101735]/70 border border-blue-900 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">
                  Our Solution
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We’re creating a hybrid apprenticeship model that blends
                  cultural mentorship with digital education. By introducing
                  courses in digital marketing, data literacy, and e-commerce,
                  we help apprentices transform small trades into scalable
                  enterprises.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </Parallax>

      {/* TEAM */}
      <Parallax bgImage={sankofateam} strength={200}>
        <section className="py-24 px-6 md:px-16 lg:px-24 text-center bg-blue-50/80">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Meet Our Team
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-6xl mx-auto">
            {team.map((person, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-md border border-blue-100 shadow-lg rounded-2xl p-5 flex flex-col items-center"
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
                />
                <h3 className="text-lg font-semibold text-blue-700">
                  {person.name}
                </h3>
                <p className="text-sm text-gray-600">{person.role}</p>
                <p className="text-xs text-gray-500 mt-2">{person.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </Parallax>

      
    </div>
  );
};

export default About;
