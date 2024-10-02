export const STUDY_DATA = [
  {
    id: "a1ee1e76-ea9w-423f-4ccf-8d9b4fbf331e",
    Habit: [
      {
        id: "2b3c4d5e-f6g7-8h9i-0j1k-l2m3n4o5p6q7",
        habitName: "스트레칭",
        checked: true,
        createdAt: "2024-09-27T09:30:00Z",
        updatedAt: "2024-09-27T09:30:00Z",
        studyId: "a1ee1e76-ea9w-423f-4ccf-8d9b4fbf331e",
        completedHabits: [
          {
            id: "2b3c4d5e-f6g7-8h9i-0j1k-l2m3n4o5p6q7",
            completeDate: "2024-09-28T12:00:00Z",
          },
        ],
      },
      {
        id: "3c4d5e6f-g7h8-9i0j-1k2l-m3n4o5p6q7r8",
        habitName: "React 챕터 2 공부",
        checked: false,
        createdAt: "2024-09-29T11:15:00Z",
        updatedAt: "2024-09-29T11:15:00Z",
        studyId: "a1ee1e76-ea9w-423f-4ccf-8d9b4fbf331e",
        completedHabits: [], // 아직 완료되지 않음
      },
      {
        id: "4d5e6f7g-h8i9-0j1k-2l3m-n4o5p6q7r8s9",
        habitName: "10분 명상",
        checked: true,
        createdAt: "2024-09-30T08:45:00Z",
        updatedAt: "2024-09-30T08:45:00Z",
        studyId: "a1ee1e76-ea9w-423f-4ccf-8d9b4fbf331e",
        completedHabits: [], // 아직 완료되지 않음
      },
    ],
    CompletedHabit: [
      {
        id: "2b3c4d5e-f6g7-8h9i-0j1k-l2m3n4o5p6q7",
        completeDate: "2024-09-28T12:00:00Z",
        habitId: "2b3c4d5e-f6g7-8h9i-0j1k-l2m3n4o5p6q7",
        studyId: "a1ee1e76-ea9w-423f-4ccf-8d9b4fbf331e",
      },
    ],
  },
];

export const HABIT_DATA = [
  {
    id: "2b3c4d5e-f6g7-8h9i-0j1k-l2m3n4o5p6q7",
    habitName: "스트레칭",
    checked: true,
    createdAt: "2024-09-27T09:30:00Z",
    updatedAt: "2024-09-27T09:30:00Z",
    studyId: "a1ee1e76-ea9w-423f-4ccf-8d9b4fbf331e",
    completedHabits: [
      {
        id: "2b3c4d5e-f6g7-8h9i-0j1k-l2m3n4o5p6q7",
        completeDate: "2024-09-28T12:00:00Z",
      },
    ],
  },
  {
    id: "3c4d5e6f-g7h8-9i0j-1k2l-m3n4o5p6q7r8",
    habitName: "React 챕터 2 공부",
    checked: false,
    createdAt: "2024-09-29T11:15:00Z",
    updatedAt: "2024-09-29T11:15:00Z",
    studyId: "a1ee1e76-ea9w-423f-4ccf-8d9b4fbf331e",
    completedHabits: [], // 아직 완료되지 않음
  },
  {
    id: "4d5e6f7g-h8i9-0j1k-2l3m-n4o5p6q7r8s9",
    habitName: "10분 명상",
    checked: true,
    createdAt: "2024-09-30T08:45:00Z",
    updatedAt: "2024-09-30T08:45:00Z",
    studyId: "a1ee1e76-ea9w-423f-4ccf-8d9b4fbf331e",
    completedHabits: [], // 아직 완료되지 않음
  },
];

export const COMPLETE_HABIT_DATA = [
  {
    id: "2b3c4d5e-f6g7-8h9i-0j1k-l2m3n4o5p6q7",
    completeDate: "2024-09-28T12:00:00Z",
    habitId: "2b3c4d5e-f6g7-8h9i-0j1k-l2m3n4o5p6q7",
    studyId: "a1ee1e76-ea9w-423f-4ccf-8d9b4fbf331e",
  },
];
