import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown, Shield, Code, Brain, GraduationCap } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Img from '../assets/img.jpeg'

const EDUCATION = [
  { label: 'Cyber Security', detail: 'Ethical Hacking & Network Security' },
  { label: 'MERN Stack', detail: 'MongoDB, React, Node.js' },
  { label: 'AI Prompt Engineer', detail: 'LLM Optimization' },
]

const TECH_BADGES = [
  { label: 'MERN Stack', icon: Code },
  { label: 'Security', icon: Shield },
  { label: 'AI/ML', icon: Brain },
]

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/yourusername', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: FaLinkedin },
  { label: 'Twitter', href: 'https://twitter.com/yourusername', icon: FaTwitter },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

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
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16 sm:pt-20 lg:pt-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-100/40 via-transparent to-gray-100/40 dark:from-gray-900/30 dark:via-transparent dark:to-gray-900/30" />

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="mx-auto max-w-7xl 2xl:max-w-[1400px]">
          <div className="grid min-h-[80vh] grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Left: text content */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="order-2 text-center lg:order-1 lg:text-left"
            >
              {/* Availability badge */}
              <motion.div
                variants={fadeUp}
                className="mx-auto inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-800 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 sm:px-4 sm:py-2 sm:text-sm lg:mx-0"
              >
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gray-700 dark:bg-gray-300 sm:h-2.5 sm:w-2.5" />
                </span>
                Available for opportunities
              </motion.div>

              {/* Greeting */}
              <motion.h1
                variants={fadeUp}
                className="mt-4 text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Hi, I'm <span className="text-black dark:text-white">Komal</span>
              </motion.h1>

              {/* Role */}
              <motion.p
                variants={fadeUp}
                className="mt-3 text-lg font-semibold text-gray-700 dark:text-gray-300 sm:text-xl md:text-2xl lg:text-3xl"
              >
                <span className="text-gray-500 dark:text-gray-400">I'm a </span>
                Full Stack Developer
              </motion.p>

              {/* Education */}
              <motion.div
                variants={fadeUp}
                className="mt-5 rounded-xl border border-gray-200 bg-gray-50 p-3 text-left dark:border-gray-800 dark:bg-gray-900/60 sm:mt-6 sm:p-4"
              >
                <div className="flex items-start gap-2 sm:gap-3">
                  <GraduationCap size={18} className="mt-0.5 flex-shrink-0 text-gray-700 dark:text-gray-300" />
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 sm:mb-2 sm:text-sm">
                      Education & Expertise
                    </h3>
                    <ul className="space-y-1 sm:space-y-1.5">
                      {EDUCATION.map((item) => (
                        <li
                          key={item.label}
                          className="flex flex-wrap items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400 sm:text-sm"
                        >
                          <span className="h-1 w-1 rounded-full bg-gray-700 dark:bg-gray-300 sm:h-1.5 sm:w-1.5" />
                          <span className="font-medium text-gray-900 dark:text-white">{item.label}</span>
                          <span className="text-gray-400">|</span>
                          <span className="text-gray-500 dark:text-gray-400">{item.detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:mt-6 sm:text-base lg:mx-0"
              >
                Building secure, scalable applications with the MERN stack.
                Passionate about AI, cybersecurity, and zero-trust architecture.
              </motion.p>

              {/* Tech badges */}
              <motion.div
                variants={fadeUp}
                className="mt-5 flex flex-wrap justify-center gap-2 sm:mt-6 sm:gap-3 lg:justify-start"
              >
                {TECH_BADGES.map((badge) => (
                  <span
                    key={badge.label}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-800 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 sm:px-4 sm:py-2 sm:text-sm"
                  >
                    <badge.icon size={14} />
                    {badge.label}
                  </span>
                ))}
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                variants={fadeUp}
                className="mt-7 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start"
              >
                <a
                  href="#footer"
                  className="group inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-sm font-medium text-white shadow-lg shadow-black/10 transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:shadow-white/10 dark:hover:bg-gray-200 sm:px-8 sm:text-base"
                >
                  Get in Touch
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 sm:px-8 sm:text-base"
                >
                  View Projects
                </a>
              </motion.div>

              {/* Socials */}
              <motion.div variants={fadeUp} className="mt-6 flex justify-center gap-2 sm:mt-8 sm:gap-3 lg:justify-start">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="rounded-xl bg-gray-100 p-2.5 text-gray-700 transition-colors hover:bg-gray-200 hover:text-black dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white sm:p-3"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              className="order-1 flex items-center justify-center lg:order-2 lg:justify-end"
            >
              <div className="relative aspect-square w-64 sm:w-72 md:w-80 lg:w-[350px] xl:w-[400px] 2xl:w-[450px]">
                <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-gray-300/30 blur-3xl dark:bg-gray-700/30" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 p-1 dark:from-gray-600 dark:via-gray-700 dark:to-gray-800">
                  <img
                    src={Img}
                    alt="Komal - Full Stack Developer"
                    className="h-full w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion
        href="#skills"
        onClick={handleScrollDown}
        aria-label="Scroll to Skills section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="group absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:bottom-8 lg:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-wider text-gray-500 transition-colors group-hover:text-black dark:text-gray-400 dark:group-hover:text-white sm:text-xs">
          Scroll
        </span>
        <ArrowDown
          size={16}
          className="animate-bounce text-gray-500 transition-colors group-hover:text-black dark:text-gray-400 dark:group-hover:text-white"
        />

      </motion>
    </section>
  )
}
