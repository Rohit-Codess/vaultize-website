import React from 'react'
import {type LucideIcon } from 'lucide-react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  gradient?: boolean
  icon?: LucideIcon
  title?: string
  description?: string
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  gradient = false,
  icon: Icon,
  title,
  description
}) => {
  const baseClasses = `
    rounded-2xl border transition-all duration-300
    ${hover ? 'hover:scale-105 hover:shadow-xl transform cursor-pointer' : ''}
    ${gradient 
      ? 'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-white/20' 
      : 'bg-white border-gray-200 shadow-lg hover:shadow-xl'
    }
  `

  return (
    <div className={`${baseClasses} ${className}`}>
      {(Icon || title || description) && (
        <div className="p-6 pb-4">
          {Icon && (
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <Icon className="w-6 h-6 text-white" />
            </div>
          )}
          {title && (
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          )}
          {description && (
            <p className="text-gray-600">{description}</p>
          )}
        </div>
      )}
      <div className={title || description ? 'px-6 pb-6' : 'p-6'}>
        {children}
      </div>
    </div>
  )
}

export default Card