import { BirthInfo, ChartData, PlanetaryPosition } from '../types/chart';
import { zodiacSigns } from './zodiacData';
import SunCalc from 'suncalc';

const calculateZodiacPosition = (date: Date): { sign: string; degree: number } => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  const zodiacRanges = [
    { sign: 'Capricorn', start: [12, 22], end: [1, 19] },
    { sign: 'Aquarius', start: [1, 20], end: [2, 18] },
    { sign: 'Pisces', start: [2, 19], end: [3, 20] },
    { sign: 'Aries', start: [3, 21], end: [4, 19] },
    { sign: 'Taurus', start: [4, 20], end: [5, 20] },
    { sign: 'Gemini', start: [5, 21], end: [6, 20] },
    { sign: 'Cancer', start: [6, 21], end: [7, 22] },
    { sign: 'Leo', start: [7, 23], end: [8, 22] },
    { sign: 'Virgo', start: [8, 23], end: [9, 22] },
    { sign: 'Libra', start: [9, 23], end: [10, 22] },
    { sign: 'Scorpio', start: [10, 23], end: [11, 21] },
    { sign: 'Sagittarius', start: [11, 22], end: [12, 21] }
  ];

  const sign = zodiacRanges.find(range => {
    if (range.sign === 'Capricorn') {
      return (month === 12 && day >= 22) || (month === 1 && day <= 19);
    }
    const [startMonth, startDay] = range.start;
    const [endMonth, endDay] = range.end;
    return (month === startMonth && day >= startDay) || (month === endMonth && day <= endDay);
  })?.sign || 'Aries';

  const sunPosition = SunCalc.getPosition(date, 0, 0);
  const degree = (sunPosition.azimuth * (180 / Math.PI) + 180) % 30;

  return { sign, degree };
};

const calculateMoonPosition = (date: Date, time: string): { sign: string; degree: number } => {
  const baseDate = new Date(date);
  const [hours, minutes] = time.split(':').map(Number);
  baseDate.setHours(hours, minutes);
  
  const moonPosition = SunCalc.getMoonPosition(baseDate, 0, 0);
  const moonPhase = ((moonPosition.azimuth * (180 / Math.PI) + 180) % 360);
  const moonSign = Math.floor(moonPhase / 30);
  const moonDegree = moonPhase % 30;

  const signs = Object.keys(zodiacSigns);
  return {
    sign: signs[moonSign],
    degree: parseFloat(moonDegree.toFixed(2))
  };
};

const calculatePlanetaryPosition = (date: Date, planet: string): PlanetaryPosition => {
  const position = calculateZodiacPosition(date);
  return {
    sign: position.sign,
    degree: position.degree,
    house: Math.floor(Math.random() * 12) + 1, // Simplified for demo
    aspectsTo: []
  };
};

export const calculateChart = (birthInfo: BirthInfo): ChartData => {
  const { date, time } = birthInfo;
  const sunPosition = calculateZodiacPosition(date);
  const moonPosition = calculateMoonPosition(date, time);
  
  const chart: ChartData = {
    sun: {
      sign: sunPosition.sign,
      degree: sunPosition.degree,
      house: 1,
      aspectsTo: []
    },
    moon: {
      sign: moonPosition.sign,
      degree: moonPosition.degree,
      house: 2,
      aspectsTo: []
    },
    mercury: calculatePlanetaryPosition(date, 'mercury'),
    venus: calculatePlanetaryPosition(date, 'venus'),
    mars: calculatePlanetaryPosition(date, 'mars'),
    jupiter: calculatePlanetaryPosition(date, 'jupiter'),
    saturn: calculatePlanetaryPosition(date, 'saturn'),
    ascendant: calculateZodiacPosition(date).sign,
    midheaven: calculateZodiacPosition(date).sign,
    houses: {
      1: 'Aries',
      2: 'Taurus',
      3: 'Gemini',
      4: 'Cancer',
      5: 'Leo',
      6: 'Virgo',
      7: 'Libra',
      8: 'Scorpio',
      9: 'Sagittarius',
      10: 'Capricorn',
      11: 'Aquarius',
      12: 'Pisces'
    }
  };

  return chart;
};