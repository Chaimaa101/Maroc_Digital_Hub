import React from 'react'
import { AnimatePresence, motion  } from 'framer-motion';


function StartupCard() {
    
  return (
    <>
     {/* Blog Posts Grid */}
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
                          <span className="inline-block bg-blue-800 text-white text-xs font-semibold px-3 py-1 rounded-full">
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
                          className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors"
                          whileHover={{ color: "#1e40af" }}
                        >
                          {post.title}
                        </motion.h3>
    
                        {/* Excerpt */}
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
    
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map(tag => (
                            <span 
                              key={tag}
                              className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
    
                        {/* Author */}
                        <div className="flex items-center pt-4 border-t border-gray-100">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold mr-3">
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
      
    </>
  )
}

export default StartupCard
