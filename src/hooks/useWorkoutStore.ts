import { WorkoutState } from "../stores/createWorkoutStore";
import { useApp } from "./useApp";

export function useWorkoutStore<T>(selector: (state: WorkoutState) => T): T {
  const { workoutStore } = useApp();

  return workoutStore(selector);
}
