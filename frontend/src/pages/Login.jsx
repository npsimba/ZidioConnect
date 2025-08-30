import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LOGIN_API, setAuthToken } from "../utils/api";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(LOGIN_API, form);

      // ✅ Store token
      const token = res.data.token;
      localStorage.setItem("token", token);

      // ✅ Attach token globally to axios
      setAuthToken(token);

      // ✅ Decode role
      const decoded = jwtDecode(token);
      const role = decoded.role;

      // ✅ Redirect based on role
      if (role === "STUDENT") {
        navigate("/student-dashboard");
      } else if (role === "RECRUITER") {
        navigate("/recruiter-dashboard");
      } else if (role === "ADMIN") {
        navigate("/admin-dashboard");
      } else {
        alert("Unknown role, contact admin!");
      }
    } catch (err) {
      console.error("Login error", err);
      alert("Invalid credentials or server error.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f3e8ff]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-[#6D28D9] mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-[#6D28D9]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-[#6D28D9]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#6D28D9] text-white py-2 px-4 rounded-lg hover:bg-[#5B21B6] transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;