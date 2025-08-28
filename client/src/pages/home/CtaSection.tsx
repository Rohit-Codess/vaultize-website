import { useState, useEffect } from 'react'
import { Shield, Zap, CheckCircle, ArrowRight, Star, Users, Award, Globe } from 'lucide-react'

const CtaSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "Vaultize transformed our data security posture completely. We've seen 99.9% reduction in security incidents.",
      author: "Sarah Chen",
      role: "CISO, TechCorp Industries",
      company: "Fortune 500 Technology Company"
    },
    {
      quote: "The deployment was seamless and the ROI was evident within the first quarter. Outstanding platform.",
      author: "Michael Rodriguez",
      role: "IT Director, Global Finance",
      company: "Leading Financial Institution"
    },
    {
      quote: "Best investment we've made in cybersecurity. The peace of mind alone is worth it.",
      author: "Dr. Emily Watson",
      role: "Head of IT, MedCenter",
      company: "Healthcare Organization"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('cta-section')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isVisible, testimonials.length])

  const benefits = [
    {
      icon: Shield,
      title: 'Comprehensive cybersecurity and data governance platform',
      description: 'Industry-leading protection across all your data touchpoints'
    },
    {
      icon: Award,
      title: 'Industry-leading enterprise DRM and content management',
      description: 'Recognized by analysts as the top solution in the market'
    },
    {
      icon: Users,
      title: 'Successful track record across 40+ industry verticals',
      description: 'Proven expertise in healthcare, finance, government, and more'
    },
    {
      icon: Zap,
      title: 'Zero-day policy for vulnerability disclosure and updates',
      description: 'Immediate response to security threats and patches'
    },
    {
      icon: Globe,
      title: 'Dedicated support team and 24/7 monitoring',
      description: 'Expert assistance whenever and wherever you need it'
    },
    {
      icon: CheckCircle,
      title: 'Complete operational and strategic insights',
      description: 'Comprehensive analytics and reporting for decision making'
    }
  ]

  const stats = [
    { icon: Users, value: '500+', label: 'Enterprise Clients' },
    { icon: Shield, value: '99.99%', label: 'Uptime SLA' },
    { icon: Globe, value: '25+', label: 'Countries Served' },
    { icon: Award, value: '50M+', label: 'Files Protected' }
  ]

  return (
    <section id="cta-section" className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/10 rounded-lg rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-orange-500/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-500/5 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <Star className="w-3 sm:w-4 h-3 sm:h-4 mr-2 text-yellow-400" />
            Industry Leader
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight px-4 sm:px-0">
            <span className="block sm:inline">SECURE YOUR DATA{' '}</span>
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              WITHOUT SLOWING DOWN
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-2xl text-blue-100 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4 sm:px-0">
            <span className="hidden sm:inline">The most comprehensive cybersecurity and data governance platform in the market. 
            Join thousands of organizations who trust Vaultize to protect their most valuable assets.</span>
            <span className="sm:hidden">The most comprehensive cybersecurity platform. Join thousands of organizations protecting their data.</span>
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-gradient-to-br from-orange-500 to-pink-600 rounded-lg sm:rounded-xl mx-auto mb-3 sm:mb-4">
                  <stat.icon className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-white" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-blue-200 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12 lg:grid lg:grid-cols-2 lg:gap-20 lg:space-y-0 lg:items-center mb-16 sm:mb-20">
          {/* Benefits List - Show only 3 on mobile */}
          <div className={`space-y-4 sm:space-y-6 lg:space-y-8 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-12 text-center lg:text-left">
              Why Organizations Choose Vaultize
            </h3>
            
            {benefits.slice(0, 3).map((benefit, index) => (
              <div
                key={index}
                className={`flex items-start space-x-3 sm:space-x-4 lg:space-x-6 p-4 sm:p-6 lg:p-8 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-base sm:text-lg lg:text-xl text-white mb-2 leading-tight">{benefit.title}</h4>
                  <p className="text-blue-200 leading-relaxed text-sm sm:text-base">{benefit.description}</p>
                </div>
                <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-green-400 flex-shrink-0 hidden sm:block" />
              </div>
            ))}
            
            {/* Show remaining benefits on larger screens */}
            <div className="hidden lg:block space-y-8">
              {benefits.slice(3).map((benefit, index) => (
                <div
                  key={index + 3}
                  className={`flex items-start space-x-6 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index + 5) * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl text-white mb-2">{benefit.title}</h4>
                    <p className="text-blue-200 leading-relaxed">{benefit.description}</p>
                  </div>
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Carousel - Simplified for mobile */}
          <div className={`transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/20 shadow-2xl">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                  What Our Clients Say
                </h3>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 transform ${
                      currentTestimonial === index 
                        ? 'translate-x-0 opacity-100' 
                        : index > currentTestimonial 
                          ? 'translate-x-full opacity-0' 
                          : '-translate-x-full opacity-0'
                    }`}
                  >
                    <div className="text-center h-full flex flex-col justify-center px-2 sm:px-0">
                      <blockquote className="text-sm sm:text-base lg:text-xl text-blue-100 mb-4 sm:mb-6 leading-relaxed italic">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="text-white">
                        <div className="font-semibold text-base sm:text-lg">{testimonial.author}</div>
                        <div className="text-blue-300 text-xs sm:text-sm">{testimonial.role}</div>
                        <div className="text-blue-400 text-xs mt-1 hidden sm:block">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial Indicators */}
              <div className="flex justify-center space-x-2 sm:space-x-3 mt-6 sm:mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial === index ? 'bg-orange-400' : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/20 max-w-3xl lg:max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Transform Your Security?
            </h3>
            <p className="text-blue-100 text-sm sm:text-base lg:text-xl mb-6 sm:mb-8 max-w-xl lg:max-w-2xl mx-auto px-4 sm:px-0">
              <span className="hidden sm:inline">Join the leading organizations who have already secured their data with Vaultize. 
              Start your free trial today or speak with our security experts.</span>
              <span className="sm:hidden">Join leading organizations securing their data with Vaultize. Start your free trial today.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
              <button className="group bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                <span className="sm:hidden">Get Started</span>
                <span className="hidden sm:inline">GET STARTED TODAY</span>
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="group border-2 border-white/50 text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center">
                <span className="sm:hidden">Demo</span>
                <span className="hidden sm:inline">SCHEDULE A DEMO</span>
                <Zap className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:rotate-12 transition-transform duration-200" />
              </button>
            </div>

            <p className="text-blue-300 text-xs sm:text-sm">
              <span className="hidden sm:inline">No credit card required • 30-day free trial • Enterprise support included</span>
              <span className="sm:hidden">No credit card • 30-day trial • Support included</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection