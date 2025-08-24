import { Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
  );
}

export default App;
