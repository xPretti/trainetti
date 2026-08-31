import { Database } from "../../infra/database/Database";
import { Exercise } from "../../types/Exercise";

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
          createdAt
        )
        VALUES (?, ?, ?, ?, ?)
      `,
      [
        exercise.id,
        exercise.profileId,
        exercise.name,
        exercise.day,
        exercise.createdAt,
      ],
    );

    return exercise;
  }

  async findByProfile(profileId: string): Promise<Exercise[]> {
    return this.database.all<Exercise>(
      `
        SELECT
          id,
          profileId,
          name,
          day,
          createdAt
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
          id,
          profileId,
          name,
          day,
          createdAt
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
