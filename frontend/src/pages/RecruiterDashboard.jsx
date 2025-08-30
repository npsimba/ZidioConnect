import DashboardLayout from "../components/DashboardLayout";

const RecruiterDashboard = () => {
  return (
    <DashboardLayout role="recruiter">
      <h2 className="text-2xl font-bold mb-4">Recruiter Dashboard</h2>
      <p className="mb-6">Post jobs, view applicants, and manage company hiring.</p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="font-semibold">Jobs Posted</h3>
          <p className="text-3xl font-bold text-[#4B2E83]">8</p>
        </div>
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="font-semibold">Applicants</h3>
          <p className="text-3xl font-bold text-[#4B2E83]">154</p>
        </div>
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="font-semibold">Interviews Scheduled</h3>
          <p className="text-3xl font-bold text-[#4B2E83]">20</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RecruiterDashboard;