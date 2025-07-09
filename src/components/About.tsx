import React from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';
import aboutImg from '../assets/img-about.jpg';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      category: 'Backend',
      icon: <Database className="w-6 h-6" />,
      technologies: ['Laravel', 'PHP', 'MySQL', 'Supabase', 'Node.js', 'PostgreSQL',],
      color: 'from-green-500 to-green-600'
    },
    {
      category: 'Mobile',
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ['React Native', 'Flutter','Kotlin'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      category: 'Tools & Others',
      icon: <Code className="w-6 h-6" />,
      technologies: ['Git', 'Firebase', 'Figma'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto">
          I am a student at the Universitas Sains & Teknologi Komputer majoring in S1 Information Systems. 
          Technology open-minded, intend to implement it for improving social and economic. 
          Very passionate about technology and follow the latest trends and techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          <div className="order-1 lg:order-none flex justify-center">
            <div className="relative w-40 h-40 sm:w-64 sm:h-64 lg:w-full lg:h-96">
              <img
                src={aboutImg}
                alt="Afiyatna N. Fauzan"
                className="rounded-2xl shadow-2xl w-full h-full object-cover border-4 border-orange-100"
                style={{ aspectRatio: '4/3' }}
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs px-4 py-1 rounded-full shadow-lg font-semibold tracking-wide hidden sm:block">Web Developer</div>
            </div>
          </div>
          <div className="space-y-6 order-2 lg:order-none">
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-800">My Journey</h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Started my journey in software development with a curious mind and passion for problem-solving. 
              Over the years, I've had the privilege to work with amazing teams and clients, creating solutions 
              that not only meet technical requirements but also deliver exceptional user experiences.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community through blog posts and mentoring.
            </p>
            <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">Problem Solver</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">Team Player</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">Continuous Learner</span>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center text-white mb-3 sm:mb-4`}>
                {skill.icon}
              </div>
              <h4 className="text-base sm:text-xl font-semibold text-slate-800 mb-2 sm:mb-3">{skill.category}</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs sm:text-sm mr-0 mb-1"
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