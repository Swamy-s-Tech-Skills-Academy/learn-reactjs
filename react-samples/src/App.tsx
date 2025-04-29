import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Import the GlobalStyle component
import GlobalStyle from './styles/GlobalStyle'
// Import the Navbar and Footer components from layout folder
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
// Import the Home component from the pages directory
import Home from './pages/Home'

function App() {
  return (
    <>
      {/* Apply global styles from styled-components */}
      <GlobalStyle />

      <div className="min-h-screen bg-gray-50">
        {/* Showcase all available Navbar themes */}
        <div className="space-y-1">
          {/* Blues */}
          <Navbar theme="blue" />
        </div>

        {/* Render the Home component */}
        <Home />

        {/* Use the Footer component */}
        <Footer />
      </div>
    </>
  )
}

export default App
