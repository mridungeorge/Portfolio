
import { useState, useEffect } from "react";
import { AtSign, Send, Download, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Success message
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById("contact");
    if (section) {
      observer.observe(section);
    }
    
    return () => observer.disconnect();
  }, []);
  
  // Resume download URL
  const resumeDownloadUrl = "https://seek-blob-prod.s3.ap-southeast-2.amazonaws.com/objects/resumes/260D9DEE-9BE7-44D7-81B8-84351D1AC24D?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAUXU7OS5QJXY4FXST%2F20250315%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T112350Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkcwRQIhAK1m5npyhPKNm6hmjhFQg951RTH5zwNag2RmdSHxQy%2BdAiBVIaH52feqygYG78ekXWlsy%2FvQOrVKORJTqcmDZfo%2BhyqrAggUEAQaDDMyNTY3ODE3NjA5NiIMH7K3xyy62VUBa9FPKogCc1PNYdTH95U8og9hNpo4wEpc3a40HPqHrCPNkT%2FM%2BhZmqoyVaHS66ABAwdDwqsgbPlwMjYGOOCoVMtQxtDMUEC4XmrHox8iJUyZRh2e9U2EhPpWt8Ioe05T0FdzjM8dXNNth1AZnW8qhF7cEEjjj6bpje3V%2FnTaZblKglTQOSVzKpjQ2fiKLgTCwdlIeZRHYoHeTUlJnV99v4fTXLohnFIE7FcwLLDy7dn3LWZlIzozl7XesuU5xBdZvRqXhGFPRU8Hiol2fbuucpeTsJ7zDlKWlNG2MHYCLT6m4NJP3zH75pfKlJ1UK7drAgzzc9xRScf1wJJVfCzgYFnELk6KZga2NHcstzOCwMIyy1b4GOp0BeODGpJqP%2Bb5dlAuvo3lpZU7BNLdGCBKi7RXmXDcOSdfo6VnPWqSbqw8ygogPtiSDP3I7wrN3ZS1TSXxcnGLZw8P3UwlkFDCh19%2B2HLNanLm3rdAp%2FYIWaMQDC%2B6ft6yW1T01mZoC0MJk5MixmQhVHbPWqJL%2F2uoUmgvbMegy6PKmBhsOZaNfzDBdryoQsuZ%2BrIPEUxcc4rmC9inOyA%3D%3D&X-Amz-Signature=5686b277cecf3992bfac2c6491aa1e63ef81f63de11f22dd27077408887c6986&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%3D%22mridungeorge2025febdev.pdf%22&response-content-type=application%2Fpdf&x-amz-checksum-mode=ENABLED&x-id=GetObject";
  
  return (
    <section id="contact" className="py-20 relative bg-dark-lighter/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className={cn(
            "transition-all duration-500 transform",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
            <p className="text-light-darker mb-6">
              I'm currently open to new opportunities in DevOps, Cloud Engineering, and Cybersecurity roles. Feel free to reach out!
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="glass w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="glass w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="glass w-full min-h-[150px]"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="btn-cyber w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send size={16} className="ml-2" />
                  </span>
                )}
              </Button>
            </form>
          </div>
          
          <div className={cn(
            "transition-all duration-500 transform",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <h3 className="text-2xl font-bold mb-4">Connect & Resources</h3>
            
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
              
              <a 
                href={resumeDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tech w-full flex items-center justify-center mb-4"
                download="mridungeorge_resume.pdf"
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </a>
              
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
            
            <div className="glass-card p-6">
              <h4 className="text-lg font-bold mb-3">Looking For</h4>
              <ul className="space-y-2 text-light-darker">
                <li className="flex items-start">
                  <span className="text-cyber mr-2">•</span>
                  DevOps & Cloud Engineering roles
                </li>
                <li className="flex items-start">
                  <span className="text-cyber mr-2">•</span>
                  Cybersecurity Opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-cyber mr-2">•</span>
                  Remote or Sydney-based positions
                </li>
                <li className="flex items-start">
                  <span className="text-cyber mr-2">•</span>
                  Collaboration on open-source projects
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
