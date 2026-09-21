import { create } from "zustand";

import { Profile } from "../types/Profile";
import { Exercise } from "../types/Exercise";

import { generateId } from "../utils/id";
import { IProfileRepository } from "../interfaces/IProfileRepository";
import { IExerciseRepository } from "../interfaces/IExerciseRepository";

export type WorkoutState = {
	profiles: Profile[];
	exercises: Exercise[];

	loading: boolean;

	hydrate: () => Promise<void>;

	addProfile: (name: string) => Promise<void>;

	existsProfile: (id: string) => boolean;

	existsProfileByName: (name: string) => boolean;

	addExerciseSeries: (
		profileId: string,
		name: string,
		day: number,
		series: number,
		repetitionsMin: number,
		repetitionsMax: number,
		restTime: number,
		weight: number,
	) => Promise<void>;

	addExerciseContinuous: (
		profileId: string,
		name: string,
		day: number,
		duration: number,
		restTime: number,
	) => Promise<void>;

	removeProfile: (id: string) => Promise<void>;

	removeExercise: (id: string) => Promise<void>;
};

export function createWorkoutStore(
	profiles: IProfileRepository,
	exercises: IExerciseRepository,
) {
	return create<WorkoutState>((set, get) => ({
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
			name = name.trim();
			if (get().existsProfileByName(name) || !name) {
				return;
			}
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

		existsProfile: (id) => {
			return get().profiles.some((profile) => profile.id === id);
		},

		existsProfileByName: (name) => {
			const normalizedInput = name.trim().toLowerCase();
			return get().profiles.some(
				(profile) => profile.name.trim().toLowerCase() === normalizedInput,
			);
		},

		addExerciseSeries: async (
			profileId,
			name,
			day,
			series,
			repetitionsMin,
			repetitionsMax,
			restTime,
			weight,
		) => {
			const exercise: Exercise = {
				id: generateId(),
				profileId,
				name,
				day,
				createdAt: Date.now(),
				exerciseType: "series",
				series,
				repetitionsMin,
				repetitionsMax,
				restTime,
				weight,
				duration: null,
			};

			await exercises.create(exercise);

			set((state) => ({
				exercises: [...state.exercises, exercise],
			}));
		},

		addExerciseContinuous: async (profileId, name, day, duration, restTime) => {
			const exercise: Exercise = {
				id: generateId(),
				profileId,
				name,
				day,
				createdAt: Date.now(),
				exerciseType: "continuous",
				duration,
				series: null,
				repetitionsMin: null,
				repetitionsMax: null,
				restTime,
				weight: null,
			};

			await exercises.create(exercise);

			set((state) => ({
				exercises: [...state.exercises, exercise],
			}));
		},

		removeProfile: async (id) => {
			await profiles.delete(id);

			await exercises.deleteByProfileId(id);

			set((state) => ({
				profiles: state.profiles.filter((profile) => profile.id !== id),

				exercises: state.exercises.filter(
					(exercise) => exercise.profileId !== id,
				),
			}));
		},

		removeExercise: async (id) => {
			await exercises.delete(id);

			set((state) => ({
				exercises: state.exercises.filter((exercise) => exercise.id !== id),
			}));
		},
	}));
}
