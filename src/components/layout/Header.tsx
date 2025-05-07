
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  { name: 'Politics', path: '/category/politics' },
  { name: 'Business', path: '/category/business' },
  { name: 'Technology', path: '/category/technology' },
  { name: 'Science', path: '/category/science' },
  { name: 'Health', path: '/category/health' },
  { name: 'Entertainment', path: '/category/entertainment' },
  { name: 'Sports', path: '/category/sports' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        {/* Top bar with logo and search */}
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-3xl font-display font-bold">Daily Scoop</h1>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex py-2">
          <ul className="flex space-x-6 text-sm font-medium">
            {categories.map((category) => (
              <li key={category.name}>
                <Link 
                  to={category.path}
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 absolute w-full shadow-md">
          <ul className="space-y-4">
            {categories.map((category) => (
              <li key={category.name}>
                <Link 
                  to={category.path}
                  className="block text-gray-700 hover:text-black transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-4 w-4 text-gray-500" />
                </span>
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
