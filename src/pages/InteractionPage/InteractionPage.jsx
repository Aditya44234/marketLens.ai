import React, { useState, useEffect } from "react";
import FileUpload from "../../components/FileUpload/FileUpload";
import QueryInput from "../../components/QueryInput/QueryInput";
import Button from "../../components/Button/Button";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import { useAnalyzeQuery } from "../../hooks/useAnalyzeQuery";
import { useNavigate } from "react-router-dom";

function InteractionPage() {
  const [file, setFile] = useState(null);
  const [query, setQuery] = useState("");
  const [fieldError, setFieldError] = useState("");
  const { mutate, data, error, isPending } = useAnalyzeQuery();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file && !query) {
      setFieldError("Please select an Excel file and enter your query.");
      return;
    }
    if (!file) {
      setFieldError("Please select an Excel file to analyze.");
      return;
    }
    if (!query) {
      setFieldError("Please enter your analysis query.");
      return;
    }
    setFieldError(""); // Clear any previous field error
    mutate({ file, query });
  };

  // Clear fieldError as soon as either field is filled
  useEffect(() => {
    if (file && query && fieldError) {
      setFieldError("");
    }
  }, [file, query, fieldError]);

  // When data is received, navigate to /report
  useEffect(() => {
    if (data) {
      navigate("/report", { state: { result: data } });
    }
  }, [data, navigate]);

  return (
    <div className="min-h-screen bg-white dark:bg-navy transition-colors text-gray-900 dark:text-gray-100 flex flex-col items-center py-8 px-2">
      {/* Top Bar with Site Name and Theme */}
      <div className="flex w-full max-w-md items-center justify-between mb-8">
        <div>
          <span className="font-extrabold text-2xl tracking-tighter text-blue-600 dark:text-blue-400">
            MarketLens
            <span className="text-blue-400 dark:text-blue-300">.ai</span>
          </span>
          <div className="text-xs sm:text-sm mt-1 text-slate-400 dark:text-slate-300 font-medium">
            Get instant, AI-powered market analytics from your Excel data.
          </div>
        </div>
        <ThemeToggle />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-navy rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-md space-y-4"
      >
        <FileUpload onFileChange={setFile} />
        <QueryInput value={query} onChange={(e) => setQuery(e.target.value)} />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Analyzing..." : "Analyze"}
        </Button>
        {fieldError && (
          <p className="text-red-500 font-medium text-center mt-2">
            {fieldError}
          </p>
        )}
        {error && <p className="text-red-500">{error.message}</p>}
      </form>
    </div>
  );
}

export default InteractionPage;
