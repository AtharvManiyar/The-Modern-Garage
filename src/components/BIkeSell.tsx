import React from "react";
import Navbar from "./Navbar";

function BikeSell() {
  return (
    <>
      <Navbar />

      <main className="pt-28 px-4 sm:px-6 lg:px-10 min-h-screen bg-white">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-orange-500 mb-10 tracking-wide">
          Sell Your Bike
        </h1>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-orange-200">

          {/* Section title */}
          <h2 className="text-xl font-semibold text-orange-600 mb-6">
            Bike Information
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <input className="input-orange-white" placeholder="Owner Name" />
            <input className="input-orange-white" placeholder="Bike Company (e.g., Honda)" />
            <input className="input-orange-white" placeholder="Bike Model (e.g., Shine)" />
            <input className="input-orange-white" placeholder="Model Year (e.g., 2018)" />

            <select className="input-orange-white">
              <option>Ownership</option>
              <option>1st Owner</option>
              <option>2nd Owner</option>
              <option>3rd Owner</option>
            </select>

            <input className="input-orange-white" placeholder="KM Driven" />

            <select className="input-orange-white">
              <option>Condition</option>
              <option>Excellent</option>
              <option>Good</option>
              <option>Average</option>
            </select>

            <input className="input-orange-white" placeholder="Bike Price (₹)" />
          </div>

          <textarea
            className="input-orange-white mt-4 h-28"
            placeholder="Bike Description"
          ></textarea>

          {/* Upload */}
          <div className="mt-6">
            <label className="text-orange-600 font-medium mb-2 block">
              Upload Bike Images
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              className="w-full p-3 rounded-xl bg-white text-gray-700 
                        border border-orange-300 hover:border-orange-500
                        transition-all"
            />
          </div>

          {/* Submit */}
          <button
            className="w-full mt-8 py-3 text-lg rounded-xl bg-orange-500 hover:bg-orange-600 
                       text-white font-semibold transition-all shadow-md"
          >
            Submit
          </button>

        </div>

      </main>
    </>
  );
}

export default BikeSell;
