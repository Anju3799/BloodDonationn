import React, { useState } from "react";
import {useAuth} from '../context/Authcontext.jsx'
import {useNavigate} from 'react-router-dom'
const Register = ({ userType = "DONOR" }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const {register}=useAuth();
  const navigate = useNavigate();
  const handleSubmit = async () => {
    if (!username || !email || !password) {
      alert("All fields are required");
      return;
    }

    setLoading(true);
    const userData ={
      username,
      email,
      password,
      user_type:userType
    }

    try {
      const data = await register(userData);
      if (data.success) {
        alert(data.message);
         navigate('/login');
        // Reset form
        setUsername("");
        setEmail("");
        setPassword("");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error during registration. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isDonor = userType.toUpperCase() === "DONOR";

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">
              {isDonor ? "🩸" : "🏥"}
            </div>
            <h1 className="text-3xl font-bold text-red-600 mb-2">
              {isDonor ? "Donor Registration" : "Receiver Registration"}
            </h1>
            <p className="text-gray-600">
              {isDonor 
                ? "Register as a blood donor and save lives" 
                : "Register to request blood when needed"}
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                placeholder="example@gmail.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                placeholder="Enter password"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-red-600 text-white py-3.5 rounded-lg font-semibold text-lg hover:bg-red-700 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-red-600 font-semibold hover:underline">
                Login here
              </a>
            </p>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              {isDonor 
                ? "Need blood? " 
                : "Want to donate blood? "}
              <a 
                href={isDonor ? "/receiver" : "/donor"} 
                className="text-red-600 font-semibold hover:underline"
              >
                {isDonor ? "Register as receiver" : "Register as donor"}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;