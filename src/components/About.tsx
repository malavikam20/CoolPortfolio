import React from 'react';
import { GraduationCap, Code, Award, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and pushing the boundaries of technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Building the Future with Code
              </h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                I'm a passionate Software Engineer with expertise spanning full-stack development, 
                mobile applications, and AI integration. My journey in computer science has equipped 
                me with a strong foundation in algorithms, data structures, and software engineering principles.
              </p>
              <p className="text-slate-700 leading-relaxed">
                I specialize in creating scalable, high-impact solutions using modern technologies 
                like React, Next.js, Flutter, and cloud platforms. My experience includes building 
                production-ready applications that serve hundreds of users while maintaining clean 
                architecture and optimal performance.
              </p>
            </div>

            {/* Education Card */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <GraduationCap size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Education</h4>
                  <p className="text-slate-700 font-medium">B.Tech in Computer Science and Engineering</p>
                  <p className="text-slate-600">Vellore Institute of Technology • GPA: 8.13/10</p>
                  <p className="text-slate-500 text-sm mt-1">Expected Graduation: 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            {/* Technical Expertise */}
            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Code size={24} className="text-teal-600" />
                <h4 className="font-semibold text-slate-900">Technical Expertise</h4>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-slate-700 mb-1">Programming Languages</p>
                  <p className="text-sm text-slate-600">C, C++, Java, Python, JavaScript, TypeScript, Dart, Swift, Kotlin</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700 mb-1">Specializations</p>
                  <p className="text-sm text-slate-600">Full-Stack Development, Mobile Apps, AI Integration, DevOps</p>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Award size={24} className="text-purple-600" />
                <h4 className="font-semibold text-slate-900">Key Achievements</h4>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• 2nd place in CodeChef Code Race (347 participants)</li>
                <li>• 1st place college level in CodeChef National Competition</li>
                <li>• Built AI platform serving 100+ monthly users</li>
                <li>• Reduced deployment issues by 45% through testing</li>
              </ul>
            </div>

            {/* Location & Availability */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={24} className="text-purple-600" />
                <h4 className="font-semibold text-slate-900">Currently Based</h4>
              </div>
              <p className="text-slate-700">Kerala, India</p>
              <p className="text-sm text-slate-600 mt-2">Open to remote opportunities and relocation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;