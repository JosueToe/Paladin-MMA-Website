import React, { forwardRef } from 'react'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  fullWidth?: boolean
  options: { value: string; label: string }[]
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { label, error, fullWidth = true, className = '', options, ...props },
    ref
  ) => {
    return (
      <div className={fullWidth ? 'w-full' : ''}>
        {label && (
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {label}
            {props.required && <span className="text-secondary ml-1">*</span>}
          </label>
        )}
        <select
          ref={ref}
          className={`bg-gray-800 border ${
            error ? 'border-secondary' : 'border-gray-700'
          } text-light rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${className}`}
          {...props}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="mt-1 text-sm text-secondary">{error}</p>}
      </div>
    )
  }
)

Select.displayName = 'Select'

export default Select

