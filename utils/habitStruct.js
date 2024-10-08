import * as s from "superstruct";

export const CreateHabit = s.object({
  habitName: s.string(),
  studyId: s.optional(s.string()),
});

const HabitStruct = s.object({
  id: s.string(),
  habitName: s.string(),
  checked: s.boolean(),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
});

export const UpdateHabits = s.object({
  habits: s.array(HabitStruct),
});
