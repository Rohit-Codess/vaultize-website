import { useState, useEffect } from 'react'
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, ChevronUp, Star, Award, Users } from 'lucide-react'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('footer')
    if (element) observer.observe(element)

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      if (element) observer.unobserve(element)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerSections = [
    {
      title: 'Solutions',
      links: [
        'Enterprise DRM',
        'Data Governance',
        'Ransomware Protection',
        'Cloud Security',
        'Compliance Management',
        'Zero Trust Architecture'
      ]
    },
    {
      title: 'Industries',
      links: [
        'Healthcare',
        'Financial Services',
        'Government',
        'Legal',
        'Technology',
        'Manufacturing'
      ]
    },
    {
      title: 'Resources',
      links: [
        'Documentation',
        'White Papers',
        'Case Studies',
        'Webinars',
        'Security Blog',
        'API Reference'
      ]
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Careers',
        'Partners',
        'Press',
        'Contact',
        'Support'
      ]
    }
  ]

  const certifications = [
    { icon: Shield, name: 'SOC 2 Type II' },
    { icon: Award, name: 'ISO 27001' },
    { icon: Users, name: 'GDPR Compliant' },
    { icon: Star, name: 'FedRAMP Ready' }
  ]

  return (
    <footer id="footer" className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h30v30H0V0zm15 15h15v15H15V15z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-32 h-32 bg-purple-500/5 rounded-lg rotate-45 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className={`lg:col-span-2 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Vaultize</h3>
                  <p className="text-sm text-gray-400">Secure. Govern. Protect.</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                The world's most comprehensive cybersecurity and data governance platform. 
                Protecting organizations across 40+ industries with enterprise-grade security 
                and zero-trust architecture.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-orange-400" />
                  <span>contact@vaultize.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                  <MapPin className="w-5 h-5 text-orange-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Youtube, href: '#', label: 'YouTube' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-gray-800/50 hover:bg-gradient-to-br hover:from-orange-500 hover:to-pink-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-gray-700/50 hover:border-transparent"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className={`transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${(sectionIndex + 1) * 100}ms` }}
              >
                <h4 className="text-lg font-semibold text-white mb-6 relative">
                  {section.title}
                  <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-400 to-pink-400"></div>
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 relative group"
                      >
                        {link}
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className={`py-8 border-t border-gray-700/50 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold text-white mb-2">Security Certifications & Compliance</h4>
            <p className="text-gray-400 text-sm">Trusted by enterprises worldwide with industry-leading certifications</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800/30 hover:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105 text-center group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500/20 to-pink-600/20 rounded-lg mx-auto mb-3 group-hover:from-orange-500/30 group-hover:to-pink-600/30 transition-all duration-300">
                  <cert.icon className="w-6 h-6 text-orange-400" />
                </div>
                <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  {cert.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`py-8 border-t border-gray-700/50 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
            <span>&copy; 2024 Vaultize. All rights reserved.</span>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Security</a>
            </div>
          </div>
          
          <div className="text-sm text-gray-400 text-center lg:text-right">
            <p>Enterprise-grade security for the modern world</p>
            <p className="text-xs mt-1">Built with ❤️ for data protection</p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  )
}

export default Footer