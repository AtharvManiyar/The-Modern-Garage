import React from "react";

const ShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Bikes Transformed with AI
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            See how our AI-powered visualization brings your dream bike to life
            before you make any modifications.
          </p>
        </div>

        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl mx-auto max-w-4xl">
          <div className="w-full">
            <img
              src="/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png"
              alt="Custom bike with advanced modifications"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              Precision Customization
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Our AI technology lets you visualize every modification before
              committing. From custom paint jobs to performance upgrades, see
              exactly how your bike will look with any part or accessory from
              our marketplace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
