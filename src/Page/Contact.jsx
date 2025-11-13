
import { motion } from "framer-motion";


const Contact = () => {
  return (
    <div className="bg-[#f8faff] text-gray-800 font-inter">
      

      {/* Hero */}
      <section className="bg-gradient-to-b mt-20 from-blue-900 via-blue-800 to-blue-700 text-white text-center py-24 px-6 md:px-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Contact <span className="text-blue-300">Sankofa-Lab</span>
        </motion.h1>
        <p className="max-w-2xl mx-auto text-blue-100 text-lg">
          We’d love to hear from you! Whether you’re a potential partner,
          mentor, or collaborator, let’s build Africa’s next wave of
          entrepreneurs together.
        </p>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto bg-blue-50/50 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-blue-100">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6">
            Get in Touch
          </h2>
          <form className="grid gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-3">
          <div>
            <h3 className="font-bold text-blue-300">Email</h3>
            <p>contact@sankofalab.org</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-300">Location</h3>
            <p> African Leadership University Network</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-300">Socials</h3>
            <p>@sankofa-lab on Instagram & LinkedIn</p>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Contact;
