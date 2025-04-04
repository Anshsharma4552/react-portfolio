import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from 'emailjs-com'
import toast from "react-hot-toast";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false);

    const SERVICE_ID = "service_lwkkm35";
    const TEMPLATE_ID = "template_oud1o3t";
    const PUBLIC_KEY = "LyVektSm3MiVHsRtK";

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                toast.success("Message Sent")
                setFormData({ name: "", email: "", message: "" });
                setIsSubmitting(false);
            })
            .catch(() => {
                setIsSubmitting(false);
                toast.error("Error sending message")
            });
    }

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
                <div className="w-full max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>
                    
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="relative">
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        required 
                                        value={formData.name} 
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                        placeholder="Name"
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                                
                                <div className="relative">
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        required 
                                        value={formData.email} 
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                        placeholder="example@gmail.com" 
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    />
                                </div>
                            </div>
                            
                            <div className="relative">
                                <textarea  
                                    id="message" 
                                    name="message" 
                                    required 
                                    rows={6} 
                                    value={formData.message} 
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 resize-none"
                                    placeholder="Your Message" 
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                />
                            </div>
                            
                            <button 
                                type="submit" 
                                className="w-full md:w-auto md:px-12 bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                    
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                        <p className="text-gray-400">
                            You can also reach me at:
                        </p>
                        <a href="mailto:anshsharma2463@gmail.com" className="text-blue-400 hover:text-blue-300 transition inline-flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            anshsharma2463@gmail.com
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}