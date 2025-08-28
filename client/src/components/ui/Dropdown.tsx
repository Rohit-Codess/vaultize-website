import React, { useState } from 'react'

interface DropdownItem {
  label: string
  href?: string
  onClick?: () => void
}

interface DropdownProps {
  trigger: React.ReactNode
  items: DropdownItem[]
  className?: string
  position?: 'left' | 'right' | 'center'
}

const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  items,
  className = '',
  position = 'left'
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const positionClasses = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 transform -translate-x-1/2'
  }

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="cursor-pointer">
        {trigger}
      </div>
      
      {isOpen && (
        <div className={`
          absolute top-full mt-2 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200/50 py-3 z-50
          transform opacity-0 translate-y-2 animate-in fade-in slide-in-from-top-2 duration-200
          ${positionClasses[position]}
        `}>
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href || '#'}
              onClick={item.onClick}
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 relative group"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute left-0 top-0 w-1 h-full bg-blue-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-top"></span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown