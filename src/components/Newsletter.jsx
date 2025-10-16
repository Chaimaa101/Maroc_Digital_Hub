import React from 'react'
import { motion  } from 'framer-motion';


function Newsletter() {
  return (
    <>
        <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-blue-50 py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Never Miss a Post</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter and get the latest travel stories, tips, and destination guides delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#ce6a6c] text-white px-6 py-3 rounded-r-lg font-semibold hover:bg-[#eaada2] hover:text-gray-800 transition-colors"
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Newsletter
