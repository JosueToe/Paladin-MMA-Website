'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from 'lucide-react'
import { Music } from 'lucide-react' // Using Music icon for TikTok
import Image from 'next/image'

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Programs & Schedule', href: '#programs' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Store', href: '/store' },
  ]

  const socialLinks = [
    { icon: <Instagram size={24} />, href: 'https://www.instagram.com/pld_mma', label: 'Instagram' },
    { icon: <Music size={24} />, href: 'http://www.tiktok.com/@sportmmma', label: 'TikTok' },
    { icon: <Facebook size={24} />, href: 'https://www.facebook.com/share/1VJnzTy7Sq/?mibextid=wwXIfr', label: 'Facebook' },
    { icon: <Youtube size={24} />, href: 'https://www.youtube.com/@Pldshoto', label: 'YouTube' },
  ]

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/images/logo/logo.png"
                alt="Paladin MMA Logo"
                width={60}
                height={60}
                className="h-14 w-auto"
              />
              <div className="text-3xl font-bebas tracking-wider">
                <span className="text-secondary">PALADIN</span>
                <span className="text-primary"> MMA</span>
              </div>
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premier MMA training facility in Miami/Hialeah. Forge champions,
              build warriors, create legends.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-primary transition-colors bg-gray-800 p-2 rounded"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bebas tracking-wider text-light mb-4">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bebas tracking-wider text-light mb-4">
              CONTACT INFO
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>2091 W 76th St, Hialeah, FL 33016</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+17862374918"
                  className="hover:text-primary transition-colors"
                >
                  (786) 237-4918
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:contact@paladinmma.com"
                  className="hover:text-primary transition-colors"
                >
                  contact@paladinmma.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Paladin MMA Academy. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-secondary transition-colors z-40"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  )
}

export default Footer

