import { useState } from 'react';
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import "./index.css"
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Project';
import { Contact } from './components/sections/Contact';
import { Toaster } from 'react-hot-toast';
function App() {
  
  const [isLoaded,setIsLoaded]=useState(false)
  const [menuOpen,setMenuOpen]=useState(false)
  if(!isLoaded){
    return <LoadingScreen onComplete={()=>setIsLoaded(true)}/>
  }
  return (
    <>
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className={`min-h-screen transition-opacity duration-700 ${
        isLoaded ? "opacity-100" :"opacity-0"
        } bg-black text-gray-100`}
        >
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Home />
          <About />
          <Projects />
          <Contact />
      </div>
      <Toaster/>
     </>
  )
}
export default App
