
import { useState, useEffect, useRef } from "react";
import { Terminal, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const TerminalSection = () => {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<Array<{ command: string; output: string | JSX.Element }>>([
    { 
      command: "whoami", 
      output: "mridun_george - DevOps Engineer & System Analyst"
    },
  ]);
  const [isVisible, setIsVisible] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const commands = {
    help: (
      <div>
        <p>Available commands:</p>
        <ul className="list-disc list-inside mt-1 space-y-1">
          <li><span className="text-cyber">whoami</span> - Display basic information</li>
          <li><span className="text-cyber">skills</span> - List technical skills</li>
          <li><span className="text-cyber">experience</span> - Show work history</li>
          <li><span className="text-cyber">projects</span> - View key projects</li>
          <li><span className="text-cyber">contact</span> - Contact information</li>
          <li><span className="text-cyber">clear</span> - Clear terminal history</li>
        </ul>
      </div>
    ),
    whoami: "Mridun George - DevOps Engineer & System Analyst with 2+ years of experience building secure cloud infrastructure, implementing CI/CD pipelines, and automating business processes.",
    skills: (
      <div>
        <p>Technical Skills:</p>
        <ul className="grid grid-cols-2 gap-1 mt-1">
          <li><span className="text-cyber">▶</span> AWS & Azure</li>
          <li><span className="text-cyber">▶</span> Terraform & CloudFormation</li>
          <li><span className="text-cyber">▶</span> Docker & Kubernetes</li>
          <li><span className="text-cyber">▶</span> Jenkins & GitHub Actions</li>
          <li><span className="text-cyber">▶</span> Splunk & Microsoft Sentinel</li>
          <li><span className="text-cyber">▶</span> Python & PowerShell</li>
          <li><span className="text-cyber">▶</span> Microsoft Dynamics 365</li>
          <li><span className="text-cyber">▶</span> SIEM & Threat Monitoring</li>
        </ul>
      </div>
    ),
    experience: (
      <div>
        <p className="font-bold">Work Experience:</p>
        <div className="mt-2">
          <p className="text-cyber">Systems Analyst | Howards Storage World (May 2024 - Present)</p>
          <ul className="list-disc list-inside ml-4 mt-1">
            <li>Managed Microsoft Dynamics 365 CRM & ERP workflows</li>
            <li>Engineered CI/CD pipelines with Jenkins & Azure DevOps</li>
            <li>Implemented SIEM solutions for security compliance</li>
          </ul>
        </div>
        <div className="mt-2">
          <p className="text-cyber">AWS DevOps Engineer | Aus Biz Consultancy (Nov 2023 - May 2024)</p>
          <ul className="list-disc list-inside ml-4 mt-1">
            <li>Designed serverless architectures with AWS Lambda</li>
            <li>Optimized CI/CD automation with AWS CodePipeline</li>
            <li>Strengthened cloud security with IAM policies & AWS WAF</li>
          </ul>
        </div>
        <div className="mt-2">
          <p className="text-cyber">ML Data Associate | Amazon (Sept 2021 - Jan 2022)</p>
          <ul className="list-disc list-inside ml-4 mt-1">
            <li>Contributed to AI/ML model training for Amazon Search</li>
          </ul>
        </div>
      </div>
    ),
    projects: (
      <div>
        <p className="font-bold">Key Projects:</p>
        <div className="mt-2">
          <p className="text-cyber">TailorWise - AI Cover Letter Generator</p>
          <p className="ml-4">Express.js backend with AI-based resume matching</p>
        </div>
        <div className="mt-2">
          <p className="text-cyber">AI-Powered Label Generator</p>
          <p className="ml-4">Microsoft Dynamics NAV integration for real-time data</p>
        </div>
        <div className="mt-2">
          <p className="text-cyber">PyExi - No-Code Python Automation</p>
          <p className="ml-4">AI-powered task-to-script conversion tool</p>
        </div>
        <div className="mt-2">
          <p className="text-cyber">API-Driven Analytics Platform</p>
          <p className="ml-4">Business intelligence with AI-powered insights</p>
        </div>
      </div>
    ),
    contact: (
      <div>
        <p className="font-bold">Contact Information:</p>
        <ul className="list-disc list-inside mt-1">
          <li>Email: <a href="mailto:contact@mridungeorge.com" className="text-cyber underline">contact@mridungeorge.com</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/mridungeorge" target="_blank" rel="noopener noreferrer" className="text-cyber underline">linkedin.com/in/mridungeorge</a></li>
          <li>GitHub: <a href="https://github.com/mridungeorge" target="_blank" rel="noopener noreferrer" className="text-cyber underline">github.com/mridungeorge</a></li>
        </ul>
      </div>
    ),
  };
  
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
    
    if (cmd in commands) {
      output = commands[cmd as keyof typeof commands];
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
    if (inputRef.current) {
      inputRef.current.focus();
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
            <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-gray-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-sm text-light-darker">mridun@portfolio:~</span>
            </div>
            
            <div className="terminal-content">
              <p className="text-cyber mb-4">Welcome to Mridun George's interactive terminal. Type 'help' to see available commands.</p>
              
              {history.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center text-light">
                    <span className="text-cyber mr-1">$</span>
                    <span className="text-tech mr-2">~</span>
                    <ChevronRight size={16} className="text-cyber mr-1" />
                    <span>{item.command}</span>
                  </div>
                  <div className="ml-5 mt-1 text-light-darker">{item.output}</div>
                </div>
              ))}
              
              <form onSubmit={handleCommand} className="flex items-center mt-2">
                <span className="text-cyber mr-1">$</span>
                <span className="text-tech mr-2">~</span>
                <ChevronRight size={16} className="text-cyber mr-1" />
                <input
                  ref={inputRef}
                  type="text"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-light"
                  autoFocus
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalSection;
