
import InteractionPieChart from "../InteractionPieChart";
import TerminalCommandsTable from "../TerminalCommandsTable";

interface InteractionsTabProps {
  interactionData: { name: string; value: number }[];
  terminalCommands: { command: string; count: number }[];
}

const InteractionsTab = ({ interactionData, terminalCommands }: InteractionsTabProps) => {
  const hasInteractionData = interactionData && interactionData.length > 0;
  const hasCommandData = terminalCommands && terminalCommands.length > 0;

  if (!hasInteractionData && !hasCommandData) {
    return (
      <div className="flex items-center justify-center h-60">
        <div className="text-center">
          <p className="text-xl text-muted-foreground">No interaction data available</p>
          <p className="text-sm text-muted-foreground mt-2">User interaction data will appear here once collected</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hasInteractionData ? (
          <InteractionPieChart data={interactionData} />
        ) : (
          <div className="glass rounded-lg p-4 flex items-center justify-center h-60">
            <p className="text-muted-foreground">No interaction statistics available</p>
          </div>
        )}
        
        {hasCommandData ? (
          <TerminalCommandsTable commands={terminalCommands} />
        ) : (
          <div className="glass rounded-lg p-4 flex items-center justify-center h-60">
            <p className="text-muted-foreground">No terminal commands data available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractionsTab;
