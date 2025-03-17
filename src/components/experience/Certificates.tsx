
import { Award } from "lucide-react";
import { Certificate } from "@/types/experience";
import { cn } from "@/lib/utils";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type CertificatesProps = {
  certificates: Certificate[];
  isVisible: boolean;
};

const Certificates = ({ certificates, isVisible }: CertificatesProps) => {
  return (
    <div>
      <div className="space-y-4">
        {certificates.map((cert, index) => (
          <div 
            key={cert.id}
            className={cn(
              "glass p-5 rounded-lg shadow-md transition-all duration-500 transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="flex items-start">
              <div className="p-2 rounded-full bg-dark-lighter mr-3">
                {cert.icon}
              </div>
              
              <div>
                <h4 className="text-lg font-medium">{cert.name}</h4>
                <div className="flex flex-wrap items-center mt-1">
                  <span className="text-sm text-light-darker">{cert.issuer}</span>
                  <span className="mx-2 text-light-darker">•</span>
                  <span className="text-sm text-light-darker">{cert.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div 
        className={cn(
          "glass p-5 rounded-lg shadow-md mt-6 transition-all duration-500 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
        style={{ transitionDelay: "600ms" }}
      >
        <Accordion type="single" collapsible className="border-none">
          <AccordionItem value="achievements" className="border-none">
            <AccordionTrigger className="py-2 font-medium text-lg">
              Additional Achievements
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-3 py-2">
                <li className="flex items-start">
                  <div className="p-1.5 rounded-full bg-dark-lighter mr-2">
                    <Award size={16} className="text-tech" />
                  </div>
                  <span className="text-sm text-light-darker">AWS Educate Web Application Development Builder</span>
                </li>
                <li className="flex items-start">
                  <div className="p-1.5 rounded-full bg-dark-lighter mr-2">
                    <Award size={16} className="text-tech" />
                  </div>
                  <span className="text-sm text-light-darker">Completed 35+ rooms on TryHackMe security platform</span>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Certificates;
