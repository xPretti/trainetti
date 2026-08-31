import * as SQLite from "expo-sqlite";

export class Database {
  private db: SQLite.SQLiteDatabase | null = null;

  async start() {
    this.db = await SQLite.openDatabaseAsync("trainetti-dev-0.db");
  }

  async migrate() {
    this.assertConnected();
    await this.createProfiles();
    await this.createExercicies();
  }

  async run(sql: string, params: unknown[] = []) {
    this.assertConnected();

    return this.db!.runAsync(sql, params as SQLite.SQLiteBindValue[]);
  }

  async all<T>(sql: string, params: unknown[] = []) {
    this.assertConnected();

    return this.db!.getAllAsync<T>(sql, params as SQLite.SQLiteBindValue[]);
  }

  async close() {
    if (this.db) {
      await this.db.closeAsync();
      this.db = null;
    }
  }

  private assertConnected() {
    if (!this.db) {
      throw new Error("Database is not connected");
    }
  }

  private async createProfiles() {
    await this.db!.execAsync(`
      CREATE TABLE IF NOT EXISTS profiles (
        id TEXT PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        createdAt INTEGER NOT NULL
      );
      `);
  }

  private async createExercicies() {
    await this.db!.execAsync(`
      CREATE TABLE IF NOT EXISTS exercises (
        id TEXT PRIMARY KEY NOT NULL,
        profileId TEXT NOT NULL,
        name TEXT NOT NULL,
        day INTEGER NOT NULL,
        createdAt INTEGER NOT NULL

        exerciseType TEXT NOT NULL,

        series INTEGER,
        repetitionsMin INTEGER,
        repetitionsMax INTEGER,
        restTime INTEGER,
        weight INTEGER,

        duration INTEGER,

      );
    `);
  }
}
