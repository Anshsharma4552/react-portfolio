import { useRef, useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"
import myImg from "../../assets/image.png"

export const Home = () => {
    const home = useRef(null)
    const [tiltPosition, setTiltPosition] = useState({ x: 0, y: 0 })
    const handleMouseMove = (e) => {
        const container = e.currentTarget
        const { left, top, width, height } = container.getBoundingClientRect()
        const x = (e.clientX - left - width / 2) / 25
        const y = (e.clientY - top - height / 2) / 25
        
        setTiltPosition({ x: -y, y: x }) 
    }
    const handleMouseLeave = () => {
        setTiltPosition({ x: 0, y: 0 })
    }

    return <section id="home" className="min-h-screen flex items-center justify-center relative">
        <RevealOnScroll>
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 w-full gap-8">
                <div className="text-center md:text-left z-10 md:w-3/5">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                        Hi, I'm Ansh Sharma
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
                    "Passionate web developer with expertise in building responsive, dynamic, and visually engaging websites. Skilled in HTML, CSS, JavaScript, React, Tailwind CSS, and modern web technologies to create seamless user experiences. Currently learning Data Structures and Algorithms (DSA) in Python. Dedicated to delivering high-quality, efficient, and innovative web solutions, while always eager to learn new tech stacks and stay updated with the latest industry trends."
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            View Projects
                        </a>
                        <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-5 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                            Contact Me
                        </a>
                    </div>
                </div>
                <div className="md:w-2/5 mt-8 md:mt-0">
                    <div 
                        className="relative w-64 h-64 md:w-80 md:h-80 mx-auto perspective-500"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            transform: `perspective(1000px) rotateX(${tiltPosition.x}deg) rotateY(${tiltPosition.y}deg)`
                        }}
                    >
                        <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse"></div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 to-cyan-400/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                        <div className="relative w-full h-full overflow-hidden rounded-4xl border-4 border-blue-500/50 shadow-lg group transition-all duration-300 hover:shadow-blue-500/40">
                            <img 
                                src={myImg} 
                                alt="Ansh Sharma" 
                                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:filter group-hover:saturate-150 group-hover:brightness-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-400/0 opacity-0 group-hover:from-blue-500/20 group-hover:to-cyan-400/20 group-hover:opacity-100 transition-all duration-300"></div>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
}