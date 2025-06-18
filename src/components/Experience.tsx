import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experience = {
    role: 'Software Engineer Intern',
    company: 'App Mastery',
    location: 'Bangalore, India',
    duration: 'September 2023 - December 2023',
    description: [
      'Built a cross-platform weather forecasting app using Flutter, Dart, and external APIs, delivering detailed forecasts and real-time weather insights that enhanced user decision-making and supported by multiple users.',
      'Implemented multi-layered weather visualization maps to display real-time conditions, improving user safety and situational awareness by 40%, while also designing collaborative task boards that boosted resource efficiency by 25%.',
      'Engineered a modular, maintainable codebase using Java, Kotlin, and Android architecture components, reducing feature integration time by 30% and supporting long-term scalability.',
      'Leveraged Agile and Scrum methodologies with Jira for sprint planning and feedback loops, enhancing requirement traceability, improving communication efficiency by 35%, and driving a 20% increase in customer engagement.',
      'Reduced post-deployment issues by 45% through rigorous manual and automated testing, maintaining good feedback from multiple users.'
    ],
    technologies: ['Flutter', 'Dart', 'Java', 'Kotlin', 'Android', 'APIs', 'Jira', 'Agile/Scrum']
  };

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Experience
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional experience in software development and engineering
          </p>
        </div>

        {/* Experience Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6 text-white">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{experience.role}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Building size={18} />
                    <span className="text-lg font-medium">{experience.company}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-2 md:justify-end">
                    <Calendar size={18} />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <MapPin size={18} />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Responsibilities & Achievements</h4>
                <ul className="space-y-3">
                  {experience.description.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-700 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">Interested in my professional background?</p>
          <a
            href="https://www.linkedin.com/in/malavikam20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            View LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;