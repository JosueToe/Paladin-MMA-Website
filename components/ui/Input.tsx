import React, { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  fullWidth?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth = true, className = '', ...props }, ref) => {
    return (
      <div className={fullWidth ? 'w-full' : ''}>
        {label && (
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {label}
            {props.required && <span className="text-secondary ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={`bg-gray-800 border ${
            error ? 'border-secondary' : 'border-gray-700'
          } text-light rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-secondary">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input

