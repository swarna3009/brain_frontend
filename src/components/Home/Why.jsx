// WhyChoose.jsx
import { motion } from "framer-motion";
import { ShieldCheck, Brain, UserCheck } from "lucide-react";

const features = [
  {
    title: "AI-Powered Detection",
    description: "Advanced machine learning algorithms analyze brain scans with 98% accuracy",
    icon: <Brain className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Real-time Analysis",
    description: "Get instant results with our lightning-fast processing engine",
    icon: <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 12h4l2-8 4 16 2-8h4"/></svg>,
  },
  {
    title: "HIPAA Compliant",
    description: "Your medical data is protected with enterprise-grade security",
    icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Expert Reviewed",
    description: "All results are validated by certified medical professionals",
    icon: <UserCheck className="w-8 h-8 text-blue-500" />,
  },
];

export default function Why() {
  return (
    <div className="py-12 px-4 md:px-16 bg-white">
      <motion.h2 
        className="text-3xl font-bold text-center text-gray-900 mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Choose Our Service?
      </motion.h2>

      <motion.p 
        className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Our cutting-edge technology combines artificial intelligence with medical expertise 
        to provide the most accurate brain tumor detection available.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}