import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import LandingPage from "./pages/LandingPage";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import UploadResume from "./pages/student/UploadResume";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Student Routes */}
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/
      " element={<UploadResume />} />

      {/* Admin Routes */}
      <Route path="/admin-dashboard" element={<AdminDashboard />} />

      {/* RecruiterDashboard Routes */}
            <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
    </Routes>
  );
}