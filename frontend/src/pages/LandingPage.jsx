import { Link } from "react-router-dom";
import { BarChart3, Users2, Building2 } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Pie,
  PieChart as RePieChart,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Hover wrapper
const HoverWrapper = ({ children, index, hoveredIndex, setHoveredIndex }) => (
  <div
    className="relative group cursor-pointer"
    onMouseEnter={() => setHoveredIndex(index)}
    onMouseLeave={() => setHoveredIndex(null)}
  >
    <AnimatePresence>
      {hoveredIndex === index && (
        <motion.span
          layoutId="hoverBackground"
          className="absolute inset-0 block bg-purple-100/70 rounded-xl z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
        />
      )}
    </AnimatePresence>
    <div className="relative z-10">{children}</div>
  </div>
);

const barData = [
  { name: "Jobs Posted", value: 1250 },
  { name: "Active Users", value: 4580 },
  { name: "Companies", value: 240 },
];

const pieData = [
  { name: "Students", value: 50 },
  { name: "Recruiters", value: 30 },
  { name: "Professionals", value: 20 },
];

const COLORS = ["#7C3AED", "#A78BFA", "#C4B5FD"];

const LandingPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const metrics = [
    {
      title: "Jobs Posted",
      icon: <BarChart3 className="mx-auto mb-2 text-purple-600" size={32} />,
      value: "1,250",
    },
    {
      title: "Active Users",
      icon: <Users2 className="mx-auto mb-2 text-purple-700" size={32} />,
      value: "4,580",
    },
    {
      title: "Companies",
      icon: <Building2 className="mx-auto mb-2 text-purple-500" size={32} />,
      value: "240",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f9f7fd] text-[#4B2E83]">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow bg-white">
        <div className="text-2xl font-bold text-purple-700">ZidioConnect</div>
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><a href="#home" className="hover:text-purple-700">Home</a></li>
          <li><a href="#about" className="hover:text-purple-700">About</a></li>
          <li><a href="#companies" className="hover:text-purple-700">Companies</a></li>
          <li><a href="#contact" className="hover:text-purple-700">Contact</a></li>
        </ul>
        <div className="space-x-3">
          <Link to="/register">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#6D28D9" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-purple-700 text-white px-4 py-1 rounded-md"
            >
              Register
            </motion.button>
          </Link>
          <Link to="/login">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#ede9fe" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border border-purple-700 text-purple-700 px-4 py-1 rounded-md"
            >
              Log in
            </motion.button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-16 px-4 sm:px-10 md:px-20 overflow-hidden">
        <div className="flex items-center justify-center w-full flex-col px-4">
          <h1 className="text-center text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight py-4 md:py-8 z-20">
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Zidio</span>
            <span className="bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">Connect</span>
          </h1>
          <div className="text-2xl font-semibold">
            The smarter way to MANAGE, ISSUE, & VERIFY with companies & recruiters.
          </div>

          <div className="mt-6 z-20">
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#6D28D9" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-purple-700 text-white px-6 py-2 rounded"
              >
                Get Started
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-[#f4f0fa] py-14 px-6 md:px-20" id="services">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">Key Metrics</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {metrics.map((metric, index) => (
            <HoverWrapper
              key={index}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            >
              <div className="bg-[#ede9fe] rounded-xl p-6 shadow transition-transform duration-300 group-hover:scale-105">
                {metric.icon}
                <h3 className="text-lg font-bold">{metric.title}</h3>
                <p className="text-2xl font-semibold text-purple-700">{metric.value}</p>
              </div>
            </HoverWrapper>
          ))}
        </div>
      </section>

      {/* Analytics Section */}
      <section className="bg-[#faf7ff] py-14 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">Analytics</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Bar Chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">Stats Overview</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#7C3AED" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">User Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <RePieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius="50%"
                  outerRadius="70%"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </RePieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#faf7ff] py-14 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">Contact Us</h2>
        <div className="max-w-xl mx-auto text-center text-[#4B2E83]">
          <p>Email: <a href="mailto:support@zidioconnect.com" className="underline">support@zidioconnect.com</a></p>
          <p className="mt-2">Phone: +91 98765 43210</p>
          <p className="mt-2">We'd love to hear from you. Reach out with any questions or feedback!</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
