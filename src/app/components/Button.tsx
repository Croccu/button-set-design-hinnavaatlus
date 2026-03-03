import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isActive?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', isActive = false, disabled = false, children, className = '', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1a202c]';
    
    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-5 py-2.5 text-base',
      lg: 'px-6 py-3 text-lg',
    };
    
    const variantStyles = {
      primary: disabled
        ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
        : isActive
        ? 'bg-[#1d4ed8] text-white shadow-lg scale-95'
        : 'bg-[#2563eb] text-white hover:bg-[#1e40af] active:bg-[#1d4ed8] active:scale-95 shadow-md hover:shadow-lg focus:ring-blue-500',
      secondary: disabled
        ? 'border-2 border-gray-700 text-gray-600 cursor-not-allowed bg-transparent'
        : isActive
        ? 'border-2 border-[#1e40af] text-[#60a5fa] bg-[#1e3a5f] scale-95'
        : 'border-2 border-[#2563eb] text-[#60a5fa] bg-transparent hover:bg-[#1e3a5f] hover:border-[#1e40af] active:bg-[#1e3a5f] active:scale-95 focus:ring-blue-500',
      ghost: disabled
        ? 'text-gray-600 cursor-not-allowed bg-transparent'
        : isActive
        ? 'text-[#60a5fa] bg-[#1e3a5f] scale-95'
        : 'text-gray-300 bg-transparent hover:bg-[#2d3748] hover:text-white active:bg-[#1e3a5f] active:scale-95 focus:ring-gray-500',
    };
    
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
