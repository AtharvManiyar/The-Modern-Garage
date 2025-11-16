import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!email) {
      alert("Please enter your email address");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      alert(
        "Thank you for subscribing! You'll receive updates about new parts, features, and customization tips."
      );
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="newsletter" className="bg-white py-16">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-600">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-orange-500 text-white mr-2">
                04
              </span>
              <span>Newsletter</span>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-left">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-700 mb-10 text-left">
            Get the latest parts, customization trends, and exclusive deals
            delivered to your inbox
          </p>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="relative flex-grow">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700"
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-4 px-10 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed md:ml-4"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
