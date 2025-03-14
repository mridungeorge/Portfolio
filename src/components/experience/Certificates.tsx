
import { Award } from "lucide-react";
import { Certificate } from "@/types/experience";
import CertificateItem from "./CertificateItem";
import AdditionalAchievements from "./AdditionalAchievements";

type CertificatesProps = {
  certificates: Certificate[];
  isVisible: boolean;
};

const Certificates = ({ certificates, isVisible }: CertificatesProps) => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 flex items-center">
        <Award size={24} className="text-tech mr-2" />
        Certifications
      </h3>
      
      <div className="grid gap-4">
        {certificates.map((cert, index) => (
          <CertificateItem 
            key={cert.id}
            certificate={cert}
            isVisible={isVisible}
            index={index}
          />
        ))}
      </div>
      
      <AdditionalAchievements isVisible={isVisible} />
    </div>
  );
};

export default Certificates;
