import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Menu, X, Shield, Search, User, Globe, ArrowRight } from 'lucide-react'
import { Button, Dropdown } from '../ui'

interface NavbarProps {
  onNavigate?: (page: string) => void
}

const Navbar = ({ onNavigate }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)

    // Handle click outside for search
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const navItems = [
    {
      name: 'PRODUCT',
      hasDropdown: true,
      items: [
        { label: 'Enterprise DRM', href: '/product/drm' },
        { label: 'Data Governance', href: '/product/governance' },
        { label: 'Zero Trust Security', href: '/product/zero-trust' },
        { label: 'Cloud Protection', href: '/product/cloud' },
        { label: 'Compliance Suite', href: '/product/compliance' }
      ]
    },
    {
      name: 'SOLUTIONS',
      hasDropdown: true,
      items: [
        { label: 'Healthcare', href: '/solutions/healthcare' },
        { label: 'Financial Services', href: '/solutions/financial' },
        { label: 'Government', href: '/solutions/government' },
        { label: 'Legal & Professional', href: '/solutions/legal' }
      ]
    },
    {
      name: 'RESOURCES',
      hasDropdown: false,
      onClick: () => onNavigate?.('resources')
    },
    {
      name: 'PRICING',
      hasDropdown: false,
      onClick: () => onNavigate?.('pricing')
    },
    {
      name: 'COMPANY',
      hasDropdown: true,
      items: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Partners', href: '/partners' },
        { label: 'Contact', href: '/contact' }
      ]
    }
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-xl shadow-xl border-b border-gray-200/60' 
        : 'bg-white/95 backdrop-blur-lg border-b border-gray-200/40'
    }`}>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-1.5 px-4 text-center text-xs">
        <div className="flex items-center justify-center space-x-1.5">
          <span>🔒 New: Advanced Ransomware Protection</span>
          <ArrowRight className="w-3 h-3" />
          <a href="#" className="underline hover:no-underline font-medium">Learn More</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onNavigate?.('home')}
          >
            <div className="relative group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-300">
                <Shield className="w-5 h-5 text-white" />
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 bg-clip-text text-transparent">
                vaultize
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <Dropdown
                    trigger={
                      <div className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 font-medium text-xs transition-all duration-300 relative group cursor-pointer rounded-lg hover:bg-blue-50/50">
                        {item.name}
                        <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />
                        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                      </div>
                    }
                    items={item.items || []}
                    className="relative"
                  />
                ) : (
                  <div 
                    onClick={item.onClick}
                    className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 font-medium text-xs transition-all duration-300 relative group cursor-pointer rounded-lg hover:bg-blue-50/50"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2">
            {/* Search */}
            <div className="hidden lg:flex relative" ref={searchRef}>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                <Search className="w-4 h-4" />
              </button>
              {searchOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-200 p-3 z-50">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    autoFocus
                  />
                </div>
              )}
            </div>

            {/* Language Selector */}
            <Dropdown
              trigger={
                <button className="hidden lg:flex items-center p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                  <Globe className="w-4 h-4" />
                </button>
              }
              items={[
                { label: '🇺🇸 English', href: '#' },
                { label: '🇪🇸 Español', href: '#' },
                { label: '🇫🇷 Français', href: '#' },
                { label: '🇩🇪 Deutsch', href: '#' }
              ]}
              position="right"
            />

            {/* User Menu */}
            <Dropdown
              trigger={
                <button className="hidden lg:flex items-center space-x-1 p-1.5 hover:bg-blue-50 rounded-lg transition-all duration-200">
                  <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="w-3.5 h-3.5 text-white" />
                  </div>
                  <ChevronDown className="w-3 h-3 text-gray-500" />
                </button>
              }
              items={[
                { label: 'Dashboard', href: '/dashboard' },
                { label: 'Settings', href: '/settings' },
                { label: 'Support', href: '/support' },
                { label: 'Sign Out', href: '/logout' }
              ]}
              position="right"
            />

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-2 ml-4">
              <Button variant="outline" size="sm" className="text-xs py-1.5 px-3">
                Sign In
              </Button>
              <Button variant="primary" size="sm" className="text-xs py-1.5 px-3">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="xl:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="xl:hidden border-t border-gray-200/50 bg-white/98 backdrop-blur-xl">
            <div className="py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.name} className="space-y-1">
                  {item.hasDropdown ? (
                    <>
                      <button className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium text-sm transition-all duration-200 rounded-lg">
                        {item.name}
                        <ChevronDown className="w-3 h-3" />
                      </button>
                      {item.items && (
                        <div className="pl-4 space-y-1">
                          {item.items.map((subItem, index) => (
                            <a
                              key={index}
                              href={subItem.href}
                              className="block px-3 py-1.5 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <button 
                      onClick={() => {
                        item.onClick?.();
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium text-sm transition-all duration-200 rounded-lg"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
              
              <div className="px-4 pt-4 space-y-2 border-t border-gray-200 mt-4">
                <Button variant="outline" fullWidth size="sm" className="text-xs">
                  Sign In
                </Button>
                <Button variant="primary" fullWidth size="sm" className="text-xs">
                  Get Started Free
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar