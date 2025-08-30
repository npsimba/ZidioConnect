import { useEffect, useState } from "react";
import { api, STUDENT_APPLY_JOB, STUDENT_GET_APPLICATIONS } from "../utils/api";

const StudentDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [jobs, setJobs] = useState([]); // later fetch from backend

  // ✅ Apply for job
  const handleApplyJob = async (jobId) => {
    try {
      await api.post(STUDENT_APPLY_JOB(jobId));
      alert("Applied successfully!");
      fetchApplications();
    } catch (err) {
      console.error("Error applying job", err);
      alert("Failed to apply for job.");
    }
  };

  // ✅ Fetch applications
  const fetchApplications = async () => {
    try {
      const res = await api.get(STUDENT_GET_APPLICATIONS);
      setApplications(res.data || []);
    } catch (err) {
      console.error("Error fetching applications", err);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <div className="p-6 min-h-screen bg-[#f9f7fd] text-[#4B2E83]">
      <h1 className="text-3xl font-bold mb-6">🎓 Student Dashboard</h1>

      {/* Jobs Section */}
      <div className="bg-white shadow p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Available Jobs</h2>
        {jobs.length === 0 ? (
          <p className="text-gray-500">No jobs available right now.</p>
        ) : (
          <ul className="space-y-3">
            {jobs.map((job) => (
              <li
                key={job.id}
                className="flex justify-between items-center border p-3 rounded"
              >
                <span>{job.title}</span>
                <button
                  onClick={() => handleApplyJob(job.id)}
                  className="bg-[#6D28D9] text-white px-3 py-1 rounded"
                >
                  Apply
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Applications */}
      <div className="bg-white shadow p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">My Applications</h2>
        {applications.length === 0 ? (
          <p className="text-gray-500">No applications yet.</p>
        ) : (
          <ul className="space-y-3">
            {applications.map((app) => (
              <li
                key={app.id}
                className="flex justify-between items-center border p-3 rounded"
              >
                <span>{app.jobTitle}</span>
                <span className="text-sm text-gray-600">{app.status}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;