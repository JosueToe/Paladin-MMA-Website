'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Quote, Star } from 'lucide-react'

import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      name: 'Carlos M.',
      role: 'MMA Adult Program',
      quote:
        "Best MMA gym in Miami! Coach Jorge and Coach Sotolongo are professional, knowledgeable, and genuinely care about your progress. Clean facility with great equipment. Highly recommend!",
      rating: 5,
    },
    {
      name: 'Jennifer L.',
      role: 'Personal Training Client',
      quote:
        'Coach Jorge is incredible! The personal training sessions are perfectly tailored to my goals. I\'ve seen amazing results in just 3 months. Worth every penny!',
      rating: 5,
    },
    {
      name: 'Robert T.',
      role: 'MMA/Crosstraining',
      quote:
        'The early morning crosstraining classes with Coach Sotolongo are exactly what I needed. Challenging workouts, great energy, and everyone is supportive. This place is the real deal!',
      rating: 5,
    },
    {
      name: 'Amanda S.',
      role: 'Kids Program Parent',
      quote:
        'My daughter loves the kids program! Coach Jorge is fantastic with children. She\'s learned discipline, respect, and self-defense. Couldn\'t ask for more!',
      rating: 5,
    },
    {
      name: 'Mike R.',
      role: 'Adult MMA Student',
      quote:
        'Started as a complete beginner and Coach Jorge and Coach Sotolongo made me feel welcome from day one. The instruction is top-notch and the community is like family.',
      rating: 5,
    },
    {
      name: 'Lisa P.',
      role: 'Fitness Member',
      quote:
        'Clean facility, professional staff, and great atmosphere. Coach Sotolongo\'s classes are challenging but fun. Best decision I made for my fitness journey!',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="section-padding bg-dark">
      <div className="container-custom">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bebas tracking-wider mb-4">
            <span className="text-light">WARRIOR </span>
            <span className="text-gradient">STORIES</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className="text-secondary fill-secondary"
                />
              ))}
            </div>
            <span className="text-light font-bebas text-2xl">4.9</span>
            <span className="text-gray-400">• 34 Google Reviews</span>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear from our community of warriors who have transformed their lives at
            Paladin MMA Academy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-primary transition-all duration-300 flex flex-col h-[320px]">
                  <Quote className="text-primary mb-4 flex-shrink-0" size={40} />

                  <p className="text-gray-300 mb-6 leading-relaxed italic flex-grow line-clamp-4">
                    {`"${testimonial.quote}"`}
                  </p>

                  <div className="flex-shrink-0">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="text-secondary fill-secondary"
                        />
                      ))}
                    </div>

                    <div className="border-t border-gray-700 pt-4">
                      <div className="font-bebas text-xl text-light tracking-wider">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

