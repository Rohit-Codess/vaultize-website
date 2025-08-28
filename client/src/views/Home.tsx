import { Suspense, lazy } from 'react'

// Lazy load all homepage sections
const Hero = lazy(() => import('../pages/home/Hero'))
const PartnersShowcase = lazy(() => import('../pages/home/PartnersShowcase'))
const FeaturesOverview = lazy(() => import('../pages/home/FeaturesOverview'))
const WhyChooseVaultize = lazy(() => import('../pages/home/WhyChooseVaultize'))
const DrmEfssHighlight = lazy(() => import('../pages/home/DrmEfssHighlight'))
const RansomwareProtection = lazy(() => import('../pages/home/RansomwareProtection'))
const FlexibleDeployment = lazy(() => import('../pages/home/FlexibleDeployment'))
const CtaSection = lazy(() => import('../pages/home/CtaSection'))
const ContactForm = lazy(() => import('../pages/home/ContactForm'))

// Section loading fallback with skeleton UI
const SectionLoader = () => (
  <div className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="animate-pulse">
        {/* Title skeleton */}
        <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-6"></div>
        
        {/* Content skeleton */}
        <div className="space-y-4">
          <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
        </div>
        
        {/* Cards skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-300 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default function Home() {
  return (
    <div>
      <Suspense fallback={<SectionLoader />}>
        <Hero />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <PartnersShowcase />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <FeaturesOverview />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <WhyChooseVaultize />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <DrmEfssHighlight />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <RansomwareProtection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <FlexibleDeployment />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <CtaSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ContactForm />
      </Suspense>
    </div>
  )
}