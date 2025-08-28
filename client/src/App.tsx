import { Suspense, lazy } from 'react'
import { Navbar } from './components/layout'
import { Footer } from './components/layout'

// Lazy load the Home component
const Home = lazy(() => import('./views/Home'))

// Loading fallback component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading...</p>
    </div>
  </div>
)

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Home />
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
