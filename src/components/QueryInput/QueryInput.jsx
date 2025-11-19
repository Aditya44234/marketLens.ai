import React from "react";
import { SparklesIcon } from "@heroicons/react/24/outline"; // Needs @heroicons/react installed

function QueryInput({ value, onChange, placeholder = "Type your query..." }) {
  return (
    <div className="mb-4 w-full">
      <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-2">
        Your Query
      </label>
      <div className="relative flex items-center">
        <span className="absolute left-3 pointer-events-none text-blue-400 dark:text-blue-300">
          <SparklesIcon className="w-5 h-5" />
        </span>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete="off"
          className="
            w-full pl-10 pr-3 py-2 rounded-xl bg-white/80 dark:bg-slate-800/70
            border border-slate-200 dark:border-slate-700 shadow-sm
            focus:outline-none focus:ring-2 focus:ring-blue-400
            text-base text-slate-900 dark:text-slate-100
            transition
            placeholder:text-slate-400 dark:placeholder:text-slate-400
            backdrop-blur-[2px]
            hover:border-blue-400 dark:hover:border-blue-400
          "
        />
      </div>
    </div>
  );
}

export default QueryInput;
