import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  title: string
  description?: string
  image?: string
  imageAlt?: string
  badge?: string
  children?: React.ReactNode
  className?: string
  onClick?: () => void
  hover?: boolean
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  imageAlt,
  badge,
  children,
  className = '',
  onClick,
  hover = true,
}) => {
  return (
    <motion.div
      className={`bg-gray-800 rounded-lg overflow-hidden flex flex-col h-full ${
        hover ? 'card-hover cursor-pointer' : ''
      } ${className}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {image && (
        <div className="relative h-56 w-full overflow-hidden flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            loading="lazy"
          />
          {badge && (
            <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-bebas">
              {badge}
            </div>
          )}
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-bebas mb-2 text-light tracking-wider">
          {title}
        </h3>
        {description && (
          <p className="text-gray-400 mb-4 leading-relaxed text-sm line-clamp-3">{description}</p>
        )}
        <div className="mt-auto">
          {children}
        </div>
      </div>
    </motion.div>
  )
}

export default Card

