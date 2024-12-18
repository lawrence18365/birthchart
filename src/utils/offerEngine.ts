import { ChartData } from '../types/chart';
import { zodiacSigns } from './zodiacData';

interface Offer {
  type: 'ebook' | 'course' | 'reading';
  title: string;
  subtitle: string;
  backgroundImage: string;
  benefits: string[];
  personalizedReasons: string[];
  price: string;
  priceDetails: string;
  ctaText: string;
  ctaLink: string;
}

const getElementalFocus = (chartData: ChartData): string => {
  const elements = { fire: 0, earth: 0, air: 0, water: 0 };
  const planets = ['sun', 'moon', 'mercury', 'venus', 'mars', 'jupiter', 'saturn'];
  
  planets.forEach(planet => {
    const sign = chartData[planet as keyof ChartData].sign.toLowerCase();
    const element = zodiacSigns[sign as keyof typeof zodiacSigns].element.toLowerCase();
    elements[element as keyof typeof elements]++;
  });

  return Object.entries(elements).reduce((a, b) => b[1] > a[1] ? b : a)[0];
};

export const getPersonalizedOffer = (chartData: ChartData): Offer => {
  const dominantElement = getElementalFocus(chartData);
  const sunSign = chartData.sun.sign.toLowerCase();
  const moonSign = chartData.moon.sign.toLowerCase();
  
  // Personalize offer based on chart characteristics
  if (dominantElement === 'fire' || dominantElement === 'air') {
    return {
      type: 'course',
      title: 'Master Your Cosmic Power',
      subtitle: 'A Transformative 8-Week Journey to Unlock Your Full Potential',
      backgroundImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
      benefits: [
        'Deep dive into your unique planetary alignments',
        'Weekly live coaching sessions with expert astrologers',
        'Personalized growth exercises and meditations',
        'Private community of fellow cosmic travelers',
        'Lifetime access to course materials'
      ],
      personalizedReasons: [
        `Your ${sunSign} sun sign shows natural leadership abilities`,
        `${moonSign} moon indicates deep intuitive powers`,
        'Strong elemental balance suggests teaching potential',
        'Current planetary positions favor spiritual growth'
      ],
      price: '$197',
      priceDetails: 'One-time payment • Lifetime access',
      ctaText: 'Begin Your Journey',
      ctaLink: 'https://courses.celestialinsights.com/cosmic-power'
    };
  }

  if (dominantElement === 'water') {
    return {
      type: 'reading',
      title: 'Deep Soul Reading & Future Mapping',
      subtitle: 'Personal 1-on-1 Session with Master Astrologer',
      backgroundImage: 'https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9',
      benefits: [
        '90-minute personal consultation',
        'In-depth analysis of your soul purpose',
        'Detailed relationship compatibility guide',
        'Career and life path guidance',
        'Recorded session for future reference'
      ],
      personalizedReasons: [
        `Your ${sunSign} sun brings unique emotional depth`,
        `${moonSign} moon suggests powerful intuitive gifts`,
        'Current transits indicate major life transitions',
        'Rare planetary aspects in your chart need exploration'
      ],
      price: '$299',
      priceDetails: 'Includes preparation and recording',
      ctaText: 'Book Your Reading',
      ctaLink: 'https://readings.celestialinsights.com/book'
    };
  }

  // Default to ebook for earth signs or balanced charts
  return {
    type: 'ebook',
    title: 'Your Personal Celestial Guide',
    subtitle: 'A 365-Day Journey Through Your Personal Astrology',
    backgroundImage: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a',
    benefits: [
      'Daily personalized horoscope readings',
      'Monthly power day predictions',
      'Relationship compatibility guides',
      'Career success strategies',
      'Meditation and ritual guides'
    ],
    personalizedReasons: [
      `Your ${sunSign} sun sign reveals hidden strengths`,
      `${moonSign} moon brings unique emotional wisdom`,
      'Powerful planetary aspects in your chart',
      'Rare astrological configurations active this year'
    ],
    price: '$47',
    priceDetails: 'One-time purchase • Instant download',
    ctaText: 'Download Now',
    ctaLink: 'https://ebooks.celestialinsights.com/personal-guide'
  };
};