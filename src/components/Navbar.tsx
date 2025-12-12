import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import BIkeSell from "./BIkeSell";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMarketplaceOpen, setIsMarketplaceOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
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

  const disable = (e) => e.preventDefault();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-white"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src="/logo.jpg" alt="Logo" className="h-8 sm:h-10" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
          <Link className="nav-link" to="/chat" onClick={disable}>
            Image Generation
          </Link>

          {/* Marketplace Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsMarketplaceOpen(true)}
            onMouseLeave={() => setIsMarketplaceOpen(false)}
          >
            <button className="nav-link flex items-center gap-1">
              Marketplace
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform",
                  isMarketplaceOpen && "rotate-180"
                )}
              />
            </button>

            {/* Dropdown */}
            <div
              className={cn(
                "absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-200",
                isMarketplaceOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              )}
            >
              <Link
                to="/marketplace/buy"
                className="block px-4 py-3 hover:bg-gray-50"
              >
                <div className="font-medium">🏍️ Buy Bike</div>
                <p className="text-xs text-gray-500">Browse marketplace</p>
              </Link>

              <div className="h-px bg-gray-200" />

              <Link
                to="/marketplace/sell"
                className="block px-4 py-3 hover:bg-gray-50"
                onClick={BIkeSell}
              >
                <div className="font-medium">💰 Sell Bike</div>
                <p className="text-xs text-gray-500">List your bike</p>
              </Link>
            </div>
          </div>

          <Link className="nav-link" to="/modern-store">Modern Store</Link>

          <Link to="/login" onClick={disable}>
            <Button variant="ghost" size="sm">Login</Button>
          </Link>

          <Link to="/signup" onClick={disable}>
            <Button size="sm">Sign Up</Button>
          </Link>
        </nav>

        {/* Mobile Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white pt-20 px-8 flex flex-col items-center space-y-6 md:hidden transition-all duration-300",
          isMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <Link className="mobile-link" to="/" onClick={closeMenu}>Home</Link>
        <Link className="mobile-link" to="/about" onClick={closeMenu}>About</Link>
        <Link className="mobile-link" to="/contact" onClick={closeMenu}>Contact</Link>

        <Link className="mobile-link" to="/chat" onClick={disable}>
          Image Generation
        </Link>

        <Link className="mobile-link" to="/marketplace/buy" onClick={closeMenu}>
          🏍️ Buy Bike
        </Link>

        <Link className="mobile-link" to="/marketplace/sell" onClick={BIkeSell}>
          💰 Sell Bike
        </Link>

        <Link className="mobile-link" to="/modern-store" onClick={closeMenu}>
          Modern Store
        </Link>

        {/* Buttons */}
        <div className="w-full flex flex-col gap-4 mt-4">
          <Link to="/login" onClick={disable}>
            <Button variant="ghost" className="w-full">Login</Button>
          </Link>
          <Link to="/signup" onClick={disable}>
            <Button className="w-full">Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
