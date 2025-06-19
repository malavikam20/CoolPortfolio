import React from 'react';
import { ExternalLink, Github, Calendar, Users, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI Content Generator App',
      description: 'AI-driven platform using the Gemini API to create personalized, high-quality content for YouTube scripts, novels, and blogs, achieving 40% higher efficiency and scaling to 100+ monthly users.',
      duration: 'September 2024 - October 2024',
      url: 'https://newaicontenthere27.netlify.app',
      github: 'https://github.com/malavikam20/ai-content-generator',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Drizzle Studio', 'Razorpay', 'Gemini API'],
      highlights: [
        '40% higher efficiency in content creation',
        '100+ monthly active users',
        '25% reduced backend latency',
        '20% boost in user engagement',
        '99.9% uptime achieved'
      ],
      stats: {
        users: '100+',
        efficiency: '40%',
        uptime: '99.9%'
      }
    },
    {
      title: 'AI Travel Planner',
      description: 'Responsive, cross-platform travel planning web application using React.js, Tailwind CSS, and JavaScript with real-time destination search and interactive itinerary management.',
      duration: 'May 2024 - June 2024',
      url: 'https://takemethere20.netlify.app/',
      github: 'https://github.com/malavikam20/ai-travel-planner',
      image: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg',
      technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'Google Places API', 'Google Maps', 'React Hooks'],
      highlights: [
        '30% improvement in user engagement',
        '40% reduction in destination lookup time',
        '25% increase in user retention',
        '35% boost in average session time',
        '99.9% image load reliability'
      ],
      stats: {
        engagement: '30%',
        retention: '25%',
        performance: '20%'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Showcasing innovative solutions built with modern technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-slate-900 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-slate-100 transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <Calendar size={16} />
                    <span>{project.duration}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.stats).map(([key, value], statIndex) => (
                    <div key={statIndex} className="text-center p-3 bg-slate-50 rounded-lg">
                      <div className="text-xl font-bold text-blue-600">{value}</div>
                      <div className="text-xs text-slate-600 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {project.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-2">
                        <TrendingUp size={16} className="text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm text-slate-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Button */}
                <div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <Github size={18} />
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
