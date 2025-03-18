
import InteractionPieChart from "../InteractionPieChart";
import TerminalCommandsTable from "../TerminalCommandsTable";

interface InteractionsTabProps {
  interactionData: { name: string; value: number }[];
  terminalCommands: { command: string; count: number }[];
}

const InteractionsTab = ({ interactionData, terminalCommands }: InteractionsTabProps) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InteractionPieChart data={interactionData} />
        <TerminalCommandsTable commands={terminalCommands} />
      </div>
    </div>
  );
};

export default InteractionsTab;
