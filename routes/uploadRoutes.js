import express from "express";
import multer from "multer";
import { uploadFile, saveData } from "../controllers/uploadController.js";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), uploadFile);
router.post("/save-data", saveData);

export default router;
