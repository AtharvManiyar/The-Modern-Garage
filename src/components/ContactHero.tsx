import React from "react";

const ContactHero = () => {
  return (
    <section className="w-full relative overflow-hidden bg-white pt-24 sm:pt-32 pb-12 sm:pb-16">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Pulse Chip */}
        <div className="flex items-center gap-4 mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">01</span>
            <span>Contact</span>
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="max-w-4xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 sm:mb-8 leading-tight">
            Let's Build Your
            <span className="block text-pulse-500">Dream Bike Together</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
            Have questions about AI visualization, need help finding parts, or want to discuss 
            a custom build? Our team of bike enthusiasts is here to help you transform your 
            vision into reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;