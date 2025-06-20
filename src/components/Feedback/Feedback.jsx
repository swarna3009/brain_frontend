import { useState } from "react";


export default function Feedback() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    feedbackTitle: "",
    category: "General Feedback",
    rating: 5,
    detailedFeedback: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     const email = localStorage.getItem('email');
    if(!email) {
      alert("register or log in first");
      return;
    }
    const res = await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) alert("Feedback submitted!");
    else alert("Submission failed.");
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6 mt-10">
      <br/>
      <br/>
      <h2 className="text-2xl font-bold mb-4">Share Your Experience</h2>

      <div className="mb-4">
        <label className="block text-gray-700">Overall Rating</label>
        <div className="text-yellow-500 text-xl">★★★★★</div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="feedbackTitle"
          placeholder="Feedback Title"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option>General Feedback</option>
          <option>Bug Report</option>
          <option>Feature Request</option>
        </select>
        <textarea
          name="detailedFeedback"
          placeholder="Your Feedback"
          onChange={handleChange}
          rows="4"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit Feedback
        </button>
      </form>
      
    </div>
    
  );
}