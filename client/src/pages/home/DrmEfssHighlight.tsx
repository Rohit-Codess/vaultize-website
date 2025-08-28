import { useState, useEffect } from 'react'
import { Shield, Cloud, Lock, Users, BarChart3, Globe, CheckCircle, ArrowRight } from 'lucide-react'

const DrmEfssHighlight = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('drm-efss-highlight')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const platforms = [
    {
      title: 'Enterprise File Sync and Share (EFSS)',
      description: 'Secure file sharing and collaboration across all devices and platforms',
      icon: Users,
      features: ['Real-time collaboration', 'Version control', 'Cross-platform sync', 'Offline access']
    },
    {
      title: 'Digital Rights Management (DRM)',
      description: 'Advanced encryption and access control for sensitive documents',
      icon: Lock,
      features: ['Document protection', 'Access revocation', 'Usage tracking', 'Watermarking']
    },
    {
      title: 'Advanced Threat Protection',
      description: 'AI-powered security that detects and prevents data breaches',
      icon: Shield,
      features: ['Malware detection', 'Behavioral analysis', 'Real-time alerts', 'Automated response']
    },
    {
      title: 'Compliance & Governance',
      description: 'Built-in compliance frameworks for regulatory requirements',
      icon: BarChart3,
      features: ['GDPR compliance', 'Audit trails', 'Policy enforcement', 'Reporting dashboards']
    }
  ]

  const stats = [
    { label: 'Data Protection Rate', value: '99.9%', suffix: '' },
    { label: 'Threat Detection', value: '< 1', suffix: 'sec' },
    { label: 'Compliance Score', value: '100', suffix: '%' },
    { label: 'Uptime SLA', value: '99.99', suffix: '%' }
  ]

  return (
    <section id="drm-efss-highlight" className="py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-blue-400/10 rounded-lg rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-purple-400/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 lg:mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8">
            <Globe className="w-4 h-4 mr-2" />
            Comprehensive Platform
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            A COMPREHENSIVE{' '}
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              DRM AND EFSS
            </span>
            {' '}PLATFORM
          </h2>
          
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
            Vaultize is designed to provide enterprise data protection everywhere. It puts you in control of your data with 
            DRM protection and comprehensive infrastructure security to enable you with total control and protection of your sensitive data.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.value}<span className="text-orange-400">{stat.suffix}</span>
                </div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Platform Features */}
          <div className={`space-y-6 lg:space-y-8 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <h3 className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-12">
              Complete Data Protection Suite
            </h3>
            
            <div className="space-y-4">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer transition-all duration-300 ${
                    activeTab === index ? 'transform scale-105' : ''
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className={`flex items-start space-x-4 lg:space-x-6 p-6 lg:p-8 rounded-2xl transition-all duration-300 border-2 ${
                    activeTab === index
                      ? 'bg-white/15 backdrop-blur-sm border-orange-400/50 shadow-2xl'
                      : 'bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}>
                    <div className={`flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      activeTab === index
                        ? 'bg-gradient-to-br from-orange-500 to-pink-600 text-white shadow-lg transform scale-110'
                        : 'bg-white/20 text-white group-hover:bg-white/30'
                    }`}>
                      <platform.icon className="w-6 h-6 lg:w-8 lg:h-8" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-bold text-lg lg:text-xl mb-2 transition-colors duration-300 ${
                        activeTab === index ? 'text-orange-300' : 'text-white group-hover:text-blue-200'
                      }`}>
                        {platform.title}
                      </h4>
                      <p className={`text-blue-100 mb-4 transition-colors duration-300 ${
                        activeTab === index ? 'text-blue-100' : 'group-hover:text-blue-200'
                      }`}>
                        {platform.description}
                      </p>
                      
                      {/* Feature List - Show when active */}
                      <div className={`transition-all duration-500 overflow-hidden ${
                        activeTab === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="grid grid-cols-2 gap-2">
                          {platform.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-sm text-blue-200">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className={`flex-shrink-0 transition-all duration-300 ${
                      activeTab === index ? 'opacity-100 rotate-90' : 'opacity-50 group-hover:opacity-100'
                    }`}>
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Platform Visualization */}
          <div className={`relative transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="relative">
              {/* Main Platform Display */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl">Unified Platform</h3>
                      <p className="text-blue-200 text-sm">All-in-one security solution</p>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                {/* Active Platform Display */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-8">
                  <div className="flex items-center space-x-3 mb-4">
                    {(() => {
                      const IconComponent = platforms[activeTab].icon
                      return <IconComponent className="w-6 h-6 text-orange-400" />
                    })()}
                    <h4 className="text-white font-semibold">{platforms[activeTab].title}</h4>
                  </div>
                  <div className="space-y-2">
                    {platforms[activeTab].features.map((feature, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-blue-200 text-sm">{feature}</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Indicators */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-green-400 text-sm font-medium mb-1">Security Status</div>
                    <div className="text-white text-lg font-bold">Protected</div>
                    <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-orange-400 text-sm font-medium mb-1">Implementation</div>
                    <div className="text-white text-lg font-bold">Complete</div>
                    <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                      <div className="bg-gradient-to-r from-orange-400 to-pink-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center animate-pulse">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                <Globe className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-20 lg:mt-32 transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Experience the Power of Unified Security
            </h3>
            <p className="text-blue-100 text-lg mb-8">
              See how our comprehensive platform can transform your organization's data protection strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Request Demo
              </button>
              <button className="border-2 border-white/30 hover:border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DrmEfssHighlight