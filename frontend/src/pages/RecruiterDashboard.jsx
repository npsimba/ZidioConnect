import { Link } from "react-router-dom";

const RecruiterDashboard = () => {
  return (
    <div className="min-h-screen bg-[#f9f7fd] text-[#4B2E83] px-6 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">🏢 Recruiter Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Post Jobs</h2>
          <p className="text-sm">Create new job postings to attract candidates.</p>
          <Link to="/post-job" className="text-purple-700 hover:underline mt-2 block">
            Post a Job →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Manage Applications</h2>
          <p className="text-sm">View and shortlist student applications.</p>
          <Link to="/manage-applications" className="text-purple-700 hover:underline mt-2 block">
            Manage Applications →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Company Profile</h2>
          <p className="text-sm">Update your recruiter/company details.</p>
          <Link to="/company-profile" className="text-purple-700 hover:underline mt-2 block">
            Edit Company Profile →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
