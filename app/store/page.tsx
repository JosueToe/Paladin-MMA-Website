'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export default function StorePage() {
  useEffect(() => {
    // Auto-redirect to TikTok Shop after 2 seconds
    const timer = setTimeout(() => {
      window.location.href = 'https://www.tiktok.com/shop/store/pld-mma/7495640060732869457'
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center p-4">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="mb-8"
        >
          <div className="text-6xl md:text-8xl font-bebas tracking-wider mb-4">
            <span className="text-secondary">PALADIN</span>
            <span className="text-primary"> MMA</span>
          </div>
          <div className="text-xl md:text-2xl text-gray-400 font-bebas tracking-wider">
            STORE
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-md mx-auto"
        >
          <p className="text-gray-300 text-lg mb-8">
            You're being redirected to our TikTok Shop...
          </p>

          {/* Loading Animation */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 border-4 border-primary border-t-secondary rounded-full animate-spin"></div>
          </div>

          <motion.a
            href="https://www.tiktok.com/shop/store/pld-mma/7495640060732869457"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bebas text-lg tracking-wider hover:bg-secondary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            CLICK HERE IF NOT REDIRECTED
            <ExternalLink size={20} />
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8"
          >
            <a
              href="/"
              className="text-gray-400 hover:text-primary transition-colors text-sm"
            >
              ← Back to Homepage
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

