import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function Main() {
  return (
    <main className='flex-grow overflow-y-scroll 
    text-textl dark:bg-mainbgd dark:text-textd'
    >
      <h1>React App</h1>
    </main>
  )
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true)

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode)
  }
  
  return (
    <div className={isDarkMode ? 
      'flex max-w-screen max-h-screen overflow-hidden' : 
      'dark flex max-w-screen max-h-screen overflow-hidden'}
    >
      <Navbar toggleMode={toggleMode} />
      <Main />
    </div>
  )
}

export default App