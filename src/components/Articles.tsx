import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const Articles = () => {
  const articles = [
    {
      title: 'Mastering React Native',
      excerpt: 'In this article I will explain some things that readers should know about React native.',
      date: '2022-02-04',
      readTime: '8 min read',
      category: 'React Native',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/0*gzFvK-2x_IZa6nDl',
      featured: true,
      url: 'https://medium.com/@afiyatna99/mastering-react-native-1e3bfb45b430'
    },
    {
      title: 'React Native vs Flutter',
      excerpt: 'In this article, I will explain the difference between React Native and Flutter..',
      date: '2022-03-02',
      readTime: '12 min read',
      category: 'Mobile Apps',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/0*6ojEOMtaGP1Chj6_.png',
      featured: true,
      url: 'https://medium.com/@afiyatna99/react-native-vs-flutter-caee2ef96e9d'
    },
    {
      title: 'Mastering App Development Workflow',
      excerpt: 'In this article, I will explain the stages that must be passed in making applications in the world of work.',
      date: '2022-02-14',
      readTime: '10 min read',
      category: 'Mobile Apps',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/0*Lj2dSr4y-xAgMR2t',
      featured: false,
      url: 'https://medium.com/@afiyatna99/mastering-app-development-workflow-b11e70fb507f'
    },
    {
      title: 'How To Choose Your Learning Path In “2022”',
      excerpt: 'In this article I will explain the learning path that you can choose to become a Programmer in 2022 :',
      date: '2022-01-31',
      readTime: '15 min read',
      category: 'Programming',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/0*CvXoj-bSPTOnAHK7',
      featured: false,
      url: 'https://medium.com/@afiyatna99/how-to-choose-your-learning-path-in-2022-3a0a30de84a6'
    },
    {
      title: 'How to Install Node.js for Windows',
      excerpt: 'In this article I will explain the steps in installing Node.js. Node js is a Javascript runtime specifically built for our PCs, so that it supports the Javascript library in it',
      date: '2022-02-23',
      readTime: '6 min read',
      category: 'Node.js',
      image: 'https://miro.medium.com/v2/resize:fit:640/format:webp/0*8HJgXtAMIy8XEvcb',
      featured: false,
      url: 'https://medium.com/@afiyatna99/how-to-install-node-js-for-windows-d5fa614e842a'
    },
    // {
    //   title: 'Database Design Best Practices',
    //   excerpt: 'Essential principles for designing efficient and scalable databases, covering normalization, indexing, and query optimization.',
    //   date: '2023-12-10',
    //   readTime: '11 min read',
    //   category: 'Database',
    //   image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   featured: false,
    //   url: 'https://medium.com/@afiyatna/database-design-best-practices-dummy'
    // }
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const recentArticles = articles.filter(article => !article.featured);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'React': 'bg-blue-100 text-blue-700',
      'State Management': 'bg-purple-100 text-purple-700',
      'Performance': 'bg-green-100 text-green-700',
      'Backend': 'bg-orange-100 text-orange-700',
      'CSS': 'bg-pink-100 text-pink-700',
      'Database': 'bg-indigo-100 text-indigo-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section id="articles" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-orange-500 mr-3" />
            <h2 className="text-4xl font-bold text-slate-800">Articles</h2>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Sharing knowledge and insights about web development, programming best practices, 
            and the latest trends in technology.
          </p>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Featured Articles</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <article
                key={article.title}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-slate-500 mb-3">
                    <Calendar size={14} className="mr-2" />
                    <span>{new Date(article.date).toLocaleDateString('id-ID', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                    <span className="mx-2">•</span>
                    <Clock size={14} className="mr-2" />
                    <span>{article.readTime}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors duration-200">
                    {article.title}
                  </h4>
                  <p className="text-slate-600 mb-4 leading-relaxed">{article.excerpt}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Recent Articles */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Recent Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
              <article
                key={article.title}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center text-xs text-slate-500 mb-2">
                    <Calendar size={12} className="mr-1" />
                    <span>{new Date(article.date).toLocaleDateString('id-ID', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                    <span className="mx-2">•</span>
                    <Clock size={12} className="mr-1" />
                    <span>{article.readTime}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors duration-200 line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-slate-600 text-sm mb-3 leading-relaxed line-clamp-3">{article.excerpt}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-orange-600 font-medium text-sm hover:text-orange-700 transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Want to Read More?</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Subscribe to my newsletter to get the latest articles and insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;