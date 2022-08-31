import { Selectable } from "./interface";

export interface RankDetail {
  id: string;
  name: string;
  inGameDescription: string;
  note: string;
}

export interface Characteristic extends Selectable {
  id: string;
  name: string;
  maxRank: number;
  rankDetails: RankDetail[];
}
