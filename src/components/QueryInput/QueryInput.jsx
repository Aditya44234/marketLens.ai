import React from "react";

const exampleQueries = [
  "Give me analysis of Wakad",
  "Compare Ambegaon Budruk and Aundh demand trends",
  "Show price growth for Akurdi over the last 3 years",
];

function QueryInput({ value, onChange, placeholder = "Type your query..." }) {
  // Handles clicking an example query
  const handleExampleClick = (q) => {
    onChange({ target: { value: q } });
  };

  return (
    <div className="mb-4 w-full">
      <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-2">
        Your Query
      </label>

      {/* Example Queries */}
      <div className="flex flex-wrap gap-2 mb-3">
        {exampleQueries.map((q, i) => (
          <button
            key={i}
            type="button"
            className="bg-blue-50 dark:bg-slate-700/70 text-blue-700 dark:text-blue-200
                       px-2.5 py-1 rounded-full text-xs sm:text-sm font-medium border border-blue-200
                       dark:border-slate-600 hover:bg-blue-100 hover:dark:bg-slate-700/90 transition"
            onClick={() => handleExampleClick(q)}
            tabIndex={-1}
          >
            {q}
          </button>
        ))}
      </div>

      <div className="relative flex items-center">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete="off"
          className="
            w-full pl-3  pr-3 py-4 rounded-xl bg-white/80 dark:bg-slate-800/70
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

      {/* Note Below */}
      <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
        <span className="font-medium text-blue-600 dark:text-blue-300">
          Note:
        </span>{" "}
        Please ask questions similar to the above examples, as our AI is
        optimized for these types of analytics queries.
      </div>
    </div>
  );
}

export default QueryInput;
