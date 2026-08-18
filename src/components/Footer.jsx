import React from 'react'
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaHeart, 
  FaCode,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp
} from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="footer" className="relative bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="max-w-7xl mx-auto 2xl:max-w-[1400px] py-12 sm:py-16">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                <span className="text-black dark:text-white border-b-2 border-gray-900 dark:border-white">K</span>omal
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
                Building secure, scalable applications with MERN stack. Passionate about AI, cybersecurity, and zero-trust architecture.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                <li><a href="#home" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Home</a></li>
                <li><a href="#skills" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Projects</a></li>
                <li><a href="#experience" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Experience</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Contact
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <FaEnvelope className="text-gray-700 dark:text-gray-300 flex-shrink-0" size={16} />
                  <a href="mailto:your.email@example.com" className="hover:text-black dark:hover:text-white transition-colors">
                    your.email@example.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <FaPhone className="text-gray-700 dark:text-gray-300 flex-shrink-0" size={16} />
                  <a href="tel:+919999999999" className="hover:text-black dark:hover:text-white transition-colors">
                    +91 99999 99999
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <FaMapMarkerAlt className="text-gray-700 dark:text-gray-300 flex-shrink-0" size={16} />
                  <span>India</span>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Follow Me
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-all duration-300 hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-all duration-300 hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-all duration-300 hover:-translate-y-1"
                  aria-label="Twitter"
                >
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
                (c) {currentYear} Komal. All rights reserved.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1.5">
                Made with
                <FaHeart className="text-gray-700 dark:text-gray-300 animate-pulse" size={14} />
                and
                <FaCode className="text-gray-700 dark:text-gray-300" size={14} />
                by Komal
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black shadow-lg shadow-black/10 dark:shadow-white/10 transition-all duration-300 hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={18} />
      </button>
    </footer>
  )
}
