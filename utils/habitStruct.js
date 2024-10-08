import * as s from "superstruct";

export const CreateHabit = s.object({
  habitName: s.string(),
  studyId: s.optional(s.string()),
});
