import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "./Login.css";

const Login = ({ role = "user" }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const loginEndpoint = role === "admin" ? "/admin-login" : "/user-login";

      const response = await fetch(`https://backend-brain-1.onrender.com${loginEndpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success("Login Successful!");
        localStorage.setItem("email", data.email);

        if (role === "admin") {
          localStorage.setItem("isAdmin", "true");
          localStorage.removeItem("isUser");
          navigate("/");
        } else {
          localStorage.setItem("isUser", "true");
          localStorage.removeItem("isAdmin");
          navigate("/");
        }
      } else {
        setMessage(data.message || "Login failed");
      }
    } catch (error) {
      setMessage("Error: Could not connect to server");
    }
  };

  return (
    <div
      className="relative min-h-screen bg-cover top-10 bg-center text-white font-nunito"
      style={{ backgroundImage: "url('/assets/brain7.jpg')" }}
    >
      {/* Overlay dark blur */}
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
            {role === "admin" ? "Admin Login" : "User Login"}
          </h2>
          <p className="text-green-300 text-sm">
            Home /{" "}
            <span className="text-green-200">
              {role === "admin" ? "Admin" : "User"} Login
            </span>
          </p>
        </section>
      </motion.div>

      {/* Login Form */}
      <main className="relative z-10 w-full max-w-md mx-auto mt-4 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-transparent backdrop-blur-lg border border-white/30 shadow-xl p-8 rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-center text-2xl font-semibold mb-6 text-white">
            Login to your account
          </h3>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Id"
              required
              className="w-full bg-white/20 text-white placeholder-white border border-gray-300 rounded px-4 py-3 text-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full bg-white/20 text-white placeholder-white border border-gray-300 rounded px-4 py-3 text-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded transition"
            >
              Sign In
            </button>
            {message && (
              <p
                className={`mt-4 text-center text-sm ${
                  message.toLowerCase().includes("success")
                    ? "text-green-300"
                    : "text-red-300"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </motion.div>
      </main>
    </div>
  );
};

export default Login;
