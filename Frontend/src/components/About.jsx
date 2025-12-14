import { motion } from "framer-motion";
import Header from "./Header";


function About(){
    return(<>
    <Header/>



    <div className="min-h-screen bg-gradient-to-r from-red-300 via-pink-300 to-yellow-300 animate-gradient 
flex items-center justify-center p-6">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl bg-white shadow-xl rounded-2xl p-12"
      >
        <h1 className="text-4xl font-bold text-red-600 mb-4">About Us</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Our Blood Donation Management System is designed to connect blood donors,
          recipients, and medical organizations in a seamless and efficient way.
          We aim to create a reliable platform that ensures timely availability of
          blood and promotes the life‑saving act of donation.
        </p>

        <h2 className="text-2xl font-semibold text-red-500 mb-3">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          To build a trustworthy digital system that makes blood donation simple,
          fast, and accessible for everyone, while spreading awareness about the
          importance of voluntary blood donation.
        </p>

        <h2 className="text-2xl font-semibold text-red-500 mb-3">What We Offer</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li>Easy donor registration and profile management</li>
          <li>Search and match blood donors by location and blood group</li>
          <li>Real‑time availability updates</li>
          <li>Secure and user‑friendly interface</li>
        </ul>

        <h2 className="text-2xl font-semibold text-red-500 mb-3">Why It Matters</h2>
        <p className="text-gray-700">
          Thousands of lives can be saved each day through donated blood. By making
          this process more organized and accessible, we contribute toward building
          a healthier and more supportive community.
        </p>
      </motion.div>
    </div>
  

    </>)
}
export default About;