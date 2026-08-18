import React from 'react'
import { ArrowRight, ArrowDown, Shield, Code, Brain, GraduationCap } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Img from '../assets/img.jpeg'

export default function Hero() {
  const handleScrollDown = (e) => {
    e.preventDefault()
    const target = document.querySelector('#skills')
    if (target) {
      const navbarHeight = document.querySelector('header')?.offsetHeight || 80
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight
      window.scrollTo({ top: targetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 sm:pt-20 lg:pt-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100/40 via-transparent to-gray-100/40 dark:from-gray-900/30 dark:via-transparent dark:to-gray-900/30 -z-10"></div>
      
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="max-w-7xl mx-auto 2xl:max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center min-h-[80vh]">
            
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-gray-200 dark:border-gray-800">
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-gray-700 dark:bg-gray-300"></span>
                </span>
                Available for opportunities
              </div>

              {/* Greeting */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-3 sm:mb-4">
                Hi, I'm{' '}
                <span className="text-black dark:text-white">Komal</span>
              </h1>

              {/* Role */}
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">
                <span className="text-gray-500 dark:text-gray-400">I'm a </span>
                <span className="text-black dark:text-white">Full Stack Developer</span>
              </div>

              {/* Education Section */}
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800">
                <div className="flex items-start gap-2 sm:gap-3">
                  <GraduationCap size={18} className="text-gray-700 dark:text-gray-300 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                      Education & Expertise
                    </h3>
                    <ul className="space-y-1 sm:space-y-1.5">
                      <li className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gray-700 dark:bg-gray-300"></span>
                        <span className="font-medium text-gray-900 dark:text-white">Cyber Security</span>
                        <span className="hidden xs:inline text-gray-400">|</span>
                        <span className="text-gray-500 dark:text-gray-400">Ethical Hacking & Network Security</span>
                      </li>
                      <li className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gray-700 dark:bg-gray-300"></span>
                        <span className="font-medium text-gray-900 dark:text-white">MERN Stack</span>
                        <span className="hidden xs:inline text-gray-400">|</span>
                        <span className="text-gray-500 dark:text-gray-400">MongoDB, React, Node.js</span>
                      </li>
                      <li className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gray-700 dark:bg-gray-300"></span>
                        <span className="font-medium text-gray-900 dark:text-white">AI Prompt Engineer</span>
                        <span className="hidden xs:inline text-gray-400">|</span>
                        <span className="text-gray-500 dark:text-gray-400">LLM Optimization</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6 sm:mb-8 max-w-lg">
                Building secure, scalable applications with MERN stack. Passionate about AI, cybersecurity, and zero-trust architecture.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                <span className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-medium border border-gray-200 dark:border-gray-800">
                  <Code size={14} /> MERN Stack
                </span>
                <span className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-medium border border-gray-200 dark:border-gray-800">
                  <Shield size={14} /> Security
                </span>
                <span className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-medium border border-gray-200 dark:border-gray-800">
                  <Brain size={14} /> AI/ML
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="#footer"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black font-medium transition-colors shadow-lg shadow-black/10 dark:shadow-white/10 text-sm sm:text-base"
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
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-colors">
                  <FaGithub size={18} />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-colors">
                  <FaLinkedin size={18} />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-colors">
                  <FaTwitter size={18} />
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 flex justify-center items-center">
              <div className="relative w-64 sm:w-72 md:w-80 lg:w-[350px] xl:w-[400px] 2xl:w-[450px] aspect-square">
                <div className="absolute inset-0 bg-gray-300/30 dark:bg-gray-700/30 rounded-full blur-3xl -z-10 scale-110"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 dark:from-gray-600 dark:via-gray-700 dark:to-gray-800 p-1">
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

      {/* Scroll Indicator - now clickable, scrolls to Skills */}
      <a
        href="#skills"
        onClick={handleScrollDown}
        aria-label="Scroll to Skills section"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span className="text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider group-hover:text-black dark:group-hover:text-white transition-colors">
          Scroll
        </span>
        <ArrowDown
          size={16}
          className="text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors animate-bounce"
        />
      </a>
    </section>
  )
}
