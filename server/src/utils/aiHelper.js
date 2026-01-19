import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generatePlanWithAI = async (subject, hoursPerDay, howManyDays, difficulty, topics) => {
  try {
    const prompt = `
      Create a detailed ${difficulty} level study plan for ${subject}.
      Duration: ${howManyDays} days.
      Daily study time: ${hoursPerDay} hours.
      ${topics ? `Focus specificially on these topics: ${topics}` : ""}
      
      Structure the response as:
      Study Plan for ${subject} (${difficulty.toUpperCase()} Level)
      ----------------------------------------------------
      Day 1: [Activities]
      Day 2: [Activities]
      ...
      Day ${howManyDays}: [Activities]
      
      Keep it practical and actionable.
    `;

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-4-turbo-preview", // or "gpt-3.5-turbo" if preferred
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI API Error:", error);
    // Fallback if API fails
    return generateFakePlan(subject, hoursPerDay, difficulty);
  }
};

export const generateFakePlan = (subject, hoursPerDay, difficulty) => {
  return `
Study Plan for ${subject} (${difficulty.toUpperCase()} Level)
----------------------------------------------------

Day 1: Study ${hoursPerDay} hours — Focus on fundamentals
Day 2: Practice problems for ${hoursPerDay} hours
Day 3: Revise key concepts
Day 4: Attempt a mock test
Day 5: Review mistakes and improve weak areas
Day 6: Final revision
Day 7: Rest / Light recap

Keep consistency and don’t overload yourself. Good luck!
`;
};