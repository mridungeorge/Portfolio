
import React from "react";

const TerminalHeader = () => {
  return (
    <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-gray-700">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
      <span className="ml-2 text-sm text-light-darker">mridun@portfolio:~</span>
    </div>
  );
};

export default TerminalHeader;
