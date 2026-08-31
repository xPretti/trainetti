// export type Exercise = {
//   id: string;
//   profileId: string;
//   name: string;
//   day: string;
//   createdAt: number;
// };

/*
export type Exercise = {
  id: string;
  profileId: string;
  name: string;
  day: number;
  exerciseType: number;
  createdAt: number;

  // Series x Repetitions
  series: number;
  repetitions: number;
  restTime: number;
  weight: number;

  // Continuous
  duration: number;
};

*/

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
