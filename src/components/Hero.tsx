import React from 'react';
import { Download, ExternalLink, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image Placeholder */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-teal-400 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              <span className="text-6xl">M</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            <span className="block">Hello, I'm</span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Malavika M
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Software Engineer specializing in full-stack development, mobile apps, and AI integration
          </p>

          {/* Location */}
          <div className="flex items-center justify-center mb-8 text-slate-500">
            <MapPin size={20} className="mr-2" />
            <span>Kerala, India</span>
          </div>

          {/* Description */}
          <p className="text-lg text-slate-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            Proven expertise across full-stack development, mobile apps, AI integration, and DevOps. 
            Skilled in React, Flutter, C++, Python, Node.js, and cloud platforms like AWS. 
            Known for building scalable, high-impact solutions with clean architecture and production-ready code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Mail size={20} />
              Get In Touch
            </button>

            <a
              href="https://github.com/malavikam20/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ExternalLink size={20} />
              View my Github
            </a>

            <a
              href="https://drive.google.com/file/d/1bDkexIjaIFZ9xo5sUrp06epfpXCVGhLi/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              My Resume
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-slate-600">Coding hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">8.13</div>
              <div className="text-slate-600">GPA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-slate-600">Coding Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
