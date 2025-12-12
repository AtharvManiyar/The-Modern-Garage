import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const FAQItem = ({ question, answer, index, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const itemRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={itemRef}
      className="opacity-0 glass-card rounded-2xl overflow-hidden shadow-elegant transition-all duration-300 hover:shadow-lg"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <button
        onClick={onClick}
        className="w-full p-6 sm:p-8 text-left flex items-center justify-between gap-4 transition-colors duration-300 hover:bg-pulse-50/50"
      >
        <h3 className="text-lg sm:text-xl font-display font-semibold pr-4">
          {question}
        </h3>
        <ChevronDown 
          className={`w-6 h-6 text-pulse-500 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      <div 
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease, opacity 0.3s ease'
        }}
      >
        <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: "How does the AI visualization actually work?",
      answer: "Upload a photo of your bike, select the parts you want to add or modify, and our AI generates a realistic preview showing exactly how the modifications will look. The AI takes into account lighting, angles, and proportions to create accurate visualizations in seconds."
    },
    {
      question: "Can I find parts for older or rare bike models?",
      answer: "Yes! Our marketplace includes over 10,000 verified parts for both modern and vintage bikes. You can search by make, model, and year. If a part isn't available, our AI chatbot can suggest compatible alternatives or connect you with specialized sellers."
    },
    {
      question: "How accurate are the restoration plans for classic bikes?",
      answer: "Our AI analyzes your bike photos and generates detailed restoration roadmaps based on thousands of successful restorations. Plans include step-by-step instructions, estimated costs, required parts, and timeline. While every restoration is unique, our AI provides realistic expectations based on similar projects."
    },
    {
      question: "Are the parts and sellers on the marketplace verified?",
      answer: "Absolutely. Every seller goes through a verification process, and all parts are checked for authenticity. We maintain a rating system where buyers can review their purchases, helping you make informed decisions. Our marketplace is trusted by thousands of riders worldwide."
    },
    {
      question: "Do I need technical expertise to use the platform?",
      answer: "Not at all! The Modern Garage is designed for everyone—from beginners to experienced mechanics. Our AI chatbot provides guidance at every step, explaining technical terms and offering recommendations based on your skill level and goals. Whether you're just exploring ideas or planning a complete build, we make it accessible."
    }
  ];
  
  return (
    <section className="py-12 sm:py-16 bg-gray-50" id="faq">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16">
            <div className="pulse-chip mx-auto mb-4">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
              <span>FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Everything you need to know about The Modern Garage
            </p>
          </div>
          
          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;