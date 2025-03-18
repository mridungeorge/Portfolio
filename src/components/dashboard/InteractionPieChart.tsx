
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

interface InteractionPieChartProps {
  data: { name: string; value: number }[];
}

// Colors for the pie chart
const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const InteractionPieChart = ({ data }: InteractionPieChartProps) => {
  return (
    <Card className="glass">
      <CardHeader>
        <CardTitle>Interaction Distribution</CardTitle>
        <CardDescription>How visitors interact with your portfolio</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractionPieChart;
