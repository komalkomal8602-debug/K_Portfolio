import React from 'react'
import { Shield, Code, Brain, Server, Database, Globe, Award, TrendingUp, Users, Cloud } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Cyber Security',
      icon: Shield,
      skills: [
        'Ethical Hacking',
        'Network Security',
        'Penetration Testing',
        'Security Auditing',
        'Zero-Trust Architecture',
        'Threat Detection'
      ]
    },
    {
      title: 'Web Development (MERN Stack)',
      icon: Code,
      skills: [
        'MongoDB',
        'Express.js',
        'React.js',
        'Node.js',
        'RESTful APIs',
        'GraphQL'
      ]
    },
    {
      title: 'AI Prompt Engineer',
      icon: Brain,
      skills: [
        'LLM Optimization',
        'Prompt Design',
        'AI Integration',
        'ChatGPT API',
        'Claude API',
        'Gemini API'
      ]
    }
  ]

  const additionalSkills = [
    { name: 'JavaScript/TypeScript', icon: Code },
    { name: 'Git & GitHub', icon: Users },
    { name: 'Docker', icon: Server },
    { name: 'AWS Cloud', icon: Cloud },
    { name: 'Responsive Design', icon: Globe },
    { name: 'Problem Solving', icon: TrendingUp },
  ]

  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Completed' },
    { value: '5+', label: 'AI Solutions' },
    { value: '99%', label: 'Code Quality' },
  ]

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100/30 via-transparent to-gray-100/30 dark:from-gray-900/20 dark:via-transparent dark:to-gray-900/20 -z-10"></div>
      
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="max-w-7xl mx-auto 2xl:max-w-[1400px]">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-medium mb-4 border border-gray-200 dark:border-gray-800">
              <Award size={14} />
              My Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Specialized in building secure, scalable applications with modern technologies and AI integration
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-black dark:bg-white">
                    <category.icon className="w-6 h-6 text-white dark:text-black" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-700 dark:bg-gray-300"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="bg-white/50 dark:bg-gray-900/50 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Other Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {additionalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-sm sm:text-base font-medium border border-gray-200 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                >
                  <skill.icon size={16} />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white dark:bg-gray-900 rounded-xl p-4 sm:p-6 text-center border border-gray-200 dark:border-gray-800">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
