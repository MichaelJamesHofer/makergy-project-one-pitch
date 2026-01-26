import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import PasswordProtection from './components/PasswordProtection'
import HomePage from './pages/HomePage'
import ExecutiveSummary from './pages/ExecutiveSummary'
import FinancialProjections from './pages/FinancialProjections'
import ProductsServices from './pages/ProductsServices'
import FundingRequest from './pages/FundingRequest'
import DeveloperTermsOffer from './pages/DeveloperTermsOffer'
import InfrastructureConcepts from './pages/InfrastructureConcepts'
import posthog from './lib/posthog'
import './App.css'

// Component to handle GitHub Pages SPA redirect format
function RedirectHandler() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // Check if URL has the GitHub Pages SPA redirect format: /?/path
    const search = window.location.search
    if (search.startsWith('?/')) {
      // Extract the path from the query parameter
      const path = search.slice(2).replace(/~and~/g, '&')
      // Clean up the URL by navigating to the actual path
      if (path) {
        navigate(path, { replace: true })
      } else {
        navigate('/', { replace: true })
      }
    }
  }, [navigate])

  return null
}

// Component to track pageviews
function PageViewTracker() {
  const location = useLocation()

  useEffect(() => {
    posthog.capture('$pageview')
  }, [location])

  return null
}

function App() {
  return (
    <Router>
      <PasswordProtection>
        <RedirectHandler />
        <PageViewTracker />
        <div className="min-h-screen bg-transparent flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/executive-summary" element={<ExecutiveSummary />} />
              <Route path="/financial-projections" element={<FinancialProjections />} />
              <Route path="/products-services" element={<ProductsServices />} />
              <Route path="/funding-request" element={<FundingRequest />} />
              <Route path="/developer-terms" element={<DeveloperTermsOffer />} />
              <Route path="/community-design-guide" element={<InfrastructureConcepts />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </PasswordProtection>
    </Router>
  )
}

export default App
