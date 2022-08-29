import { Selectable } from "./interface";

export interface Skill extends Selectable {
  id: string;
  name: string;
  inGameDescription: string;
  description?: string;
  category: SkillCategory;
}

export interface SkillCategory extends Selectable {
  id: string;
  name: string;
  description: string;
}
