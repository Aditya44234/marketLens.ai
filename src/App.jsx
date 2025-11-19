import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import InteractionPage from "./pages/InteractionPage/InteractionPage";
import ReportPage from "./pages/ReportPage/ReportPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InteractionPage />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
