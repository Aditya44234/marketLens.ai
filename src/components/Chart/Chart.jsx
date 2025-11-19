import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

function Chart({ chartData }) {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 15,
          font: {
            size: 12,
            weight: "500",
          },
          color: "#64748b",
        },
      },
      tooltip: {
        backgroundColor: "rgba(15, 23, 42, 0.95)",
        padding: 12,
        cornerRadius: 8,
        titleColor: "#f1f5f9",
        bodyColor: "#cbd5e1",
        borderColor: "rgba(148, 163, 184, 0.2)",
        borderWidth: 1,
        displayColors: true,
        usePointStyle: true,
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat().format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: "#94a3b8",
          font: {
            size: 11,
          },
          padding: 8,
        },
      },
      y: {
        grid: {
          color: "rgba(148, 163, 184, 0.1)",
          drawBorder: false,
        },
        ticks: {
          color: "#94a3b8",
          font: {
            size: 11,
          },
          padding: 8,
          callback: function (value) {
            return new Intl.NumberFormat().format(value);
          },
        },
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
    elements: {
      line: {
        tension: 0.4,
        borderWidth: 2.5,
      },
      point: {
        radius: 3,
        hoverRadius: 6,
        borderWidth: 2,
        hoverBorderWidth: 3,
      },
    },
  };

  // Enhance chartData with better styling
  const enhancedChartData = {
    ...chartData,
    datasets: chartData.datasets?.map((dataset, index) => {
      const colors = [
        {
          border: "rgb(59, 130, 246)",
          background: "rgba(59, 130, 246, 0.1)",
        },
        {
          border: "rgb(168, 85, 247)",
          background: "rgba(168, 85, 247, 0.1)",
        },
        {
          border: "rgb(34, 197, 94)",
          background: "rgba(34, 197, 94, 0.1)",
        },
        {
          border: "rgb(251, 146, 60)",
          background: "rgba(251, 146, 60, 0.1)",
        },
        {
          border: "rgb(236, 72, 153)",
          background: "rgba(236, 72, 153, 0.1)",
        },
      ];

      const color = colors[index % colors.length];

      return {
        ...dataset,
        borderColor: dataset.borderColor || color.border,
        backgroundColor: dataset.backgroundColor || color.background,
        fill: dataset.fill !== undefined ? dataset.fill : true,
        pointBackgroundColor: dataset.pointBackgroundColor || color.border,
        pointBorderColor: dataset.pointBorderColor || "#fff",
        pointHoverBackgroundColor:
          dataset.pointHoverBackgroundColor || color.border,
        pointHoverBorderColor: dataset.pointHoverBorderColor || "#fff",
      };
    }),
  };

  return (
    <div className="w-full">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                Trend Chart
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Visual representation of data trends
              </p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Chart Container */}
        <div className="p-6 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
          <div className="bg-white dark:bg-slate-800/50 rounded-lg p-4">
            <Line data={enhancedChartData} options={options} />
          </div>
        </div>

        {/* Footer Stats */}
        <div className="px-6 py-3 bg-slate-50 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500">
            <span>
              {chartData.datasets?.length || 0}{" "}
              {chartData.datasets?.length === 1 ? "dataset" : "datasets"}
            </span>
            <span>{chartData.labels?.length || 0} data points</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
