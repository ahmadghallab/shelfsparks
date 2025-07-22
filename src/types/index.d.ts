export enum Language {
  EN = 'en',
  AR = 'ae',
}

export type Quote = {
  id: number;
  spark: string;
  source?: string;
  lang?: Language
}