import React from 'react'
import { ArrowRight, Shield, Code, Brain, GraduationCap } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Img from '../assets/img.jpeg'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 sm:pt-20 lg:pt-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/10 dark:via-transparent dark:to-purple-950/10 -z-10"></div>
      
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="max-w-7xl mx-auto 2xl:max-w-[1400px] 4k:max-w-[1800px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center min-h-[80vh]">
            
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-blue-200 dark:border-blue-800">
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-blue-500"></span>
                </span>
                Available for opportunities
              </div>

              {/* Greeting - Balanced size */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-3 sm:mb-4">
                Hi, I'm{' '}
                <span className="text-blue-600 dark:text-blue-400">Komal</span>
              </h1>

              {/* Role - Balanced size */}
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">
                <span className="text-gray-500 dark:text-gray-400">I'm a </span>
                <span className="text-blue-600 dark:text-blue-400">Full Stack Developer</span>
              </div>

              {/* Education Section */}
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200/50 dark:border-blue-800/50">
                <div className="flex items-start gap-2 sm:gap-3">
                  <GraduationCap size={18} className="text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                      Education & Expertise
                    </h3>
                    <ul className="space-y-1 sm:space-y-1.5">
                      <li className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-blue-500"></span>
                        <span className="font-medium text-blue-600 dark:text-blue-400">Cyber Security</span>
                        <span className="hidden xs:inline text-gray-400">|</span>
                        <span className="text-gray-500 dark:text-gray-400">Ethical Hacking & Network Security</span>
                      </li>
                      <li className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-blue-500"></span>
                        <span className="font-medium text-blue-600 dark:text-blue-400">MERN Stack</span>
                        <span className="hidden xs:inline text-gray-400">|</span>
                        <span className="text-gray-500 dark:text-gray-400">MongoDB, React, Node.js</span>
                      </li>
                      <li className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-500"></span>
                        <span className="font-medium text-purple-600 dark:text-purple-400">AI Prompt Engineer</span>
                        <span className="hidden xs:inline text-gray-400">|</span>
                        <span className="text-gray-500 dark:text-gray-400">LLM Optimization</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Description - Perfect size */}
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6 sm:mb-8 max-w-lg">
                Building secure, scalable applications with MERN stack. Passionate about AI, cybersecurity, and zero-trust architecture.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                <span className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs sm:text-sm font-medium border border-blue-200 dark:border-blue-800">
                  <Code size={14} /> MERN Stack
                </span>
                <span className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs sm:text-sm font-medium border border-blue-200 dark:border-blue-800">
                  <Shield size={14} /> Security
                </span>
                <span className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 text-xs sm:text-sm font-medium border border-purple-200 dark:border-purple-800">
                  <Brain size={14} /> AI/ML
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium transition-colors shadow-lg shadow-blue-500/30 text-sm sm:text-base"
                >
                  Get in Touch
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors text-sm sm:text-base"
                >
                  View Projects
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-2 sm:gap-3 mt-6 sm:mt-8">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <FaGithub size={18} />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <FaLinkedin size={18} />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <FaTwitter size={18} />
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 flex justify-center items-center">
              <div className="relative w-64 sm:w-72 md:w-80 lg:w-[350px] xl:w-[400px] 2xl:w-[450px] 4k:w-[550px] aspect-square">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10 scale-110"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 via-blue-500 to-purple-400 p-1">
                  <img 
                    src={Img} 
                    alt="Komal - Full Stack Developer" 
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <span className="text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Scroll</span>
        <div className="w-0.5 h-6 sm:h-8 bg-gradient-to-b from-blue-600 to-transparent dark:from-blue-400"></div>
      </div>
    </section>
  )
}