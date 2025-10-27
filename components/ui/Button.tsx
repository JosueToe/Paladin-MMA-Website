import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const baseStyles =
    'font-bebas tracking-wider transition-all duration-300 inline-flex items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase'

  const variants = {
    primary:
      'bg-secondary text-white hover:bg-red-700 focus:ring-secondary btn-glow shadow-lg hover:shadow-2xl',
    secondary:
      'bg-primary text-white hover:bg-blue-700 focus:ring-primary shadow-lg hover:shadow-2xl',
    ghost:
      'border-2 border-light text-light hover:bg-light hover:text-dark focus:ring-light',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={combinedClassName}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  )
}

export default Button

