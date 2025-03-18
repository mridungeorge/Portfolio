
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface TerminalCommandsTableProps {
  commands: { command: string; count: number }[];
}

const TerminalCommandsTable = ({ commands }: TerminalCommandsTableProps) => {
  return (
    <Card className="glass">
      <CardHeader>
        <CardTitle>Terminal Usage</CardTitle>
        <CardDescription>Most popular terminal commands</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Command</TableHead>
              <TableHead className="text-right">Usage Count</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {commands.map((item) => (
              <TableRow key={item.command}>
                <TableCell className="font-medium">{item.command}</TableCell>
                <TableCell className="text-right">{item.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TerminalCommandsTable;
