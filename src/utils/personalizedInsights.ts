import { ChartData } from '../types/chart';
import { zodiacSigns } from './zodiacData';

interface PersonalizedInsight {
  title: string;
  description: string;
  advice: string[];
  timing: string;
  affirmations: string[];
}

const getPersonalPowerPeriods = (chartData: ChartData): string[] => {
  const sunSign = chartData.sun.sign.toLowerCase() as keyof typeof zodiacSigns;
  const moonSign = chartData.moon.sign.toLowerCase() as keyof typeof zodiacSigns;
  
  const powerMonths = [
    zodiacSigns[sunSign].month,
    zodiacSigns[moonSign].month
  ];
  
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  
  return powerMonths.map(month => months[month - 1]);
};

const getSoulPurpose = (chartData: ChartData): PersonalizedInsight => {
  const sunSign = chartData.sun.sign.toLowerCase() as keyof typeof zodiacSigns;
  const moonSign = chartData.moon.sign.toLowerCase() as keyof typeof zodiacSigns;
  const ascendant = chartData.ascendant.toLowerCase() as keyof typeof zodiacSigns;

  return {
    title: "Soul's Purpose & Life Mission",
    description: `Your ${sunSign} Sun represents your core essence, enhanced by your ${moonSign} Moon's emotional depth and your ${ascendant} Ascendant's expression.`,
    advice: [
      `Embrace your ${zodiacSigns[sunSign].traits[0]} nature`,
      `Trust your ${zodiacSigns[moonSign].traits[0]} intuition`,
      `Express your ${zodiacSigns[ascendant].traits[0]} qualities`
    ],
    timing: `Your power months are ${getPersonalPowerPeriods(chartData).join(' and ')}`,
    affirmations: [
      `I embody the strength of ${chartData.sun.sign}`,
      `I trust my ${chartData.moon.sign} intuition`,
      `I express my authentic ${chartData.ascendant} self`
    ]
  };
};

const getLifeDestiny = (chartData: ChartData): PersonalizedInsight => {
  const jupiter = chartData.jupiter.sign.toLowerCase() as keyof typeof zodiacSigns;
  const saturn = chartData.saturn.sign.toLowerCase() as keyof typeof zodiacSigns;

  return {
    title: "Life Path & Destiny",
    description: `Jupiter in ${jupiter} reveals your path to abundance, while Saturn in ${saturn} shows your life lessons.`,
    advice: [
      ...zodiacSigns[jupiter].opportunities,
      ...zodiacSigns[saturn].traits.map(trait => `Master ${trait.toLowerCase()} through discipline`)
    ],
    timing: `Major opportunities come when Jupiter transits ${zodiacSigns[jupiter].element} signs`,
    affirmations: [
      `I attract abundance through ${zodiacSigns[jupiter].keywords[0]}`,
      `I learn and grow through ${zodiacSigns[saturn].keywords[0]}`,
      `I trust my unique path`
    ]
  };
};

const getLoveAndRelationships = (chartData: ChartData): PersonalizedInsight => {
  const venus = chartData.venus.sign.toLowerCase() as keyof typeof zodiacSigns;
  const mars = chartData.mars.sign.toLowerCase() as keyof typeof zodiacSigns;

  return {
    title: "Love & Relationships",
    description: `Your Venus in ${venus} shows how you give and receive love, while Mars in ${mars} reveals your passionate nature.`,
    advice: [
      ...zodiacSigns[venus].traits.map(trait => `Express love through ${trait.toLowerCase()}`),
      ...zodiacSigns[mars].opportunities.map(opp => `Pursue ${opp.toLowerCase()} with passion`)
    ],
    timing: `Best relationship periods occur during ${venus} season`,
    affirmations: [
      `I attract loving relationships effortlessly`,
      `I express my passion authentically`,
      `I am worthy of deep love and connection`
    ]
  };
};

const getCareerAndPurpose = (chartData: ChartData): PersonalizedInsight => {
  const midheaven = chartData.midheaven.toLowerCase() as keyof typeof zodiacSigns;
  const mercury = chartData.mercury.sign.toLowerCase() as keyof typeof zodiacSigns;

  return {
    title: "Career & Life Purpose",
    description: `Your Midheaven in ${midheaven} indicates your public role, supported by Mercury in ${mercury} influencing your communication style.`,
    advice: [
      ...zodiacSigns[midheaven].opportunities,
      ...zodiacSigns[mercury].traits.map(trait => `Communicate with ${trait.toLowerCase()}`)
    ],
    timing: `Career advancement favors ${zodiacSigns[midheaven].element} periods`,
    affirmations: [
      `I succeed naturally in my chosen path`,
      `My work makes a meaningful impact`,
      `I communicate my value with confidence`
    ]
  };
};

export const getDeepPersonalizedInsights = (chartData: ChartData) => {
  return {
    soulPurpose: getSoulPurpose(chartData),
    lifeDestiny: getLifeDestiny(chartData),
    loveAndRelationships: getLoveAndRelationships(chartData),
    careerAndPurpose: getCareerAndPurpose(chartData)
  };
};