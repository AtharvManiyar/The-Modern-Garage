import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import AboutHero from "./AboutHero";
import AboutCTA from "./AboutCTA";
import ContactHero from "./ContactHero";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (isMenuOpen) {
      closeMenu();
    }
  };

  // // Disable redirect for all pages except Home
  const disable = (e) => e.preventDefault();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled
          ? "bg-white backdrop-blur-md shadow-sm"
          : "bg-white backdrop-blur-md"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="flex items-center space-x-2"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="Pulse Robot"
        >
          <img src="/logo.jpg" alt="Pulse Robot Logo" className="h-7 sm:h-10" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/about" className="nav-link" onClick={AboutCTA}>
            About
          </Link>

          <Link to="/contact" className="nav-link" onClick={ContactHero}>
            Contact
          </Link>

          <Link to="/chat" className="nav-link" onClick={disable}>
            Image Generation
          </Link>

          <Link to="/login" onClick={disable}>
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </Link>

          <Link to="/signup" onClick={disable}>
            <Button size="sm">Sign Up</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 p-3 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out overflow-y-auto",
          isMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-6 items-center mt-8 pb-8">
          <Link
            to="/"
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100"
            onClick={closeMenu}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100"
            onClick={AboutHero}
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100"
            onClick={ContactHero}
          >
            Contact
          </Link>

          <Link
            to="/chat"
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100"
            onClick={disable}
          >
            AI Chat
          </Link>

          <Link
            to="/email"
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100"
            onClick={disable}
          >
            Email
          </Link>

          <Link
            to="/admin"
            className="text-xl font-bold py-3 px-6 w-full text-center rounded-lg hover:bg-primary/10 text-primary"
            onClick={disable}
          >
            🎯 Admin Dashboard
          </Link>

          <Link
            to="/display"
            className="text-xl font-bold py-3 px-6 w-full text-center rounded-lg hover:bg-primary/10 text-primary"
            onClick={disable}
          >
            📊 Data Display
          </Link>

          <div className="flex flex-col space-y-4 w-full mt-4">
            <Link to="/login" onClick={disable}>
              <Button variant="ghost" className="w-full">
                Login
              </Button>
            </Link>

            <Link to="/signup" onClick={disable}>
              <Button className="w-full">Sign Up</Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
