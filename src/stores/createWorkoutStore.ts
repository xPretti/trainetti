import { create } from "zustand";

import { Profile } from "../types/Profile";
import { Exercise } from "../types/Exercise";

import { ProfileRepository } from "../application/repositories/ProfileRepository";
import { ExerciseRepository } from "../application/repositories/ExerciseRepository";

import { generateId } from "../utils/id";

export type WorkoutState = {
  profiles: Profile[];
  exercises: Exercise[];

  loading: boolean;

  hydrate: () => Promise<void>;

  addProfile: (name: string) => Promise<void>;

  addExercise: (profileId: string, name: string, day: string) => Promise<void>;

  removeProfile: (id: string) => Promise<void>;
};

export function createWorkoutStore(
  profiles: ProfileRepository,
  exercises: ExerciseRepository,
) {
  return create<WorkoutState>((set) => ({
    profiles: [],
    exercises: [],

    loading: false,

    hydrate: async () => {
      set({
        loading: true,
      });

      try {
        const [profilesData, exercisesData] = await Promise.all([
          profiles.findAll(),
          exercises.findAll(),
        ]);

        console.log(profilesData, exercisesData);

        set({
          profiles: profilesData,
          exercises: exercisesData,
        });
      } finally {
        set({
          loading: false,
        });
      }
    },

    addProfile: async (name) => {
      const profile: Profile = {
        id: generateId(),
        name,
        createdAt: Date.now(),
      };

      await profiles.create(profile);

      set((state) => ({
        profiles: [...state.profiles, profile],
      }));
    },

    addExercise: async (profileId, name, day) => {
      const exercise: Exercise = {
        id: generateId(),
        profileId,
        name,
        day,
        createdAt: Date.now(),
      };

      await exercises.create(exercise);

      set((state) => ({
        exercises: [...state.exercises, exercise],
      }));
    },

    removeProfile: async (id) => {
      await profiles.delete(id);

      set((state) => ({
        profiles: state.profiles.filter((profile) => profile.id !== id),

        exercises: state.exercises.filter(
          (exercise) => exercise.profileId !== id,
        ),
      }));
    },
  }));
}
