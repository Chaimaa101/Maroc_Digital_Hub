import { useState } from 'react';
import { AnimatePresence, motion  } from 'framer-motion';
import Hero from '../components/Hero';
import StartupCard from '../components/StartupCard';
import Newsletter from '../components/Newsletter';
import SectorCard from '../components/SectorCard';

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');
  const [searchQuery, setSearchQuery] = useState('');

  // Blog post data
  const blogPosts = [
    {
      id: 1,
      category: 'Culture',
      date: '30 Jan 2024',
      readTime: '10 mins read',
      title: 'Unveiling the Secrets Beyond the Tourist Trails',
      excerpt: 'Dive into the local culture, discover hidden spots, and experience the authentic charm that often remains unseen by regular tourists.',
      author: 'Seraphina Isabetta',
      image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      tags: ['culture', 'hidden-gems', 'local']
    },
    {
      id: 2,
      category: 'Culinary',
      date: '24 Jan 2024',
      readTime: '10 mins read',
      title: 'Savoring Mozale Resto Gastronomic Delights',
      excerpt: 'From street food to fine dining, uncover the cinema and delectable world of culinary experiences that await food enthusiasts.',
      author: 'Nathaniel Reginald',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      tags: ['food', 'restaurants', 'culinary']
    },
    {
      id: 3,
      category: 'Tips & Hacks',
      date: '29 Jan 2024',
      readTime: '8 mins read',
      title: 'A Fashionista\'s Guide to Wanderlust',
      excerpt: 'Explore the intersection of fashion and travel as we delve into the wardrobes of globetrotters. From packing tips to destination-specific style guides.',
      author: 'Maximilian Bartholomew',
      image: 'https://images.unsplash.com/photo-1439066290691-510066268af5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      tags: ['fashion', 'packing', 'style']
    },
    {
      id: 4,
      category: 'Destination',
      date: '20 Jan 2024',
      readTime: '8 mins read',
      title: 'Journey Through Time',
      excerpt: 'Wander through ancient streets, visit iconic landmarks, and immerse yourself in the tales that have shaped civilizations across centuries.',
      author: 'Percival Thaddeus',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      tags: ['history', 'landmarks', 'ancient']
    },
    {
      id: 5,
      category: 'Tips & Hacks',
      date: '25 Jan 2024',
      readTime: '12 mins read',
      title: 'Top 5 Apps and Gadgets That Will Transform Your Journeys',
      excerpt: 'Explore the latest in travel technology with our guide to must-have apps and gadgets. From navigation tools to language translators that make traveling seamless.',
      author: 'Anastasia Evangeline',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      tags: ['technology', 'apps', 'gadgets']
    },
    {
      id: 6,
      category: 'Culinary',
      date: '18 Jan 2024',
      readTime: '6 mins read',
      title: 'Experiencing Sustainable Culinary Tourism',
      excerpt: 'Join us on a sustainable culinary voyage, exploring destinations that prioritize farm-to-table experiences and eco-friendly dining practices.',
      author: 'Sebastian Montgomery',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      tags: ['sustainable', 'eco-friendly', 'farm-to-table']
    },
    {
      id: 7,
      category: 'Utterlyte',
      date: '22 Jan 2024',
      readTime: '7 mins read',
      title: 'The Art of Slow Travel',
      excerpt: 'Discover the beauty of taking your time and truly immersing yourself in local cultures and experiences.',
      author: 'Isabella Roswell',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      tags: ['slow-travel', 'immersion', 'local']
    },
    {
      id: 8,
      category: 'Destination',
      date: '15 Jan 2024',
      readTime: '9 mins read',
      title: 'Northern Lights Adventure',
      excerpt: 'Chasing the aurora borealis in the Arctic circle - a guide to the best viewing spots and photography tips.',
      author: 'Alexander Frost',
      image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      tags: ['northern-lights', 'arctic', 'photography']
    }
  ];

  const categories = ['All', 'Destination', 'Culinary', 'Utterlyte', 'Tips & Hacks', 'Culture'];
  const sortOptions = ['Newest', 'Oldest', 'Most Popular', 'A-Z'];

  // Filter and sort posts
  const filteredPosts = blogPosts
    .filter(post => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'Newest':
          return new Date(b.date) - new Date(a.date);
        case 'Oldest':
          return new Date(a.date) - new Date(b.date);
        case 'A-Z':
          return a.title.localeCompare(b.title);
        case 'Most Popular':
          return b.id - a.id; // Simulating popularity with ID
        default:
          return 0;
      }
    });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
   
        <Hero />
    

      {/* Blog Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
           
      
          {/* Filters and Sort */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 space-y-6 lg:space-y-0">
            {/* Horizontal Category Filters */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3 overflow-x-auto pb-2 scrollbar-hide"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  variants={filterVariants}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    activeCategory === category
                      ? 'bg-[#4b919e] text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>

            {/* Sort By */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center space-x-3 bg-white px-4 py-3 rounded-2xl shadow-sm"
            >
              <span className="text-gray-600 font-medium">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border-none focus:outline-none focus:ring-0 text-gray-700 bg-transparent"
              >
                {sortOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </motion.div>
          </div>

          {/* Results Count */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mb-8"
          >
            <p className="text-gray-600">
              Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
              {activeCategory !== 'All' && ` in ${activeCategory}`}
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </motion.div>

       <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeCategory}-${sortBy}-${searchQuery}`}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      variants={itemVariants}
                      layout
                      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                      whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    >
                      {/* Post Image */}
                      <motion.div 
                        className="h-48 bg-cover bg-center relative overflow-hidden"
                        style={{ backgroundImage: `url(${post.image})` }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                        <div className="absolute top-4 left-4">
                          <span className="inline-block bg-[#4b919e] text-white text-xs font-semibold px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </motion.div>
                      
                      {/* Post Content */}
                      <div className="p-6">
                        {/* Meta Information */}
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-sm text-gray-500">{post.date}</span>
                          <span className="text-sm text-gray-500">{post.readTime}</span>
                        </div>
    
                        {/* Title */}
                        <motion.h3 
                          className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-cyan-500 transition-colors"
                          whileHover={{ color: "#1e40af" }}
                        >
                          {post.title}
                        </motion.h3>
    
                        {/* Excerpt */}
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
    
                        {/* Author */}
                        <div className="flex items-center pt-4 border-t border-gray-100">
                          <div className="w-10 h-10 bg-gradient-to-r from-[#ce6a6c] to-[#eaada2] rounded-full flex items-center justify-center text-white font-bold mr-3">
                            {post.author.split(' ').map(name => name[0]).join('')}
                          </div>
                          <div>
                            <span className="text-gray-700 font-medium block">{post.author}</span>
                            <span className="text-gray-500 text-sm">Travel Writer</span>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </AnimatePresence>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your filters or search terms</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-colors"
              >
                Clear Filters
              </motion.button>
            </motion.div>
          )}

          {/* Load More Button */}
          {filteredPosts.length > 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors shadow-lg"
              >
                Load More Articles
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      <Newsletter />

<SectorCard />
    </div>
  );
};

export default HomePage;