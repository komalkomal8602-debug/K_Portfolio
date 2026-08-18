import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaGlobe, FaShoppingCart, FaComments, FaBolt, FaShieldAlt, FaLayerGroup } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing skills, projects, and experience with responsive design and dark mode support.',
      icon: FaGlobe,
      technology: 'HTML, CSS, Tailwind CSS, React',
      concepts: ['Responsive UI', 'Components', 'Routing', 'Deployment'],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://yourportfolio.com',
    },
    {
      id: 2,
      title: 'E-Commerce (Basic)',
      description: 'Full-featured e-commerce platform with user authentication, product management, shopping cart, and order processing.',
      icon: FaShoppingCart,
      technology: 'MERN Stack (MongoDB, Express.js, React, Node.js)',
      concepts: ['Authentication', 'CRUD Operations', 'Shopping Cart', 'Orders', 'MongoDB', 'REST API'],
      github: 'https://github.com/yourusername/ecommerce-basic',
      demo: 'https://ecommerce-basic.com',
    },
    {
      id: 3,
      title: 'Real-Time Chat App',
      description: 'Instant messaging application with real-time communication, online/offline status, and typing indicators.',
      icon: FaComments,
      technology: 'MERN Stack + Socket.IO',
      concepts: ['Real-time Messaging', 'Online Users', 'Typing Indicator', 'Socket.IO', 'WebSockets'],
      github: 'https://github.com/yourusername/chat-app',
      demo: 'https://chat-app.com',
    },
    {
      id: 4,
      title: 'Real-Time E-Commerce',
      description: 'Advanced e-commerce platform with live product updates, real-time cart synchronization, and admin dashboard.',
      icon: FaBolt,
      technology: 'MERN + Redux Toolkit + Socket.IO',
      concepts: ['Live Product Updates', 'Real-time Cart', 'Admin Dashboard', 'Redux Toolkit', 'Socket.IO'],
      github: 'https://github.com/yourusername/ecommerce-real-time',
      demo: 'https://ecommerce-real-time.com',
    },
    {
      id: 5,
      title: 'Blockchain Basics DApp',
      description: 'Decentralized application introducing blockchain concepts with wallet connection and smart contract interaction.',
      icon: FaShieldAlt,
      technology: 'Web3.js, Solidity, Ethereum',
      concepts: ['Wallet Connection', 'Smart Contract Basics', 'DApp Introduction', 'Blockchain', 'Web3'],
      github: 'https://github.com/yourusername/blockchain-dapp',
      demo: 'https://blockchain-dapp.com',
    }
  ]

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100/30 via-transparent to-gray-100/30 dark:from-gray-900/20 dark:via-transparent dark:to-gray-900/20 -z-10"></div>
      
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="max-w-7xl mx-auto 2xl:max-w-[1400px]">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-medium mb-4 border border-gray-200 dark:border-gray-800">
              <FaLayerGroup size={14} />
              My Projects
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A collection of my work showcasing expertise in full-stack development, real-time applications, and emerging technologies
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project) => {
              const Icon = project.icon
              
              return (
                <div
                  key={project.id}
                  className="group bg-gray-50 dark:bg-gray-900/60 border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 rounded-2xl p-6 sm:p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-black dark:bg-white">
                        <Icon className="w-6 h-6 text-white dark:text-black" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          {project.technology}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Concepts */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.concepts.map((concept, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
                    >
                      <FaGithub size={16} />
                      Source Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black transition-colors text-sm font-medium"
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors font-medium"
            >
              <FaGithub size={20} />
              View All Projects on GitHub
              <FaExternalLinkAlt size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
