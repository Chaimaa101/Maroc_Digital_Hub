import React, { useState } from 'react';

const Forum = () => {
  const [activeTag, setActiveTag] = useState('All');
  
  const threads = [
    {
      id: 1,
      category: 'UX INSIGHTS',
      title: 'Research Project Planning - Time estimates for various research methods and phases',
      author: 'Andrew Simmon',
      time: '2 min ago',
      replies: 5,
      isNew: true
    },
    {
      id: 2,
      category: 'MOBILITY',
      title: 'Mobile design: When to use full-width images and when not to?',
      author: 'Mario Christopher',
      time: '2 min ago',
      replies: 125,
      isNew: true
    },
    {
      id: 3,
      category: 'VIDEO EDITING',
      title: 'Need a video that shows that without practicing easy thing may be hard and vice versa',
      author: 'Kishore Kumar',
      time: '1 hr ago',
      replies: 33,
      isNew: false
    },
    {
      id: 4,
      category: 'UI DESIGN',
      title: 'Responsive UI Pattern for selecting from a list of exact values greater than 5?',
      author: 'Daniel Richard',
      time: '1 day ago',
      replies: 120,
      isNew: false
    }
  ];

  const tags = [
    'All', 'Animation', 'Art Direction', 'Branding', 'Graphic Design', 
    'Iconography', 'Illustration', 'Mobility', 'Marvel', 'Prototyping', 
    'Project Management'
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Forum</h1>
        </header>
        
        <div className="flex flex-col md:flex-row gap-8">
          <main className="flex-1">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">New</h2>
            
            <div className="space-y-6">
              {threads.map(thread => (
                <div 
                  key={thread.id} 
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
  <div className="flex items-center">
    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold mr-3">
      {thread.category.split(' ').map(name => name[0]).join('')}
    </div>
    <div>
      <span className="text-gray-700 font-medium block">{thread.category}</span>
    </div>
  </div>
  {thread.isNew && (
    <div className="px-2.5 py-0.5 rounded-full text-xs font-m edium bg-green-100 text-green-800">
      New
    </div>
  )}
</div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{thread.title}</h3>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium">{thread.author}</span>
                    <span className="mx-2">•</span>
                    <span>{thread.time}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      {thread.replies} replies
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </main>
          
          <aside className="w-full md:w-64">
       
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">TAGS</h3>
              <div className="space-y-2">
                {tags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeTag === tag 
                        ? 'bg-blue-100 text-blue-700 font-medium' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Forum;