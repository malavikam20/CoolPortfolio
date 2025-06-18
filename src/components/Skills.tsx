import React from 'react';
import { Code, Database, Cloud, Settings, Users, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Code size={24} />,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 
      'Shadcn UI', 'Redux', 'MUI', 'Vite', 'Three.js', 'Flutter'
    ]
  },
  {
    title: 'Backend Development',
    icon: <Database size={24} />,
    color: 'from-green-500 to-teal-500',
    skills: [
      'Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Python', 'C++', 'NestJS',
      'Java', 'Firebase Functions', 'JWT Auth', 'Rate Limiting'
    ]
  },
  {
    title: 'Databases',
    icon: <Database size={24} />,
    color: 'from-purple-500 to-pink-500',
    skills: [
      'MongoDB', 'PostgreSQL', 'Firebase Firestore', 'Drizzle Studio',
      'MySQL', 'Redis', 'Neon Postgres', 'ORMs (Drizzle, Prisma, Sequelize)'
    ]
  },
  {
    title: 'DevOps & Cloud',
    icon: <Cloud size={24} />,
    color: 'from-orange-500 to-red-500',
    skills: [
      'AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel', 'GCP', 
      'GitHub Actions', 'Netlify', 'Firebase Hosting', 'NGINX'
    ]
  },
  {
    title: 'Tools & Platforms',
    icon: <Settings size={24} />,
    color: 'from-indigo-500 to-purple-500',
    skills: [
      'Git', 'Jira', 'ESLint', 'Prettier', 'Postman', 'VS Code', 
      'Figma', 'Notion', 'Babel', 'Webpack', 'Sass', 'Cypress'
    ]
  },
  {
    title: 'AI & ML',
    icon: <Lightbulb size={24} />,
    color: 'from-yellow-400 to-orange-400',
    skills: [
      'TensorFlow', 'Scikit-learn', 'Keras', 'Hugging Face Transformers',
      'LangChain', 'OpenAI API', 'Sora', 'Pandas', 'Matplotlib', 'Jupyter', 
      'ML Pipelines', 'Explainability', 'Responsible AI'
    ]
  },
  {
    title: 'Soft Skills',
    icon: <Users size={24} />,
    color: 'from-pink-500 to-rose-500',
    skills: [
      'Problem-Solving', 'Team Collaboration', 'Communication', 
      'Time Management', 'Adaptability', 'Agile Methodologies',
      'Mentoring', 'Leadership', 'Project Ownership'
    ]
  },
  {    title: 'Other Technologies',
    icon: <Settings size={24} />,
    color: 'from-gray-500 to-gray-700',
    skills: [
      'GraphQL', 'Apollo Client', 'Socket.IO', 'WebRTC', 'WebSockets',
      'RESTful Services', 'Microservices', 'Serverless Architecture',
      'Progressive Web Apps (PWAs)', 'Mobile Development', 'Cross-Platform Apps'
    ]
  }
];

  const programmingLanguages = [
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 95 },
    { name: 'Python', level: 85 },
    { name: 'Java', level: 90 },
    { name: 'C++', level: 95 },
    { name: 'Dart', level: 85 },
    { name: 'SQL', level: 85 },
    { name: 'Kotlin', level: 80 }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg w-fit mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Programming Languages Proficiency */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-lg text-white">
              <Lightbulb size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Programming Languages</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programmingLanguages.map((lang, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-700">{lang.name}</span>
                  <span className="text-sm text-slate-500">{lang.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${lang.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Core Competencies</h3>
            <p className="text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Strong foundation in computer science fundamentals with expertise in full-stack development, 
              mobile app development, and AI integration. Experienced in building scalable applications 
              using modern frameworks and cloud technologies, with a focus on clean architecture and 
              production-ready code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;