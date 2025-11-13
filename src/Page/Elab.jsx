import { Parallax } from "react-parallax";
import { motion } from "framer-motion";

const Elab = () => {
  const courses = [
    {
      title: "Digital Marketing & Brand Building",
      desc: "Master storytelling, SEO, content creation, and digital visibility. Learn how to promote traditional skills globally using digital platforms.",
      level: "Beginner - Intermediate",
      duration: "6 Weeks",
      color: "from-blue-600 to-indigo-500",
    },
    {
      title: "Entrepreneurship & Innovation",
      desc: "Learn business modeling, product development, and startup thinking. Turn your passion into scalable ventures.",
      level: "Intermediate",
      duration: "8 Weeks",
      color: "from-indigo-600 to-purple-500",
    },
    {
      title: "Software Engineering Fundamentals",
      desc: "Build a foundation in web and app development. Work on real projects that merge tradition with modern technology.",
      level: "Beginner - Advanced",
      duration: "10 Weeks",
      color: "from-purple-600 to-pink-500",
    },
    {
      title: "Business Management & Leadership",
      desc: "Gain skills in operations, finance, people management, and impact measurement to lead sustainable enterprises.",
      level: "Intermediate",
      duration: "6 Weeks",
      color: "from-pink-600 to-red-500",
    },
    {
      title: "Financial Literacy & Access to Capital",
      desc: "Understand budgeting, micro-investments, and digital banking. Learn how to raise and manage funds for small businesses.",
      level: "Beginner",
      duration: "5 Weeks",
      color: "from-green-600 to-emerald-500",
    },
    {
      title: "Tech for Local Businesses",
      desc: "Use digital tools like CRM, AI chatbots, and analytics to improve business operations and customer engagement.",
      level: "Beginner - Intermediate",
      duration: "7 Weeks",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="font-inter text-gray-800 bg-[#f8faff] overflow-hidden">
      {/* HERO */}
      <Parallax
        bgImage="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
        strength={350}
        blur={{ min: -2, max: 3 }}
      >
        <section className="min-h-[70vh] flex flex-col justify-center items-center text-center text-white bg-black/50 backdrop-blur-sm px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight"
          >
            Sankofa-Lab <span className="text-blue-400"> Courses</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl text-blue-100 text-lg sm:text-xl"
          >
            Designed to nurture modern African entrepreneurs  blending culture,
            technology, and real-world mentorship.
          </motion.p>
        </section>
      </Parallax>

      {/* ABOUT THE PROGRAM */}
      <section className="py-20 px-6 md:px-16 bg-white text-center border-b border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Learn, Build, and Lead with Sankofa_Lab
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            The sankofa-lab is where aspiring innovators grow into changemakers. Our courses are built
            around mentorship, collaboration, and cultural learning  helping you apply modern
            tools to traditional systems and create impact-driven ventures.
          </p>
        </motion.div>
      </section>

      {/* COURSE CATALOG */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-blue-50 to-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Explore Our Course Tracks
        </h2>
        <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className={`rounded-2xl shadow-xl p-6 bg-gradient-to-br ${c.color} text-white flex flex-col justify-between min-h-[300px]`}
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-blue-50 text-sm mb-4">{c.desc}</p>
              </div>
              <div className="text-xs space-y-1 text-blue-100">
                <p>📘 Level: {c.level}</p>
                <p>⏱ Duration: {c.duration}</p>
              </div>
              <button className="mt-6 bg-white text-blue-700 px-5 py-2 rounded-full font-semibold hover:bg-blue-50 transition">
                Enroll Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 px-6 md:px-16 text-center text-white bg-[#0504aa] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-800 opacity-90 z-0" />
        <motion.div
          className="relative z-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-blue-100 mb-8 text-sm sm:text-base">
            Join hundreds of young innovators transforming communities through
            culture, innovation, and digital skills.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
          >
            Get Started
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Elab;
