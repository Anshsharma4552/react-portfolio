import { RevealOnScroll } from "../RevealOnScroll"
import { useEffect } from "react"

export const Projects = () => {
    
    useEffect(() => {
        const loadTilt = async () => {
            const VanillaTilt = (await import('vanilla-tilt')).default;
            const projectCards = document.querySelectorAll('#projects .rounded-xl');
            projectCards.forEach(card => {
                VanillaTilt.init(card, {
                    max: 5,
                    speed: 400,
                    glare: true,
                    "max-glare": 0.1,
                    scale: 1.02
                });
            });
        };
        loadTilt();
        return () => {
            const projectCards = document.querySelectorAll('#projects .rounded-xl');
            projectCards.forEach(card => {
                if (card.vanillaTilt) {
                    card.vanillaTilt.destroy();
                }
            });
        };
    }, []);

    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Coffee Website(Coffeesta)</h3>
                        <p className="text-gray-400 mb-4">"Coffeesta" is a beautifully designed coffee-themed website created using HTML, CSS, and JavaScript. It features smooth animations and a fully responsive layout, ensuring an engaging user experience across all devices.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Html","Css","Javascript"].map((tech)=>{
                                return <span key={tech} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            })}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://anshsharma4552.github.io/Coffee-Website/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Blog Website</h3>
                        <p className="text-gray-400 mb-4">A simple and responsive React-powered blog where users can read, create, and explore posts. Designed with a clean UI and smooth navigation, it ensures a great reading experience. Perfect for sharing thoughts and stories!</p>
                        <div>
                            {["React","TailwindCss","Javascript","Html","Css"].map((tech)=>{
                                return <span key={tech} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            })}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://blog-site-assignment.vercel.app/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Previous Portfolio</h3>
                        <p className="text-gray-400 mb-4">A portfolio built using HTML, CSS, and JavaScript. Showcasing projects, skills, and experience with a clean design and smooth animations. Optimized for all devices to ensure a seamless user experience. </p>
                        <div>
                            {["Html","Css","Javascript"].map((tech)=>{
                                return <span key={tech} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            })}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://new-portfolio-two-pi-94.vercel.app/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">SpaceX Clone</h3>
                        <p className="text-gray-400 mb-4"> A stunning and responsive SpaceX-inspired website built using HTML, CSS, and JavaScript. Designed to replicate the sleek aesthetics and animations of the official SpaceX site, featuring smooth scrolling, dynamic UI, and a futuristic feel. A perfect showcase of front-end development skills </p>
                        <div>
                            {["Html","Css","Javascript"].map((tech)=>{
                                return <span key={tech} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            })}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://anshsharma4552.github.io/SpaceX-Clone/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Google Search Page</h3>
                        <p className="text-gray-400 mb-4"> A simple and responsive Google-inspired search page built using HTML, CSS, and JavaScript. It replicates the clean UI of Google Search and redirects user queries to Google, providing a seamless search experience. A great showcase of front-end development skills!</p>
                        <div>
                            {["Html","Css","Javascript"].map((tech)=>{
                                return <span key={tech} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            })}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://anshsharma4552.github.io/google-clone/"  target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Book-Slider</h3>
                        <p className="text-gray-400 mb-4">A simpe Book-Slider page using  React, Tailwind CSS, and Three.js. I create responsive, interactive UIs with clean design and smooth animations. My projects include 3D book sliders, blogs, and modern web apps. I love building creative, user-focused web experiences.</p>
                        <div>
                            {["React","Tailwind Css","Three.js"].map((tech)=>{
                                return <span key={tech} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            })}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://book-slider-livid.vercel.app/"  target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Intership-Project</h3>
                        <p className="text-gray-400 mb-4">Developed a responsive web application using React, Tailwind CSS, React Router DOM, and Framer Motion. Focused on building smooth navigation, animated components, and clean UI layouts. Gained practical experience in modern frontend development and project structuring.</p>
                        <div>
                            {["React","Tailwind Css","Framer Motion","React-Router"].map((tech)=>{
                                return <span key={tech} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            })}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://internship-project-tan.vercel.app/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
}