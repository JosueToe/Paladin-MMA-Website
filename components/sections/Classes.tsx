'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Card from '../ui/Card'
import Modal from '../ui/Modal'
import Button from '../ui/Button'

const Classes = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedClass, setSelectedClass] = useState<any>(null)

  const classes = [
    {
      title: 'MMA / Crosstraining',
      description: 'High-intensity morning training combining MMA techniques with functional fitness.',
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2070',
      level: 'All Levels',
      duration: '2 hours',
      schedule: 'Mon, Tue, Fri - 6:00 AM - 8:00 AM',
      details:
        'Start your day strong with our MMA/Crosstraining program. Combining striking, grappling, and high-intensity functional fitness exercises to build strength, endurance, and fight skills. Perfect for those looking to get in peak physical condition.',
    },
    {
      title: 'MMA Kids Program',
      description: 'Build confidence, discipline, and martial arts skills in young warriors.',
      image: 'https://images.unsplash.com/photo-1540324155974-7523202daa3f?q=80&w=1974',
      level: 'Ages 6-14',
      duration: '1 hour',
      schedule: 'Mon, Tue, Fri - 6:00 PM - 7:00 PM',
      details:
        'Age-appropriate MMA training focused on discipline, respect, anti-bullying, and physical fitness. Our certified instructors create a safe, fun environment where kids learn striking, grappling basics, and build confidence that extends beyond the gym.',
    },
    {
      title: 'MMA Adults',
      description: 'Complete mixed martial arts training for all adult skill levels.',
      image: 'https://images.unsplash.com/photo-1517438322307-e67111335449?q=80&w=2071',
      level: 'All Levels',
      duration: '1.5 hours',
      schedule: 'Mon - Fri - 7:00 PM - 8:30 PM',
      details:
        'Comprehensive MMA training combining striking (boxing, kickboxing, Muay Thai), grappling (BJJ, wrestling), and cage techniques. Whether you\'re a complete beginner or experienced fighter, our classes cater to all skill levels with personalized attention from expert coaches.',
    },
    {
      title: 'Personal Training',
      description: 'One-on-one customized training sessions with expert coaches.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070',
      level: 'All Levels',
      duration: 'Flexible',
      schedule: 'Open Hours - Book Your Session',
      details:
        'Get personalized attention with private training sessions tailored to your specific goals. Whether you want to compete, lose weight, or master specific techniques, our coaches create custom programs designed for your success. Flexible scheduling available.',
    },
    {
      title: 'Paladin Young Warriors School Program',
      description: 'Structured martial arts program for schools, promoting discipline, coordination, and social skills.',
      image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2070',
      level: 'Ages 8-15',
      duration: '1 hour',
      schedule: 'Before 6:00 PM - Flexible Schedule',
      details:
        'A school-based martial arts program running before 6:00 PM with one-hour classes twice per week. Designed to support holistic student development through structured MMA training, promoting personal discipline, emotional control, self-esteem, motor coordination, and social skills. Uses step-by-step instruction, coordination drills, respect and etiquette activities, and cooperative group work with a progressive achievement system. Physical and emotional safety is prioritized with no aggressive contact in initial phases. Schedule set by agreement with the school.',
    },
  ]

  return (
    <>
      <section id="classes" className="section-padding bg-dark">
        <div className="container-custom">
          <motion.div
            ref={ref}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bebas tracking-wider mb-4">
              <span className="text-light">OUR </span>
              <span className="text-gradient">PROGRAMS</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose from our diverse range of martial arts programs designed for
              every skill level and goal.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  onClick={() => setSelectedClass(classItem)}
                >
                  <div className="mt-4 space-y-2">
                    <div className="text-gray-500 text-sm">
                      <strong>Duration:</strong> {classItem.duration}
                    </div>
                    <div className="text-primary text-sm font-bebas">
                      {classItem.schedule}
                    </div>
                    <Button variant="secondary" size="sm" className="w-full mt-2">
                      Learn More
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Details Modal */}
      <Modal
        isOpen={!!selectedClass}
        onClose={() => setSelectedClass(null)}
        title={selectedClass?.title}
        size="lg"
      >
        {selectedClass && (
          <div>
            <div className="mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedClass.image}
                alt={selectedClass.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-gray-400 text-sm mb-1">Skill Level</div>
                <div className="font-bebas text-xl text-primary">
                  {selectedClass.level}
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-gray-400 text-sm mb-1">Duration</div>
                <div className="font-bebas text-xl text-secondary">
                  {selectedClass.duration}
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg mb-6">
              <div className="text-gray-400 text-sm mb-1">Schedule</div>
              <div className="font-bebas text-lg text-light">
                {selectedClass.schedule}
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              {selectedClass.details}
            </p>
            <div className="flex gap-4">
              <Button variant="primary" size="lg" href="#schedule">
                View Schedule
              </Button>
              <Button variant="ghost" size="lg" href="#contact">
                Book Free Trial
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}

export default Classes

