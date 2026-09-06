import { Database } from "../database/Database";
import { Profile } from "../../types/Profile";
import { IProfileRepository } from "../../interfaces/IProfileRepository";

export class ProfileRepository implements IProfileRepository {
  constructor(private readonly database: Database) {}

  async create(profile: Profile): Promise<Profile> {
    await this.database.run(
      `
        INSERT INTO profiles (
          id,
          name,
          createdAt
        )
        VALUES (?, ?, ?)
      `,
      [profile.id, profile.name, profile.createdAt],
    );
    return profile;
  }

  async findAll(): Promise<Profile[]> {
    return this.database.all<Profile>(
      `
        SELECT
          id,
          name,
          createdAt
        FROM profiles
        ORDER BY createdAt ASC
      `,
    );
  }

  async findById(id: string): Promise<Profile | null> {
    const result = await this.database.all<Profile>(
      `
          SELECT
            id,
            name,
            createdAt
          FROM profiles
          WHERE id = ?
          LIMIT 1
        `,
      [id],
    );

    return result[0] ?? null;
  }

  async delete(id: string) {
    await this.database.run(
      `
        DELETE FROM profiles
        WHERE id = ?
      `,
      [id],
    );
  }
}
