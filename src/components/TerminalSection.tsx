
import { useState, useEffect, useRef } from "react";
import { Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import TerminalHeader from "./terminal/TerminalHeader";
import TerminalHistory from "./terminal/TerminalHistory";
import TerminalPrompt from "./terminal/TerminalPrompt";
import { terminalCommands } from "./terminal/terminalCommands";
import { HistoryItem } from "@/types/terminal";

const TerminalSection = () => {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    { 
      command: "whoami", 
      output: "mridun_george - DevOps Engineer & System Analyst"
    },
  ]);
  const [isVisible, setIsVisible] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  
  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!command.trim()) return;
    
    const cmd = command.trim().toLowerCase();
    let output: string | JSX.Element = "Command not found. Type 'help' for available commands.";
    
    if (cmd === "clear") {
      setHistory([]);
      setCommand("");
      return;
    }
    
    if (cmd in terminalCommands) {
      output = terminalCommands[cmd as keyof typeof terminalCommands];
    }
    
    setHistory([...history, { command: cmd, output }]);
    setCommand("");
    
    // Scroll to bottom after rendering
    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, 0);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  // Focus the input when clicking anywhere in the terminal
  const focusInput = () => {
    const inputElement = terminalRef.current?.querySelector('input');
    if (inputElement) {
      inputElement.focus();
    }
  };
  
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <Terminal size={24} className="text-cyber mr-2" />
            <h2 className="text-3xl font-bold gradient-text">Interactive Terminal</h2>
          </div>
          
          <p className="text-light-darker mb-8">
            Want to know more about me? Try interacting with this terminal. Type 'help' to see available commands.
          </p>
          
          <div 
            ref={terminalRef}
            onClick={focusInput}
            className={cn(
              "terminal h-96 overflow-y-auto rounded-lg shadow-lg transition-all duration-700 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <TerminalHeader />
            
            <div className="terminal-content">
              <p className="text-cyber mb-4">Welcome to Mridun George's interactive terminal. Type 'help' to see available commands.</p>
              
              <TerminalHistory history={history} />
              
              <TerminalPrompt 
                command={command}
                setCommand={setCommand}
                handleCommand={handleCommand}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalSection;
