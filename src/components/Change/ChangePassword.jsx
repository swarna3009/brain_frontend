import React, { useState } from "react";
import axios from "axios";

const ChangePassword = ({ email, isAdmin }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!currentPassword || !newPassword || !confirmPassword) {
      setMessage("All fields are required.");
      setIsSuccess(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("New password and confirmation do not match.");
      setIsSuccess(false);
      return;
    }

    try {
      const response = await axios.post("https://backend-brain-2.onrender.com/change-password", {
        email,
        currentPassword,
        newPassword,
        isAdmin
      });

      if (response.data.success) {
        setMessage("Password changed successfully.");
        setIsSuccess(true);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setMessage(response.data.message);
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong.");
      setIsSuccess(false);
    }
  };

  return (
    <div className="bg-white text-gray-900 font-[Poppins]">
      {/* Banner Section */}
      <section className="relative w-full h-36 md:h-40 bg-gradient-to-r from-gray-900/90 to-black-900/70 flex flex-col justify-center px-6 md:px-12 overflow-hidden">
        <img
          src="https://storage.googleapis.com/a1aa/image/a4fa6adb-d157-41b7-e8c1-72dcdbe3b15d.jpg"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />
        <h1 className="relative text-blue-800 text-3xl md:text-4xl font-semibold tracking-wide">
          Change Password
        </h1>
        <p className="relative text-gray-300 text-xs md:text-sm mt-1">
          Home /{" "}
          <span className="text-green-600 hover:text-green-700">
            Change Password
          </span>
        </p>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-red-800 mb-8">
          Change Password
        </h2>
        <form className="space-y-4 max-w-3xl mx-auto" onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Current Password"
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="New Password"
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {message && (
            <p className={`text-center ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
          >
            Change Password
          </button>
        </form>
      </main>
    </div>
  );
};

export default ChangePassword;
