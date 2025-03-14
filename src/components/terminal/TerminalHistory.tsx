
import React from "react";
import { ChevronRight } from "lucide-react";

type HistoryItem = {
  command: string;
  output: string | JSX.Element;
};

type TerminalHistoryProps = {
  history: HistoryItem[];
};

const TerminalHistory = ({ history }: TerminalHistoryProps) => {
  return (
    <>
      {history.map((item, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center text-light">
            <span className="text-cyber mr-1">$</span>
            <span className="text-tech mr-2">~</span>
            <ChevronRight size={16} className="text-cyber mr-1" />
            <span>{item.command}</span>
          </div>
          <div className="ml-5 mt-1 text-light-darker">{item.output}</div>
        </div>
      ))}
    </>
  );
};

export default TerminalHistory;
