
import { Award, Briefcase, Calendar } from "lucide-react";
import { Certificate, Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Systems Analyst",
    company: "Howards Storage World, Sydney",
    period: "May 2024 - Present",
    description: [
      "Microsoft Dynamics 365 Administration: Managed CRM & ERP workflows, automated business processes using Power Automate & Azure Logic Apps.",
      "DevOps & Cloud Optimization: Engineered CI/CD pipelines with Jenkins, GitHub Actions, and Azure DevOps, boosting deployment efficiency by 40%.",
      "Infrastructure as Code: Automated provisioning with Terraform & CloudFormation, reducing manual configurations by 60%.",
      "Security & Compliance: Implemented SIEM solutions (Splunk, Microsoft Sentinel), ensuring compliance with ACSC Essential Eight, NIST frameworks."
    ],
    icon: <Briefcase size={20} className="text-cyber" />
  },
  {
    id: 2,
    title: "AWS DevOps Engineer",
    company: "Aus Biz Consultancy, Sydney",
    period: "Nov 2023 - May 2024",
    description: [
      "Designed serverless architectures with AWS Lambda, API Gateway, and DynamoDB, reducing operational costs by 40%.",
      "Optimized CI/CD automation with AWS CodePipeline, GitLab CI/CD, and containerized deployments.",
      "Strengthened cloud security with IAM policies, AWS WAF, and GuardDuty."
    ],
    icon: <Briefcase size={20} className="text-cyber" />
  },
  {
    id: 3,
    title: "Machine Learning Data Associate",
    company: "Amazon Development Centre, India",
    period: "Sept 2021 - Jan 2022",
    description: [
      "Contributed to AI/ML model training by enhancing Amazon Search Services through data annotation & quality assessments."
    ],
    icon: <Briefcase size={20} className="text-cyber" />
  }
];

export const certificates: Certificate[] = [
  {
    id: 1,
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    icon: <Award size={20} className="text-tech" />
  },
  {
    id: 2,
    name: "AWS Solution Architect Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    icon: <Award size={20} className="text-tech" />
  },
  {
    id: 3,
    name: "Junior Penetration Tester",
    issuer: "TryHackMe",
    date: "2022",
    icon: <Award size={20} className="text-tech" />
  },
  {
    id: 4,
    name: "DevSecOps Path Completion",
    issuer: "TryHackMe",
    date: "2022",
    icon: <Award size={20} className="text-tech" />
  }
];
