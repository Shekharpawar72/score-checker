
import React, { useState, useEffect } from "react";
import SidebarButton from "./SidebarButton";
import {
  LogOut,
  Settings,
  ClipboardList,
  BarChart,
  Home,
  Calendar,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: Home },
  { label: "Interview Details", icon: Calendar },
  { label: "Results", icon: ClipboardList },
  { label: "ATS Score Checker", icon: BarChart },
  { label: "Settings", icon: Settings },
];

export default function AIInterviewDashboard() {
  const [active, setActive] = useState("Dashboard");
  const [profilePic, setProfilePic] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // User Data (from backend later)
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // ATS Score (from backend later)
  const [atsScore, setAtsScore] = useState(null);

  // Interviews List (from backend later)
  const [interviews, setInterviews] = useState([]);

  // ✅ Simulating backend fetch
  useEffect(() => {
    // Replace with real API calls (fetch/axios)
    setTimeout(() => {
      setUser({
        name: "Shekhar Pawar",
        email: "shekharpawar3108@gmail.com",
        phone: "9301163448",
      });

      setAtsScore({
        percentage: 85,
        feedback: "Strong Resume Match",
      });

      setInterviews([
        {
          id: 1,
          role: "Frontend Developer @ Amazon",
          date: "27 Aug 2025",
          time: "2:00 PM",
          status: "Confirmed",
        },
        {
          id: 2,
          role: "Backend Developer @ Microsoft",
          date: "30 Aug 2025",
          time: "4:30 PM",
          status: "Pending",
        },
      ]);
    }, 500); // simulate API delay
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    setError("");
    setMessage("");

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(user.phone)) {
      setError("❌ Phone number must be exactly 10 digits.");
      return;
    }
    if (!user.email.endsWith("@gmail.com")) {
      setError("❌ Only Gmail addresses are allowed (must end with @gmail.com).");
      return;
    }

    setMessage("✅ Details updated successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-200 relative">
      {/* --------- Mobile Menu Button (Top-Right) --------- */}
      {!sidebarOpen && (
        <button
          className="md:hidden absolute top-4 right-4 z-30 p-2 bg-gray-800 rounded-lg"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={24} />
        </button>
      )}

      {/* --------- Sidebar --------- */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-64 text-white bg-gray-800 shadow-lg flex flex-col justify-between transform transition-transform duration-300 z-40 shadow-blue-400
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white"><span className="text-blue-500">InterviewReady</span>-AI</h2>
          <button
            className="md:hidden text-white hover:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="p-2 space-y-1 flex-1 text-white">
          {navItems.map((item) => (
            <SidebarButton
              key={item.label}
              label={item.label}
              icon={item.icon}
              active={active === item.label}
              onClick={() => {
                setActive(item.label);
                setSidebarOpen(false);
              }}
            />
          ))}
        </nav>

        <div className="p-4 border-t border-gray-700 space-y-2">
          <SidebarButton
            label="Logout"
            icon={LogOut}
            danger
            onClick={() => alert("Logged Out")}
          />
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* --------- Main Content --------- */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">{active}</h1>

        {/* ---------------- Dashboard ---------------- */}
        {active === "Dashboard" && (
          <div className="space-y-6 shadow-lg shadow-blue-700 backdrop-blur-md">
            <div className="bg-gray-800 p-6 rounded-lg shadow">
              <div className="flex items-center space-x-6 border-b border-gray-700 pb-4 mb-4">
                <img
                  src={
                    profilePic ||
                    "https://via.placeholder.com/80x80.png?text=User"
                  }
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <h2 className="text-2xl font-semibold">
                  {user.name || "Loading..."}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                <div>
                  <p className="text-sm text-gray-400">📧 Email</p>
                  <p className="font-medium">{user.email || "Loading..."}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">📱 Phone</p>
                  <p className="font-medium">{user.phone || "Loading..."}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ---------------- Interview Details ---------------- */}
        {active === "Interview Details" && (
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 shadow-blue-700 backdrop-blur-md">
            <h2 className="text-xl font-semibold mb-4">Scheduled Interviews</h2>
            <ul className="space-y-4">
              {interviews.length > 0 ? (
                interviews.map((interview) => (
                  <li key={interview.id} className="p-4 bg-gray-700 rounded">
                    <p className="font-bold">{interview.role}</p>
                    <p className="text-sm text-gray-400">Date: {interview.date}</p>
                    <p className="text-sm text-gray-400">Time: {interview.time}</p>
                    <p
                      className={`text-sm ${
                        interview.status === "Confirmed"
                          ? "text-green-400"
                          : "text-yellow-400"
                      }`}
                    >
                      Status: {interview.status}
                    </p>
                  </li>
                ))
              ) : (
                <p className="text-gray-400">Loading interviews...</p>
              )}
            </ul>
          </div>
        )}

        {/* ---------------- Results ---------------- */}
        {active === "Results" && (
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 shadow-blue-700 backdrop-blur-md">
            <p>📊 Results data will be fetched from backend...</p>
          </div>
        )}

        {/* ---------------- ATS Score Checker ---------------- */}
        {active === "ATS Score Checker" && (
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 shadow-blue-700 backdrop-blur-md">
            {atsScore ? (
              <>
                <p className="text-2xl font-bold text-blue-400">
                  {atsScore.percentage}%
                </p>
                <p className="text-sm text-gray-400">{atsScore.feedback}</p>
              </>
            ) : (
              <p className="text-gray-400">Loading ATS score...</p>
            )}
          </div>
        )}

        {/* ---------------- Settings ---------------- */}
        {active === "Settings" && (
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 space-y-6 shadow-blue-700 backdrop-blur-md">
            <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
            <div className="flex items-center space-x-4">
              <img
                src={
                  profilePic || "https://via.placeholder.com/80x80.png?text=User"
                }
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <label
                  htmlFor="profile-upload"
                  className="cursor-pointer text-blue-400 hover:underline"
                >
                  Change Profile Picture
                </label>
                <input
                  type="file"
                  id="profile-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400">Name</label>
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full mt-1 p-2 rounded bg-gray-700 text-gray-200"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400">Email</label>
                <input
                  type="email"
                  value={user.email}
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full mt-1 p-2 rounded bg-gray-700 text-gray-200"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400">Phone</label>
                <input
                  type="text"
                  value={user.phone}
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  className="w-full mt-1 p-2 rounded bg-gray-700 text-gray-200"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400">Password</label>
                <input
                  type="password"
                  placeholder="Change password"
                  className="w-full mt-1 p-2 rounded bg-gray-700 text-gray-200"
                />
              </div>
            </div>

            <button
              className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
              onClick={handleSave}
            >
              Save Changes
            </button>

            {message && (
              <p className="text-green-400 font-medium mt-2">{message}</p>
            )}
            {error && <p className="text-red-400 font-medium mt-2">{error}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
