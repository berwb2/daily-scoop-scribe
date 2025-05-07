
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Sun, Moon, Menu, X, ChevronDown, Hash } from 'lucide-react';
import Ticker from '../common/Ticker';
import Logo from '../common/Logo';
import { useTheme } from '../../hooks/useTheme';
import { useSearch } from '../../hooks/useSearch';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { searchResults, performSearch } = useSearch();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(searchQuery);
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    setSearchOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto">
        {/* Search Overlay */}
        {searchOpen && (
          <div className="absolute inset-0 bg-white dark:bg-gray-900 p-4 z-50">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="search"
                placeholder="Search articles..."
                className="flex-grow p-2 border-b-2 border-primary dark:border-gray-700 bg-transparent focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="ml-4 p-2"
              >
                <X size={24} />
              </button>
            </form>
          </div>
        )}

        {/* Ticker Bar */}
        <div className="hidden lg:block py-1 border-b border-gray-200">
          <Ticker />
        </div>

        {/* Main Navigation */}
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="mr-8">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className={`nav-link text-primary ${isActive('/')}`}>
                Home
              </Link>
              <div className="relative group">
                <Link to="/category/geopolitics" 
                  className={`nav-link flex items-center text-primary ${isActive('/category/geopolitics')}`}>
                  Geopolitics <ChevronDown size={16} className="ml-1" />
                </Link>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden hidden group-hover:block transition-all">
                  <Link to="/category/geopolitics/africa" className="block px-4 py-2 hover:bg-gray-100">Africa</Link>
                  <Link to="/category/geopolitics/global" className="block px-4 py-2 hover:bg-gray-100">Global</Link>
                  <Link to="/category/geopolitics/trade" className="block px-4 py-2 hover:bg-gray-100">Trade Relations</Link>
                </div>
              </div>
              <Link to="/category/tech" className={`nav-link text-primary ${isActive('/category/tech')}`}>
                Tech
              </Link>
              <Link to="/category/economy" className={`nav-link text-primary ${isActive('/category/economy')}`}>
                Economy
              </Link>
              <Link to="/category/capetown" className={`nav-link text-secondary font-medium ${isActive('/category/capetown')}`}>
                Cape Town Focus
              </Link>
              <Link to="/tags" className={`nav-link flex items-center text-primary ${isActive('/tags')}`}>
                <Hash size={16} className="mr-1" /> Tags
              </Link>
            </nav>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            <button 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setSearchOpen(true)}
            >
              <Search size={20} />
            </button>
            <button 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800" 
              onClick={toggleTheme}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Mobile menu toggle */}
            <button 
              className="md:hidden p-2 rounded-full" 
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 absolute top-full left-0 right-0 shadow-lg animate-fadeIn z-30">
            <nav className="flex flex-col p-4">
              <Link to="/" className="py-3 border-b border-gray-100 dark:border-gray-800" onClick={toggleMobileMenu}>Home</Link>
              <Link to="/category/geopolitics" className="py-3 border-b border-gray-100 dark:border-gray-800" onClick={toggleMobileMenu}>Geopolitics</Link>
              <Link to="/category/tech" className="py-3 border-b border-gray-100 dark:border-gray-800" onClick={toggleMobileMenu}>Tech</Link>
              <Link to="/category/economy" className="py-3 border-b border-gray-100 dark:border-gray-800" onClick={toggleMobileMenu}>Economy</Link>
              <Link to="/category/capetown" className="py-3 border-b border-gray-100 dark:border-gray-800 font-medium text-secondary" onClick={toggleMobileMenu}>Cape Town Focus</Link>
              <Link to="/tags" className="py-3 flex items-center" onClick={toggleMobileMenu}>
                <Hash size={16} className="mr-1" /> Tags
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
