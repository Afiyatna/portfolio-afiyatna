import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'Jakarta, Indonesia',
      period: '2022 - Present',
      description: 'Leading development of enterprise-level web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions.',
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led a team of 5 developers on multiple projects',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      location: 'Bandung, Indonesia',
      period: '2020 - 2022',
      description: 'Developed and maintained web applications for various clients in e-commerce, healthcare, and education sectors using modern JavaScript frameworks.',
      achievements: [
        'Built 15+ client applications from concept to deployment',
        'Improved code quality by implementing testing strategies',
        'Reduced bug reports by 35% through better QA processes'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'StartupHub',
      location: 'Yogyakarta, Indonesia',
      period: '2019 - 2020',
      description: 'Focused on creating responsive and interactive user interfaces using React, Vue.js, and modern CSS frameworks.',
      achievements: [
        'Developed mobile-first responsive designs',
        'Collaborated with UX/UI designers on user experience optimization',
        'Implemented accessibility standards across all projects'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Experience</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My professional journey has been filled with exciting challenges and continuous learning opportunities.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-orange-200"></div>

          {experiences.map((experience, index) => (
            <div
              key={experience.title}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-slate-800">{experience.title}</h3>
                    <div className="flex items-center text-sm text-slate-500 mt-1 sm:mt-0">
                      <Calendar size={14} className="mr-1" />
                      {experience.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-orange-600 font-medium mb-2">
                    <span>{experience.company}</span>
                  </div>
                  
                  <div className="flex items-center text-slate-500 text-sm mb-4">
                    <MapPin size={14} className="mr-1" />
                    {experience.location}
                  </div>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {experience.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-slate-800 text-sm">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;