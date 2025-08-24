import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";  // ✅ import

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });

      const token = res.data; // ✅ backend only returns token string
      localStorage.setItem("token", token);

      // ✅ Decode role from token payload
      const decoded = jwtDecode(token);
      const role = decoded.role || decoded.roles || decoded.authorities;

      localStorage.setItem("role", role);

      if (role === "STUDENT") {
        navigate("/student-dashboard");
      } else if (role === "RECRUITER") {
        navigate("/recruiter-dashboard");
      } else if (role === "ADMIN") {
        navigate("/admin-dashboard");
      } else {
        setError("Unknown role in token.");
      }
    } catch (err) {
      setError("Login failed. Please check credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f7fd]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#6B4DE6]">
          Login
        </h2>
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B4DE6]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B4DE6]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-[#6B4DE6] text-white py-2 rounded-md hover:bg-[#5A3CC9] transition"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-[#6B4DE6] hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
