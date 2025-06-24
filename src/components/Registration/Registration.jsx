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
      const response = await fetch("https://backend-brain-2.onrender.com/user-register", {
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
      const res = await fetch("https://backend-brain-1.onrender.com/verify-otp", {
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
   <div
      className="min-h-screen bg-cover pt-10 bg-center bg-no-repeat font-nunito"
      style={{ backgroundImage: "url('/assets/brain8.jpg')" }}
    >
         <div className="absolute inset-0  bg-opacity-40 backdrop-blur-sm" />
      
            {/* Header */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <section className="text-center py-14 px-4 sm:px-10 md:px-20 text-white">
                <h2 className="text-4xl font-bold mb-1">
                Register
                </h2>
                <p className="text-green-300 text-sm">
                  Home / <span className="text-green-200">User Register</span>
                </p>
              </section>
            </motion.div>
      

      {/* Transparent Form Section */}
      <main className="w-full max-w-md mx-auto  px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-tansparent bg-opacity-20 backdrop-blur-lg shadow-xl rounded-xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-center text-2xl font-bold text-white mb-6">Create an Account</h3>

          {!showOTPInput ? (
            <form className="space-y-5" onSubmit={handleRegister}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                required
                className="w-full border border-gray-200 bg-white bg-opacity-80 rounded px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Id"
                required
                className="w-full border border-gray-200 bg-white bg-opacity-80 rounded px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full border border-gray-200 bg-white bg-opacity-80 rounded px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded transition"
              >
                Register
              </button>
              {message && (
                <p className="mt-4 text-center text-sm text-red-200">{message}</p>
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
                className="w-full border border-gray-200 bg-white bg-opacity-80 rounded px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={handleVerifyOtp}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded transition"
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
