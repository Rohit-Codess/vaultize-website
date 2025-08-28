import { useState, useEffect } from 'react'
import { Building2, Cloud, Package, Server, CheckCircle, ArrowRight, Zap, Shield } from 'lucide-react'

const FlexibleDeployment = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeDeployment, setActiveDeployment] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('flexible-deployment')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const deploymentOptions = [
    {
      title: 'On-premise / Private Cloud',
      icon: Building2,
      description: 'Complete control and customization for your organization',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      features: [
        'Deploy at your premises - fully in private cloud',
        'Complete control and customization',
        'Meet strict regulatory requirements',
        'Dedicated infrastructure and resources'
      ],
      benefits: [
        'Maximum security control',
        'Custom compliance configurations',
        'Dedicated support team',
        'Full data sovereignty'
      ],
      pricing: 'Enterprise',
      setupTime: '2-4 weeks',
      maintenance: 'Customer managed'
    },
    {
      title: 'Vaultize as a Service',
      icon: Cloud,
      description: 'Scalable SaaS solution with automatic updates',
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100',
      features: [
        'Pay-as-you-scale SaaS model',
        'Automatic updates and maintenance',
        'Global scalability and performance',
        'Quick deployment and instant setup'
      ],
      benefits: [
        'No infrastructure costs',
        'Automatic scaling',
        '99.99% uptime SLA',
        'Built-in disaster recovery'
      ],
      pricing: 'Subscription',
      setupTime: '< 1 day',
      maintenance: 'Fully managed'
    },
    {
      title: 'Cloud-in-a-box Appliance',
      icon: Package,
      description: 'Pre-configured hardware with hybrid capabilities',
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100',
      features: [
        'Deploy at your premises with plug-and-play setup',
        'Pre-configured hardware solution',
        'Hybrid cloud connectivity and capabilities',
        'Enterprise-grade security out of the box'
      ],
      benefits: [
        'Rapid deployment',
        'Hybrid flexibility',
        'Pre-optimized performance',
        'Simplified management'
      ],
      pricing: 'One-time + Support',
      setupTime: '1-2 weeks',
      maintenance: 'Hybrid managed'
    }
  ]

  const comparisons = [
    { feature: 'Setup Time', onPremise: '2-4 weeks', saas: '< 1 day', appliance: '1-2 weeks' },
    { feature: 'Maintenance', onPremise: 'Customer', saas: 'Vaultize', appliance: 'Shared' },
    { feature: 'Customization', onPremise: 'High', saas: 'Standard', appliance: 'Medium' },
    { feature: 'Scalability', onPremise: 'Manual', saas: 'Automatic', appliance: 'Configurable' },
    { feature: 'Security Control', onPremise: 'Maximum', saas: 'High', appliance: 'High' },
    { feature: 'Cost Model', onPremise: 'CapEx', saas: 'OpEx', appliance: 'Hybrid' }
  ]

  return (
    <section id="flexible-deployment" className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 sm:mb-16 lg:mb-24 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 border border-blue-200/50">
            <Server className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
            Deployment Options
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              <span>FLEXIBLE DEPLOYMENT</span>
            </span>
            <br />
            <span className="text-gray-700 text-xl sm:text-2xl lg:text-6xl">TO SUIT ANY BUSINESS</span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            <span className="hidden sm:inline">Choose from a comprehensive range of cloud and on-premise solutions. Whether you're using 
            <span className="font-semibold text-blue-700"> public cloud</span>, 
            <span className="font-semibold text-green-700"> private cloud</span>, 
            <span className="font-semibold text-purple-700"> hybrid</span> or 
            <span className="font-semibold text-orange-700"> on-premise</span> systems, 
            Vaultize adapts to fit your infrastructure and business requirements.</span>
            <span className="sm:hidden">Choose from <span className="font-semibold text-blue-700">cloud</span> or <span className="font-semibold text-orange-700">on-premise</span> solutions that fit your business.</span>
          </p>
        </div>

        {/* Deployment Options Cards */}
        <div className="space-y-6 sm:space-y-8 lg:grid lg:grid-cols-3 lg:gap-12 lg:space-y-0 mb-16 sm:mb-20">
          {deploymentOptions.map((option, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 cursor-pointer overflow-hidden ${
                activeDeployment === index 
                  ? 'border-blue-500 shadow-2xl scale-105' 
                  : 'border-gray-100 hover:border-blue-200'
              } ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                animation: isVisible ? `fadeInUp 0.8s ease-out ${index * 0.15}s both` : ''
              }}
              onClick={() => setActiveDeployment(index)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${option.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                activeDeployment === index ? 'opacity-100' : ''
              }`}></div>
              
              {/* Animated Border */}
              <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${
                activeDeployment === index 
                  ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20 opacity-100' 
                  : 'opacity-0 group-hover:opacity-100'
              }`}></div>

              <div className="relative z-10">
                {/* Icon and Badge */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${option.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <option.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  
                  {activeDeployment === index && (
                    <div className="bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium animate-pulse">
                      Selected
                    </div>
                  )}
                </div>

                {/* Title and Description */}
                <h3 className={`text-lg sm:text-xl lg:text-3xl font-bold mb-3 sm:mb-4 transition-colors duration-300 ${
                  activeDeployment === index ? 'text-blue-700' : 'text-gray-900 group-hover:text-blue-700'
                }`}>
                  {option.title}
                </h3>
                
                <p className={`text-gray-600 mb-4 sm:mb-6 lg:mb-8 leading-relaxed transition-colors duration-300 text-sm sm:text-base ${
                  activeDeployment === index ? 'text-gray-700' : 'group-hover:text-gray-700'
                }`}>
                  {option.description}
                </p>

                {/* Key Specs */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
                  <div className="text-center">
                    <div className="text-xs sm:text-sm text-gray-500 mb-1">Setup</div>
                    <div className="font-semibold text-gray-900 text-xs sm:text-sm">{option.setupTime}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs sm:text-sm text-gray-500 mb-1">Pricing</div>
                    <div className="font-semibold text-gray-900 text-xs sm:text-sm">{option.pricing}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs sm:text-sm text-gray-500 mb-1">Maintenance</div>
                    <div className="font-semibold text-gray-900 text-xs">{option.maintenance}</div>
                  </div>
                </div>

                {/* Features - Show only 2 on mobile */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 lg:mb-8">
                  {option.features.slice(0, 2).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2 sm:space-x-3">
                      <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                  {/* Show all features on larger screens */}
                  <div className="hidden sm:block space-y-3">
                    {option.features.slice(2).map((feature, featureIndex) => (
                      <div key={featureIndex + 2} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits - Show when active - Hidden on mobile */}
                <div className={`transition-all duration-500 overflow-hidden hidden sm:block ${
                  activeDeployment === index ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0'
                }`}>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {option.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <Zap className="w-3 h-3 text-orange-500" />
                        <span className="text-xs text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button className={`flex items-center justify-center w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                  activeDeployment === index
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                }`}>
                  {activeDeployment === index ? 'Get Started' : 'Learn More'}
                  <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className={`transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-gray-100">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
              Deployment Comparison
            </h3>
            
            {/* Mobile Card Layout */}
            <div className="block sm:hidden space-y-4">
              {comparisons.map((row, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">{row.feature}</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-blue-600 font-medium">On-Premise:</span>
                      <span className="text-sm text-gray-700">{row.onPremise}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-green-600 font-medium">SaaS:</span>
                      <span className="text-sm text-gray-700">{row.saas}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-purple-600 font-medium">Appliance:</span>
                      <span className="text-sm text-gray-700">{row.appliance}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Desktop Table Layout */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 sm:py-6 px-2 sm:px-4 text-gray-600 font-semibold text-sm sm:text-base">Feature</th>
                    <th className="text-center py-4 sm:py-6 px-2 sm:px-4 text-blue-600 font-semibold text-sm sm:text-base">On-Premise</th>
                    <th className="text-center py-4 sm:py-6 px-2 sm:px-4 text-green-600 font-semibold text-sm sm:text-base">SaaS</th>
                    <th className="text-center py-4 sm:py-6 px-2 sm:px-4 text-purple-600 font-semibold text-sm sm:text-base">Appliance</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                      <td className="py-3 sm:py-4 px-2 sm:px-4 font-semibold text-gray-900 text-sm sm:text-base">{row.feature}</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-center text-gray-700 text-sm sm:text-base">{row.onPremise}</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-center text-gray-700 text-sm sm:text-base">{row.saas}</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-center text-gray-700 text-sm sm:text-base">{row.appliance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 sm:mt-20 lg:mt-32 transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl max-w-3xl lg:max-w-4xl mx-auto">
            <div className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 bg-white/20 rounded-full mx-auto mb-6 sm:mb-8">
              <Shield className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Deploy Vaultize?
            </h3>
            <p className="text-blue-100 text-sm sm:text-base lg:text-xl mb-6 sm:mb-8 max-w-xl lg:max-w-2xl mx-auto">
              <span className="hidden sm:inline">Our deployment experts will help you choose the perfect solution and get you up and running quickly.</span>
              <span className="sm:hidden">Our experts will help you deploy the perfect solution.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                <span className="sm:hidden">Explore Options</span>
                <span className="hidden sm:inline">EXPLORE DEPLOYMENT OPTIONS</span>
              </button>
              <button className="border-2 border-white/50 text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300">
                Talk to Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FlexibleDeployment