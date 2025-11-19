import React, { useState } from "react";

function DownloadButton({ data, filename = "report.json" }) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    setTimeout(() => {
      const content = JSON.stringify(data, null, 2);
      const blob = new Blob([content], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
      
      setIsDownloading(false);
    }, 300);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className="group relative inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-sm font-medium rounded-lg shadow-lg shadow-green-600/30 hover:shadow-green-700/40 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {/* Download Icon */}
      <svg
        className={`h-4 w-4 transition-transform duration-200 ${
          isDownloading ? "animate-bounce" : "group-hover:-translate-y-0.5"
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      
      <span className="hidden sm:inline">
        {isDownloading ? "Downloading..." : "Download Report"}
      </span>
      <span className="sm:hidden">
        {isDownloading ? "..." : "Download"}
      </span>
    </button>
  );
}

export default DownloadButton;