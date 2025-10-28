'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Instagram, Youtube, Facebook, Music } from 'lucide-react'
import Button from '../ui/Button'

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2070)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bebas tracking-wider mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="block text-light glitch" data-text="PALADIN">
              PALADIN
            </span>
            <span className="block text-gradient mt-2">MMA ACADEMY</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 font-inter max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Premier MMA Training Academy in Miami/Hialeah
          </motion.p>

          <motion.div
            className="flex flex-col gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" href="#programs">
                VIEW PROGRAMS
              </Button>
              <Button variant="ghost" size="lg" href="#contact">
                START TRAINING
              </Button>
            </div>
            
            {/* Social Icons */}
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="https://www.instagram.com/pld_mma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Instagram"
              >
                <Instagram size={28} />
              </motion.a>
              <motion.a
                href="http://www.tiktok.com/@sportmmma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="TikTok"
              >
                <Music size={28} />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/share/1VJnzTy7Sq/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Facebook"
              >
                <Facebook size={28} />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@Pldshoto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="YouTube"
              >
                <Youtube size={28} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bebas text-secondary mb-2">
              20+
            </div>
            <div className="text-gray-400 text-sm md:text-base">
              Years Experience
            </div>
          </div>
          <div className="text-center border-x border-gray-700">
            <div className="text-4xl md:text-5xl font-bebas text-primary mb-2">
              162
            </div>
            <div className="text-gray-400 text-sm md:text-base">
              Championships
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bebas text-secondary mb-2">
              458
            </div>
            <div className="text-gray-400 text-sm md:text-base">
              Active Members
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={scrollToNext}
        aria-label="Scroll to next section"
      >
        <ChevronDown size={40} className="text-light opacity-70" />
      </motion.button>
    </section>
  )
}

export default Hero

