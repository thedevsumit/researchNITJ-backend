import express from "express";
import { getResearch } from "../controllers/researchController.js";

const router = express.Router();
router.get("/research", getResearch);

export default router;
