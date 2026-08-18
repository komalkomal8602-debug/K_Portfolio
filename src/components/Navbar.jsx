import React, { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin} from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext.jsx'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#footer' },
]

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/komalkomal8602-debug', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ms-komal-2018963b1/', icon: FaLinkedin },
]

function SocialIcons({ size }) {
  return SOCIAL_LINKS.map((social) => (
    <a
      key={social.label}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      className="rounded-full p-1.5 sm:p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white transition-colors"
    >
      <social.icon size={size} />
    </a>
  ))
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.querySelector(link.href)).filter(Boolean)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const targetElement = document.querySelector(href)
    if (targetElement) {
      const navbarHeight = document.querySelector('header')?.offsetHeight || 80
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight
      window.scrollTo({ top: targetPosition, behavior: 'smooth' })
      window.history.pushState(null, null, href)
      setActiveSection(href)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="flex h-16 sm:h-18 md:h-20 items-center justify-between max-w-7xl mx-auto 2xl:max-w-[1400px]">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <span className="text-black dark:text-white border-b-2 border-gray-900 dark:border-white">K</span>omal
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-sm xl:text-base 2xl:text-lg font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-black dark:after:bg-white after:transition-all ${
                    activeSection === link.href
                      ? 'text-black dark:text-white after:w-full'
                      : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white after:w-0 hover:after:w-full'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
            {/* Social Icons - Desktop */}
            <div className="hidden sm:flex items-center gap-1 md:gap-2 pr-2 md:pr-3 border-r border-gray-200 dark:border-gray-700">
              <SocialIcons size={18} />
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </motion.span>
              </AnimatePresence>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="lg:hidden rounded-md p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white/98 dark:bg-gray-950/98 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800"
          >
            <div className="px-4 py-4 max-w-7xl mx-auto">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`block rounded-md px-4 py-3 text-base font-medium transition-colors ${
                        activeSection === link.href
                          ? 'bg-gray-100 dark:bg-gray-900 text-black dark:text-white'
                          : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-black dark:hover:text-white'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                <SocialIcons size={22} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
