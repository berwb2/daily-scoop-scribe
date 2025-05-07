import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import Logo from '../common/Logo';
import NewsletterSignup from '../common/NewsletterSignup';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo variant="light" />
            <p className="mt-4 text-gray-300">
              South African journalism reimagined, with a focus on geopolitics, tech, and economic insights.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://twitter.com" aria-label="Twitter" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl mb-4 font-medium text-white">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/category/geopolitics" className="text-gray-300 hover:text-white transition-colors">Geopolitics</Link></li>
              <li><Link to="/category/tech" className="text-gray-300 hover:text-white transition-colors">Technology</Link></li>
              <li><Link to="/category/economy" className="text-gray-300 hover:text-white transition-colors">Economy</Link></li>
              <li><Link to="/category/capetown" className="text-gray-300 hover:text-white transition-colors">Cape Town Focus</Link></li>
              <li><Link to="/category/africa" className="text-gray-300 hover:text-white transition-colors">Africa News</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl mb-4 font-medium text-white">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-white transition-colors">Team</Link></li>
              <li><Link to="/ethics" className="text-gray-300 hover:text-white transition-colors">Ethics Statement</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/advertise" className="text-gray-300 hover:text-white transition-colors">Advertise</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl mb-4 font-medium text-white">Newsletter</h3>
            <p className="text-gray-300 mb-4">Stay informed with our curated South African perspective.</p>
            <NewsletterSignup />
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Polimetrica9. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-gray-300 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;