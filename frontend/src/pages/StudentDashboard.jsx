import { Link } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-[#f9f7fd] text-[#4B2E83] px-6 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">🎓 Student Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Available Jobs</h2>
          <p className="text-sm">Browse job postings from recruiters and companies.</p>
          <Link to="/jobs" className="text-purple-700 hover:underline mt-2 block">
            View Jobs →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">My Applications</h2>
          <p className="text-sm">Track the jobs you have applied for.</p>
          <Link to="/applications" className="text-purple-700 hover:underline mt-2 block">
            View Applications →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Profile</h2>
          <p className="text-sm">Update your resume and personal details.</p>
          <Link to="/profile" className="text-purple-700 hover:underline mt-2 block">
            Edit Profile →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
