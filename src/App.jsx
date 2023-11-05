import { useState } from 'react'
import { ChakraProvider} from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home'
import './App.css'
import AboutMe from './pages/about-me'
import ErrorPage from './pages/error'


function App() {
  return (
    <ChakraProvider>
      <Router>
        
          <Routes>
            <Route path="/about" element={<AboutMe />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} /> {/* Catch-all route */}
          </Routes>
        
      </Router>
    </ChakraProvider>
  )
}

export default App