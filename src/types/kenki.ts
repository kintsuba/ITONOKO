import { Selectable } from "./interface";

export interface Kenki extends Selectable {
  id: string;
  name: string;
  rarity: string;
  type: string;
  attributes: string[];
  skills: string[];
  characteristics: string[];
}
