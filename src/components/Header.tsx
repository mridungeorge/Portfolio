
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, Github, Linkedin, LogIn, LogOut, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };
  
  // Set dark mode by default
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleAuthAction = () => {
    if (user) {
      signOut();
    } else {
      navigate('/auth');
    }
  };
  
  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled ? "glass py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="text-2xl font-bold gradient-text mr-8">MG</a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/mridungeorge" target="_blank" rel="noopener noreferrer" 
             className="text-light-darker hover:text-cyber transition-colors duration-300">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/mridungeorge" target="_blank" rel="noopener noreferrer" 
             className="text-light-darker hover:text-cyber transition-colors duration-300">
            <Linkedin size={20} />
          </a>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleDarkMode} 
            className="text-light-darker hover:text-cyber"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleAuthAction}
            className="flex items-center gap-2"
          >
            {user ? (
              <>
                <LogOut size={16} />
                <span>Sign Out</span>
              </>
            ) : (
              <>
                <LogIn size={16} />
                <span>Sign In</span>
              </>
            )}
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden text-light"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 glass-card md:hidden flex flex-col pt-20 px-8">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-xl nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="mt-6 flex flex-col space-y-4">
              <div className="flex space-x-6 items-center">
                <a href="https://github.com/mridungeorge" target="_blank" rel="noopener noreferrer" 
                   className="text-light-darker hover:text-cyber transition-colors duration-300">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/mridungeorge" target="_blank" rel="noopener noreferrer" 
                   className="text-light-darker hover:text-cyber transition-colors duration-300">
                  <Linkedin size={24} />
                </a>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDarkMode();
                  }} 
                  className="text-light-darker hover:text-cyber"
                >
                  {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                </Button>
              </div>
              <Button
                onClick={() => {
                  handleAuthAction();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full mt-4"
                variant="outline"
              >
                {user ? (
                  <>
                    <LogOut size={16} className="mr-2" />
                    <span>Sign Out</span>
                  </>
                ) : (
                  <>
                    <LogIn size={16} className="mr-2" />
                    <span>Sign In</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
