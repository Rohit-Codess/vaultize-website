import type { ReactNode } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

interface LazySectionProps {
  children: ReactNode
  fallback?: ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
}

const LazySectionLoader = () => (
  <div className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="animate-pulse">
        {/* Title skeleton */}
        <div className="h-6 sm:h-8 bg-gray-300 rounded w-1/3 mx-auto mb-4 sm:mb-6"></div>
        
        {/* Subtitle skeleton */}
        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-6 sm:mb-8"></div>
        
        {/* Content skeleton */}
        <div className="space-y-3 sm:space-y-4 mb-8">
          <div className="h-3 sm:h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
          <div className="h-3 sm:h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
          <div className="h-3 sm:h-4 bg-gray-300 rounded w-2/3 mx-auto"></div>
        </div>
        
        {/* Cards skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-24 sm:h-32 bg-gray-300 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

const LazySection = ({ 
  children, 
  fallback = <LazySectionLoader />, 
  className = '',
  threshold = 0.1,
  rootMargin = '100px'
}: LazySectionProps) => {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true
  })

  return (
    <div ref={elementRef} className={className}>
      {hasIntersected ? children : fallback}
    </div>
  )
}

export default LazySection