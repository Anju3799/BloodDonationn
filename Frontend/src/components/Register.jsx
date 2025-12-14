import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";

const Register = () => {
  // ✅ State variables
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  // ✅ Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/donors", {
        fullName,
        email,
        phone,
        bloodGroup,
      });
      
      alert(res.data.message);
      // Reset form
      setFullName(""); 
      setEmail(""); 
      setPhone(""); 
      setBloodGroup("");
    } catch (err) {
      console.error(err);
      alert("Error registering donor");
    }
  };

  return (
    <>
      <Header />

      <div className="min-h-screen flex items-center justify-center bg-red-50 px-4 py-10 mt-20">
        <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
            Donor Registration
          </h1>

          {/* ✅ Add onSubmit to form */}
          <form className="space-y-5" onSubmit={handleSubmit}>

            <div>
              <label className="block text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="example@gmail.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Phone</label>
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="98XXXXXXXX"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Blood Group</label>
              <select
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
              >
                <option>Select Blood Group</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>O+</option>
                <option>O-</option>
                <option>AB+</option>
                <option>AB-</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
            >
              Register
            </button>

          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
