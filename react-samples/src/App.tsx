import './App.css'
import { Routes, Route } from 'react-router-dom'

// Import the GlobalStyle component
import GlobalStyle from './styles/GlobalStyle'
// Import the Navbar and Footer components from layout folder
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
// Import page components
import Home from './pages/Home'
import { DebouncedSearch } from './challenges/debounced-search/DebouncedSearch'
// Import StyledComponentsExample for a demo page
import StyledComponentsExample from './components/StyledComponentsExample'

// Placeholder components for routes we don't have full implementations for yet
const FundamentalsPage = () => (
  <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold mb-6">React Fundamentals</h1>
    <p className="text-lg text-gray-700">This page will contain content about React fundamentals.</p>
  </div>
);

const HooksPage = () => (
  <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold mb-6">React Hooks</h1>
    <p className="text-lg text-gray-700">This page will contain content about React hooks.</p>
  </div>
);

const PatternsPage = () => (
  <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold mb-6">React Patterns</h1>
    <p className="text-lg text-gray-700">This page will contain content about React patterns.</p>
  </div>
);

const PerformancePage = () => (
  <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold mb-6">Performance Optimization</h1>
    <p className="text-lg text-gray-700">This page will contain content about React performance optimization.</p>
  </div>
);

const FormsPage = () => (
  <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold mb-6">Form Handling</h1>
    <p className="text-lg text-gray-700">This page will contain content about React form handling.</p>
  </div>
);

const ChallengesPage = () => (
  <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold mb-6">Interview Challenges</h1>
    <p className="text-lg text-gray-700">Explore common React interview challenges:</p>
    <ul className="list-disc ml-6 mt-4">
      <li className="mb-2">
        <a href="/challenges/debounced-search" className="text-blue-600 hover:text-blue-800 underline">
          Debounced Search
        </a>
      </li>
      <li className="mb-2">
        <a href="#" className="text-gray-400">To-Do List (Coming Soon)</a>
      </li>
      <li className="mb-2">
        <a href="#" className="text-gray-400">Infinite Scroll (Coming Soon)</a>
      </li>
      <li className="mb-2">
        <a href="#" className="text-gray-400">Modal Dialog (Coming Soon)</a>
      </li>
    </ul>
  </div>
);

function App() {
  return (
    <>
      {/* Apply global styles from styled-components */}
      <GlobalStyle />

      <div className="min-h-screen bg-gray-50">
        {/* Navbar at the top */}
        <Navbar theme="blue" />

        {/* Routes configuration */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components/*" element={<FundamentalsPage />} />
          <Route path="/hooks/*" element={<HooksPage />} />
          <Route path="/patterns/*" element={<PatternsPage />} />
          <Route path="/performance/*" element={<PerformancePage />} />
          <Route path="/forms/*" element={<FormsPage />} />
          <Route path="/challenges" element={<ChallengesPage />} />
          <Route path="/challenges/debounced-search" element={<DebouncedSearch />} />
          <Route path="/styling-demo" element={<StyledComponentsExample />} />
        </Routes>

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </>
  )
}

export default App
