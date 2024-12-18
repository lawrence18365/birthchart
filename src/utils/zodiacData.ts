export const zodiacSigns = {
  aries: {
    element: 'Fire',
    quality: 'Cardinal',
    ruler: 'Mars',
    keywords: ['Initiative', 'Courage', 'Energy', 'Action'],
    traits: ['Independent', 'Dynamic', 'Quick', 'Competitive'],
    challenges: ['Impulsiveness', 'Impatience', 'Aggression'],
    opportunities: ['Leadership', 'Innovation', 'Pioneering'],
    month: 3
  },
  taurus: {
    element: 'Earth',
    quality: 'Fixed',
    ruler: 'Venus',
    keywords: ['Stability', 'Security', 'Patience', 'Determination'],
    traits: ['Reliable', 'Patient', 'Practical', 'Devoted'],
    challenges: ['Stubbornness', 'Possessiveness', 'Inflexibility'],
    opportunities: ['Financial success', 'Artistic expression', 'Building'],
    month: 4
  },
  gemini: {
    element: 'Air',
    quality: 'Mutable',
    ruler: 'Mercury',
    keywords: ['Communication', 'Curiosity', 'Adaptability', 'Versatility'],
    traits: ['Versatile', 'Intellectual', 'Communicative', 'Quick-witted'],
    challenges: ['Inconsistency', 'Nervousness', 'Superficiality'],
    opportunities: ['Writing', 'Teaching', 'Networking'],
    month: 5
  },
  cancer: {
    element: 'Water',
    quality: 'Cardinal',
    ruler: 'Moon',
    keywords: ['Nurturing', 'Protection', 'Sensitivity', 'Empathy'],
    traits: ['Protective', 'Intuitive', 'Emotional', 'Caring'],
    challenges: ['Moodiness', 'Oversensitivity', 'Dependency'],
    opportunities: ['Family life', 'Emotional healing', 'Caregiving'],
    month: 6
  },
  leo: {
    element: 'Fire',
    quality: 'Fixed',
    ruler: 'Sun',
    keywords: ['Creativity', 'Leadership', 'Confidence', 'Drama'],
    traits: ['Generous', 'Proud', 'Creative', 'Enthusiastic'],
    challenges: ['Ego', 'Arrogance', 'Attention-seeking'],
    opportunities: ['Performance', 'Leadership', 'Creative expression'],
    month: 7
  },
  virgo: {
    element: 'Earth',
    quality: 'Mutable',
    ruler: 'Mercury',
    keywords: ['Analysis', 'Perfection', 'Service', 'Health'],
    traits: ['Analytical', 'Practical', 'Diligent', 'Discriminating'],
    challenges: ['Criticism', 'Worry', 'Perfectionism'],
    opportunities: ['Health care', 'Organization', 'Problem-solving'],
    month: 8
  },
  libra: {
    element: 'Air',
    quality: 'Cardinal',
    ruler: 'Venus',
    keywords: ['Balance', 'Harmony', 'Justice', 'Partnership'],
    traits: ['Diplomatic', 'Cooperative', 'Fair-minded', 'Social'],
    challenges: ['Indecision', 'Dependency', 'Avoidance'],
    opportunities: ['Relationships', 'Art', 'Mediation'],
    month: 9
  },
  scorpio: {
    element: 'Water',
    quality: 'Fixed',
    ruler: 'Pluto',
    keywords: ['Transformation', 'Power', 'Mystery', 'Depth'],
    traits: ['Passionate', 'Intense', 'Magnetic', 'Deep'],
    challenges: ['Jealousy', 'Obsession', 'Secretiveness'],
    opportunities: ['Research', 'Psychology', 'Investigation'],
    month: 10
  },
  sagittarius: {
    element: 'Fire',
    quality: 'Mutable',
    ruler: 'Jupiter',
    keywords: ['Adventure', 'Philosophy', 'Optimism', 'Freedom'],
    traits: ['Optimistic', 'Adventurous', 'Honest', 'Independent'],
    challenges: ['Restlessness', 'Overconfidence', 'Bluntness'],
    opportunities: ['Travel', 'Teaching', 'Publishing'],
    month: 11
  },
  capricorn: {
    element: 'Earth',
    quality: 'Cardinal',
    ruler: 'Saturn',
    keywords: ['Ambition', 'Discipline', 'Responsibility', 'Achievement'],
    traits: ['Responsible', 'Disciplined', 'Practical', 'Ambitious'],
    challenges: ['Rigidity', 'Pessimism', 'Workaholism'],
    opportunities: ['Business', 'Management', 'Long-term planning'],
    month: 12
  },
  aquarius: {
    element: 'Air',
    quality: 'Fixed',
    ruler: 'Uranus',
    keywords: ['Innovation', 'Progress', 'Humanity', 'Independence'],
    traits: ['Original', 'Humanitarian', 'Independent', 'Progressive'],
    challenges: ['Detachment', 'Rebellion', 'Eccentricity'],
    opportunities: ['Technology', 'Social reform', 'Innovation'],
    month: 1
  },
  pisces: {
    element: 'Water',
    quality: 'Mutable',
    ruler: 'Neptune',
    keywords: ['Spirituality', 'Imagination', 'Compassion', 'Dreams'],
    traits: ['Compassionate', 'Artistic', 'Intuitive', 'Gentle'],
    challenges: ['Escapism', 'Confusion', 'Victimization'],
    opportunities: ['Art', 'Spirituality', 'Healing'],
    month: 2
  }
} as const;