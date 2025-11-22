import React, { useState } from "react";

const DetailsContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    bikeModel: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email) {
      alert("Please fill in all required fields");
      return;
    }

    alert("Request submitted successfully!");

    setFormData({
      fullName: "",
      email: "",
      bikeModel: "",
    });
  };

  return (
    <section id="details" className="w-full bg-white py-0">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {/* Left Card - Service Features */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
            <div
              className="relative h-48 sm:h-64 p-6 sm:p-8 flex items-end"
              style={{
                backgroundImage: "url('/background-section3.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Our Services
              </h2>
            </div>

            <div className="bg-white p-4 sm:p-8 border border-gray-100">
              <h3 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8">
                Everything you need for your perfect ride
              </h3>

              <div className="space-y-4 sm:space-y-6 ">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 9L13 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                      <span className="font-semibold text-base">
                        AI Visualization:
                      </span>{" "}
                      Preview modifications instantly
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 9L13 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                      <span className="font-semibold text-base">
                        Parts Marketplace:
                      </span>{" "}
                      10,000+ verified parts
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 9L13 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                      <span className="font-semibold text-base">
                        Restoration:
                      </span>{" "}
                      Expert classic bike restoration
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 9L13 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                      <span className="font-semibold text-base">
                        AI Chatbot:
                      </span>{" "}
                      24/7 expert recommendations
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 9L13 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                      <span className="font-semibold text-base">
                        Custom Builds:
                      </span>{" "}
                      Personalized bike creation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Contact Form */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
            <div
              className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start"
              style={{
                backgroundImage: "url('/background-section1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="inline-block px-4 sm:px-6 py-2 border border-white text-white rounded-full text-xs mb-4">
                Get Started
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-auto">
                Start Your Journey
              </h2>
            </div>

            <div className="bg-white p-4 sm:p-8 border border-gray-100">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="bikeModel"
                    value={formData.bikeModel}
                    onChange={handleChange}
                    placeholder="Bike model (optional)"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <button
                    onClick={handleSubmit}
                    className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition-colors duration-300"
                  >
                    Create Free Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsContactSection;
