import { Database } from "../../infra/database/Database";
import { Exercise } from "../../types/Exercise";

export class ExerciseRepository {
  constructor(private readonly database: Database) {}

  async create(exercise: Exercise): Promise<Exercise> {
    await this.database.run(
      `
        INSERT INTO exercises (
          id,
          profile_id,
          name,
          day,
          created_at
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
          profile_id as profileId,
          name,
          day,
          created_at as createdAt
        FROM exercises
        WHERE profile_id = ?
        ORDER BY created_at DESC
      `,
      [profileId],
    );
  }

  async findAll(): Promise<Exercise[]> {
    return this.database.all<Exercise>(
      `
        SELECT
          id,
          profile_id as profileId,
          name,
          day,
          created_at as createdAt
        FROM exercises
        ORDER BY created_at DESC
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
}
