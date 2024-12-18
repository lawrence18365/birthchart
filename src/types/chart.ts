export interface BirthInfo {
  date: Date;
  time: string;
  latitude: number;
  longitude: number;
  location: string;
}

export interface PlanetaryPosition {
  sign: string;
  degree: number;
  house: number;
  aspectsTo: Array<{
    planet: string;
    aspect: string;
    orb: number;
  }>;
}

export interface ChartData {
  sun: PlanetaryPosition;
  moon: PlanetaryPosition;
  mercury: PlanetaryPosition;
  venus: PlanetaryPosition;
  mars: PlanetaryPosition;
  jupiter: PlanetaryPosition;
  saturn: PlanetaryPosition;
  ascendant: string;
  midheaven: string;
  houses: Record<number, string>;
}

export interface Interpretation {
  title: string;
  description: string;
  keywords: string[];
  influence: 'Strong' | 'Moderate' | 'Weak';
}