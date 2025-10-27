'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { X, ZoomIn } from 'lucide-react'

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: '/images/gallery/gallery-1.jpg',
      alt: 'MMA Training Session',
    },
    {
      src: '/images/gallery/gallery-2.jpg',
      alt: 'Boxing Practice',
    },
    {
      src: '/images/gallery/gallery-3.jpg',
      alt: 'MMA Competition',
    },
    {
      src: '/images/gallery/gallery-4.png',
      alt: 'Sparring Session',
    },
    {
      src: '/images/gallery/gallery-5.png',
      alt: 'Kickboxing Training',
    },
    {
      src: '/images/gallery/gallery-6.jpg',
      alt: 'Championship Fight',
    },
    {
      src: '/images/gallery/gallery-7.png',
      alt: 'Gym Facility',
    },
    {
      src: '/images/gallery/gallery-8.png',
      alt: 'Team Event',
    },
  ]

  return (
    <>
      <section id="gallery" className="section-padding bg-gray-900">
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
              <span className="text-gradient">GALLERY</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Take a look at our world-class facility, training sessions, and
              championship moments.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="wait">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setSelectedImage(image.src)}
                  layout
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="text-white" size={40} />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-white font-bebas">{image.alt}</div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X size={40} />
            </button>
            <motion.img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Gallery

