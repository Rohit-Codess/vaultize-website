import { useState, useEffect } from 'react'
import { Shield, Users, Lock, FileCheck, Globe, Smartphone, CheckCircle, Monitor } from 'lucide-react'

const FeaturesOverview = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('features-overview')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % 8)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  const features = [
    {
      icon: Users,
      title: 'Easy Digital Rights Management (DRM) for all users',
      description: 'Intuitive interface that makes enterprise-grade security accessible to everyone'
    },
    {
      icon: FileCheck,
      title: 'Tracking & control of files and sharing',
      description: 'Complete visibility and control over how your files are accessed and shared'
    },
    {
      icon: Shield,
      title: 'Industry-leading Data Compliance',
      description: 'Meet regulatory requirements with built-in compliance frameworks'
    },
    {
      icon: Lock,
      title: 'Protection against Data Compartment',
      description: 'Prevent unauthorized access and data breaches with advanced protection'
    },
    {
      icon: Globe,
      title: 'GDPR and CCPA compliant',
      description: 'Full compliance with international data protection regulations'
    },
    {
      icon: Lock,
      title: '256-bit AES encryption at source',
      description: 'Military-grade encryption protects your data from the moment it\'s created'
    },
    {
      icon: Monitor,
      title: 'Enterprise file sync and share for modern workflows',
      description: 'Seamless collaboration without compromising security'
    },
    {
      icon: Smartphone,
      title: 'Mobile content management for secure mobility',
      description: 'Access and manage your secure content from anywhere, on any device'
    }
  ]

  return (
    <section id="features-overview" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 lg:mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Comprehensive Security Platform
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ONE PLATFORM, TOTAL SECURITY.
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to protect, manage, and control your enterprise data in one powerful platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Features List */}
          <div className={`space-y-4 lg:space-y-6 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group flex items-start space-x-4 p-4 lg:p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                  activeFeature === index
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 shadow-lg'
                    : 'hover:bg-gray-50 border-2 border-transparent'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  activeFeature === index
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg transform scale-110'
                    : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                }`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold text-lg lg:text-xl mb-2 transition-colors duration-300 ${
                    activeFeature === index ? 'text-blue-900' : 'text-gray-900 group-hover:text-blue-700'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm lg:text-base transition-all duration-300 ${
                    activeFeature === index 
                      ? 'text-gray-700 opacity-100 max-h-20' 
                      : 'text-gray-600 opacity-0 lg:opacity-100 max-h-0 lg:max-h-20 overflow-hidden'
                  }`}>
                    {feature.description}
                  </p>
                </div>

                <div className={`flex-shrink-0 transition-all duration-300 ${
                  activeFeature === index ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}>
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Platform Preview */}
          <div className={`relative transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="relative">
              {/* Main Dashboard */}
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 lg:p-12 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">Vaultize Dashboard</h3>
                      <p className="text-blue-200 text-sm">Real-time Security Overview</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">Live</span>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-blue-300 text-sm font-medium mb-1">Files Protected</div>
                    <div className="text-white text-2xl font-bold">98.7%</div>
                    <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-11/12"></div>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-purple-300 text-sm font-medium mb-1">Active Users</div>
                    <div className="text-white text-2xl font-bold">1,247</div>
                    <div className="text-green-400 text-xs mt-1">↗ +12% this week</div>
                  </div>
                </div>

                {/* Feature Preview */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                    {(() => {
                      const IconComponent = features[activeFeature].icon
                      return <IconComponent className="w-6 h-6 text-blue-400" />
                    })()}
                    <span className="text-white font-medium text-sm">
                      {features[activeFeature].title}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Implementation</span>
                      <span className="text-green-400">Complete</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-1">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-1 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Mobile Device */}
              <div className="absolute -bottom-8 -right-8 w-28 h-52 bg-gray-800 rounded-2xl p-3 shadow-2xl transform rotate-12 hover:rotate-6 transition-all duration-500 hidden lg:block">
                <div className="bg-white rounded-xl h-full flex flex-col">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-xl p-3 flex-1 flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <div className="p-3 flex-1 flex flex-col justify-center">
                    <div className="w-full h-2 bg-blue-100 rounded mb-2"></div>
                    <div className="w-3/4 h-2 bg-gray-100 rounded mb-2"></div>
                    <div className="w-1/2 h-2 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Floating Security Badge */}
              <div className="absolute -top-4 -left-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-pulse hidden lg:block">
                <Lock className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesOverview