import { format } from 'date-fns';

export const calculateLifePath = (birthDate: Date): number => {
  const dateStr = format(birthDate, 'yyyyMMdd');
  let sum = dateStr.split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  }
  
  return sum;
};

export const getLifePathMeaning = (number: number): {
  title: string;
  description: string;
  strengths: string[];
  challenges: string[];
  purpose: string;
} => {
  const meanings = {
    1: {
      title: "The Pioneer",
      description: "You are born to be a leader and innovator. Your path is about developing independence, confidence, and creativity.",
      strengths: ["Natural leadership", "Innovation", "Self-reliance", "Determination"],
      challenges: ["Ego", "Stubbornness", "Being too dominant"],
      purpose: "To develop individuality and pioneer new paths for others to follow"
    },
    2: {
      title: "The Mediator",
      description: "Your life path centers around harmony, cooperation, and relationships. You're naturally diplomatic and intuitive.",
      strengths: ["Diplomacy", "Sensitivity", "Cooperation", "Detail-oriented"],
      challenges: ["Oversensitivity", "Indecision", "Dependency"],
      purpose: "To create peace and harmony through relationships and cooperation"
    },
    3: {
      title: "The Creator",
      description: "Expression, creativity, and joy are your main themes. You're here to inspire and uplift others through your creative gifts.",
      strengths: ["Creativity", "Communication", "Optimism", "Self-expression"],
      challenges: ["Scattered focus", "Superficiality", "Self-doubt"],
      purpose: "To express creativity and inspire joy in others"
    },
    4: {
      title: "The Builder",
      description: "Your path is about creating stable foundations and achieving through hard work and determination.",
      strengths: ["Organization", "Reliability", "Practicality", "Hard work"],
      challenges: ["Rigidity", "Resistance to change", "Overwork"],
      purpose: "To build lasting foundations and create order from chaos"
    },
    5: {
      title: "The Freedom Seeker",
      description: "Change, freedom, and adventure define your path. You're here to experience life fully and embrace change.",
      strengths: ["Adaptability", "Versatility", "Progressive thinking", "Adventure"],
      challenges: ["Restlessness", "Excess", "Commitment issues"],
      purpose: "To experience freedom and teach others to embrace change"
    },
    6: {
      title: "The Nurturer",
      description: "Your path involves responsibility, service, and nurturing others. You're a natural healer and counselor.",
      strengths: ["Responsibility", "Nurturing", "Harmony", "Service"],
      challenges: ["Perfectionism", "Self-sacrifice", "Meddling"],
      purpose: "To create harmony and help others through service and care"
    },
    7: {
      title: "The Seeker",
      description: "Analysis, wisdom, and spiritual understanding are your themes. You're here to develop wisdom and share knowledge.",
      strengths: ["Analysis", "Understanding", "Research", "Spirituality"],
      challenges: ["Isolation", "Skepticism", "Perfectionism"],
      purpose: "To seek truth and develop spiritual understanding"
    },
    8: {
      title: "The Powerhouse",
      description: "Material success and personal power are your themes. You're here to master the material world while maintaining balance.",
      strengths: ["Leadership", "Organization", "Ambition", "Material success"],
      challenges: ["Workaholic tendencies", "Power struggles", "Materialism"],
      purpose: "To achieve material abundance and use power wisely"
    },
    9: {
      title: "The Humanitarian",
      description: "Universal love, compassion, and service are your themes. You're here to serve humanity and complete karmic cycles.",
      strengths: ["Compassion", "Generosity", "Wisdom", "Artistic talent"],
      challenges: ["Letting go", "Boundaries", "Martyrdom"],
      purpose: "To serve humanity and bring healing to the world"
    },
    11: {
      title: "The Illuminator",
      description: "As a master number, you're here to bring spiritual illumination and inspire others. You have heightened intuition and vision.",
      strengths: ["Inspiration", "Intuition", "Idealism", "Visionary thinking"],
      challenges: ["Nervous tension", "Living up to potential", "Impracticality"],
      purpose: "To inspire and illuminate the path for others"
    },
    22: {
      title: "The Master Builder",
      description: "Another master number, you have the potential to achieve great things that benefit humanity on a large scale.",
      strengths: ["Practical vision", "Leadership", "Manifestation", "Large-scale thinking"],
      challenges: ["Overwhelming responsibility", "Pressure", "Fear of failure"],
      purpose: "To manifest grand visions that benefit humanity"
    },
    33: {
      title: "The Master Teacher",
      description: "The highest master number, you're here to serve humanity through compassion, teaching, and healing on a global scale.",
      strengths: ["Teaching", "Healing", "Nurturing", "Universal service"],
      challenges: ["Self-sacrifice", "Burden of responsibility", "Perfectionism"],
      purpose: "To uplift humanity through loving service and teaching"
    }
  };

  return meanings[number as keyof typeof meanings];
};