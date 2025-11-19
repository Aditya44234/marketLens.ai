import React from "react";
import { formatSummary } from "../../utils/formatSummary.jsx";

function Summary({ text }) {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative px-6 py-5 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
        <div className="flex items-center gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
              Summary
            </h2>
          </div>
        </div>
      </div>

      <div className="relative p-6 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 dark:from-slate-800/50 dark:via-slate-800 dark:to-slate-900/50">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <div className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {formatSummary(text)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
