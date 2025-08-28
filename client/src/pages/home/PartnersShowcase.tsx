import { useEffect, useState } from 'react'

const PartnersShowcase = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('partners-showcase')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const partners = [
    { 
      name: 'HITACHI', 
      logo: 'HITACHI',
      description: 'Technology Infrastructure'
    },
    { 
      name: 'RICOH', 
      logo: 'RICOH',
      description: 'Digital Services'
    },
    { 
      name: 'SAVINGS BANK', 
      logo: 'SAVINGS\nBANK',
      description: 'Financial Services'
    },
    { 
      name: 'DDB', 
      logo: 'DDB',
      description: 'Advertising & Marketing'
    },
    { 
      name: 'TATA AIA', 
      logo: 'TATA\nAIA',
      description: 'Insurance'
    },
    { 
      name: 'RAYMOND', 
      logo: 'RAYMOND',
      description: 'Textiles & Apparel'
    }
  ]

  return (
    <section id="partners-showcase" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Trusted Worldwide
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Organizations worldwide trust Vaultize to protect their most sensitive data and files. 
            Join over 500+ companies securing their digital assets.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className={`group relative bg-white rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 hover:border-blue-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : ''
              }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-gray-800 font-bold text-lg lg:text-xl mb-3 whitespace-pre-line leading-tight">
                  {partner.logo}
                </div>
                <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {partner.description}
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{
                clipPath: 'polygon(100% 0%, 0% 0%, 100% 100%)'
              }}></div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">SOC 2 Certified</div>
                <div className="text-sm text-gray-600">Enterprise Security</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">GDPR Compliant</div>
                <div className="text-sm text-gray-600">Data Protection</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">I</span>
                </div>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">ISO 27001</div>
                <div className="text-sm text-gray-600">Security Standard</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersShowcase