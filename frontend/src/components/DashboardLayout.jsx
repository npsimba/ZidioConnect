import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Home,
  FileText,
  Briefcase,
  LogOut,
} from "lucide-react";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-[#f9f7fd] text-[#4B2E83]">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-[#4B2E83] text-white p-5 transition-all duration-300`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white mb-6 focus:outline-none"
        >
          {isOpen ? "⬅" : "➡"}
        </button>

        <nav className="space-y-6">
          <Link to="/student/dashboard" className="flex items-center space-x-3">
            <Home size={20} />
            {isOpen && <span>Dashboard</span>}
          </Link>
          <Link to="/student/resume" className="flex items-center space-x-3">
            <FileText size={20} />
            {isOpen && <span>Upload Resume</span>}
          </Link>
          <Link to="/student/dashboard" className="flex items-center space-x-3">
            <Briefcase size={20} />
            {isOpen && <span>Applications</span>}
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 w-full text-left"
          >
            <LogOut size={20} />
            {isOpen && <span>Logout</span>}
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">🎓 Student Portal</h1>
          <span className="text-gray-600">Welcome, Student</span>
        </header>

        {/* Page Content */}
        <main className="p-6 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;