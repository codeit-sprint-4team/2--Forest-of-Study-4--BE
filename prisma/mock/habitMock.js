import { STUDY_DATA } from "./studyMock.js";

export const HABIT_DATA = [
  {
    id: "1a2b3c4d-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
    habitName: "챕터 1 강의 듣기",
    checked: false,
    createdAt: "2024-09-28T10:00:00Z",
    updatedAt: "2024-09-28T10:00:00Z",
    studyId: "a1ee1e76-ea9w-423f-4ccf-8d9b4fbf331e", // 프로그래밍 스터디와 연결
  },
  {
    id: "2b3c4d5e-f6g7-8h9i-0j1k-l2m3n4o5p6q7",
    habitName: "스트레칭",
    checked: true,
    createdAt: "2024-09-27T09:30:00Z",
    updatedAt: "2024-09-27T09:30:00Z",
    studyId: "a1ee1e76-ea9w-423f-4ccf-8d9b4fbf331e",
  },
  {
    id: "3c4d5e6f-g7h8-9i0j-1k2l-m3n4o5p6q7r8",
    habitName: "React 챕터 2 공부",
    checked: false,
    createdAt: "2024-09-29T11:15:00Z",
    updatedAt: "2024-09-29T11:15:00Z",
    studyId: "b2ff2g77-bb5w-567u-7ccv-9d8g6fbf332g", // 알고리즘 스터디와 연결
  },
  {
    id: "4d5e6f7g-h8i9-0j1k-2l3m-n4o5p6q7r8s9",
    habitName: "10분 명상",
    checked: true,
    createdAt: "2024-09-30T08:45:00Z",
    updatedAt: "2024-09-30T08:45:00Z",
    studyId: "b2ff2g77-bb5w-567u-7ccv-9d8g6fbf332g",
  },
];

export const COMPLETE_HABIT_DATA = [
  {
    id: "9a8b7c6d-e5f4-3g2h-1i0j-k9l8m7n6o5p4",
    completeDate: "2024-09-28T12:00:00Z",
    habitId: "2b3c4d5e-f6g7-8h9i-0j1k-l2m3n4o5p6q7", // 스트레칭
    studyId: "a1ee1e76-ea9w-423f-4ccf-8d9b4fbf331e",
  },
  {
    id: "8b7c6d5e-f4g3-2h1i-0j9k-l8m7n6o5p4q3",
    completeDate: "2024-09-29T09:00:00Z",
    habitId: "4d5e6f7g-h8i9-0j1k-2l3m-n4o5p6q7r8s9", // 10분 명상
    studyId: "b2ff2g77-bb5w-567u-7ccv-9d8g6fbf332g",
  },
];
