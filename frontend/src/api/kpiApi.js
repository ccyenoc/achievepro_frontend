import { kpis } from "../data/kpiData";

// simulate delay (optional)
const delay = (ms = 300) => new Promise(res => setTimeout(res, ms));

// 📊 Get all KPIs
export const getKpis = async () => {
  await delay();
  return kpis;
};

// 📊 Get single KPI
export const getKpiById = async (id) => {
  await delay();
  return kpis.find(kpi => kpi.id === id);
};

// 📊 Get KPIs assigned to a user
export const getKpisByUser = async (userId) => {
  await delay();
  return kpis.filter(kpi =>
    kpi.assignedUserIds.includes(userId)
  );
};

// ✏️ Update KPI progress
export const updateKpiProgress = async (kpiId, newValue) => {
  await delay();
  const kpi = kpis.find(k => k.id === kpiId);
  if (kpi) {
    kpi.current = newValue;
  }
  return kpi;
};

// ➕ Create KPI
export const createKpi = async (newKpi) => {
  await delay();
  kpis.push(newKpi);
  return newKpi;
};