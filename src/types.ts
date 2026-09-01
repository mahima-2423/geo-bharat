export type Region = 
  | 'All' 
  | 'North' 
  | 'South' 
  | 'East' 
  | 'West' 
  | 'Central' 
  | 'North East' 
  | 'Islands & UTs';

export type TerritoryType = 'State' | 'Union Territory';

export interface StateData {
  id: string; // ISO 3166-2:IN code (e.g., 'IN-MH', 'IN-TN', 'IN-KA')
  shortCode: string; // 2-letter code e.g. 'MH', 'TN'
  name: string;
  nativeName?: string;
  type: TerritoryType;
  region: Region;
  capital: string;
  famousFood: {
    name: string;
    emoji: string;
    description: string;
    tag: string;
  };
  languages: string[];
  primaryLanguage: string;
  greeting: {
    phrase: string;
    meaning: string;
    script?: string;
  };
  funFact: string;
  famousLandmark: string;
  knownAs: string;
  colorTheme?: string;
  path: string; // SVG path data
  labelPos: { x: number; y: number }; // coordinate on SVG for state center/label
}

export interface MapViewState {
  scale: number;
  translateX: number;
  translateY: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  type: 'capital' | 'food' | 'fact' | 'language';
  options: string[];
  correctAnswer: string;
  explanation: string;
  stateName: string;
}
