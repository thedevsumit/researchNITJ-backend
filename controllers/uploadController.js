import { parseExcelFile } from "../utils/parseExcel.js";
import Research from "../models/Research.js";
import path from "path";

export const uploadFile = async (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });

  const filePath = req.file.path;
  const rows = parseExcelFile(filePath);

 const formatted = rows.map((row) => ({
   facultyName: row["Faculty Name"] || "",
   projectType: row["Project Type"] || "",
   title: row["Title"] || "",
   domain: row["Domain"] || "",
   fundingAgency: row["Funding Agency"] || "",
   from: row["From"] || "",
   to: row["To"] || "",
   amount: row["Amount(in lakhs)"] || "",
   status: row["Status"] || "",
   coInvestigator: row["Co-investigator"] || "",
 }));

  res.json({ rows: formatted });
};

export const saveData = async (req, res) => {
  try {
    await Research.insertMany(req.body);
    res.json({ message: "Saved successfully" });
  } catch (err) {
    res.status(500).json({ message: "Save failed" });
  }
};
