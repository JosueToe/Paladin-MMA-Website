'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center p-4">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          <h1 className="text-9xl font-bebas tracking-wider mb-4">
            <span className="text-gradient">404</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bebas tracking-wider text-light mb-4">
            PAGE NOT FOUND
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            {"The page you're looking for doesn't exist. It might have been moved or deleted."}
          </p>
          <Link href="/">
            <Button variant="primary" size="lg">
              BACK TO HOME
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

