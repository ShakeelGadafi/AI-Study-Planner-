import express from "express";
import { createPlan, getUserPlans, deletePlan } from "../controllers/plan.controller.js";

const router = express.Router();

router.post("/create", createPlan);
router.get("/:userId", getUserPlans);
router.delete("/:planId", deletePlan);

export default router;