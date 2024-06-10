import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Stage from './components/Stage'
import Project4 from './components/Project4'
import Angular from './components/Angular'
import Intro from './components/Intro'
import UnrealEngine from './components/UnrealEngine'

interface MainProps {
  darkMode: boolean;
}

function Main({ darkMode }: MainProps) {
  return (
    <main className='flex-grow overflow-y-scroll px-24 
    text-textl dark:bg-mainbgd dark:text-textd'
    >
      <Intro darkMode={darkMode} />
      <About />
      <Skills darkMode={darkMode} />
      <Stage />
      <Project4 />
      <Angular />
      <UnrealEngine />
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
      <Main darkMode={isDarkMode} />
    </div>
  )
}

export default App
