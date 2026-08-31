import { Database } from "../database/Database";
import { Exercise } from "../../types/Exercise";

// COLOCAR UMA INTERFACE, NÃO VAMOS DEIXAR O STORE SABER QUE EXISTE O Application/
export class ExerciseRepository {
  constructor(private readonly database: Database) {}

  async create(exercise: Exercise): Promise<Exercise> {
    await this.database.run(
      `
        INSERT INTO exercises (
          id,
          profileId,
          name,
          day,
          createdAt,
          createdAt,
          exerciseType,
          series,
          repetitionsMin,
          repetitionsMax,
          restTime,
          weight,
          duration
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        exercise.id,
        exercise.profileId,
        exercise.name,
        exercise.day,
        exercise.createdAt,
        exercise.exerciseType,
        exercise.series,
        exercise.repetitionsMin,
        exercise.repetitionsMax,
        exercise.restTime,
        exercise.weight,
        exercise.duration,
      ],
    );

    return exercise;
  }

  async findByProfile(profileId: string): Promise<Exercise[]> {
    return this.database.all<Exercise>(
      `
        SELECT
          *
        FROM exercises
        WHERE profileId = ?
        ORDER BY createdAt ASC
      `,
      [profileId],
    );
  }

  async findAll(): Promise<Exercise[]> {
    return this.database.all<Exercise>(
      `
        SELECT
          *
        FROM exercises
        ORDER BY createdAt ASC
      `,
    );
  }

  async delete(id: string) {
    await this.database.run(
      `
        DELETE FROM exercises
        WHERE id = ?
      `,
      [id],
    );
  }

  async deleteByProfileId(id: string) {
    return this.database.run(
      `
        DELETE FROM exercises
        WHERE profileId = ?
      `,
      [id],
    );
  }
}
