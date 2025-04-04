import { useEffect, useRef } from "react"

export const Navbar=({menuOpen , setMenuOpen})=>{
    
    const contact = useRef(null)
    useEffect(()=>{
        document.body.style.overflow=menuOpen ? "hidden" : ""
    },[menuOpen])
    return <nav className="fixed z-40 top-0 w-full bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold text-white">
                    AS<span className="text-blue-500">.tech</span>
                </a>

                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" 
                onClick={()=>setMenuOpen((prev)=>!prev)}
                >
                    &#9776;
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" onClick={() => {

                    }} className="text-gray-300 z-40 hover:text-white transition-colors">
                        <button>Home</button>
                    </a>
                    <a href="#about" onClick={() => {
                    }} className="text-gray-300 z-40 hover:text-white transition-colors">
                        <button>About</button>
                    </a>
                    <a href="#projects" onClick={() => {
                        
                    }} className="text-gray-300 z-40 hover:text-white transition-colors">
                        <button>Projects</button>
                    </a>
                    <a href="#contact" onClick={() => {
                        
                    }} className="text-gray-300 z-40 hover:text-white transition-colors">
                        <button>Contact</button>
                    </a>
                </div>
            </div>
        </div>   
    </nav>
}