import axios from "axios";

// ✅ Base URL of your backend
const API_BASE = "http://localhost:8080/api";

// ✅ Create a reusable axios instance
const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

// ---------------------- AUTH ENDPOINTS ----------------------
export const REGISTER_API = API_BASE + "/auth/register";
export const LOGIN_API = API_BASE + "/auth/login";

// ---------------------- STUDENT ENDPOINTS ----------------------
export const STUDENT_PROFILE = API_BASE + "/student/profile";
export const STUDENT_UPLOAD_RESUME = API_BASE + "/student/resume/upload";
export const STUDENT_GET_RESUME = API_BASE + "/student/resume";
export const STUDENT_APPLY_JOB = (jobId) =>
  API_BASE + "/student/job/apply?jobId=" + jobId;
export const STUDENT_GET_APPLICATIONS = API_BASE + "/student/job/applications";

// ---------------------- UTILS ----------------------
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export { api, API_BASE };