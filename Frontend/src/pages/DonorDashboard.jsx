import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DonorDashboard = () => {
  const navigate = useNavigate();
  const [donorData, setDonorData] = useState(null);
  const [isAvailable, setIsAvailable] = useState(true);
  const [donationRequests, setDonationRequests] = useState([]);
  const [donationHistory, setDonationHistory] = useState([]);
  const [stats, setStats] = useState({
    totalDonations: 0,
    livesSaved: 0,
    nextEligibleDate: null,
  });
  const [loading, setLoading] = useState(true);

  // TODO: Fetch donor data on component mount
  useEffect(() => {
    fetchDonorData();
    fetchDonationRequests();
    fetchDonationHistory();
  }, []);

  const fetchDonorData = async () => {
    try {
      // TODO: Replace with your actual API endpoint
      // const response = await fetch("http://localhost:5000/api/donor/profile", {
      //   method: "GET",
      //   credentials: "include", // Important for sending cookies
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });

      // TODO: Handle API response
      // const data = await response.json();
      // if (data.success) {
      //   setDonorData(data.donor);
      //   setIsAvailable(data.donor.isAvailable);
      // }

      // TEMPORARY: Mock data
      setDonorData({
        id: 1,
        fullName: "John Doe",
        email: "john@example.com",
        bloodType: "O+",
        phoneNumber: "1234567890",
        city: "New York",
        state: "NY",
        weight: 70,
        lastDonationDate: "2024-09-15",
        isAvailable: true,
      });

      setStats({
        totalDonations: 5,
        livesSaved: 15, // Typically 1 donation = 3 lives
        nextEligibleDate: "2025-01-15",
      });

      setLoading(false);
    } catch (error) {
      console.error("Error fetching donor data:", error);
      setLoading(false);
    }
  };

  const fetchDonationRequests = async () => {
    try {
      // TODO: Fetch donation requests from nearby receivers
      // const response = await fetch("http://localhost:5000/api/donor/requests", {
      //   method: "GET",
      //   credentials: "include",
      // });
      // const data = await response.json();
      // setDonationRequests(data.requests);

      // TEMPORARY: Mock data
      setDonationRequests([
        {
          id: 1,
          receiverName: "Jane Smith",
          bloodType: "O+",
          urgency: "High",
          location: "City Hospital, NY",
          distance: "2.3 km",
          requestDate: "2024-12-14",
          unitsNeeded: 2,
        },
        {
          id: 2,
          receiverName: "Mike Johnson",
          bloodType: "O+",
          urgency: "Medium",
          location: "General Hospital, NY",
          distance: "5.1 km",
          requestDate: "2024-12-13",
          unitsNeeded: 1,
        },
      ]);
    } catch (error) {
      console.error("Error fetching donation requests:", error);
    }
  };

  const fetchDonationHistory = async () => {
    try {
      // TODO: Fetch donation history
      // const response = await fetch("http://localhost:5000/api/donor/history", {
      //   method: "GET",
      //   credentials: "include",
      // });
      // const data = await response.json();
      // setDonationHistory(data.history);

      // TEMPORARY: Mock data
      setDonationHistory([
        {
          id: 1,
          date: "2024-09-15",
          location: "City Blood Bank",
          units: 1,
          status: "Completed",
        },
        {
          id: 2,
          date: "2024-06-10",
          location: "Red Cross Center",
          units: 1,
          status: "Completed",
        },
        {
          id: 3,
          date: "2024-03-22",
          location: "City Blood Bank",
          units: 1,
          status: "Completed",
        },
      ]);
    } catch (error) {
      console.error("Error fetching donation history:", error);
    }
  };

  const toggleAvailability = async () => {
    try {
      // TODO: Update availability status in backend
      // const response = await fetch("http://localhost:5000/api/donor/availability", {
      //   method: "PUT",
      //   credentials: "include",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ isAvailable: !isAvailable }),
      // });
      // const data = await response.json();
      // if (data.success) {
      //   setIsAvailable(!isAvailable);
      // }

      // TEMPORARY: Just toggle locally
      setIsAvailable(!isAvailable);
      console.log("Availability toggled:", !isAvailable);
    } catch (error) {
      console.error("Error toggling availability:", error);
    }
  };

  const handleAcceptRequest = async (requestId) => {
    try {
      // TODO: Accept donation request
      // const response = await fetch(`http://localhost:5000/api/donor/accept-request/${requestId}`, {
      //   method: "POST",
      //   credentials: "include",
      // });
      // const data = await response.json();
      // if (data.success) {
      //   alert("Request accepted! You will be contacted soon.");
      //   fetchDonationRequests(); // Refresh requests
      // }

      // TEMPORARY: Mock acceptance
      alert(`Request #${requestId} accepted! (API integration pending)`);
      console.log("Accepted request:", requestId);
    } catch (error) {
      console.error("Error accepting request:", error);
    }
  };

  const handleLogout = async () => {
    try {
      // TODO: Logout API call
      // await fetch("http://localhost:5000/api/auth/logout", {
      //   method: "POST",
      //   credentials: "include",
      // });

      // Clear any local storage/session data if needed
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
      navigate("/login");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 text-lg">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-full text-white font-bold text-xl">
              BD
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Donor Dashboard</h1>
              <p className="text-sm text-gray-500">Welcome back, {donorData?.fullName}!</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Donations */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Donations</p>
                <p className="text-3xl font-bold text-red-600 mt-2">{stats.totalDonations}</p>
              </div>
              <div className="bg-red-100 p-3 rounded-full">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Lives Saved */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Lives Saved</p>
                <p className="text-3xl font-bold text-green-600 mt-2">{stats.livesSaved}</p>
                <p className="text-xs text-gray-400 mt-1">~3 lives per donation</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Next Eligible Date */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Next Eligible Date</p>
                <p className="text-xl font-bold text-blue-600 mt-2">{stats.nextEligibleDate}</p>
                <p className="text-xs text-gray-400 mt-1">3 months from last donation</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Donation Requests */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Nearby Donation Requests</h2>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {donationRequests.length} Requests
                </span>
              </div>

              {donationRequests.length === 0 ? (
                <div className="text-center py-8">
                  <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-gray-500">No donation requests at the moment</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {donationRequests.map((request) => (
                    <div
                      key={request.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-800 text-lg">
                            {request.receiverName}
                          </h3>
                          <p className="text-sm text-gray-500">{request.location}</p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            request.urgency === "High"
                              ? "bg-red-100 text-red-600"
                              : request.urgency === "Medium"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-green-100 text-green-600"
                          }`}
                        >
                          {request.urgency} Priority
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                        <div>
                          <p className="text-gray-500">Blood Type</p>
                          <p className="font-semibold text-red-600">{request.bloodType}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Units Needed</p>
                          <p className="font-semibold">{request.unitsNeeded}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Distance</p>
                          <p className="font-semibold">{request.distance}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Requested</p>
                          <p className="font-semibold">{request.requestDate}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleAcceptRequest(request.id)}
                        className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition font-semibold"
                      >
                        Accept Request
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Donation History */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Donation History</h2>

              {donationHistory.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No donation history yet</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                          Date
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                          Location
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                          Units
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {donationHistory.map((donation) => (
                        <tr key={donation.id} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm">{donation.date}</td>
                          <td className="px-4 py-3 text-sm">{donation.location}</td>
                          <td className="px-4 py-3 text-sm">{donation.units}</td>
                          <td className="px-4 py-3">
                            <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-semibold">
                              {donation.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Profile & Availability */}
          <div className="space-y-6">
            {/* Availability Toggle */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Availability Status</h2>
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-700 font-medium">Available to Donate</span>
                <button
                  onClick={toggleAvailability}
                  className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                    isAvailable ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                      isAvailable ? "translate-x-7" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              <p className="text-sm text-gray-500">
                {isAvailable
                  ? "You will receive donation requests from nearby receivers."
                  : "You won't receive any donation requests."}
              </p>
            </div>

            {/* Profile Information */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Profile Information</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Blood Type</p>
                  <p className="text-2xl font-bold text-red-600">{donorData?.bloodType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-800">{donorData?.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium text-gray-800">{donorData?.phoneNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-gray-800">
                    {donorData?.city}, {donorData?.state}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Weight</p>
                  <p className="font-medium text-gray-800">{donorData?.weight} kg</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Last Donation</p>
                  <p className="font-medium text-gray-800">{donorData?.lastDonationDate}</p>
                </div>
              </div>
              <button className="w-full mt-4 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition font-semibold">
                Edit Profile
              </button>
            </div>

            {/* Achievement Badge */}
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-md p-6 text-white">
              <h3 className="text-lg font-bold mb-2">🏆 Achievement Unlocked!</h3>
              <p className="text-sm mb-3">Life Saver Badge</p>
              <p className="text-xs opacity-90">
                You've donated {stats.totalDonations} times and saved {stats.livesSaved} lives!
                Keep up the amazing work!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;