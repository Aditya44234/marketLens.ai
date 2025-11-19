import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Chart from "../../components/Chart/Chart";
import Table from "../../components/Table/Table";
import Summary from "../../components/Summary/Summary";
import DownloadButton from "../../components/DownloadButton/DownloadButton";

function ReportPage() {
  const location = useLocation();
  const reportData = location.state?.result;
  const [activeView, setActiveView] = useState("overview");

  if (!reportData) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-bl from-blue-50 via-white to-blue-100 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-12 text-center max-w-md">
          <svg
            className="mx-auto h-16 w-16 text-slate-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
            No Report Data
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Please run an analysis first to generate a report.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-bl from-blue-50 via-white to-blue-100 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 transition-colors">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">
                Analysis Report
              </h1>
            </div>
            <DownloadButton
              data={reportData}
              filename="real_estate_report.json"
            />
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-2 mt-6 overflow-x-auto">
            <button
              onClick={() => setActiveView("overview")}
              className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                activeView === "overview"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveView("chart")}
              className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                activeView === "chart"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
              }`}
            >
              Trends
            </button>
            <button
              onClick={() => setActiveView("table")}
              className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                activeView === "table"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
              }`}
            >
              Data Table
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeView === "overview" && (
          <div className="space-y-6">
            {/* Summary Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
              <Summary text={reportData.summary} />
            </div>

            {/* Two Column Layout for Chart and Quick Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Chart - Takes 2 columns */}
              <div className="lg:col-span-2">
                <Chart chartData={reportData.chart} />
              </div>

              {/* Quick Stats Card */}
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">
                    Quick Stats
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg">
                      <p className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                        Total Records
                      </p>
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">
                        {reportData.table?.length || 0}
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg">
                      <p className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                        Data Points
                      </p>
                      <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mt-1">
                        {reportData.chart?.labels?.length || 0}
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg">
                      <p className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                        Datasets
                      </p>
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400 mt-1">
                        {reportData.chart?.datasets?.length || 0}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeView === "chart" && (
          <div className="space-y-6">
            <Chart chartData={reportData.chart} />
          </div>
        )}

        {activeView === "table" && (
          <div className="space-y-6">
            <Table tableData={reportData.table} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ReportPage;