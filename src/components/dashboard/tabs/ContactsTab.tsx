<<<<<<< HEAD

import ContactRequestsTable from "../ContactRequestsTable";

=======
import ContactRequestsTable from "../ContactRequestsTable";
>>>>>>> 44e5f949b15dd8f2e2429dac871b416fc238fd53
interface ContactsTabProps {
  contactRequests: any[];
}

const ContactsTab = ({ contactRequests }: ContactsTabProps) => {
  const hasContactRequests = contactRequests && contactRequests.length > 0;

  if (!hasContactRequests) {
    return (
      <div className="flex items-center justify-center h-60">
        <div className="text-center">
          <p className="text-xl text-muted-foreground">No contact requests yet</p>
          <p className="text-sm text-muted-foreground mt-2">Contact form submissions will appear here</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <ContactRequestsTable requests={contactRequests} />
    </div>
  );
};

export default ContactsTab;
