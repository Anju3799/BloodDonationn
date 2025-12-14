import { Routes, Route } from "react-router-dom";
import App from "../App";


import Donate from "../components/Donate";
import About from "../components/About";
import Register from "../components/Register";
import Errorr from "../components/Error";
import Login from "../components/Receiver";
import DonorLogin from "../components/Admin";
import AdminLogin from "../components/Admin";
import ReceiverLogin from "../components/Receiver";


const RouterconfigComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/donate" element={< Donate />} />
      <Route path="/register" element={< Register />} />
      <Route path="/contact" element={<Errorr />} />
      <Route path="/login" element={< Login />} />
      <Route path="/donor" element={< Register />} />
      < Route path="/admin" element={< AdminLogin />} />
      <Route path="/receiver" element={< ReceiverLogin/>}/>



    </Routes>
  );
};

export default RouterconfigComponent;
