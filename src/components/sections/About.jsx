import { useRef } from "react"
import { RevealOnScroll } from "../RevealOnScroll"
export const About = () => {
    const about = useRef(null)
    const frontendSkills = ["Html", "Css", "Javascript", "React", "TailwindCss","Three JS"]
    const backendSkills = ["Python"]
    
    return <section ref={about} id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <p className="text-gray-300 mb-6">"I'm a web developer passionate about creating responsive, user-friendly websites with HTML, CSS, JavaScript, React and modern frameworks. I enjoy UI/UX design, solving LeetCode challenges, and exploring new web technologies. Let’s build something amazing together! "
                    </p>
                    <div className="flex justify-center gap-4 mb-6">
                        <a 
                            href="https://github.com/Anshsharma4552" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-all hover:-translate-y-1"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                            GitHub
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/ansh-sharma-1090b7323/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all hover:-translate-y-1"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                            LinkedIn
                        </a>
                        <a 
                            href="https://leetcode.com/u/Anshsharma4552/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-all hover:-translate-y-1"
                        >
                            <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"
                            /></svg>
                            Leetcode
                        </a>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-4">📚 Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>10th(2022) & 12th(2024)</strong> - Jaypee Vidya Mandir, Anupshahr
                            </li>
                            <li>
                                <strong>Pursuing Btech in CS & AI</strong> - Newton School Of Technology(2024-2028)
                            </li>
                            <li>
                                Relevant Coursework: Data Structures Algorithms, Web Development.
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <p className="italic text-gray-400">Third Place – Gen AI Hackathon
                                    Secured 3rd position out of 25+ teams in our college fest's Gen AI Hackathon.
                                    Built an AI-based solution and won a prize of ₹14,000 with a collaborative team effort.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
}