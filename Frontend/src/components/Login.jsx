import React, { useState } from "react";
import {useAuth} from '../context/Authcontext.jsx'
import {useNavigate} from 'react-router-dom'
const Login = ({ userType = "USER" }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const {login,user}=useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async () => {
    if (!email || !password) {
      alert("Email and password are required");
      return;
    }

    setLoading(true);

    try {
      const result = await login(email, password);
      
      if (result.success) {
       
        alert(`Welcome back, ${user.username}!`);
        
        // Navigate based on user type
        const userTypeUpper = user.userType?.toUpperCase() || user.user_type?.toUpperCase();
        
        if (userTypeUpper === "ADMIN") {
          navigate("/admin");
        } else if (userTypeUpper === "DONOR") {
          navigate("/donor-dashboard");
        } else if (userTypeUpper === "RECEIVER") {
          navigate("/receiver-dashboard");
        }
      } else {
        alert(result.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error during login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isAdmin = userType.toUpperCase() === "ADMIN";

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">
              {isAdmin ? "🔐" : "🩸"}
            </div>
            <h1 className="text-3xl font-bold text-red-600 mb-2">
              {isAdmin ? "Admin Login" : "User Login"}
            </h1>
            <p className="text-gray-600">
              {isAdmin 
                ? "Access the admin dashboard" 
                : "Sign in to your account"}
            </p>
          </div>

          <div className="space-y-5">
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
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
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
                placeholder="Enter your password"
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-red-600 text-white py-3.5 rounded-lg font-semibold text-lg hover:bg-red-700 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {loading ? "Signing in..." : "Login"}
            </button>
          </div>

          {!isAdmin && (
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <a href="/register" className="text-red-600 font-semibold hover:underline">
                  Register here
                </a>
              </p>
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="text-center text-sm text-gray-600">
              <p className="mb-2">Quick Login:</p>
              <div className="space-y-1">
                {!isAdmin && (
                  <>
                    <p>
                      <a href="/donor" className="text-red-600 hover:underline">Register as Donor</a>
                      {" | "}
                      <a href="/receiver" className="text-red-600 hover:underline">Register as Receiver</a>
                    </p>
                  </>
                )}
                {isAdmin && (
                  <p className="text-xs text-gray-500">
                    Default: admin@bloodbank.com / admin123
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;