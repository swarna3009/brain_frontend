import { motion } from "framer-motion";

const stats = [
  { value: "50K+", label: "Scans Analyzed" },
  { value: "200+", label: "Partner Hospitals" },
  { value: "45", label: "Countries Served" },
  { value: "98.5%", label: "Accuracy Rate" },
];

const Impact = () => {
  return (
    <section className="bg-gradient-to-r from-green-500 to-blue-500 py-14  text-white">
      <div className="max-w-6xl mx-auto px-4 top-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-2"
        >
          Our Impact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-blue-100 mb-10"
        >
          Making a difference in healthcare worldwide
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="text-3xl font-semibold">{stat.value}</div>
              <div className="text-sm text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;