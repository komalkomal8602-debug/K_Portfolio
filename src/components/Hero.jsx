import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowDown,
  Shield,
  Code,
  Brain,
  GraduationCap,
  Sparkles,
} from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Img from '../assets/img.jpeg'

// ---------------------------------------------
// DATA
// ---------------------------------------------

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
  {
    label: 'MERN Stack',
    icon: Code,
  },
  {
    label: 'Cyber Security',
    icon: Shield,
  },
  {
    label: 'AI / ML',
    icon: Brain,
  },
]

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/komalkomal8602-debug',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/',
    icon: FaLinkedin,
  },
]

// ---------------------------------------------
// ANIMATION VARIANTS
// ---------------------------------------------

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: 'easeOut',
    },
  },
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

// ---------------------------------------------
// HERO COMPONENT
// ---------------------------------------------

export default function Hero() {
  const handleScrollDown = (e) => {
    e.preventDefault()

    const target = document.querySelector('#skills')

    if (!target) return

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

  return (
    <section
      id="home"
      className="
        relative flex min-h-screen
        items-center overflow-hidden
        bg-white pt-20
        dark:bg-gray-950
        sm:pt-24
        lg:pt-20
      "
    >
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Main gradient */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-br
            from-[#1397d4]/5
            via-transparent
            to-[#1397d4]/10
            dark:from-[#1397d4]/10
            dark:to-[#1397d4]/5
          "
        />

        {/* Decorative glow */}
        <div
          className="
            absolute -right-32 -top-32
            h-72 w-72 rounded-full
            bg-[#1397d4]/10
            blur-3xl
            sm:h-96 sm:w-96
          "
        />

        <div
          className="
            absolute -bottom-32 -left-32
            h-72 w-72 rounded-full
            bg-[#1397d4]/10
            blur-3xl
            sm:h-96 sm:w-96
          "
        />

        {/* Grid */}
        <div
          className="
            absolute inset-0 opacity-[0.025]
            dark:opacity-[0.04]
            [background-image:linear-gradient(#1397d4_1px,transparent_1px),linear-gradient(90deg,#1397d4_1px,transparent_1px)]
            [background-size:40px_40px]
          "
        />
      </div>

      {/* =========================================
          MAIN CONTAINER
      ========================================== */}

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="mx-auto max-w-7xl 2xl:max-w-[1400px]">
          <div
            className="
              grid min-h-[80vh]
              grid-cols-1
              items-center
              gap-12
              md:gap-16
              lg:grid-cols-2
              lg:gap-20
            "
          >
            {/* =====================================
                LEFT CONTENT
            ====================================== */}

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="
                order-2
                text-center
                lg:order-1
                lg:text-left
              "
            >
              {/* Availability */}

              <motion.div
                variants={fadeUp}
                className="
                  mx-auto inline-flex
                  items-center gap-2
                  rounded-full
                  border border-[#1397d4]/20
                  bg-[#1397d4]/5
                  px-4 py-2
                  text-xs font-semibold
                  text-[#1397d4]
                  backdrop-blur-sm
                  sm:text-sm
                  lg:mx-0
                "
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="
                      absolute inline-flex
                      h-full w-full
                      animate-ping rounded-full
                      bg-[#1397d4]
                      opacity-60
                    "
                  />

                  <span
                    className="
                      relative inline-flex
                      h-2.5 w-2.5
                      rounded-full
                      bg-[#1397d4]
                    "
                  />
                </span>

                Available for opportunities
              </motion.div>

              {/* Greeting */}

              <motion.h1
                variants={fadeUp}
                className="
                  mt-5
                  text-4xl
                  font-extrabold
                  leading-[1.05]
                  tracking-tight
                  text-gray-950
                  dark:text-white
                  sm:text-5xl
                  md:text-6xl
                  lg:text-6xl
                  xl:text-7xl
                "
              >
                Hi, I'm{' '}
                <span
                  className="
                    bg-gradient-to-r
                    from-[#1397d4]
                    to-cyan-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  Komal
                </span>
              </motion.h1>

              {/* Role */}

              <motion.div
                variants={fadeUp}
                className="
                  mt-4
                  flex items-center
                  justify-center
                  gap-2
                  lg:justify-start
                "
              >
                <Sparkles
                  size={20}
                  className="text-[#1397d4]"
                />

                <p
                  className="
                    text-xl
                    font-bold
                    text-gray-800
                    dark:text-gray-200
                    sm:text-2xl
                    md:text-3xl
                  "
                >
                  Full Stack Developer
                </p>
              </motion.div>

              {/* Education */}

              <motion.div
                variants={fadeUp}
                className="
                  mt-7
                  rounded-2xl
                  border border-gray-200
                  bg-white/70
                  p-4
                  text-left
                  shadow-sm
                  backdrop-blur-md
                  transition-all
                  hover:border-[#1397d4]/30
                  hover:shadow-lg
                  dark:border-gray-800
                  dark:bg-gray-900/60
                  sm:p-5
                "
              >
                <div className="flex items-start gap-3">
                  <div
                    className="
                      flex h-9 w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#1397d4]/10
                      text-[#1397d4]
                    "
                  >
                    <GraduationCap size={19} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3
                      className="
                        mb-3
                        text-sm
                        font-bold
                        text-gray-900
                        dark:text-white
                      "
                    >
                      Education & Expertise
                    </h3>

                    <ul className="space-y-2.5">
                      {EDUCATION.map((item) => (
                        <li
                          key={item.label}
                          className="
                            flex flex-wrap
                            items-center
                            gap-1.5
                            text-xs
                            sm:text-sm
                          "
                        >
                          <span
                            className="
                              h-1.5 w-1.5
                              shrink-0
                              rounded-full
                              bg-[#1397d4]
                            "
                          />

                          <span
                            className="
                              font-semibold
                              text-gray-900
                              dark:text-white
                            "
                          >
                            {item.label}
                          </span>

                          <span className="text-gray-300 dark:text-gray-700">
                            |
                          </span>

                          <span
                            className="
                              text-gray-500
                              dark:text-gray-400
                            "
                          >
                            {item.detail}
                          </span>
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
                  mx-auto
                  mt-6
                  max-w-xl
                  text-sm
                  leading-7
                  text-gray-600
                  dark:text-gray-400
                  sm:text-base
                  lg:mx-0
                "
              >
                Building secure, scalable and modern web applications
                with the MERN stack. Passionate about
                <span className="font-semibold text-[#1397d4]">
                  {' '}AI, Cybersecurity
                </span>{' '}
                and innovative digital solutions.
              </motion.p>

              {/* Tech badges */}

              <motion.div
                variants={fadeUp}
                className="
                  mt-6
                  flex flex-wrap
                  justify-center
                  gap-2
                  sm:gap-3
                  lg:justify-start
                "
              >
                {TECH_BADGES.map((badge) => {
                  const Icon = badge.icon

                  return (
                    <span
                      key={badge.label}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-gray-200
                        bg-gray-50
                        px-3.5 py-2
                        text-xs
                        font-semibold
                        text-gray-700
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#1397d4]/30
                        hover:bg-[#1397d4]/5
                        hover:text-[#1397d4]
                        dark:border-gray-800
                        dark:bg-gray-900
                        dark:text-gray-300
                        dark:hover:border-[#1397d4]/40
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
                  mt-8
                  flex flex-col
                  items-center
                  gap-3
                  sm:flex-row
                  sm:justify-center
                  lg:justify-start
                "
              >
                <a
                  href="#footer"
                  className="
                    group
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#1397d4]
                    px-7 py-3.5
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    shadow-[#1397d4]/20
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#1088c0]
                    hover:shadow-xl
                    hover:shadow-[#1397d4]/30
                    sm:w-auto
                    sm:text-base
                  "
                >
                  Get in Touch

                  <ArrowRight
                    size={17}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </a>

                <a
                  href="#projects"
                  className="
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                    px-7 py-3.5
                    text-sm
                    font-bold
                    text-gray-700
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#1397d4]/40
                    hover:text-[#1397d4]
                    dark:border-gray-800
                    dark:bg-gray-900
                    dark:text-gray-200
                    dark:hover:border-[#1397d4]/40
                    sm:w-auto
                    sm:text-base
                  "
                >
                  View Projects
                </a>
              </motion.div>

              {/* Social Links */}

              <motion.div
                variants={fadeUp}
                className="
                  mt-7
                  flex
                  justify-center
                  gap-3
                  lg:justify-start
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
                        flex h-11 w-11
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-gray-200
                        bg-white
                        text-gray-600
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#1397d4]/40
                        hover:bg-[#1397d4]
                        hover:text-white
                        dark:border-gray-800
                        dark:bg-gray-900
                        dark:text-gray-300
                        dark:hover:border-[#1397d4]
                        dark:hover:bg-[#1397d4]
                      "
                    >
                      <Icon size={19} />
                    </a>
                  )
                })}
              </motion.div>
            </motion.div>

            {/* =====================================
                RIGHT IMAGE
            ====================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.88,
                x: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                delay: 0.2,
              }}
              className="
                order-1
                flex
                items-center
                justify-center
                lg:order-2
                lg:justify-end
              "
            >
              <div
                className="
                  relative
                  w-64
                  sm:w-72
                  md:w-80
                  lg:w-[360px]
                  xl:w-[410px]
                  2xl:w-[450px]
                "
              >
                {/* Glow */}

                <div
                  className="
                    absolute
                    inset-0
                    scale-90
                    rounded-full
                    bg-[#1397d4]/20
                    blur-3xl
                  "
                />

                {/* Decorative ring */}

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="
                    absolute
                    -inset-3
                    rounded-[2rem]
                    border
                    border-dashed
                    border-[#1397d4]/30
                  "
                />

                {/* Image card */}

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-white/60
                    bg-gradient-to-br
                    from-[#1397d4]
                    via-cyan-500
                    to-blue-600
                    p-1
                    shadow-2xl
                    shadow-[#1397d4]/20
                    dark:border-gray-700
                  "
                >
                  <img
                    src={Img}
                    alt="Komal - Full Stack Developer"
                    loading="eager"
                    className="
                      aspect-square
                      w-full
                      rounded-[1.75rem]
                      object-cover
                      object-center
                    "
                  />

                  {/* Image overlay */}

                  <div
                    className="
                      pointer-events-none
                      absolute inset-1
                      rounded-[1.75rem]
                      bg-gradient-to-t
                      from-black/20
                      via-transparent
                      to-transparent
                    "
                  />
                </div>

                {/* Floating badge */}

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="
                    absolute
                    -bottom-4
                    -left-3
                    rounded-2xl
                    border
                    border-gray-200
                    bg-white/90
                    px-4 py-3
                    shadow-xl
                    backdrop-blur-md
                    dark:border-gray-800
                    dark:bg-gray-900/90
                  "
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="
                        flex h-8 w-8
                        items-center
                        justify-center
                        rounded-lg
                        bg-[#1397d4]/10
                        text-[#1397d4]
                      "
                    >
                      <Code size={16} />
                    </span>

                    <div>
                      <p className="text-[10px] text-gray-500">
                        Specialization
                      </p>

                      <p
                        className="
                          text-xs
                          font-bold
                          text-gray-900
                          dark:text-white
                        "
                      >
                        Full Stack
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================
          SCROLL INDICATOR
      ========================================== */}

      <motion.a
        href="#skills"
        onClick={handleScrollDown}
        aria-label="Scroll to Skills section"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.6,
        }}
        className="
          group
          absolute
          bottom-6
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          lg:flex
        "
      >
        <span
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.25em]
            text-gray-400
            transition-colors
            group-hover:text-[#1397d4]
            sm:text-xs
          "
        >
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            flex h-8 w-8
            items-center
            justify-center
            rounded-full
            border
            border-gray-200
            bg-white/70
            text-gray-500
            backdrop-blur-sm
            transition-all
            group-hover:border-[#1397d4]/40
            group-hover:text-[#1397d4]
            dark:border-gray-800
            dark:bg-gray-900/70
          "
        >
          <ArrowDown size={15} />
        </motion.div>
      </motion.a>
    </section>
  )
}