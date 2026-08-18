import React from 'react'
import { 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaShieldAlt, 
  FaBriefcase,
  FaProjectDiagram,
  FaServer,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAward
} from 'react-icons/fa'
import { SiMongodb, SiExpress } from 'react-icons/si'

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Cyber Security & Web Development',
      institution: 'Hartron Advanced Skill Centre',
      duration: '1.5 Years',
      date: '2023 - 2024',
      location: 'Hartron, India',
      type: 'education',
      icon: FaGraduationCap,
      description: 'Comprehensive training in cybersecurity and full-stack web development with hands-on projects and practical exposure.',
      skills: [
        'Cyber Security',
        'Web Development',
        'Network Security',
        'Ethical Hacking',
        'MERN Stack'
      ],
      projects: [
        {
          name: 'LMS (Learning Management System)',
          tech: 'MERN Stack',
          description: 'Built a complete LMS platform using MongoDB, Express.js, React, and Node.js'
        },
        {
          name: 'Presentation Testing',
          tech: 'Security Testing',
          description: 'Conducted security testing and vulnerability assessment for web applications'
        }
      ]
    },
    {
      id: 2,
      title: 'Freelance Developer',
      institution: 'Self-Employed / Freelance',
      duration: 'Present',
      date: 'Feb 2025 - Present',
      location: 'Remote',
      type: 'experience',
      icon: FaBriefcase,
      description: 'Providing freelance web development services with a focus on MERN stack applications and client satisfaction.',
      skills: [
        'Web Development',
        'MERN Stack Projects',
        'Client Communication',
        'Project Management',
        'UI/UX Design'
      ],
      projects: [
        {
          name: 'Multiple Client Projects',
          tech: 'MERN Stack',
          description: 'Developed and deployed various web applications for clients'
        },
        {
          name: 'Freelance Portfolio',
          tech: 'React & Tailwind',
          description: 'Building professional websites and web applications'
        }
      ]
    }
  ]

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100/30 via-transparent to-gray-100/30 dark:from-gray-900/20 dark:via-transparent dark:to-gray-900/20 -z-10"></div>
      
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="max-w-7xl mx-auto 2xl:max-w-[1400px]">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-medium mb-4 border border-gray-200 dark:border-gray-800">
              <FaAward size={14} />
              My Experience
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Education & Experience
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My journey in cybersecurity, web development, and freelance work
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-6 md:space-y-8">
            {experiences.map((item) => {
              const Icon = item.icon
              
              return (
                <div
                  key={item.id}
                  className="bg-gray-50 dark:bg-gray-900/60 border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 rounded-2xl p-6 sm:p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                    {/* Icon */}
                    <div className="p-3 rounded-xl bg-black dark:bg-white self-start">
                      <Icon className="w-7 h-7 text-white dark:text-black" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                            {item.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                            {item.institution}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700">
                          {item.type === 'education' ? (
                            <>
                              <FaGraduationCap size={12} />
                              Education
                            </>
                          ) : (
                            <>
                              <FaBriefcase size={12} />
                              Experience
                            </>
                          )}
                        </span>
                      </div>

                      {/* Date & Location */}
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1.5">
                          <FaCalendarAlt size={14} className="text-gray-500 dark:text-gray-400" />
                          {item.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <FaMapMarkerAlt size={14} className="text-gray-500 dark:text-gray-400" />
                          {item.location}
                        </span>
                        {item.date && (
                          <span className="flex items-center gap-1.5">
                            <span className="text-gray-300 dark:text-gray-600">|</span>
                            {item.date}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Projects */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                          <FaProjectDiagram size={16} className="text-gray-500 dark:text-gray-400" />
                          Projects
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {item.projects.map((project, idx) => (
                            <div
                              key={idx}
                              className="bg-white dark:bg-gray-900/80 rounded-lg p-3 border border-gray-200 dark:border-gray-800"
                            >
                              <div className="flex items-start gap-2">
                                <FaServer className="w-4 h-4 text-gray-600 dark:text-gray-400 mt-0.5 flex-shrink-0" />
                                <div>
                                  <h5 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                                    {project.name}
                                  </h5>
                                  <span className="text-xs text-gray-500 dark:text-gray-400 block">
                                    {project.tech}
                                  </span>
                                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                    {project.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skills/Tags */}
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8">
            <div className="bg-gray-50 dark:bg-gray-900/60 rounded-xl p-4 sm:p-6 text-center border border-gray-200 dark:border-gray-800">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">1.5</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Years Education</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900/60 rounded-xl p-4 sm:p-6 text-center border border-gray-200 dark:border-gray-800">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">2025</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Started Freelancing</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900/60 rounded-xl p-4 sm:p-6 text-center border border-gray-200 dark:border-gray-800">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">2</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Major Projects</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900/60 rounded-xl p-4 sm:p-6 text-center border border-gray-200 dark:border-gray-800">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Remote</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Work Mode</div>
            </div>
          </div>

          {/* Tech Stack Highlights */}
          <div className="mt-8 bg-white/50 dark:bg-gray-900/50 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800">
            <h3 className="text-center text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-800">
                <SiMongodb size={18} />
                MongoDB
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-800">
                <SiExpress size={18} />
                Express.js
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-800">
                <FaReact size={18} />
                React
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-800">
                <FaNodeJs size={18} />
                Node.js
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-800">
                <FaShieldAlt size={18} />
                Security
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-800">
                <FaGitAlt size={18} />
                Git
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
