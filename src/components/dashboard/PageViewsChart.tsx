
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface PageViewsChartProps {
  data: { name: string; views: number }[];
}

const PageViewsChart = ({ data }: PageViewsChartProps) => {
  return (
    <Card className="glass">
      <CardHeader>
        <CardTitle>Page Views Trend</CardTitle>
        <CardDescription>Daily visits over the past week</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ChartContainer config={{ views: { theme: { light: '#0088FE', dark: '#0088FE' } } }}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Bar dataKey="views" fill="#0088FE" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PageViewsChart;
