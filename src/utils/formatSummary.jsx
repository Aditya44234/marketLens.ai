import React from "react";

// Helper to format markdown table string to React table
function parseMarkdownTable(section, key) {
  // Get all lines that look like table rows (contain "|")
  const rows = section
    .trim()
    .split("\n")
    .filter(line => line.includes("|"))
    .map(line => line.trim());

  if (!rows.length) return null;

  // Remove empty start/end pipes and split by "|"
  const cells = rows.map(row =>
    row.replace(/^\s*\|/, "").replace(/\|\s*$/, "").split("|").map(cell => cell.trim())
  );

  // Build header and body
  const header = cells[0];
  const body = cells.slice(1);

  return (
    <table
      key={key}
      className="my-4 w-full max-w-2xl border border-blue-300 dark:border-slate-600 rounded bg-white dark:bg-slate-700 text-sm"
    >
      <thead>
        <tr>
          {header.map((th, i) => (
            <th key={i} className="border px-2 py-1 font-semibold">{th}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((row, ri) => (
          <tr key={ri}>
            {row.map((td, ci) => (
              <td key={ci} className="border px-2 py-1">{td}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/**
 * Cleans and formats the summary string:
 * - Handles bold (**text**)
 * - bullet points (* ...)
 * - markdown tables (| ... |)
 * - headings and paragraphs
 */
export function formatSummary(text) {
  if (!text) return null;

  // Split into sections using triple dash, double newline, or headings
  const sections = text.split(/(?:---|\n{2,})/);

  return sections.map((section, i) => {
    // Table detection: section with multiple "|" lines
    const tableLines = section.split("\n").filter(l => l.includes("|"));
    if (tableLines.length >= 2) {
      return parseMarkdownTable(section, `table-${i}`);
    }

    // Boldify markdown **text**
    let html = section.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

    // Convert bullet points to <ul><li>
    if (html.includes("* ")) {
      const lines = html.split("\n").filter(l => l.trim());
      return (
        <ul className="list-disc ml-6 my-2" key={i}>
          {lines.map((line, idx) =>
            line.startsWith("* ") ? (
              <li key={idx} dangerouslySetInnerHTML={{ __html: line.slice(2) }} />
            ) : (
              <div key={idx} className="my-1" dangerouslySetInnerHTML={{ __html: line }} />
            )
          )}
        </ul>
      );
    } else {
      return (
        <p key={i} className="my-2">
          <span dangerouslySetInnerHTML={{ __html: html.trim() }} />
        </p>
      );
    }
  });
}
