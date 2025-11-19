import React, { useRef, useState } from "react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid"; // install @heroicons/react

function FileUpload({ onFileChange }) {
  const inputRef = useRef();
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "");
    onFileChange(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
      onFileChange(file);
    }
  };

  return (
    <div className="mb-6 w-full">
      <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-2">
        Upload Excel file
      </label>
      <div
        className="
          flex items-center gap-3
          border-2 border-dashed border-blue-300 dark:border-blue-700
          rounded-xl bg-blue-50/70 dark:bg-slate-800/40
          p-4 transition cursor-pointer
          hover:border-blue-500 dark:hover:border-blue-400
        "
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <ArrowUpTrayIcon className="w-6 h-6 text-blue-500 dark:text-blue-300" />
        <div>
          <div className="text-slate-800 dark:text-slate-100 font-medium text-sm">
            {fileName ? (
              <span>
                <span className="font-semibold text-blue-600">{fileName}</span> selected
              </span>
            ) : (
              "Click or drag .xlsx file here"
            )}
          </div>
          <div className="text-xs text-slate-400">Only .xlsx or .xls files allowed</div>
        </div>
        <input
          ref={inputRef}
          type="file"
          accept=".xlsx,.xls"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
}

export default FileUpload;
