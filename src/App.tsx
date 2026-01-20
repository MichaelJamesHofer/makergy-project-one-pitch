import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import PasswordProtection from './components/PasswordProtection'
import HomePage from './pages/HomePage'
import ExecutiveSummary from './pages/ExecutiveSummary'
import FinancialProjections from './pages/FinancialProjections'
import ProductsServices from './pages/ProductsServices'
import FundingRequest from './pages/FundingRequest'
import DeveloperTermsOffer from './pages/DeveloperTermsOffer'
import './App.css'

function App() {
  return (
    <Router>
      <PasswordProtection>
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
            </Routes>
          </main>
          <Footer />
        </div>
      </PasswordProtection>
    </Router>
  )
}

export default App
