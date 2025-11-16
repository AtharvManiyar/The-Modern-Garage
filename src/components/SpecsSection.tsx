import React from "react";

const ServicesSection = () => {
  return (
    <section className="w-full py-6 sm:py-10 bg-white" id="services">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-600">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-orange-500 text-white mr-2">
                02
              </span>
              <span>Services</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {/* Main content - responsive text sizing */}
        <div className="max-w-5xl pl-4 sm:pl-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8 sm:mb-12">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-red-500 to-purple-600">
              Transform your bike with AI-powered visualization, expert
              restoration services, and a marketplace filled with thousands of
              parts. Whether you're customizing your dream ride or bringing a
              classic back to life, we provide the tools and expertise you need.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
