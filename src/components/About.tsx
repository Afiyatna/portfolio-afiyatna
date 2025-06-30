import React from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';
import aboutImg from '../assets/img-about.jpg';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'Angular'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      category: 'Backend',
      icon: <Database className="w-6 h-6" />,
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Express.js', 'FastAPI'],
      color: 'from-green-500 to-green-600'
    },
    {
      category: 'Mobile',
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'Ionic'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      category: 'Tools & Others',
      icon: <Code className="w-6 h-6" />,
      technologies: ['Git', 'Docker', 'AWS', 'Firebase', 'GraphQL', 'Redis'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating digital solutions 
            that bridge the gap between design and functionality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={aboutImg}
              alt="Afiyatna N. Fauzan"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-800">My Journey</h3>
            <p className="text-slate-600 leading-relaxed">
              Started my journey in software development with a curious mind and passion for problem-solving. 
              Over the years, I've had the privilege to work with amazing teams and clients, creating solutions 
              that not only meet technical requirements but also deliver exceptional user experiences.
            </p>
            <p className="text-slate-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community through blog posts and mentoring.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Problem Solver</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Team Player</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Continuous Learner</span>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center text-white mb-4`}>
                {skill.icon}
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-3">{skill.category}</h4>
              <div className="space-y-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm mr-2 mb-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;