import DashboardLayout from "../components/DashboardLayout";

const AdminDashboard = () => {
  return (
    <DashboardLayout role="admin">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <p className="mb-6">Manage platform users, recruiters, and job postings.</p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="font-semibold">Total Users</h3>
          <p className="text-3xl font-bold text-[#4B2E83]">1,200</p>
        </div>
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="font-semibold">Total Jobs</h3>
          <p className="text-3xl font-bold text-[#4B2E83]">320</p>
        </div>
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="font-semibold">Active Companies</h3>
          <p className="text-3xl font-bold text-[#4B2E83]">90</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;