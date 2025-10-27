'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Card from '../ui/Card'

const ProgramsSchedule = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const classes = [
    {
      title: 'MMA / Crosstraining',
      description: 'High-intensity morning training combining MMA techniques with functional fitness.',
      image: '/images/programs/crosstraining.jpg',
      level: 'All Levels',
      duration: '2 hours',
      schedule: 'Mon, Tue, Fri - 6:00 AM - 8:00 AM',
      instructor: 'Jorge Sotolongo',
      details:
        'Start your day strong with our MMA/Crosstraining program. Combining striking, grappling, and high-intensity functional fitness exercises to build strength, endurance, and fight skills. Perfect for those looking to get in peak physical condition.',
    },
    {
      title: 'MMA Kids Program',
      description: 'Build confidence, discipline, and martial arts skills in young warriors.',
      image: '/images/programs/mma-kids.png',
      level: 'Ages 6-14',
      duration: '1 hour',
      schedule: 'Mon, Tue, Fri - 6:00 PM - 7:00 PM',
      instructor: 'Jorge Sotolongo',
      details:
        'Age-appropriate MMA training focused on discipline, respect, anti-bullying, and physical fitness. Our certified instructors create a safe, fun environment where kids learn striking, grappling basics, and build confidence that extends beyond the gym.',
    },
    {
      title: 'MMA Adults',
      description: 'Complete mixed martial arts training for all adult skill levels.',
      image: '/images/programs/mma-adults.jpg',
      level: 'All Levels',
      duration: '1.5 hours',
      schedule: 'Mon - Fri - 7:00 PM - 8:30 PM',
      instructor: 'Jorge Sotolongo',
      details:
        'Comprehensive MMA training combining striking (boxing, kickboxing, Muay Thai), grappling (BJJ, wrestling), and cage techniques. Whether you\'re a complete beginner or experienced fighter, our classes cater to all skill levels with personalized attention from expert coaches.',
    },
    {
      title: 'Personal Training',
      description: 'One-on-one customized training sessions with expert coaches.',
      image: '/images/programs/personal-training.png',
      level: 'All Levels',
      duration: 'Flexible',
      schedule: 'Open Hours - Book Your Session',
      instructor: 'Jorge Sotolongo',
      details:
        'Get personalized attention with private training sessions tailored to your specific goals. Whether you want to compete, lose weight, or master specific techniques, our coaches create custom programs designed for your success. Flexible scheduling available.',
    },
    {
      title: 'After School Program',
      description: 'Safe, structured environment for kids after school with MMA training.',
      image: '/images/programs/after-school.png',
      level: 'Ages 6-14',
      duration: '3 hours',
      schedule: 'Mon - Fri - 3:00 PM - 6:00 PM',
      instructor: 'Jorge Sotolongo',
      details:
        'A safe, supervised after-school program combining homework time, character development, and martial arts training. Kids stay active, build friendships, and develop discipline while parents have peace of mind. Includes healthy snacks and structured activities.',
    },
  ]


  return (
    <>
      <section id="programs" className="section-padding bg-dark">
        <div className="container-custom">
          {/* Section Header */}
          <motion.div
            ref={ref}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bebas tracking-wider mb-4">
              <span className="text-light">PROGRAMS & </span>
              <span className="text-gradient">SCHEDULE</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose from our specialized programs and find the perfect time to train
            </p>
          </motion.div>

          {/* Programs Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6 mb-12 max-w-[1600px] mx-auto">
              {classes.map((classItem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    title={classItem.title}
                    description={classItem.description}
                    image={classItem.image}
                    imageAlt={classItem.title}
                    badge={classItem.level}
                  >
                    <div className="mt-4 space-y-3">
                      <div className="bg-gray-900 p-3 rounded-lg border border-gray-700">
                        <div className="text-gray-500 text-xs mb-1">INSTRUCTOR</div>
                        <div className="text-light font-semibold">{classItem.instructor}</div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-gray-900 p-2 rounded">
                          <div className="text-gray-500 text-xs mb-1">DURATION</div>
                          <div className="text-light text-sm font-semibold">{classItem.duration}</div>
                        </div>
                        <div className="bg-gray-900 p-2 rounded">
                          <div className="text-gray-500 text-xs mb-1">LEVEL</div>
                          <div className="text-light text-sm font-semibold">{classItem.level}</div>
                        </div>
                      </div>
                      
                      <div className="bg-primary/10 border border-primary/30 p-3 rounded-lg">
                        <div className="text-gray-400 text-xs mb-1">SCHEDULE</div>
                        <div className="text-primary font-bebas text-base tracking-wider">
                          {classItem.schedule}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </>
  )
}

export default ProgramsSchedule

