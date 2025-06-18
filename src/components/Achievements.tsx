import React from 'react';
import { Trophy, Medal, Award, Calendar, Users } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'CodeChef Code Race - 2nd Prize',
      organization: 'CodeChef',
      date: 'October 2023',
      description: 'Secured second prize in Codechef Code Race coding competition among 347 participants.',
      participants: '347 participants',
      position: '2nd Place',
      icon: <Trophy size={24} />,
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50'
    },
    {
      title: 'CodeChef National Competition',
      organization: 'CodeChef',
      date: 'March 2023',
      description: 'Secured college level first position and National level 279th position in a CodeChef National Competition.',
      participants: 'National Competition',
      position: '1st (College) / 279th (National)',
      icon: <Medal size={24} />,
      color: 'from-blue-400 to-purple-500',
      bgColor: 'from-blue-50 to-purple-50'
    },
    {
      title: 'HackerRank Code-A-Thon - 1st Prize',
      organization: 'HackerRank',
      date: 'August 2022',
      description: 'Secured first prize in a Hackerrank coding competition among 128 participants.',
      participants: '128 participants',
      position: '1st Place',
      icon: <Award size={24} />,
      color: 'from-green-400 to-teal-500',
      bgColor: 'from-green-50 to-teal-50'
    }
  ];

  const stats = [
    { label: 'Coding Competitions Won', value: '25+', icon: <Trophy size={20} /> },
    { label: 'Total Participants Competed', value: '475+', icon: <Users size={20} /> },
    { label: 'Experience', value: '4 months', icon: <Calendar size={20} /> },
    { label: 'Projects Completed', value: '15+', icon: <Award size={20} /> }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Recognition for excellence in competitive programming and software development
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-3 rounded-lg w-fit mx-auto mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group hover:scale-105 transition-all duration-300"
            >
              <div className={`bg-gradient-to-br ${achievement.bgColor} rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`bg-gradient-to-r ${achievement.color} text-white p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    {achievement.icon}
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-sm text-slate-500 mb-1">
                      <Calendar size={14} />
                      <span>{achievement.date}</span>
                    </div>
                    <div className="text-xs text-slate-400">{achievement.organization}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900">{achievement.title}</h3>
                  
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Achievement Details */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900">{achievement.position}</div>
                      <div className="text-xs text-slate-500">Position</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center gap-1 text-sm font-semibold text-slate-900">
                        <Users size={14} />
                        <span>{achievement.participants.split(' ')[0]}</span>
                      </div>
                      <div className="text-xs text-slate-500">Participants</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recognition Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Competitive Programming Excellence</h3>
            <p className="text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Demonstrated exceptional problem-solving skills and algorithmic thinking through 
              consistent performance in prestigious coding competitions. These achievements reflect 
              a strong foundation in data structures, algorithms, and the ability to work under pressure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;