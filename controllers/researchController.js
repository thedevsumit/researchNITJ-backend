import Research from "../models/Research.js";

export const getResearch = async (req, res) => {
  const data = await Research.find();
  res.json(data);
};
