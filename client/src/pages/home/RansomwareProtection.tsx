import { useState, useEffect } from 'react'
import { Shield, AlertTriangle, CheckCircle, TrendingUp, Lock, Eye, Zap, Users } from 'lucide-react'

const RansomwareProtection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedComparison, setSelectedComparison] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('ransomware-protection')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const threats = [
    {
      icon: AlertTriangle,
      title: 'Data Encryption & File Corruption',
      description: 'Malicious encryption renders files inaccessible',
      impact: 'Critical'
    },
    {
      icon: TrendingUp,
      title: 'Business Operations Disruption',
      description: 'Complete shutdown of business processes',
      impact: 'Severe'
    },
    {
      icon: Users,
      title: 'Financial Losses & Reputation Damage',
      description: 'Revenue loss and long-term brand impact',
      impact: 'High'
    },
    {
      icon: Eye,
      title: 'Compliance Violations & Penalties',
      description: 'Regulatory fines and legal consequences',
      impact: 'High'
    }
  ]

  const protections = [
    {
      icon: Lock,
      title: 'Pre-emptive File Encryption',
      description: 'Files are encrypted before threats can reach them',
      effectiveness: '99.9%'
    },
    {
      icon: Shield,
      title: 'Real-time Threat Detection',
      description: 'AI-powered monitoring identifies threats instantly',
      effectiveness: '< 1sec'
    },
    {
      icon: Zap,
      title: 'Automated Backup & Recovery',
      description: 'Instant restoration from secure backups',
      effectiveness: '100%'
    },
    {
      icon: CheckCircle,
      title: 'Zero-trust Security Architecture',
      description: 'Every access request is verified and validated',
      effectiveness: 'Always'
    }
  ]

  const comparisonData = [
    {
      category: 'Detection Speed',
      traditional: '24-48 hours',
      vaultize: '< 1 second',
      improvement: '99.9% faster'
    },
    {
      category: 'Recovery Time',
      traditional: '2-4 weeks',
      vaultize: '< 1 hour',
      improvement: '99% faster'
    },
    {
      category: 'Data Loss',
      traditional: '30-70%',
      vaultize: '0%',
      improvement: '100% protection'
    },
    {
      category: 'Business Downtime',
      traditional: '7-21 days',
      vaultize: 'Near zero',
      improvement: '99.9% uptime'
    }
  ]

  const stats = [
    { value: '500M+', label: 'Attacks Blocked', icon: Shield },
    { value: '99.99%', label: 'Protection Rate', icon: CheckCircle },
    { value: '< 1sec', label: 'Response Time', icon: Zap },
    { value: '0', label: 'Data Breaches', icon: Lock }
  ]

  return (
    <section id="ransomware-protection" className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 border border-red-200">
            <AlertTriangle className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
            Ransomware Protection
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            <span className="block sm:inline">RANSOMWARE PROTECTION{' '}</span>
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              ISN'T ROCKET SCIENCE
            </span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-4xl lg:max-w-5xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4 sm:px-0">
            <span className="hidden sm:inline">An ounce of defense costs much less than the effort of an expensive cure. Modern threats require modern solutions. 
            Our platform features <span className="font-semibold text-blue-700">advanced defense techniques</span> that enable 
            comprehensive file protection, ensuring your data stays protected and available against any adversaries.</span>
            <span className="sm:hidden">Modern threats require modern solutions. Our platform provides <span className="font-semibold text-blue-700">advanced defense techniques</span> for comprehensive file protection.</span>
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl mx-auto mb-3 sm:mb-4">
                  <stat.icon className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-white" />
                </div>
                <div className="text-lg sm:text-xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-gray-600 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Threat vs Protection Comparison */}
        <div className="space-y-8 sm:space-y-12 lg:grid lg:grid-cols-2 lg:gap-16 lg:space-y-0 mb-16 sm:mb-20">
          {/* Ransomware Threats */}
          <div className={`transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="bg-gradient-to-br from-red-500 to-orange-600 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
              <div className="flex items-center mb-6 sm:mb-8">
                <AlertTriangle className="w-6 sm:w-8 h-6 sm:h-8 mr-3 sm:mr-4 text-red-200" />
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">Ransomware Threats</h3>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                {threats.slice(0, 2).map((threat, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/20">
                    <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <threat.icon className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-white text-sm sm:text-base leading-tight">{threat.title}</h4>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ml-2 flex-shrink-0 ${
                          threat.impact === 'Critical' ? 'bg-red-600 text-white' :
                          threat.impact === 'Severe' ? 'bg-orange-600 text-white' :
                          'bg-yellow-600 text-white'
                        }`}>
                          {threat.impact}
                        </span>
                      </div>
                      <p className="text-red-100 text-xs sm:text-sm leading-relaxed">{threat.description}</p>
                    </div>
                  </div>
                ))}
                {/* Show all threats on larger screens */}
                <div className="hidden sm:block space-y-6">
                  {threats.slice(2).map((threat, index) => (
                    <div key={index + 2} className="flex items-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                      <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <threat.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-white">{threat.title}</h4>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            threat.impact === 'Critical' ? 'bg-red-600 text-white' :
                            threat.impact === 'Severe' ? 'bg-orange-600 text-white' :
                            'bg-yellow-600 text-white'
                          }`}>
                            {threat.impact}
                          </span>
                        </div>
                        <p className="text-red-100 text-sm">{threat.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Vaultize Protection */}
          <div className={`transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="bg-gradient-to-br from-green-500 to-blue-600 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
              <div className="flex items-center mb-6 sm:mb-8">
                <Shield className="w-6 sm:w-8 h-6 sm:h-8 mr-3 sm:mr-4 text-green-200" />
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">Vaultize Protection</h3>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                {protections.slice(0, 2).map((protection, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/20">
                    <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <protection.icon className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-white text-sm sm:text-base leading-tight">{protection.title}</h4>
                        <span className="px-2 py-1 text-xs font-medium bg-green-600 text-white rounded-full ml-2 flex-shrink-0">
                          {protection.effectiveness}
                        </span>
                      </div>
                      <p className="text-green-100 text-xs sm:text-sm leading-relaxed">{protection.description}</p>
                    </div>
                  </div>
                ))}
                {/* Show all protections on larger screens */}
                <div className="hidden sm:block space-y-6">
                  {protections.slice(2).map((protection, index) => (
                    <div key={index + 2} className="flex items-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                      <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <protection.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-white">{protection.title}</h4>
                          <span className="px-2 py-1 text-xs font-medium bg-green-600 text-white rounded-full">
                            {protection.effectiveness}
                          </span>
                        </div>
                        <p className="text-green-100 text-sm">{protection.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className={`transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-gray-100">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
              <span className="block sm:inline">Traditional Security</span> <span className="block sm:inline">vs Vaultize</span>
            </h3>
            
            {/* Mobile Card Layout */}
            <div className="block sm:hidden space-y-4">
              {comparisonData.map((row, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">{row.category}</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Traditional:</span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">
                        {row.traditional}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Vaultize:</span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                        {row.vaultize}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                      <span className="text-sm font-medium text-blue-600">Improvement:</span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800 font-semibold">
                        {row.improvement}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Desktop Table Layout */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 sm:py-6 px-2 sm:px-4 text-gray-600 font-semibold text-sm sm:text-base">Metric</th>
                    <th className="text-center py-4 sm:py-6 px-2 sm:px-4 text-gray-600 font-semibold text-sm sm:text-base">Traditional Security</th>
                    <th className="text-center py-4 sm:py-6 px-2 sm:px-4 text-gray-600 font-semibold text-sm sm:text-base">Vaultize</th>
                    <th className="text-center py-4 sm:py-6 px-2 sm:px-4 text-gray-600 font-semibold text-sm sm:text-base">Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr 
                      key={index}
                      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 cursor-pointer ${
                        selectedComparison === index ? 'bg-blue-50' : ''
                      }`}
                      onClick={() => setSelectedComparison(index)}
                    >
                      <td className="py-4 sm:py-6 px-2 sm:px-4 font-semibold text-gray-900 text-sm sm:text-base">{row.category}</td>
                      <td className="py-4 sm:py-6 px-2 sm:px-4 text-center">
                        <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-red-100 text-red-800">
                          {row.traditional}
                        </span>
                      </td>
                      <td className="py-4 sm:py-6 px-2 sm:px-4 text-center">
                        <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-green-100 text-green-800">
                          {row.vaultize}
                        </span>
                      </td>
                      <td className="py-4 sm:py-6 px-2 sm:px-4 text-center">
                        <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-blue-100 text-blue-800 font-semibold">
                          {row.improvement}
                        </span>
                      </td>
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
              Don't Wait for an Attack
            </h3>
            <p className="text-blue-100 text-sm sm:text-base lg:text-xl mb-6 sm:mb-8 max-w-xl lg:max-w-2xl mx-auto">
              <span className="hidden sm:inline">Protect your organization now with enterprise-grade ransomware protection that works before, during, and after threats emerge.</span>
              <span className="sm:hidden">Get enterprise-grade ransomware protection now.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                <span className="sm:hidden">Get Protected</span>
                <span className="hidden sm:inline">GET PROTECTED NOW</span>
              </button>
              <button className="border-2 border-white/50 text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RansomwareProtection