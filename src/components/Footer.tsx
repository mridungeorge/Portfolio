
import { Github, Linkedin, Mail, ArrowUp, Download } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  // Resume download URL
  const resumeDownloadUrl = "https://seek-blob-prod.s3.ap-southeast-2.amazonaws.com/objects/resumes/260D9DEE-9BE7-44D7-81B8-84351D1AC24D?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAUXU7OS5QJXY4FXST%2F20250315%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T112350Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkcwRQIhAK1m5npyhPKNm6hmjhFQg951RTH5zwNag2RmdSHxQy%2BdAiBVIaH52feqygYG78ekXWlsy%2FvQOrVKORJTqcmDZfo%2BhyqrAggUEAQaDDMyNTY3ODE3NjA5NiIMH7K3xyy62VUBa9FPKogCc1PNYdTH95U8og9hNpo4wEpc3a40HPqHrCPNkT%2FM%2BhZmqoyVaHS66ABAwdDwqsgbPlwMjYGOOCoVMtQxtDMUEC4XmrHox8iJUyZRh2e9U2EhPpWt8Ioe05T0FdzjM8dXNNth1AZnW8qhF7cEEjjj6bpje3V%2FnTaZblKglTQOSVzKpjQ2fiKLgTCwdlIeZRHYoHeTUlJnV99v4fTXLohnFIE7FcwLLDy7dn3LWZlIzozl7XesuU5xBdZvRqXhGFPRU8Hiol2fbuucpeTsJ7zDlKWlNG2MHYCLT6m4NJP3zH75pfKlJ1UK7drAgzzc9xRScf1wJJVfCzgYFnELk6KZga2NHcstzOCwMIyy1b4GOp0BeODGpJqP%2Bb5dlAuvo3lpZU7BNLdGCBKi7RXmXDcOSdfo6VnPWqSbqw8ygogPtiSDP3I7wrN3ZS1TSXxcnGLZw8P3UwlkFDCh19%2B2HLNanLm3rdAp%2FYIWaMQDC%2B6ft6yW1T01mZoC0MJk5MixmQhVHbPWqJL%2F2uoUmgvbMegy6PKmBhsOZaNfzDBdryoQsuZ%2BrIPEUxcc4rmC9inOyA%3D%3D&X-Amz-Signature=5686b277cecf3992bfac2c6491aa1e63ef81f63de11f22dd27077408887c6986&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%3D%22mridungeorge2025febdev.pdf%22&response-content-type=application%2Fpdf&x-amz-checksum-mode=ENABLED&x-id=GetObject";
  
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
            <a
              href={resumeDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-darker hover:text-cyber transition-colors duration-300"
              download="mridungeorge_resume.pdf"
            >
              <Download size={20} />
            </a>
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
