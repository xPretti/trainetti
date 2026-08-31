import { Database } from "./database/Database";

import { ProfileRepository } from "./repositories/ProfileRepository";
import { ExerciseRepository } from "./repositories/ExerciseRepository";

export class Application {
  readonly database: Database;

  readonly profiles: ProfileRepository;
  readonly exercises: ExerciseRepository;

  private started = false;

  constructor() {
    this.database = new Database();

    this.profiles = new ProfileRepository(this.database);

    this.exercises = new ExerciseRepository(this.database);
  }

  async start() {
    if (this.started) {
      return;
    }

    console.log("[Application] Starting...");

    await this.database.start();

    await this.database.migrate();

    this.started = true;

    console.log("[Application] Started");
  }

  async stop() {
    if (!this.started) {
      return;
    }

    console.log("[Application] Stopping...");

    await this.database.close();

    this.started = false;

    console.log("[Application] Stopped");
  }
}
