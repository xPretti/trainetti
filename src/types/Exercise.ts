type ExerciseType = "series" | "continuous";

export type Exercise = {
  id: string;
  profileId: string;
  name: string;
  day: number;
  createdAt: number;

  exerciseType: ExerciseType;

  series: number | null;
  repetitionsMin: number | null;
  repetitionsMax: number | null;
  restTime: number | null;
  weight: number | null;

  duration: number | null;
};
