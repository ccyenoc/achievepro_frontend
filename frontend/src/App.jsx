import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/manager-dashboard";
import KpiManagement from "./pages/kpi-management";
import VerifyKPI from "./pages/verify-kpi";
import CreateKPI from "./pages/create-kpi"
import KPIProgressPage from "./pages/kpi-progress";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/kpi-management" element={<KpiManagement />} />
        <Route path="/verify-kpi" element={<VerifyKPI />} />
        <Route path="/create-kpi" element={<CreateKPI />} />
        <Route path="/kpi-progress" element={<KPIProgressPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;