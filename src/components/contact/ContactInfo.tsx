
import { AtSign, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "lucide-react";
import ResumeDownloadButton from "../ResumeDownloadButton";

const ContactInfo = () => {
  return (
    <div className="glass-card p-6 mb-6">
      <h4 className="text-lg font-bold mb-3">Contact Information</h4>
      <div className="flex items-center mb-4">
        <AtSign size={20} className="text-cyber mr-2" />
        <a 
          href="mailto:contact@mridungeorge.com" 
          className="text-light-darker hover:text-white transition-colors duration-300"
        >
          contact@mridungeorge.com
        </a>
      </div>
      
      <h4 className="text-lg font-bold mb-3">Professional Profiles</h4>
      <div className="flex space-x-4 mb-6">
        <a 
          href="https://github.com/mridungeorge" 
          target="_blank"
          rel="noopener noreferrer"
          className="glass p-3 rounded-full hover:bg-dark-light transition-all duration-300"
        >
          <Github size={20} className="text-cyber" />
        </a>
        <a 
          href="https://linkedin.com/in/mridungeorge" 
          target="_blank"
          rel="noopener noreferrer"
          className="glass p-3 rounded-full hover:bg-dark-light transition-all duration-300"
        >
          <Linkedin size={20} className="text-cyber" />
        </a>
      </div>
      
      <ResumeDownloadButton className="mb-4" />
      
      <a 
        href="https://calendly.com/mridungeorge" 
        target="_blank"
        rel="noopener noreferrer"
        className="glass text-center py-3 px-4 rounded flex items-center justify-center hover:bg-dark-light transition-all duration-300"
      >
        <span className="mr-2">Schedule a Meeting</span>
        <ArrowUpRight size={16} />
      </a>
    </div>
  );
};

export default ContactInfo;
