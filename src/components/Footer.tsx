
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import ResumeDownloadButton from "./ResumeDownloadButton";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="bg-dark-lighter py-10 border-t border-dark-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold gradient-text">Mridun George</h2>
            <p className="text-light-darker mt-2">DevOps Engineer & System Analyst</p>
          </div>
          
          <div className="flex space-x-6 items-center">
            <a 
              href="https://github.com/mridungeorge" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-darker hover:text-cyber transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/mridungeorge" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-darker hover:text-cyber transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:contact@mridungeorge.com" 
              className="text-light-darker hover:text-cyber transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
            <ResumeDownloadButton variant="icon" />
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-full glass hover:bg-dark-light ml-2 transition-all duration-300"
            >
              <ArrowUp size={16} className="text-cyber" />
            </button>
          </div>
        </div>
        
        <div className="border-t border-dark-light mt-8 pt-8 text-center text-light-darker text-sm">
          <p>© {new Date().getFullYear()} Mridun George. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
