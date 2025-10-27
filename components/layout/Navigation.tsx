'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'
import Image from 'next/image'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'HOME' },
    { href: '#about', label: 'ABOUT' },
    { href: '#programs', label: 'PROGRAMS' },
    { href: '#gallery', label: 'GALLERY' },
    { href: '/store', label: 'STORE' },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setIsMobileMenuOpen(false)
      }
    }
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark shadow-2xl py-4'
            : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => scrollToSection(e, '#home')}
            >
              <Image
                src="/images/logo/logo.png"
                alt="Paladin MMA Logo"
                width={50}
                height={50}
                className="h-12 w-auto"
                priority
              />
              <div className="text-2xl md:text-3xl font-bebas tracking-wider flex items-center gap-2">
                <span className="text-secondary">PALADIN</span>
                <span className="text-primary">MMA</span>
              </div>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-light hover:text-primary transition-colors font-bebas text-lg tracking-wider relative group"
                  whileHover={{ scale: 1.1 }}
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
              <Button variant="primary" size="sm" href="#contact">
                START TRAINING
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-light p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-95"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute top-20 left-0 right-0 bg-gray-900 shadow-2xl border-t border-gray-800"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="container-custom py-8">
                <div className="flex flex-col items-center mb-8">
                  <Image
                    src="/images/logo/logo.png"
                    alt="Paladin MMA Logo"
                    width={80}
                    height={80}
                    className="mb-4"
                  />
                  <div className="text-3xl font-bebas tracking-wider flex items-center gap-2">
                    <span className="text-secondary">PALADIN</span>
                    <span className="text-primary">MMA</span>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      className="text-light hover:text-primary transition-colors font-bebas text-2xl tracking-wider"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={(e) => scrollToSection(e, link.href)}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                  <Button variant="primary" className="mt-4" href="#contact">
                    START TRAINING
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation

