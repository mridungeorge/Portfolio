
import { Certificate } from "@/types/experience";
import { cn } from "@/lib/utils";

type CertificateItemProps = {
  certificate: Certificate;
  isVisible: boolean;
  index: number;
};

const CertificateItem = ({ certificate, isVisible, index }: CertificateItemProps) => {
  return (
    <div 
      className={cn(
        "glass p-5 rounded-lg shadow-md transition-all duration-500 transform",
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-start">
        <div className="p-2 rounded-full bg-dark-lighter mr-3">
          {certificate.icon}
        </div>
        
        <div>
          <h4 className="text-lg font-medium">{certificate.name}</h4>
          <div className="flex flex-wrap items-center mt-1">
            <span className="text-sm text-light-darker">{certificate.issuer}</span>
            <span className="mx-2 text-light-darker">•</span>
            <span className="text-sm text-light-darker">{certificate.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateItem;
