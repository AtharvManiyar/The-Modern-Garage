import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-white"
      )}
    >
      {/* NAVBAR */}
      <div className="max-w-7xl mx-auto flex items-center h-16 px-6">

        {/* LOGO (LEFT) */}
        <Link to="/" className="flex items-center">
          <img src="/logo.jpg" alt="Logo" className="h-9 w-auto" />
        </Link>

        {/* PUSH LINKS RIGHT */}
        <div className="flex-1" />

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
          <Link className="nav-link" to="/chat">Image Generation</Link>

          {/* MARKETPLACE */}
          <div
            className="relative"
            onMouseEnter={() => setIsMarketplaceOpen(true)}
            onMouseLeave={() => setIsMarketplaceOpen(false)}
          >
            <button className="nav-link flex items-center gap-1">
              Marketplace
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  isMarketplaceOpen && "rotate-180"
                )}
              />
            </button>

            {/* DROPDOWN */}
            <div
              className={cn(
                "absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-200",
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
                <p className="text-xs text-gray-500">
                  Browse available bikes
                </p>
              </Link>

              <div className="h-px bg-gray-200" />

              <Link
                to="/marketplace/sell"
                className="block px-4 py-3 hover:bg-gray-50"
              >
                <div className="font-medium">💰 Sell Bike</div>
                <p className="text-xs text-gray-500">
                  List your bike for sale
                </p>
              </Link>
            </div>
          </div>

          <Link className="nav-link" to="/modern-store">
            Modern Store
          </Link>

          <Link to="/login">
            <Button variant="ghost" size="sm">Login</Button>
          </Link>

          <Link to="/signup">
            <Button size="sm">Sign Up</Button>
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden ml-auto" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* MOBILE MENU */}
      <aside
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-72 bg-white p-6 transition-transform md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button className="mb-6" onClick={closeMenu}>
          <X size={24} />
        </button>

        <nav className="flex flex-col gap-4">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
          <Link to="/chat" onClick={closeMenu}>Image Generation</Link>

          <Link
            to="/marketplace/buy"
            onClick={closeMenu}
            className="rounded-lg px-2 py-2 hover:bg-gray-100"
          >
            <div className="flex flex-col">
              <span className="font-medium">🏍️ Buy Bike</span>
              <span className="text-xs text-gray-500">
                Browse available bikes
              </span>
            </div>
          </Link>

          <Link
            to="/marketplace/sell"
            onClick={closeMenu}
            className="rounded-lg px-2 py-2 hover:bg-gray-100"
          >
            <div className="flex flex-col">
              <span className="font-medium">💰 Sell Bike</span>
              <span className="text-xs text-gray-500">
                List your bike for sale
              </span>
            </div>
          </Link>

          <Link to="/modern-store" onClick={closeMenu}>
            Modern Store
          </Link>
        </nav>

        <div className="mt-6 flex flex-col gap-3">
          <Link to="/login" onClick={closeMenu}>
            <Button variant="ghost" className="w-full">Login</Button>
          </Link>
          <Link to="/signup" onClick={closeMenu}>
            <Button className="w-full">Sign Up</Button>
          </Link>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
