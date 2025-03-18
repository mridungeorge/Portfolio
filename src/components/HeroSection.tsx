
import { useEffect, useState, useRef } from "react";
import { ArrowDown, Terminal, Shield, Cloud, FileCode } from "lucide-react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  const phrases = [
    "DevOps Engineer",
    "Cloud Security Specialist",
    "Automation Enthusiast",
    "System Analyst"
  ];
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  useEffect(() => {
    if (!isTyping) return;
    
    const phrase = phrases[currentPhraseIndex];
    
    if (displayedText === phrase) {
      // Pause at the end of the phrase
      setTimeout(() => {
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
          setDisplayedText("");
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 1000);
      }, 1500);
      return;
    }
    
    const timer = setTimeout(() => {
      setDisplayedText(phrase.substring(0, displayedText.length + 1));
    }, 100);
    
    return () => clearTimeout(timer);
  }, [displayedText, currentPhraseIndex, isTyping, phrases]);
  
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-40 -left-40 w-80 h-80 bg-cyber/10 rounded-full filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-40 -right-40 w-80 h-80 bg-tech/10 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: "2s" }}></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,18,0.8)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className={cn(
            "transition-all duration-1000 transform",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-poppins">
              <span>Mridun George</span>
            </h1>
            <div className="h-12 mt-4 mb-8 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl font-medium font-mono text-cyber inline-flex">
                <span>{displayedText}</span>
                <span className="w-1 h-7 bg-cyber animate-blink ml-1"></span>
              </h2>
            </div>
            
            <p className={cn(
              "text-lg md:text-xl text-light-darker mb-8 transition-opacity duration-1000 delay-300",
              isLoaded ? "opacity-100" : "opacity-0"
            )}>
              Building secure, scalable, and automated cloud infrastructure solutions.
            </p>
            
            <div className={cn(
              "flex flex-wrap justify-center gap-4 mb-12 transition-opacity duration-1000 delay-500",
              isLoaded ? "opacity-100" : "opacity-0"
            )}>
              <div className="glass p-4 rounded-lg flex items-center space-x-2">
                <Cloud size={20} className="text-cyber" />
                <span>AWS & Azure</span>
              </div>
              <div className="glass p-4 rounded-lg flex items-center space-x-2">
                <Shield size={20} className="text-cyber" />
                <span>Cybersecurity</span>
              </div>
              <div className="glass p-4 rounded-lg flex items-center space-x-2">
                <Terminal size={20} className="text-cyber" />
                <span>DevOps</span>
              </div>
              <div className="glass p-4 rounded-lg flex items-center space-x-2">
                <FileCode size={20} className="text-cyber" />
                <span>Automation</span>
              </div>
            </div>
            
            <div className={cn(
              "transition-opacity duration-1000 delay-700",
              isLoaded ? "opacity-100" : "opacity-0"
            )}>
              <a href="#about" className="btn-cyber py-3 px-8 inline-flex items-center space-x-2">
                <span>Explore</span>
                <ArrowDown size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse">
        <span className="text-sm mb-2 text-light-darker">Scroll Down</span>
        <ArrowDown size={20} className="text-cyber" />
      </div>
    </section>
  );
};

export default HeroSection;
