import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-x-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pb-24 sm:pb-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] repeat"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent break-words max-w-full">
            Afiyatna N. Fauzan
          </h1>
          <div className="text-base sm:text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up animation-delay-200 break-words max-w-full">
            <span className="typewriter">Full Stack Developer & Software Engineer</span>
          </div>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            Passionate about creating elegant solutions to complex problems. 
            I specialize in modern web technologies and love building applications that make a difference.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up animation-delay-600">
            <a
              href="https://github.com/Afiyatna"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/afiyatna-n-fauzan-3356a7230/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} className="text-white" />
            </a>
            <a
              href="mailto:afiyatna99@gmail.com"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} className="text-white" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-800">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown size={24} className="text-white/60 hover:text-white transition-colors duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;