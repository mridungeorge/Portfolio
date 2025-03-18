
import { useQuery } from "@tanstack/react-query";
import StatsCard from "../StatsCard";
import PageViewsChart from "../PageViewsChart";

interface OverviewTabProps {
  pageViewsData: { name: string; views: number }[];
  interactionData: { name: string; value: number }[];
}

const OverviewTab = ({ pageViewsData, interactionData }: OverviewTabProps) => {
  // Calculate totals for the cards
  const totalPageViews = pageViewsData.reduce((sum, item) => sum + item.views, 0);
  const totalResumeDownloads = interactionData.find(item => item.name === "Resume Downloads")?.value || 0;
  const totalTerminalSessions = interactionData.find(item => item.name === "Terminal Usage")?.value || 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Total Page Views"
          description="Last 7 days"
          value={totalPageViews}
          changeText="+12.5% from last week"
        />
        
        <StatsCard
          title="Resume Downloads"
          description="Last 7 days"
          value={totalResumeDownloads}
          changeText="+23% from last week"
        />
        
        <StatsCard
          title="Terminal Sessions"
          description="Last 7 days"
          value={totalTerminalSessions}
          changeText="+8% from last week"
        />
      </div>
      
      <PageViewsChart data={pageViewsData} />
    </div>
  );
};

export default OverviewTab;
