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