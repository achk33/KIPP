import { Bot, Github, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-8 px-4 bg-gradient-to-t from-[#0f172a]/90 via-[#312e81]/80 to-transparent text-white mt-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Bot className="text-cyan-400" size={24} />
          <span className="font-orbitron text-lg font-bold tracking-widest">KIPP</span>
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
          <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
          <a href="#showcase" className="hover:text-cyan-400 transition-colors">Demo</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>
        <div className="flex gap-4">
          <a href="#" aria-label="GitHub" className="hover:text-cyan-400"><Github size={20} /></a>
          <a href="#" aria-label="Twitter" className="hover:text-cyan-400"><Twitter size={20} /></a>
          <a href="#" aria-label="Email" className="hover:text-cyan-400"><Mail size={20} /></a>
        </div>
      </div>
      <div className="text-center text-xs text-white/60 mt-4">
        &copy; {new Date().getFullYear()} KIPP. All rights reserved.
      </div>
    </footer>
  );
}
