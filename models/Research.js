import mongoose from "mongoose";

const ResearchSchema = new mongoose.Schema({
  facultyName: String,
  projectType: String,
  title: String,
  domain: String,
  fundingAgency: String,
  from: String,
  to: String,
  amount: String,
  status: String,
  coInvestigator: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Research", ResearchSchema);
