
import ContactRequestsTable from "../ContactRequestsTable";

interface ContactsTabProps {
  contactRequests: any[];
}

const ContactsTab = ({ contactRequests }: ContactsTabProps) => {
  return (
    <div className="space-y-6">
      <ContactRequestsTable requests={contactRequests} />
    </div>
  );
};

export default ContactsTab;
