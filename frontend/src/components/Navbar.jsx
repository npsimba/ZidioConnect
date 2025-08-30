import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow bg-white text-[#4B2E83]">
      <div className="text-2xl font-bold">ZidioConnect</div>
      <ul className="hidden md:flex space-x-6 text-sm font-medium">
        <li><Link to="/" className="hover:text-purple-700">Home</Link></li>
        <li><Link to="/student" className="hover:text-purple-700">Student</Link></li>
        <li><Link to="/recruiter" className="hover:text-purple-700">Recruiter</Link></li>
        <li><Link to="/admin" className="hover:text-purple-700">Admin</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;