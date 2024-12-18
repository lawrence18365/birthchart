import { ChartData } from '../types/chart';
import { zodiacSigns } from './zodiacData';

interface Transit {
  title: string;
  description: string;
  timing: string;
  strength: number;
  metrics: Array<{
    label: string;
    value: number;
    unit: string;
  }>;
}

export const calculateTransits = (chartData: ChartData): Transit[] => {
  const currentDate = new Date();
  const transits: Transit[] = [];

  // Calculate Jupiter transits
  const jupiterTransit = {
    title: "Jupiter's Blessing Period",
    description: `Jupiter in ${chartData.jupiter.sign} brings expansion and growth to your ${getHouseArea(chartData.jupiter.house)} house.`,
    timing: "Next 3 months",
    strength: 85,
    metrics: [
      { label: "Growth Potential", value: 92, unit: "%" },
      { label: "Lucky Days", value: 7, unit: "" },
      { label: "Peak Energy", value: 85, unit: "%" },
      { label: "Harmony Level", value: 78, unit: "%" }
    ]
  };
  transits.push(jupiterTransit);

  // Calculate Saturn transits
  const saturnTransit = {
    title: "Saturn's Wisdom Phase",
    description: `Saturn in ${chartData.saturn.sign} brings important lessons in your ${getHouseArea(chartData.saturn.house)} house.`,
    timing: "Next 6 months",
    strength: 75,
    metrics: [
      { label: "Learning Intensity", value: 88, unit: "%" },
      { label: "Challenge Level", value: 6, unit: "" },
      { label: "Growth Rate", value: 72, unit: "%" },
      { label: "Mastery Path", value: 65, unit: "%" }
    ]
  };
  transits.push(saturnTransit);

  return transits;
};

const getHouseArea = (houseNumber: number): string => {
  const houses = {
    1: "identity",
    2: "resources",
    3: "communication",
    4: "home",
    5: "creativity",
    6: "daily work",
    7: "relationships",
    8: "transformation",
    9: "higher learning",
    10: "career",
    11: "community",
    12: "spirituality"
  };
  return houses[houseNumber as keyof typeof houses] || "life";
};