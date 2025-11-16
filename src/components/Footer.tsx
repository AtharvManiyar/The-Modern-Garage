import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-8">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600 text-sm">
            Built with passion by{" "}
            <span className="text-orange-500 font-semibold">Devin Dsilva</span>{" "}
            and{" "}
            <span className="text-orange-500 font-semibold">
              Atharv Maniyar
            </span>
          </p>
          <p className="text-center text-gray-500 text-xs mt-2">
            © 2025 The Modern Garage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
