import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function AdminLogin() {
  <Header/>
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add validation here
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    // Redirect to donor dashboard
    navigate("/donor-dashboard");
  };

  return (
    <>

    <Header/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50">
      <h2 className="text-3xl font-bold mb-6">Donor Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col space-y-4 w-80">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-red-600 text-white p-2 rounded hover:bg-red-700"
        >
          Login
        </button>
      </form>
    </div>
    </>
  );

}

export default AdminLogin;
