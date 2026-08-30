import { Database } from "../../infra/database/Database";
import { Profile } from "../../types/Profile";

export class ProfileRepository {
  constructor(private readonly database: Database) {}

  async create(profile: Profile): Promise<Profile> {
    const result = await this.database.run(
      `
        INSERT INTO profiles (
          id,
          name,
          created_at
        )
        VALUES (?, ?, ?)
      `,
      [profile.id, profile.name, profile.createdAt],
    );

    console.log(result);

    return profile;
  }

  async findAll(): Promise<Profile[]> {
    return this.database.all<Profile>(
      `
        SELECT
          id,
          name,
          created_at as createdAt
        FROM profiles
        ORDER BY created_at DESC
      `,
    );
  }

  async findById(id: string): Promise<Profile | null> {
    const result = await this.database.all<Profile>(
      `
          SELECT
            id,
            name,
            created_at as createdAt
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
