import React from 'react';
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'malavika.mv20@gmail.com',
      href: 'mailto:malavika.mv20@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 9072199100',
      href: 'tel:+919072199100',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Kerala, India',
      href: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: '/in/malavikam20',
      href: 'https://www.linkedin.com/in/malavikam20',
      color: 'from-blue-600 to-blue-800'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to discuss opportunities, collaborate on projects, or just have a chat about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h3>
              <p className="text-slate-700 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or potential collaborations. Whether you're looking for a software engineer 
                or want to chat about the latest in tech, feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="block group"
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className={`bg-gradient-to-r ${contact.color} text-white p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        {contact.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">{contact.label}</h4>
                        <p className="text-slate-600 group-hover:text-blue-600 transition-colors duration-300">
                          {contact.value}
                        </p>
                      </div>
                      {contact.href.startsWith('http') && (
                        <ExternalLink size={16} className="text-slate-400 ml-auto" />
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Portfolio Links */}
            <div className="pt-8 border-t border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-4">Portfolio Links</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://github.com/malavikam20/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <ExternalLink size={18} />
                  View Github
                </a>
                <a
                  href="https://www.linkedin.com/in/malavikam20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:border-blue-600 hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
                >
                  <Linkedin size={18} />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Project Collaboration"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;