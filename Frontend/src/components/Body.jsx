import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Body() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-red-300 min-h-screen">
      {/* decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <svg className="absolute top-0 left-1/2 -translate-x-1/2 opacity-20" width="1000" height="700" viewBox="0 0 1000 700" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#ffdde1" />
              <stop offset="100%" stopColor="#ffb4b4" />
            </linearGradient>
          </defs>
          <path d="M0 300 C200 100 400 500 1000 300 L1000 700 L0 700 Z" fill="url(#g1)" />
        </svg>
        <svg className="absolute bottom-0 right-0 opacity-10 rotate-45" width="500" height="500" viewBox="0 0 500 500">
          <circle cx="250" cy="250" r="220" fill="#fde8e8" />
        </svg>
      </div>

    

         
        
      

      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
            >
              Give blood. Give life.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-6 text-gray-700 text-lg max-w-xl"
            >
              Our platform connects donors with people in need — fast, safe, and reliable. Join our community of volunteers and help save lives today.
            </motion.p>

            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="mt-8 flex items-center space-x-4"
            >
              <Link to="/donate" className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition">
                Donate Now
              </Link>
              <Link to="/volunteer" className="inline-block px-6 py-3 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition">
                Volunteer
              </Link>
            </motion.div>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-sm">
              <motion.div whileHover={{ y: -6 }} className="flex flex-col items-center">
                <div className="text-3xl font-bold text-red-600">1.2k+</div>
                <div className="text-sm text-gray-600">Donors</div>
              </motion.div>
              <motion.div whileHover={{ y: -6 }} className="flex flex-col items-center">
                <div className="text-3xl font-bold text-red-600">980+</div>
                <div className="text-sm text-gray-600">Units Collected</div>
              </motion.div>
              <motion.div whileHover={{ y: -6 }} className="flex flex-col items-center">
                <div className="text-3xl font-bold text-red-600">450+</div>
                <div className="text-sm text-gray-600">Lives Helped</div>
              </motion.div>
            </div>
          </div>

          {/* Animated Illustration */}
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative w-full max-w-md"
            >
              {/* Floating Blood Drop */}
              <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="mx-auto w-48 h-48 flex items-center justify-center"
              >
                <svg viewBox="0 0 64 64" className="w-48 h-48">
                  <defs>
                    <linearGradient id="dropGrad" x1="0" x2="1">
                      <stop offset="0%" stopColor="#ff6b6b" />
                      <stop offset="100%" stopColor="#c50000" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#dropGrad)" d="M32 4 C20 18 12 28 12 36 A20 20 0 1 0 52 36 C52 28 44 18 32 4 Z" />
                  <ellipse cx="28" cy="20" rx="6" ry="3" fill="rgba(255,255,255,0.4)" />
                </svg>
              </motion.div>

              {/* layered cards behind drop */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 0.12 }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                  className="w-60 h-40 bg-white rounded-2xl shadow-xl transform -rotate-6"
                />
                <motion.div
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 0.08 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="w-56 h-36 bg-white rounded-2xl shadow-lg transform rotate-3"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureIcon
            title="Safe & Verified"
            desc="Donor identities and blood screening info available to hospitals."
            icon="shield"
          />
          <FeatureIcon
            title="Near You"
            desc="Find donors and camps by location and blood group."
            icon="map"
          />
          <FeatureIcon
            title="Real-time Alerts"
            desc="Get notified instantly when a match is found."
            icon="bell"
          />
        </section>

        {/* Callout */}
        <section className="mt-20 bg-red-600 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">Ready to save a life today?</h3>
            <p className="mt-2 text-sm opacity-90">Register as a donor or request blood in just a few clicks.</p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link to="/register" className="px-6 py-3 bg-white text-red-600 rounded-lg font-semibold shadow hover:scale-105 transition">Get Started</Link>
          </div>
        </section>

        
      </main>

      {/* small footer */}
      <footer className="py-6 bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} BloodDonation — Built with ❤️</div>
      </footer>

      {/* small component definitions */}
      <style>{`
        /* extra decorative animation for subtle parallax */
        @keyframes floatX { 0% { transform: translateX(0) } 50% { transform: translateX(6px) } 100% { transform: translateX(0) } }
        .moveRight { animation: floatX 4s ease-in-out infinite }
      `}</style>
    </div>
  );
}

function FeatureIcon({ title, desc, icon }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="bg-white rounded-2xl p-6 shadow hover:shadow-xl">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center text-red-600 font-bold">
          {icon === "shield" && "🛡️"}
          {icon === "map" && "📍"}
          {icon === "bell" && "🔔"}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{title}</div>
          <div className="text-sm text-gray-600 mt-1">{desc}</div>
        </div>
      </div>
    </motion.div>
  );
}

function Testimonial({ name, story }) {
  return (
    <motion.blockquote whileHover={{ scale: 1.02 }} className="p-6 bg-white rounded-2xl shadow">
      <div className="text-gray-700">“{story}”</div>
      <div className="mt-4 text-sm font-semibold text-gray-900">— {name}</div>
    </motion.blockquote>
  );
}
