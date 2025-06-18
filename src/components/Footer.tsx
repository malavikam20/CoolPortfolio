import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Malavika M
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Software Engineer passionate about creating innovative solutions 
              and building the future with clean, scalable code.
            </p>
            <div className="flex items-center gap-2 text-slate-400">
              <Code size={16} />
              <span className="text-sm">Crafted with passion and precision</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-200">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: '#about', label: 'About' },
                { href: '#experience', label: 'Experience' },
                { href: '#projects', label: 'Projects' },
                { href: '#skills', label: 'Skills' },
                { href: '#achievements', label: 'Achievements' },
                { href: '#contact', label: 'Contact' }
              ].map((link, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-slate-300 hover:text-blue-400 transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* External Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-200">Connect</h4>
            <div className="space-y-2">
              <a
                href="https://www.linkedin.com/in/malavikam20"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-300 hover:text-blue-400 transition-colors duration-300"
              >
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/malavikam20/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-300 hover:text-blue-400 transition-colors duration-300"
              >
                Github Profile
              </a>
              <a
                href="mailto:malavika.mv20@gmail.com"
                className="block text-slate-300 hover:text-blue-400 transition-colors duration-300"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-slate-400">
              
            </div>
            
            <div className="flex items-center gap-2 text-slate-400">
              <span>Made with</span>
              <Heart size={16} className="text-red-400 fill-current" />
              <span>and</span>
              <Coffee size={16} className="text-amber-400" />
              <span>by Malavika M</span>
            </div>
          </div>
          
          <div className="mt-4 text-center text-sm text-slate-500">
            <p>
              Built with React, TypeScript, and Tailwind CSS. 
              Designed for performance, accessibility, and user experience.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;