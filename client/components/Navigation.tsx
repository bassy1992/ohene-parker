import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu as Menu, HiX as X, HiPlay as Play, HiMusicNote as Music } from "react-icons/hi";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Music className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">OHENE PARKER</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              to="/music" 
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Music
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Contact
            </Link>
            <a 
              href="https://linktr.ee/oheneparker" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-full hover:opacity-90 transition-opacity duration-200 flex items-center space-x-2"
            >
              <Play className="w-4 h-4" />
              <span>Listen Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <Link
                to="/"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/music"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                onClick={toggleMenu}
              >
                Music
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <a 
                href="https://linktr.ee/oheneparker" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full text-left bg-primary text-primary-foreground px-3 py-2 rounded-md hover:opacity-90 transition-opacity duration-200 flex items-center space-x-2"
                onClick={toggleMenu}
              >
                <Play className="w-4 h-4" />
                <span>Listen Now</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
