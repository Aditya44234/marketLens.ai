
function Table({ tableData }) {
  // Check if tableData is an object with multiple named tables
  const isMultipleTables = tableData && typeof tableData === 'object' && !Array.isArray(tableData);
  
  // If it's multiple tables, render them side by side
  if (isMultipleTables) {
    const tableNames = Object.keys(tableData);
    
    return (
      <div className={`grid gap-6 ${tableNames.length === 2 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
        {tableNames.map((tableName) => (
          <SingleTable 
            key={tableName} 
            tableData={tableData[tableName]} 
            tableName={tableName}
          />
        ))}
      </div>
    );
  }
  
  // Single table
  return <SingleTable tableData={tableData} />;
}

function SingleTable({ tableData, tableName }) {
  if (!tableData || tableData.length === 0) {
    return (
      <div className="flex items-center justify-center p-12 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-xl">
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
          <p className="mt-4 text-slate-600 dark:text-slate-400 font-medium">
            No data available
          </p>
        </div>
      </div>
    );
  }

  const columns = Object.keys(tableData[0]);

  return (
    <div className="w-full">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
            {tableName ? tableName.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : 'Filtered Data'}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            {tableData.length} {tableData.length === 1 ? "record" : "records"} found
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-900/50">
                {columns.map((col, idx) => (
                  <th
                    key={col}
                    className={`px-6 py-4 text-left text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider ${
                      idx === 0 ? "sticky left-0 bg-slate-100 dark:bg-slate-900/50" : ""
                    }`}
                  >
                    {col.replace(/_/g, " ")}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {tableData.map((row, i) => (
                <tr
                  key={i}
                  className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-150"
                >
                  {columns.map((col, idx) => (
                    <td
                      key={col}
                      className={`px-6 py-4 text-sm text-slate-700 dark:text-slate-300 whitespace-nowrap ${
                        idx === 0
                          ? "sticky left-0 bg-white dark:bg-slate-800 font-medium"
                          : ""
                      }`}
                    >
                      {row[col] !== null && row[col] !== undefined && row[col] !== ""
                        ? String(row[col])
                        : <span className="text-slate-400 italic">—</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-700">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            Displaying all records
          </p>
        </div>
      </div>
    </div>
  );
}

export default Table;