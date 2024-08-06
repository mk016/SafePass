import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Manger from './components/Manger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Manger />
    </>
  )
}

export default App
