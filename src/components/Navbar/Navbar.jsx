import { motion } from "framer-motion";
import { FaBullseye, FaRegHeart, FaBolt, FaBrain, FaAward } from "react-icons/fa";
import "./Navbar.css"
import Impact from "./Impact";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const Navbar = () => {
  return (
    <div className="pt-20 bg-[#f0f8ff]">
      <div className="text-center max-w-4xl mx-auto px-4">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
          className="text-4xl font-extrabold text-gray-900"
        >
          About NeuroDetect
        </motion.h2>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={1}
          className="mt-4 text-lg text-gray-600"
        >
          We're on a mission to revolutionize brain tumor detection through artificial intelligence, making early
          diagnosis accessible, accurate, and affordable for everyone.
        </motion.p>
      </div>

      <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={2}
          className="bg-white p-6 rounded-xl shadow-md w-full md:w-1/3"
        >
          <div className="flex items-center gap-2 text-blue-700 font-bold text-xl">
            <FaBullseye />
            Our Mission
          </div>
          <p className="mt-2 text-gray-600 text-sm">
            To democratize access to advanced brain tumor detection technology, enabling healthcare providers worldwide
            to deliver faster, more accurate diagnoses and ultimately save more lives through early intervention.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={3}
          className="bg-white p-6 rounded-xl shadow-md w-full md:w-1/3"
        >
          <div className="flex items-center gap-2 text-blue-700 font-bold text-xl">
            <FaRegHeart />
            Our Vision
          </div>
          <p className="mt-2 text-gray-600 text-sm">
            A world where brain tumors are detected at the earliest possible stage, where distance and resources no
            longer limit access to world-class medical imaging analysis, and where AI empowers every healthcare
            provider.
          </p>
        </motion.div>
      </div>

      <div className="bg-[#0284c7] text-white mt-16 py-12">
        <div className="text-center">
          <motion.h3
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={4}
            className="text-3xl font-bold"
          >
            What Makes Us Different
          </motion.h3>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={5}
            className="mt-2 max-w-3xl mx-auto text-lg"
          >
            Our cutting-edge technology combines the latest advances in AI with decades of medical expertise to deliver
            unparalleled accuracy.
          </motion.p>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-center gap-10 px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={6}
            className="text-center"
          >
            <FaBolt className="text-4xl mx-auto mb-2" />
            <h4 className="text-xl font-semibold">Lightning Fast</h4>
            <p className="text-sm mt-1">
              Get results in under 30 seconds, dramatically reducing wait times and enabling immediate clinical
              decision-making.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={7}
            className="text-center"
          >
            <FaAward className="text-4xl mx-auto mb-2" />
            <h4 className="text-xl font-semibold">Clinically Validated</h4>
            <p className="text-sm mt-1">
              FDA-approved technology with 98.5% accuracy rate, validated through clinical trials and peer-reviewed
              studies.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={8}
            className="text-center"
          >
            <FaBrain className="text-4xl mx-auto mb-2" />
            <h4 className="text-xl font-semibold">AI-Powered</h4>
            <p className="text-sm mt-1">
              Deep learning models trained on over 1 million brain scans from leading medical institutions worldwide.
            </p>
          </motion.div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <Impact/>
       <br/>
      <br/>
       <br/>
      <br/>
    </div>
  );
};

export default Navbar;