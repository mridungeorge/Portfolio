
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  description: string;
  value: number;
  changeText: string;
}

const StatsCard = ({ title, description, value, changeText }: StatsCardProps) => {
  return (
    <Card className="glass">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        {changeText}
      </CardFooter>
    </Card>
  );
};

export default StatsCard;
