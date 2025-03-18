
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ContactRequest {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

interface ContactRequestsTableProps {
  requests: ContactRequest[];
}

const ContactRequestsTable = ({ requests }: ContactRequestsTableProps) => {
  return (
    <Card className="glass">
      <CardHeader>
        <CardTitle>Recent Contact Requests</CardTitle>
        <CardDescription>People who have reached out through the contact form</CardDescription>
      </CardHeader>
      <CardContent>
        {requests.length === 0 ? (
          <p className="text-center py-6 text-muted-foreground">No contact requests yet</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell className="font-medium">{request.name}</TableCell>
                  <TableCell>{request.email}</TableCell>
                  <TableCell className="max-w-xs truncate">{request.message}</TableCell>
                  <TableCell>
                    {new Date(request.created_at).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
};

export default ContactRequestsTable;
