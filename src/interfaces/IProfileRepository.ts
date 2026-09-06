import { Profile } from "../types/Profile";

export interface IProfileRepository {
  create(profile: Profile): Promise<Profile>;

  findAll(): Promise<Profile[]>;

  findById(id: string): Promise<Profile | null>;

  delete(id: string): Promise<void>;
}
