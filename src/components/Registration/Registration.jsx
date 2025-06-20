import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [message, setMessage] = useState("");
  const [otpTimer, setOtpTimer] = useState(0);
  const [otpSent, setOtpSent] = useState(false);

  const navigate = useNavigate();

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  useEffect(() => {
    let timer;
    if (otpTimer > 0) {
      timer = setInterval(() => {
        setOtpTimer((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            alert("OTP expired. Please register again with valid email.");
            setShowOTPInput(false);
            setOtpSent(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [otpTimer]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/user-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert("OTP sent to your email.");
        setShowOTPInput(true);
        setOtpSent(true);
        setOtpTimer(60); // Start 60 sec timer
      } else {
        setShowOTPInput(false);
        setOtpSent(false);
        setMessage(data.message || "Registration failed. Please enter a valid email.");
      }
    } catch {
      setShowOTPInput(false);
      setOtpSent(false);
      setMessage("Error: Could not connect to server.");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const res = await fetch("http://localhost:5000/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success("OTP Verified! Registration Complete.");
        localStorage.setItem("email", email);
        localStorage.setItem("isUser", "true");
        navigate("/");
      } else {
        toast.error(data.message || "Invalid OTP. Please try again.");
      }
    } catch {
      toast.error("Error: Could not verify OTP.");
    }
  };

  return (
    <div className="bg-white text-gray-900 font-nunito min-h-screen">
      {/* Header */}
      <motion.div
        className="bg-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <section className="relative bg-black bg-opacity-80 text-white py-14 px-4 sm:px-10 md:px-20">
          <img
            src="https://storage.googleapis.com/a1aa/image/7a13c41d-f55e-41f8-dcdb-2143c16968db.jpg"
            alt="Brain background"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            aria-hidden="true"
          />
          <div className="relative max-w-4xl mx-auto text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-1">User Registration</h2>
            <nav className="text-sm text-green-400">
              Home / <span className="text-green-600">Register</span>
            </nav>
          </div>
        </section>
      </motion.div>

      {/* Form */}
      <main className="w-full max-w-md mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 sm:p-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-center text-xl font-semibold mb-6">Create an Account</h3>

          {!showOTPInput ? (
            <form className="space-y-5" onSubmit={handleRegister}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                required
                className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Id"
                required
                className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded transition"
              >
                Register
              </button>
              {message && (
                <p className="mt-4 text-center text-sm text-red-600">{message}</p>
              )}
            </form>
          ) : (
            <div className="space-y-5">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP sent to your email"
                required
                className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {otpTimer > 0 && (
                <p className="text-sm text-center text-gray-600">
                  OTP expires in <span className="font-semibold">{otpTimer}s</span>
                </p>
              )}
              <button
                type="button"
                onClick={handleVerifyOtp}
                disabled={!otpSent || otpTimer <= 0}
                className={`w-full ${
                  otpSent && otpTimer > 0
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                } text-white font-medium py-2.5 rounded transition`}
              >
                Verify OTP
              </button>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default Register;
