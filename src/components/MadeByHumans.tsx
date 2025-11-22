import React from "react";

const FooterBrand = () => {
  return (
    <section id="footer-brand" className="w-full bg-white py-0">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto pb-2">
        <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mt-6 sm:mt-8">
          <div
            className="bg-no-repeat bg-cover bg-center p-4 sm:p-5 min-h-[250px] sm:min-h-[350px] flex flex-col justify-between"
            style={{ backgroundImage: "url('/background-section3.png')" }}
          >
            {/* Logo */}
            <div className="flex items-center text-white">
              <svg
                className="h-8 w-8 mr-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span className="text-white text-2xl font-bold">
                The Modern Garage
              </span>
            </div>

            {/* Main text */}
            <div
              style={{
                overflow: "hidden",
                maxHeight: "100px",
                marginTop: "100px",
              }}
            >
              <h2
                style={{
                  transform: "translateY(-6px)",
                  padding: "0px 0px 100px",
                }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-serif text-white italic mt-0 mx-0 font-light py-0 px-0 text-center"
              >
                Built By Riders, For Riders
              </h2>
            </div>

            {/* White box at the bottom */}
            <div className="w-[120%] bg-white h-10 rounded-t-lg absolute left-[-10%] bottom-0 "></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterBrand;
