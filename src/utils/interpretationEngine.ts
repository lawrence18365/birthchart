import { ChartData } from '../types/chart';
import { zodiacSigns } from './zodiacData';

const getElementalBalance = (chartData: ChartData) => {
  const elements = { fire: 0, earth: 0, air: 0, water: 0 };
  const planets = ['sun', 'moon', 'mercury', 'venus', 'mars', 'jupiter', 'saturn'];
  
  planets.forEach(planet => {
    if (chartData[planet as keyof ChartData]) {
      const sign = chartData[planet as keyof ChartData].sign.toLowerCase();
      if (zodiacSigns[sign as keyof typeof zodiacSigns]) {
        const element = zodiacSigns[sign as keyof typeof zodiacSigns].element.toLowerCase();
        elements[element as keyof typeof elements]++;
      }
    }
  });
  
  return elements;
};

const getModalityBalance = (chartData: ChartData) => {
  const modalities = { cardinal: 0, fixed: 0, mutable: 0 };
  const planets = ['sun', 'moon', 'mercury', 'venus', 'mars', 'jupiter', 'saturn'];
  
  planets.forEach(planet => {
    if (chartData[planet as keyof ChartData]) {
      const sign = chartData[planet as keyof ChartData].sign.toLowerCase();
      if (zodiacSigns[sign as keyof typeof zodiacSigns]) {
        const quality = zodiacSigns[sign as keyof typeof zodiacSigns].quality.toLowerCase();
        modalities[quality as keyof typeof modalities]++;
      }
    }
  });
  
  return modalities;
};

const getCareerAdvice = (element: string, modality: string, chartData: ChartData) => {
  const careerPaths = {
    fire: ['Leadership', 'Entrepreneurship', 'Performance', 'Sales'],
    earth: ['Finance', 'Real Estate', 'Agriculture', 'Construction'],
    air: ['Communication', 'Technology', 'Education', 'Media'],
    water: ['Healthcare', 'Counseling', 'Arts', 'Hospitality']
  };

  const sunSign = chartData.sun.sign.toLowerCase() as keyof typeof zodiacSigns;
  return {
    paths: careerPaths[element as keyof typeof careerPaths] || [],
    strengths: zodiacSigns[sunSign].traits,
    timing: `Best career moves during ${chartData.jupiter.sign} periods`
  };
};

const getRelationshipAdvice = (element: string, chartData: ChartData) => {
  const compatibleElements = {
    fire: ['air', 'fire'],
    earth: ['water', 'earth'],
    air: ['fire', 'air'],
    water: ['earth', 'water']
  };

  const sunSign = chartData.sun.sign.toLowerCase() as keyof typeof zodiacSigns;
  const marsSign = chartData.mars.sign.toLowerCase() as keyof typeof zodiacSigns;
  const venusSign = chartData.venus.sign.toLowerCase() as keyof typeof zodiacSigns;

  return {
    compatibleSigns: (compatibleElements[element as keyof typeof compatibleElements] || []).map(
      elem => Object.entries(zodiacSigns)
        .filter(([_, data]) => data.element.toLowerCase() === elem)
        .map(([sign]) => sign)
    ).flat(),
    challenges: zodiacSigns[marsSign].challenges,
    strengths: zodiacSigns[venusSign].traits
  };
};

const getPersonalGrowthAdvice = (chartData: ChartData) => {
  const sunSign = chartData.sun.sign.toLowerCase() as keyof typeof zodiacSigns;
  const moonSign = chartData.moon.sign.toLowerCase() as keyof typeof zodiacSigns;
  
  return {
    focus: zodiacSigns[sunSign].keywords,
    emotional: zodiacSigns[moonSign].keywords,
    challenges: zodiacSigns[sunSign].challenges || [],
    opportunities: zodiacSigns[moonSign].opportunities || []
  };
};

export const getPersonalizedReading = (chartData: ChartData) => {
  const elements = getElementalBalance(chartData);
  const modalities = getModalityBalance(chartData);
  
  const dominantElement = Object.entries(elements).reduce((a, b) => b[1] > a[1] ? b : a)[0];
  const dominantModality = Object.entries(modalities).reduce((a, b) => b[1] > a[1] ? b : a)[0];

  const sunSign = chartData.sun.sign.toLowerCase() as keyof typeof zodiacSigns;
  const moonSign = chartData.moon.sign.toLowerCase() as keyof typeof zodiacSigns;
  const ascSign = chartData.ascendant.toLowerCase() as keyof typeof zodiacSigns;

  const careerAdvice = getCareerAdvice(dominantElement, dominantModality, chartData);
  const relationshipAdvice = getRelationshipAdvice(dominantElement, chartData);
  const personalGrowth = getPersonalGrowthAdvice(chartData);

  return {
    personalityOverview: `Your ${chartData.sun.sign} sun sign is enhanced by a ${chartData.moon.sign} moon, creating a unique blend of energies. Your ${chartData.ascendant} rising sign shapes how others perceive you.`,
    
    elementalBalance: elements,
    
    coreTraits: [
      `Strong ${dominantElement} element influence`,
      `Natural ${zodiacSigns[sunSign].traits[0]} abilities`,
      `Emotional ${zodiacSigns[moonSign].traits[0]}`,
      `${zodiacSigns[ascSign].traits[0]} outer personality`
    ],

    lifeThemes: [
      `Career focus in ${careerAdvice.paths.join(', ')}`,
      `Relationship harmony with ${relationshipAdvice.compatibleSigns.slice(0, 3).join(', ')}`,
      `Personal growth through ${personalGrowth.focus.join(', ')}`
    ],

    opportunities: personalGrowth.opportunities,
    challenges: personalGrowth.challenges,

    predictions: [
      {
        title: "Career & Ambitions",
        description: `Focus on ${careerAdvice.paths.join(', ')} to align with your natural talents`,
        keywords: careerAdvice.strengths
      },
      {
        title: "Relationships & Connections",
        description: `Best compatibility with ${relationshipAdvice.compatibleSigns.slice(0, 3).join(', ')}`,
        keywords: relationshipAdvice.strengths
      },
      {
        title: "Personal Development",
        description: `Growth opportunities through ${personalGrowth.focus.join(', ')}`,
        keywords: personalGrowth.emotional
      }
    ]
  };
};