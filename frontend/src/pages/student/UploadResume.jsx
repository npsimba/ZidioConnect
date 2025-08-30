import { useState, useEffect } from "react";
import { api, STUDENT_UPLOAD_RESUME, STUDENT_GET_RESUME } from "../../utils/api";

const UploadResume = () => {
  const [resume, setResume] = useState(null);
  const [uploadedResume, setUploadedResume] = useState(null);

  // Fetch existing resume if uploaded
  const fetchResume = async () => {
    try {
      const res = await api.get(STUDENT_GET_RESUME);
      setUploadedResume(res.data?.resumeUrl || null);
    } catch (err) {
      console.error("Error fetching resume", err);
    }
  };

  useEffect(() => {
    fetchResume();
  }, []);

  // Upload new resume
  const handleResumeUpload = async (e) => {
    e.preventDefault();
    if (!resume) return alert("Please select a file!");

    const formData = new FormData();
    formData.append("resume", resume);

    try {
      await api.post(STUDENT_UPLOAD_RESUME, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("✅ Resume uploaded successfully!");
      fetchResume();
    } catch (err) {
      console.error("Error uploading resume", err);
      alert("❌ Failed to upload resume");
    }
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg min-h-screen">
      <h2 className="text-2xl font-bold mb-6">📄 Upload Resume</h2>

      <form onSubmit={handleResumeUpload} className="flex space-x-4 mb-6">
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setResume(e.target.files[0])}
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Upload
        </button>
      </form>

      {uploadedResume ? (
        <div>
          <p className="mb-2 text-gray-700">Your uploaded resume:</p>
          <a
            href={uploadedResume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View Resume
          </a>
        </div>
      ) : (
        <p className="text-gray-500">No resume uploaded yet.</p>
      )}
    </div>
  );
};

export default UploadResume;