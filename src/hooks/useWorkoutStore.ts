import { useAppContext } from "../contexts/AppProvider";
import { WorkoutState } from "../stores/createWorkoutStore";

export function useWorkoutStore<T>(selector: (state: WorkoutState) => T): T {
  const { workoutStore } = useAppContext();

  return workoutStore(selector);
}
