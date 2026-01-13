import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AdminReg = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [showOtpText, setShowOtpText] = useState(false);
  const [loading, setLoading] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [timeLeft, setTimeLeft] = useState(180);
  const [otpExpired, setOtpExpired] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (showOTP && timeLeft > 0 && !otpExpired && attempts < 3) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    }
    if (timeLeft === 0 && !otpExpired) {
      setOtpExpired(true);
      alert("OTP expired. Please resend.");
    }
    return () => clearInterval(timer);
  }, [showOTP, timeLeft, otpExpired, attempts]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://backend-brain1.onrender.com/admin-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        alert("Confirmation email sent to admin and OTP sent to Super Admin.");
        setShowOTP(true);
        setTimeLeft(180);
        setOtpExpired(false);
        setAttempts(0);
        setOtp("");
      } else {
        if (data.message?.toLowerCase().includes("invalid email")) {
          alert("Invalid email address. Please enter a correct one.");
        } else {
          alert(data.message || "Registration request failed.");
        }
      }
    } catch {
      alert("Error: Could not connect to server");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) return alert("Please enter the OTP");
    if (otpExpired) return alert("OTP has expired.");
    if (attempts >= 3) {
      alert("Wrong OTP entered 3 times.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://backend-brain-1.onrender.com/verify-admin-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        alert("Admin registered successfully!");
        setTimeout(() => navigate("/admin"), 1500);
      } else {
        if (data.message?.toLowerCase().includes("invalid email")) {
          alert("Invalid email address. Could not send confirmation message.");
        } else {
          setAttempts((prev) => prev + 1);
          if (attempts + 1 >= 3) {
            setOtpExpired(true);
            alert("Wrong OTP entered 3 times.");
          } else {
            alert("Incorrect OTP. Try again.");
          }
        }
      }
    } catch {
      alert("Could not verify OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (!name || !email || !password) {
      return alert("Please fill registration form first.");
    }
    setLoading(true);
    try {
      const res = await fetch("https://backend-brain1.onrender.com/admin-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        alert("OTP resent to Super Admin.");
        setTimeLeft(180);
        setOtpExpired(false);
        setAttempts(0);
        setOtp("");
      } else {
        if (data.message?.toLowerCase().includes("invalid email")) {
          alert("Invalid email address. Please enter a correct one.");
        } else {
          alert(data.message || "Failed to resend OTP.");
        }
      }
    } catch {
      alert("Failed to resend OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center font-nunito relative"
      style={{ backgroundImage: `url('/assets/brain8.jpg')` }}
    >
      <div className="absolute inset-0 bg-opacity-40 backdrop-blur-sm z-0" />

      {loading && (
        <motion.div
          className="absolute inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-16 h-16 border-[6px] border-green-400 border-t-transparent rounded-full animate-spin"></div>
        </motion.div>
      )}

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <section className="text-center py-14 text-white">
          <h2 className="text-4xl font-bold mb-1">Admin Registration</h2>
          <p className="text-green-300 text-sm">
            Home / <span className="text-green-200">Admin Register</span>
          </p>
        </section>
      </motion.div>

      <main className="w-full max-w-md mx-auto px-4 relative z-10">
        <motion.div
          className="bg-white/10 backdrop-blur-lg shadow-xl rounded-xl p-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-center text-2xl font-bold text-white mb-6">
            {showOTP ? "Enter OTP" : "Request Admin Access"}
          </h3>

          {!showOTP ? (
            <form className="space-y-5" onSubmit={handleRegister}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 bg-white bg-opacity-80 rounded text-sm focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full px-4 py-3 bg-white bg-opacity-80 rounded text-sm focus:ring-2 focus:ring-green-500"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full px-4 py-3 bg-white bg-opacity-80 rounded text-sm focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded"
              >
                {loading ? "Submitting..." : "Request Access"}
              </button>
            </form>
          ) : (
            <div className="space-y-5 text-white text-center">
              {attempts < 3 && !otpExpired && (
                <p className="text-sm text-yellow-300">
                  OTP expires in: {formatTime(timeLeft)}
                </p>
              )}
              <p className="text-sm text-red-300">
                Attempts left: {3 - attempts}
              </p>
              <div className="relative">
                <input
                  type={showOtpText ? "text" : "password"}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  required
                  className="w-full px-4 py-3 bg-white bg-opacity-80 rounded text-sm text-black pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowOtpText(!showOtpText)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm"
                >
                  {showOtpText ? "Hide" : "Show"}
                </button>
              </div>
              <button
                type="button"
                onClick={handleVerifyOtp}
                disabled={loading || attempts >= 3 || otpExpired}
                className={`w-full ${
                  loading || attempts >= 3 || otpExpired
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white py-2.5 rounded`}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>

              <button
                type="button"
                onClick={handleResendOtp}
                disabled={loading}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded"
              >
                Resend OTP
              </button>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default AdminReg;
