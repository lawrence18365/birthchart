import React from 'react';
import { calculateLifePath, getLifePathMeaning } from '../utils/lifePathCalculations';
import { Star, Heart, Zap, AlertTriangle } from 'lucide-react';

interface Props {
  birthDate: Date;
}

export default function LifePathAnalysis({ birthDate }: Props) {
  const lifePathNumber = calculateLifePath(birthDate);
  const meaning = getLifePathMeaning(lifePathNumber);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-purple-900 mb-2">Life Path Number {lifePathNumber}</h2>
        <h3 className="text-xl text-purple-700">{meaning.title}</h3>
      </div>

      <div className="space-y-6">
        <div className="bg-purple-50 p-6 rounded-lg">
          <p className="text-purple-900 leading-relaxed">{meaning.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Star className="w-5 h-5 text-green-600 mr-2" />
              <h4 className="text-lg font-semibold text-green-800">Strengths</h4>
            </div>
            <ul className="space-y-2">
              {meaning.strengths.map((strength, index) => (
                <li key={index} className="flex items-center text-green-700">
                  <Heart className="w-4 h-4 mr-2" />
                  {strength}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
              <h4 className="text-lg font-semibold text-red-800">Challenges</h4>
            </div>
            <ul className="space-y-2">
              {meaning.challenges.map((challenge, index) => (
                <li key={index} className="flex items-center text-red-700">
                  <Zap className="w-4 h-4 mr-2" />
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <Star className="w-5 h-5 text-blue-600 mr-2" />
            <h4 className="text-lg font-semibold text-blue-800">Life Purpose</h4>
          </div>
          <p className="text-blue-700 leading-relaxed">{meaning.purpose}</p>
        </div>
      </div>
    </div>
  );
}