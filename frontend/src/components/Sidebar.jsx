import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-60 h-screen bg-[#f3e8ff] text-[#4B2E83] p-5 shadow-md">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <ul className="space-y-4">
        <li><Link to="/" className="hover:text-purple-700">Home</Link></li>
        <li><Link to="/profile" className="hover:text-purple-700">Profile</Link></li>
        <li><Link to="/jobs" className="hover:text-purple-700">Jobs</Link></li>
        <li><Link to="/settings" className="hover:text-purple-700">Settings</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;