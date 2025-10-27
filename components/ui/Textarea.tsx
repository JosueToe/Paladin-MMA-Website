import React, { forwardRef } from 'react'

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  fullWidth?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, fullWidth = true, className = '', ...props }, ref) => {
    return (
      <div className={fullWidth ? 'w-full' : ''}>
        {label && (
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {label}
            {props.required && <span className="text-secondary ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          className={`bg-gray-800 border ${
            error ? 'border-secondary' : 'border-gray-700'
          } text-light rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none ${className}`}
          rows={4}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-secondary">{error}</p>}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export default Textarea

