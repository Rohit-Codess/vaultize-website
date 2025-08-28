import { useState, useEffect } from 'react'
import { Shield, MapPin, Zap, Lock, ArrowRight, CheckCircle } from 'lucide-react'

const WhyChooseVaultize = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('why-choose-vaultize')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const features = [
    {
      title: 'Control',
      description: 'DRM protection - give your people rights rules and policy sharing, distribution & revoke anytime using a central dashboard for all your files.',
      shortDescription: 'Central dashboard for file rights and policy control.',
      icon: Shield,
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      stats: '99.9% Uptime',
      benefits: ['Central dashboard control', 'Real-time policy updates', 'Granular permissions']
    },
    {
      title: 'Track',
      description: 'Track files and sharing by location, devices, users & more. Complete audit trails of shared, viewed, modified, downloaded content.',
      shortDescription: 'Complete audit trails and real-time file monitoring.',
      icon: MapPin,
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100',
      stats: '100% Visibility',
      benefits: ['Complete audit trails', 'Real-time monitoring', 'Advanced analytics']
    },
    {
      title: 'Enable',
      description: 'No need to learn security for freedom and productivity. Easily share-control and share files from anywhere, any device, in any collaborative team.',
      shortDescription: 'Seamless collaboration across any device or platform.',
      icon: Zap,
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100',
      stats: '50% Faster',
      benefits: ['Zero learning curve', 'Cross-platform support', 'Seamless collaboration']
    },
    {
      title: 'Protect',
      description: 'Protect data with a DRM encryption when it\'s shared and stored in the cloud and on-premises across multiple organizational locations.',
      shortDescription: 'Military-grade encryption for cloud and on-premise data.',
      icon: Lock,
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100',
      stats: '256-bit AES',
      benefits: ['Military-grade encryption', 'Multi-location protection', 'Cloud & on-premise']
    }
  ]

  return (
    <section id="why-choose-vaultize" className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-orange-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 sm:mb-16 lg:mb-24 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-blue-200/50">
            <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
            Why Choose Vaultize
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              <span>WHY CHOOSE VAULTIZE?</span>
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
            <span className="hidden sm:inline">The leading platform is designed to protect enterprise data everywhere. It puts you in control of your data with 
            <span className="font-semibold text-blue-700"> DRM protection</span> and comprehensive audit trails that uncover data movements and enable 
            <span className="font-semibold text-purple-700"> real-time security controls</span> across your organization.</span>
            <span className="sm:hidden">Enterprise data protection with DRM and real-time security controls.</span>
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8 sm:mt-12">
            {[
              { label: 'Clients', value: '500+', fullLabel: 'Enterprise Clients' },
              { label: 'Protected', value: '50M+', fullLabel: 'Files Protected' },
              { label: 'Countries', value: '25+', fullLabel: 'Countries' },
              { label: 'Rating', value: 'A+', fullLabel: 'Security Rating' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-500">
                  <span className="sm:hidden">{stat.label}</span>
                  <span className="hidden sm:inline">{stat.fullLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-gray-200 cursor-pointer overflow-hidden ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                animation: isVisible ? `fadeInUp 0.8s ease-out ${index * 0.15}s both` : ''
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${feature.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 lg:mb-8 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-xl`}>
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                </div>

                {/* Stats Badge */}
                <div className="absolute top-4 sm:top-8 right-4 sm:right-8 bg-white/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 text-xs font-medium text-gray-700 shadow-sm border border-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {feature.stats}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 lg:mb-6 group-hover:text-blue-700 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 lg:mb-8 group-hover:text-gray-700 transition-colors duration-300 text-sm sm:text-base">
                  <span className="sm:hidden">{feature.shortDescription}</span>
                  <span className="hidden sm:inline">{feature.description}</span>
                </p>

                {/* Benefits - Show on Hover */}
                <div className={`space-y-2 mb-4 sm:mb-6 transition-all duration-500 hidden sm:block ${
                  hoveredCard === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <button className={`flex items-center text-blue-600 font-medium transition-all duration-300 group-hover:text-blue-700 text-sm sm:text-base ${
                  hoveredCard === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                } hidden sm:flex`}>
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

              {/* Hover Effect Shimmer */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 sm:mt-16 lg:mt-24 transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-100 max-w-3xl lg:max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Ready to secure your organization?
            </h3>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
              <span className="hidden sm:inline">Join thousands of companies that trust Vaultize to protect their most valuable data assets.</span>
              <span className="sm:hidden">Join thousands of companies using Vaultize.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
                Start Free Trial
              </button>
              <button className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-50 text-sm sm:text-base">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseVaultize