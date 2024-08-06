import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Manger from './components/Manger'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Manger />
     <Footer />
    </>
  )
}

export default App
