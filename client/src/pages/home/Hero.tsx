import { useState, useEffect } from 'react'
import { ArrowRight, Play, Shield, Lock, Eye, Zap } from 'lucide-react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const floatingIcons = [
    { icon: Shield, position: 'top-20 left-10', delay: '0s' },
    { icon: Lock, position: 'top-32 right-16', delay: '0.5s' },
    { icon: Eye, position: 'bottom-32 left-20', delay: '1s' },
    { icon: Zap, position: 'bottom-20 right-12', delay: '1.5s' }
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden pt-24 sm:pt-32 lg:pt-40">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-gray-900/90"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'float 20s ease-in-out infinite'
          }}></div>
        </div>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} hidden lg:block cursor-pointer group`}
          style={{
            animation: `float 6s ease-in-out infinite`,
            animationDelay: item.delay
          }}
        >
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-110 hover:rotate-12 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/25">
            <item.icon className="w-8 h-8 text-blue-300 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
            
            {/* Ripple effect on hover */}
            <div className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
          </div>
        </div>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-[75vh] sm:min-h-[80vh] lg:min-h-[70vh]">
          {/* Content */}
          <div className={`text-center lg:text-left transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 mr-2 text-blue-300" />
              <span className="text-sm font-medium text-blue-200">Enterprise Data Protection</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="block sm:inline">Protect & control your files,{' '}</span>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                wherever they go
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl lg:max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              <span className="hidden sm:inline">Vaultize enables organizations to identify, control, and secure files beyond corporate networks with </span>
              <span className="sm:hidden">Advanced file protection with </span>
              digital rights management (DRM).
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-8 sm:mb-12">
              <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25 flex items-center w-full sm:w-auto justify-center">
                <span className="sm:hidden">Free Trial</span>
                <span className="hidden sm:inline">DOWNLOAD FREE TRIAL</span>
                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="group flex items-center text-white hover:text-blue-300 font-semibold text-base sm:text-lg transition-all duration-300 justify-center sm:justify-start hover:scale-105 active:scale-95">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:rotate-3">
                  <Play className="w-4 sm:w-5 h-4 sm:h-5 ml-0.5 group-hover:scale-110 transition-transform duration-200" />
                </div>
                <span className="sm:hidden">Demo</span>
                <span className="hidden sm:inline">Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-md sm:max-w-none mx-auto lg:mx-0">
              {[
                { value: '500+', label: 'Clients', fullLabel: 'Enterprise Clients', color: 'from-blue-500 to-cyan-500' },
                { value: '99.9%', label: 'Uptime', fullLabel: 'Uptime SLA', color: 'from-green-500 to-emerald-500' },
                { value: '256-bit', label: 'Security', fullLabel: 'AES Encryption', color: 'from-orange-500 to-red-500' },
                { value: '24/7', label: 'Support', fullLabel: 'Support', color: 'from-purple-500 to-pink-500' }
              ].map((stat, index) => (
                <div key={index} className="group relative text-center lg:text-left p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95">
                  {/* Gradient border on hover */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}></div>
                  
                  <div className="relative z-10">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-300 group-hover:text-white mb-1 transition-colors duration-300">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                      <span className="sm:hidden">{stat.label}</span>
                      <span className="hidden sm:inline">{stat.fullLabel}</span>
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className={`relative transform transition-all duration-1000 delay-300 hidden sm:block ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative group">
              {/* Main Device Mockup */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl hover:border-white/30 transition-all duration-500 group-hover:scale-105">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 mb-6 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                      <span className="font-semibold text-white">Vaultize Dashboard</span>
                    </div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse group-hover:bg-green-300 group-hover:scale-125 transition-all duration-300"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white/20 rounded-lg h-4 w-full group-hover:bg-white/30 transition-colors duration-300"></div>
                    <div className="bg-white/20 rounded-lg h-4 w-3/4 group-hover:bg-white/30 transition-colors duration-300" style={{ transitionDelay: '100ms' }}></div>
                    <div className="bg-white/20 rounded-lg h-4 w-1/2 group-hover:bg-white/30 transition-colors duration-300" style={{ transitionDelay: '200ms' }}></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-500/20 rounded-lg p-4 border border-green-400/30 hover:bg-green-500/30 hover:border-green-400/50 hover:scale-105 transition-all duration-300 cursor-pointer group/card">
                    <div className="text-green-300 text-sm font-medium group-hover/card:text-green-200 transition-colors duration-200">Files Protected</div>
                    <div className="text-white text-xl font-bold group-hover/card:scale-110 transition-transform duration-200">98.7%</div>
                  </div>
                  <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-400/30 hover:bg-blue-500/30 hover:border-blue-400/50 hover:scale-105 transition-all duration-300 cursor-pointer group/card">
                    <div className="text-blue-300 text-sm font-medium group-hover/card:text-blue-200 transition-colors duration-200">Active Users</div>
                    <div className="text-white text-xl font-bold group-hover/card:scale-110 transition-transform duration-200">1,247</div>
                  </div>
                </div>
              </div>

              {/* Floating Mobile Device */}
              <div className="absolute -bottom-6 -right-6 w-24 h-44 bg-gray-800 rounded-xl p-2 shadow-2xl transform rotate-12 hover:rotate-6 hover:scale-110 transition-all duration-500 cursor-pointer group-hover:shadow-3xl">
                <div className="bg-white rounded-lg h-full flex flex-col items-center justify-center hover:bg-gray-50 transition-colors duration-300">
                  <Shield className="w-8 h-8 text-blue-600 mb-2 hover:rotate-12 hover:scale-110 transition-transform duration-300" />
                  <div className="w-12 h-2 bg-blue-600 rounded hover:bg-blue-500 transition-colors duration-300"></div>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  )
}

export default Hero