import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [
  {
    content:
      "The AI visualization saved me thousands. I could see exactly how the new exhaust would look before ordering. Game changer for customization!",
    author: "Mike Thompson",
    role: "Harley Davidson Owner",
    backgroundImage: "/background-section1.png",
  },
  {
    content:
      "Found rare parts for my 1975 Triumph in minutes. The AI chatbot knew exactly what I needed and pointed me to the right sellers.",
    author: "Sarah Martinez",
    role: "Vintage Bike Collector",
    backgroundImage: "/background-section2.png",
  },
  {
    content:
      "Restored my dad's old Royal Enfield using their AI restoration plan. Step-by-step guidance made it possible even for a beginner like me.",
    author: "Raj Patel",
    role: "First-Time Restorer",
    backgroundImage: "/background-section3.png",
  },
  {
    content:
      "As a custom shop owner, this platform has transformed how we work with clients. They can see their dream build before we start.",
    author: "Carlos Rodriguez",
    role: "Custom Garage Owner",
    backgroundImage: "/background-section1.png",
  },
];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png",
}: TestimonialProps) => {
  return (
    <div
      className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60"></div>

      <div className="relative z-10">
        <div className="text-orange-400 mb-4">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="text-xl mb-8 font-medium leading-relaxed">{content}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="py-12 bg-white relative"
      id="testimonials"
      ref={sectionRef}
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-600">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-orange-500 text-white mr-2">
              03
            </span>
            <span>Testimonials</span>
          </div>
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-left">
          What Riders Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              backgroundImage={testimonial.backgroundImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
