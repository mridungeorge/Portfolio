import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type ResumeDownloadButtonProps = {
  variant?: "button" | "icon";
  className?: string;
};

const ResumeDownloadButton = ({ 
  variant = "button", 
  className 
}: ResumeDownloadButtonProps) => {
  // Use a local file path for the resume file
  const resumeFilePath = "/resume/mridungeorge_resume.pdf";

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumeFilePath;
    link.download = "mridungeorge_resume.pdf";
    link.target = "_blank";
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Resume download started");
  };

  if (variant === "icon") {
    return (
      <a
        href={resumeFilePath}
        onClick={handleDownload}
        className={cn(
          "text-light-darker hover:text-cyber transition-colors duration-300",
          className
        )}
        aria-label="Download Resume"
      >
        <Download size={20} />
      </a>
    );
  }

  return (
    <a
      href={resumeFilePath}
      onClick={handleDownload}
      className={cn(
        "btn-tech w-full flex items-center justify-center",
        className
      )}
    >
      <Download size={18} className="mr-2" />
      Download Resume
    </a>
  );
};

export default ResumeDownloadButton;
