import React, { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/contact", form);
      alert("Message sent successfully!");
      setForm({ fullName: "", email: "", subject: "", message: "" });
    } catch (err) {
      alert("Failed to send message");
    }
  };

  return (
    <div className="min-h-screen p-6 sm:p-12 flex flex-col  bg-gradient-to-br from-blue-50 to-white text-gray-800">
     <br/>
     <br/>
      <h1 className="text-3xl font-bold text-center top-10  mb-2">Get In Touch</h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Have questions about our brain tumor detection technology? Need support? We're here to help.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow space-y-4">
          <h2 className="text-xl font-semibold mb-2">Send us a message</h2>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info with Icons */}
        <div className="bg-white p-6 rounded-lg shadow space-y-5">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>

          <div className="flex items-start gap-4 bg-blue-50 p-4 rounded-md shadow-sm">
            <FaEnvelope className="text-blue-600 text-xl mt-1" />
            <div>
              <p className="font-semibold">Email Us</p>
              <p className="text-gray-600 text-sm">support@neurodetect.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-green-50 p-4 rounded-md shadow-sm">
            <FaPhone className="text-green-600 text-xl mt-1" />
            <div>
              <p className="font-semibold">Call Us</p>
              <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-purple-50 p-4 rounded-md shadow-sm">
            <FaMapMarkerAlt className="text-purple-600 text-xl mt-1" />
            <div>
              <p className="font-semibold">Visit Us</p>
              <p className="text-gray-600 text-sm">123 Medical Center Drive, Boston, MA</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-yellow-50 p-4 rounded-md shadow-sm">
            <FaClock className="text-yellow-600 text-xl mt-1" />
            <div>
              <p className="font-semibold">Business Hours</p>
              <p className="text-gray-600 text-sm">Mon - Fri: 9 AM - 6 PM EST</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8 text-blue-700">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl shadow hover:shadow-md transition duration-300">
            <h3 className="text-blue-800 font-semibold mb-2">🔍 How accurate is the AI detection?</h3>
            <p className="text-gray-700 text-sm">98.5% accuracy in clinical trials.</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl shadow hover:shadow-md transition duration-300">
            <h3 className="text-blue-800 font-semibold mb-2">🖼️ What image formats are supported?</h3>
            <p className="text-gray-700 text-sm">DICOM, JPEG, PNG and more.</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl shadow hover:shadow-md transition duration-300">
            <h3 className="text-blue-800 font-semibold mb-2">🔐 Is patient data secure?</h3>
            <p className="text-gray-700 text-sm">Yes, HIPAA-compliant and encrypted.</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl shadow hover:shadow-md transition duration-300">
            <h3 className="text-blue-800 font-semibold mb-2">⏱️ How quickly do I get results?</h3>
            <p className="text-gray-700 text-sm">Usually within 30 seconds to 2 minutes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
