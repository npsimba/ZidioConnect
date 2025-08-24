import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-[#f9f7fd] text-[#4B2E83] px-6 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">⚙️ Admin Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">User Management</h2>
          <p className="text-sm">View and manage students & recruiters.</p>
          <Link to="/manage-users" className="text-purple-700 hover:underline mt-2 block">
            Manage Users →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Job Post Monitoring</h2>
          <p className="text-sm">Review all job postings for compliance.</p>
          <Link to="/monitor-jobs" className="text-purple-700 hover:underline mt-2 block">
            Monitor Jobs →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Analytics</h2>
          <p className="text-sm">View platform usage insights and reports.</p>
          <Link to="/analytics" className="text-purple-700 hover:underline mt-2 block">
            View Analytics →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
