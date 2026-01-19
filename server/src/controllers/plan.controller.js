import { Plan } from "../models/plan.model.js";
import { generatePlanWithAI } from "../utils/aiHelper.js";
import mongoose from "mongoose";

// CREATE PLAN
export const createPlan = async (req, res) => {
  try {
    const { userId, subject, hoursPerDay, howManyDays, difficulty, topics } = req.body;

    console.log('Request body:', req.body);

    if (!userId || !subject || !hoursPerDay || !howManyDays) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Validate and convert userId to ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid userId format" });
    }

    // Generate AI study plan
    const planText = await generatePlanWithAI(subject, hoursPerDay, howManyDays, difficulty, topics);

    const newPlan = await Plan.create({
      userId: new mongoose.Types.ObjectId(userId),
      subject,
      hoursPerDay,
      howManyDays,
      difficulty,
      topics: topics || "", 
      generatedPlan: planText,
    });

    return res.status(201).json({
      message: "Study plan created successfully",
      plan: newPlan,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating plan", error: error.message });
  }
};

// GET ALL PLANS FOR A USER
export const getUserPlans = async (req, res) => {
  try {
    const { userId } = req.params;

    // Validate userId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid userId format" });
    }

    const plans = await Plan.find({ userId: new mongoose.Types.ObjectId(userId) }).sort({ createdAt: -1 });

    return res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: "Error fetching plans", error: error.message });
  }
};

// DELETE A PLAN
export const deletePlan = async (req, res) => {
  try {
    const { planId } = req.params;

    const deleted = await Plan.findByIdAndDelete(planId);

    if (!deleted) {
      return res.status(404).json({ message: "Plan not found" });
    }

    return res.status(200).json({ message: "Plan deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting plan", error: error.message });
  }
};
