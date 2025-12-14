import { Routes, Route } from "react-router-dom";
import App from "../App";


import Donate from "../components/Donate";
import About from "../components/About";
import Register from "../components/Register";
import Errorr from "../components/Error";

import DonorLogin from "../components/Admin";
import AdminLogin from "../components/Admin";
import ReceiverLogin from "../components/Receiver";
import Login from "../components/Login";
import DonorDashboard from "../pages/DonorDashboard";

const RouterconfigComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/donate" element={< Donate />} />
      <Route path="/register" element={< Register />} />
      <Route path="/contact" element={<Errorr />} />
      {/* <Route path="/login" element={< Login />} /> */}
      
      {/* < Route path="/admin" element={< AdminLogin />} /> */}
      {/* <Route path="/receiver" element={< ReceiverLogin/>}/> */}

      // Donor registration
<Route path="/donor" element={<Register userType="DONOR" />} />

// Receiver registration  
<Route path="/receiver" element={<Register userType="RECEIVER" />} />

// User login
<Route path="/login" element={<Login userType="USER" />} />

// Admin login
<Route path="/admin" element={<Login userType="ADMIN" />} />

<Route path="/donor-dashboard" element={<DonorDashboard />} />

    </Routes>
  );
};

export default RouterconfigComponent;
