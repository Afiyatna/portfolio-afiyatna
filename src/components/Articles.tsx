import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const Articles = () => {
  const articles = [
    {
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn how to structure large React applications using TypeScript, best practices for component architecture, and maintaining code quality at scale.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'React',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true
    },
    {
      title: 'Modern State Management in React: Redux vs Zustand',
      excerpt: 'A comprehensive comparison of state management solutions in React, exploring when to use Redux, Zustand, or React Context.',
      date: '2024-01-08',
      readTime: '12 min read',
      category: 'State Management',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true
    },
    {
      title: 'Optimizing Web Performance: A Developer\'s Guide',
      excerpt: 'Essential techniques for improving web application performance, from code splitting to image optimization and caching strategies.',
      date: '2024-01-01',
      readTime: '10 min read',
      category: 'Performance',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      title: 'Getting Started with Node.js and Express',
      excerpt: 'A beginner-friendly guide to building REST APIs with Node.js and Express, including authentication and database integration.',
      date: '2023-12-20',
      readTime: '15 min read',
      category: 'Backend',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      title: 'CSS Grid vs Flexbox: When to Use Which',
      excerpt: 'Understanding the differences between CSS Grid and Flexbox, with practical examples and use cases for each layout method.',
      date: '2023-12-15',
      readTime: '6 min read',
      category: 'CSS',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      title: 'Database Design Best Practices',
      excerpt: 'Essential principles for designing efficient and scalable databases, covering normalization, indexing, and query optimization.',
      date: '2023-12-10',
      readTime: '11 min read',
      category: 'Database',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    }
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
                  <button className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors duration-200">
                    Read More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
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
                  <button className="inline-flex items-center text-orange-600 font-medium text-sm hover:text-orange-700 transition-colors duration-200">
                    Read More
                    <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
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