import { submissions } from "../data/submissionsData";

const delay = (ms = 300) => new Promise(res => setTimeout(res, ms));

// 📁 Get all submissions
export const getSubmissions = async () => {
  await delay();
  return submissions;
};

// 📁 Get submissions for a KPI
export const getSubmissionsByKpi = async (kpiId) => {
  await delay();
  return submissions.filter(sub => sub.kpiId === kpiId);
};

// 📁 Submit new evidence
export const submitEvidence = async (newSubmission) => {
  await delay();
  submissions.push({
    ...newSubmission,
    status: "pending",
    submittedAt: new Date().toISOString()
  });
  return newSubmission;
};

// ✅ Approve submission
export const approveSubmission = async (id, managerId) => {
  await delay();
  const sub = submissions.find(s => s.id === id);
  if (sub) {
    sub.status = "approved";
    sub.approvedBy = managerId;
    sub.approvedAt = new Date().toISOString();
  }
  return sub;
};

// ❌ Reject submission
export const rejectSubmission = async (id, comment) => {
  await delay();
  const sub = submissions.find(s => s.id === id);
  if (sub) {
    sub.status = "rejected";
    sub.comments = comment;
  }
  return sub;
};