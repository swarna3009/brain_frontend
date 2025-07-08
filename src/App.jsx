import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Nav from "./components/Nav/Nav";
import Login from "./components/Login/Login";
import Feedback from "./components/Feedback/Feedback";
import Prediction from "./components/Prediction/Prediction";
import Admin from "./components/Admin/AdminLogin";
import Registration from "./components/Registration/Registration";
import Footer from "./components/Footer/Footer";
import AdminDashboard from './components/Admin/AdminDashboard';
import ChangePassword from "./components/Change/ChangePassword";
import AdminFeedback from "./components/Feedback/AdminFeedback";
import ManagaeContact from "./components/Contact/ManageContact";
import AdminPrediction from "./components/Prediction/AdminPrediction";
import AdminReg from "./components/Admin/AdminReg"; // ✅ Import AdminReg

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<Login role="user" />} />
        <Route path="/prediction" element={<Prediction />} />
        <Route path="/about" element={<Navbar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/password" element={<ChangePassword />} />
        <Route path="/adminfeedback" element={<AdminFeedback />} />
        <Route path="/managecontact" element={<ManagaeContact />} />
        <Route path="/adminprediction" element={<AdminPrediction />} />
        <Route path="/adminregister" element={<AdminReg />} /> {/* ✅ New Route */}
      </Routes>
      <ToastContainer position="top-right" autoClose={3000}/>
      <Footer />
    </Router>
  );
}

export default App;
