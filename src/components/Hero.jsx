import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowDown,
  Shield,
  Code,
  Brain,
  GraduationCap,
} from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Img from '../assets/img.jpeg'

const EDUCATION = [
  {
    label: 'Cyber Security',
    detail: 'Ethical Hacking & Network Security',
  },
  {
    label: 'MERN Stack',
    detail: 'MongoDB, React, Node.js',
  },
  {
    label: 'AI Prompt Engineer',
    detail: 'LLM Optimization',
  },
]

const TECH_BADGES = [
  { label: 'MERN Stack', icon: Code },
  { label: 'Security', icon: Shield },
  { label: 'AI/ML', icon: Brain },
]

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/komalkomal8602-debug',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: FaLinkedin,
  },
]

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export default function Hero() {
  const handleScrollDown = (e) => {
    e.preventDefault()

    const target = document.querySelector('#skills')

    if (target) {
      const navbarHeight =
        document.querySelector('header')?.offsetHeight || 80

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      id="home"
      className="
        relative flex min-h-screen items-center
        overflow-hidden bg-white pt-20
        text-gray-900 dark:bg-black dark:text-white
        sm:pt-24
      "
    >
      {/* Subtle background */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(circle_at_80%_50%,rgba(0,0,0,0.05),transparent_35%)]
          dark:bg-[radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.04),transparent_35%)]
        "
      />

      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 2xl:px-16">
        <div
          className="
            mx-auto grid min-h-[calc(100vh-96px)]
            max-w-7xl items-center
            grid-cols-1 gap-12
            lg:grid-cols-[1.1fr_0.9fr]
            lg:gap-16
            xl:gap-20
          "
        >
          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="
              order-2 text-center
              lg:order-1 lg:text-left
            "
          >
            {/* Availability */}
            <motion.div
              variants={fadeUp}
              className="
                mx-auto inline-flex items-center gap-2
                rounded-full border border-gray-200
                bg-gray-50 px-4 py-2
                text-xs font-medium text-gray-700
                dark:border-gray-800
                dark:bg-gray-950
                dark:text-gray-300
                sm:text-sm
                lg:mx-0
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute inline-flex h-full w-full
                    rounded-full bg-gray-500 opacity-40
                  "
                />
                <span
                  className="
                    relative inline-flex h-2 w-2
                    rounded-full bg-black
                    dark:bg-white
                  "
                />
              </span>

              Available for opportunities
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="
                mt-5 text-4xl font-bold
                leading-[1.05] tracking-tight
                text-black dark:text-white
                sm:text-5xl
                md:text-6xl
                lg:text-6xl
                xl:text-7xl
              "
            >
              Hi, I'm{' '}
              <span className="text-gray-500 dark:text-gray-400">
                Komal
              </span>
            </motion.h1>

            {/* Role */}
            <motion.p
              variants={fadeUp}
              className="
                mt-4 text-xl font-semibold
                text-gray-700 dark:text-gray-300
                sm:text-2xl
                md:text-3xl
                lg:text-3xl
              "
            >
              <span className="font-normal text-gray-400 dark:text-gray-500">
                I'm a{' '}
              </span>
              Full Stack Developer
            </motion.p>

            {/* Education */}
            <motion.div
              variants={fadeUp}
              className="
                mx-auto mt-7 max-w-xl
                rounded-2xl border
                border-gray-200 bg-gray-50
                p-4 text-left
                dark:border-gray-800
                dark:bg-gray-950
                sm:p-5
                lg:mx-0
              "
            >
              <div className="flex items-start gap-3">
                <div
                  className="
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-lg bg-black
                    text-white
                    dark:bg-white dark:text-black
                  "
                >
                  <GraduationCap size={18} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3
                    className="
                      mb-3 text-sm font-semibold
                      text-gray-900
                      dark:text-white
                    "
                  >
                    Education & Expertise
                  </h3>

                  <ul className="space-y-2">
                    {EDUCATION.map((item) => (
                      <li
                        key={item.label}
                        className="
                          flex flex-wrap items-center
                          gap-x-2 gap-y-1
                          text-xs text-gray-500
                          dark:text-gray-400
                          sm:text-sm
                        "
                      >
                        <span
                          className="
                            h-1.5 w-1.5 shrink-0
                            rounded-full bg-gray-700
                            dark:bg-gray-300
                          "
                        />

                        <span className="font-semibold text-gray-900 dark:text-white">
                          {item.label}
                        </span>

                        <span className="text-gray-300 dark:text-gray-700">
                          /
                        </span>

                        <span>{item.detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="
                mx-auto mt-6 max-w-xl
                text-sm leading-7
                text-gray-500 dark:text-gray-400
                sm:text-base
                lg:mx-0
              "
            >
              Building secure and scalable applications with the MERN
              stack. Passionate about AI, cybersecurity, and modern
              web technologies.
            </motion.p>

            {/* Tech badges */}
            <motion.div
              variants={fadeUp}
              className="
                mt-6 flex flex-wrap
                justify-center gap-2
                lg:justify-start
              "
            >
              {TECH_BADGES.map((badge) => {
                const Icon = badge.icon

                return (
                  <span
                    key={badge.label}
                    className="
                      inline-flex items-center gap-2
                      rounded-lg border
                      border-gray-200
                      bg-white px-3 py-2
                      text-xs font-medium
                      text-gray-700
                      transition-colors
                      hover:border-gray-400
                      hover:text-black
                      dark:border-gray-800
                      dark:bg-black
                      dark:text-gray-300
                      dark:hover:border-gray-600
                      dark:hover:text-white
                      sm:px-4 sm:text-sm
                    "
                  >
                    <Icon size={15} />
                    {badge.label}
                  </span>
                )
              })}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              className="
                mt-8 flex flex-col
                items-center gap-3
                sm:flex-row
                sm:justify-center
                lg:justify-start
              "
            >
              <a
                href="#footer"
                className="
                  group inline-flex w-full
                  items-center justify-center
                  gap-2 rounded-lg
                  bg-black px-7 py-3.5
                  text-sm font-semibold
                  text-white
                  transition-all
                  hover:bg-gray-800
                  dark:bg-white
                  dark:text-black
                  dark:hover:bg-gray-200
                  sm:w-auto
                  sm:px-8
                  sm:text-base
                "
              >
                Get in Touch

                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </a>

              <a
                href="#projects"
                className="
                  inline-flex w-full
                  items-center justify-center
                  gap-2 rounded-lg
                  border border-gray-300
                  bg-white px-7 py-3.5
                  text-sm font-semibold
                  text-gray-800
                  transition-all
                  hover:border-black
                  hover:bg-gray-50
                  dark:border-gray-700
                  dark:bg-black
                  dark:text-gray-200
                  dark:hover:border-white
                  dark:hover:bg-gray-950
                  sm:w-auto
                  sm:px-8
                  sm:text-base
                "
              >
                View Projects
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeUp}
              className="
                mt-7 flex justify-center
                gap-3 lg:justify-start
              "
            >
              {SOCIALS.map((social) => {
                const Icon = social.icon

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="
                      flex h-10 w-10
                      items-center justify-center
                      rounded-lg
                      border border-gray-200
                      bg-gray-50
                      text-gray-700
                      transition-all
                      hover:border-black
                      hover:bg-black
                      hover:text-white
                      dark:border-gray-800
                      dark:bg-gray-950
                      dark:text-gray-300
                      dark:hover:border-white
                      dark:hover:bg-white
                      dark:hover:text-black
                    "
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </motion.div>
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              delay: 0.1,
            }}
            className="
              order-1 flex
              justify-center
              lg:order-2 lg:justify-end
            "
          >
            <div
              className="
                relative
                w-[280px]
                sm:w-[320px]
                md:w-[350px]
                lg:w-[400px]
                xl:w-[430px]
                2xl:w-[460px]
              "
            >
              {/* Image frame */}
              <div
                className="
                  relative aspect-square
                  overflow-hidden
                  rounded-[28px]
                  border border-gray-200
                  bg-gray-100
                  p-2
                  shadow-2xl
                  shadow-black/10
                  dark:border-gray-800
                  dark:bg-gray-950
                  dark:shadow-white/5
                "
              >
                <img
                  src={Img}
                  alt="Komal - Full Stack Developer"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="
                    h-full w-full
                    rounded-[22px]
                    object-cover
                    object-center
                  "
                />

                {/* Bottom overlay */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-x-2 bottom-2
                    rounded-b-[22px]
                    bg-gradient-to-t
                    from-black/60
                    to-transparent
                    p-6 pt-16
                  "
                >
                  <p className="text-sm font-medium text-white">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#skills"
        onClick={handleScrollDown}
        aria-label="Scroll to Skills section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="
          group absolute bottom-6
          left-1/2 hidden
          -translate-x-1/2
          flex-col items-center gap-2
          lg:flex
        "
      >
        <span
          className="
            text-[10px] font-medium
            uppercase tracking-[0.2em]
            text-gray-400
            transition-colors
            group-hover:text-black
            dark:group-hover:text-white
          "
        >
          Scroll
        </span>

        <ArrowDown
          size={16}
          className="
            text-gray-400
            transition-transform
            group-hover:translate-y-1
            group-hover:text-black
            dark:group-hover:text-white
          "
        />
      </motion.a>
    </section>
  )
}