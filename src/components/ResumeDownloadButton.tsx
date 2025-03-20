
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

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

  if (variant === "icon") {
    return (
      <a
        href={resumeFilePath}
        download="mridungeorge_resume.pdf"
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
      download="mridungeorge_resume.pdf"
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
