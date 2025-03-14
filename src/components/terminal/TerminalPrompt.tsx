
import React, { useRef } from "react";
import { ChevronRight } from "lucide-react";

type TerminalPromptProps = {
  command: string;
  setCommand: React.Dispatch<React.SetStateAction<string>>;
  handleCommand: (e: React.FormEvent) => void;
};

const TerminalPrompt = ({ command, setCommand, handleCommand }: TerminalPromptProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={handleCommand} className="flex items-center mt-2">
      <span className="text-cyber mr-1">$</span>
      <span className="text-tech mr-2">~</span>
      <ChevronRight size={16} className="text-cyber mr-1" />
      <input
        ref={inputRef}
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        className="flex-1 bg-transparent outline-none text-light"
        autoFocus
      />
    </form>
  );
};

export default TerminalPrompt;
