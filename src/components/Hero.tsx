import React, { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll(".fade-in-element");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 overflow-hidden"
      id="home"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/background-section1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container px-6 lg:px-8 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 backdrop-blur-sm text-orange-400 mb-6 fade-in-element opacity-0">
            <span className="text-sm font-medium">
              AI-Powered Bike Customization
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 fade-in-element opacity-0 leading-tight">
            Transform Your Bike
            <br />
            <span className="text-orange-500">With AI Power</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 fade-in-element opacity-0 max-w-2xl mx-auto">
            Visualize modifications, restore classics, and find the perfect
            parts for your ride. All powered by cutting-edge AI technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-element opacity-0">
            <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Customizing
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20">
              Browse Marketplace
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator mouse icon*/}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-element opacity-0 ">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .fade-in-element:nth-child(1) {
          animation-delay: 0.1s;
        }
        .fade-in-element:nth-child(2) {
          animation-delay: 0.3s;
        }
        .fade-in-element:nth-child(3) {
          animation-delay: 0.5s;
        }
        .fade-in-element:nth-child(4) {
          animation-delay: 0.7s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
