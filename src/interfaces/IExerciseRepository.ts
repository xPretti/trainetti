import { Exercise } from "../types/Exercise";

export interface IExerciseRepository {
  create(exercise: Exercise): Promise<Exercise>;

  findByProfile(profileId: string): Promise<Exercise[]>;

  findAll(): Promise<Exercise[]>;

  delete(id: string): Promise<void>;

  deleteByProfileId(id: string): Promise<void>;
}
