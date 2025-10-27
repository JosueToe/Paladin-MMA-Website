'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Users, TrendingUp, Shield } from 'lucide-react'
import Button from '../ui/Button'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'World-Class Coaches',
      description: 'Train with championship-level instructors',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community Focused',
      description: 'Join a supportive family of warriors',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Proven Results',
      description: 'Track your progress and achieve your goals',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safe Environment',
      description: 'State-of-the-art facility with proper safety protocols',
    },
  ]

  return (
    <section id="about" className="section-padding bg-gray-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-30"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bebas tracking-wider mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-light">FEEL THE POWER,</span>
              <br />
              <span className="text-gradient">EMBRACE THE CHALLENGE</span>
            </motion.h2>

            <motion.p
              className="text-gray-300 text-lg mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {"At Paladin MMA Academy, we don't just teach martial arts – we forge"}
              champions. Our world-class facility in Miami/Hialeah combines
              traditional martial arts discipline with cutting-edge training
              techniques. We offer specialized programs for all ages and fitness levels.
            </motion.p>

            <motion.p
              className="text-gray-300 text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              From early morning MMA/Crosstraining sessions to our comprehensive adult 
              and kids programs, we provide a complete training experience. Our after-school 
              program keeps kids safe and active, while our personal training offers 
              one-on-one attention for those seeking individualized coaching.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button variant="primary" size="lg" href="#contact">
                START YOUR JOURNEY
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-primary transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bebas tracking-wider mb-2 text-light">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* VICTORY STARTS HERE Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bebas tracking-wider text-light mb-4">
            VICTORY STARTS HERE
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the intensity of boxing and accept the challenges that make
            you stronger. Boxing tests your limits and pushes you to embrace the
            grind. The power of precision punches, unparalleled speed and agility,
            organised and disciplined training regimes. Accept the sweat, the pain,
            and the relentless pursuit of improvement, and watch yourself grow.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About

