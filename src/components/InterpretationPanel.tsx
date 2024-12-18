import React, { useState } from 'react';
import { ChartData } from '../types/chart';
import { zodiacSigns } from '../utils/zodiacData';
import { Star, Sun, Moon, Navigation, Activity, BarChart2, Compass } from 'lucide-react';
import { getPersonalizedReading } from '../utils/interpretationEngine';

interface Props {
  chartData: ChartData;
}

export default function InterpretationPanel({ chartData }: Props) {
  const [activeTab, setActiveTab] = useState('personality');
  const reading = getPersonalizedReading(chartData);

  const tabs = [
    { id: 'personality', label: 'Your Cosmic Story', icon: <Sun className="w-4 h-4" /> },
    { id: 'aspects', label: 'Life Path', icon: <Star className="w-4 h-4" /> },
    { id: 'patterns', label: 'Future Insights', icon: <Activity className="w-4 h-4" /> }
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex space-x-4 mb-6 border-b">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 border-b-2 transition-colors ${
              activeTab === tab.id
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {activeTab === 'personality' && (
        <div className="space-y-6">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
              alt="Starry night sky"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Your Cosmic Blueprint</h3>
              <p className="text-lg">{reading.personalityOverview}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-purple-900 mb-4">Core Traits</h4>
              <ul className="space-y-3">
                {reading.coreTraits.map((trait, index) => (
                  <li key={index} className="flex items-center text-purple-800">
                    <Star className="w-4 h-4 mr-2 text-purple-600" />
                    {trait}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-blue-900 mb-4">Life Lessons</h4>
              <ul className="space-y-3">
                {reading.lifeThemes.map((theme, index) => (
                  <li key={index} className="flex items-center text-blue-800">
                    <Moon className="w-4 h-4 mr-2 text-blue-600" />
                    {theme}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'aspects' && (
        <div className="space-y-6">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9"
              alt="Path through nature"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Your Life Journey</h3>
              <p className="text-lg">{reading.lifePath}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-green-900 mb-4">Growth Opportunities</h4>
              <ul className="space-y-3">
                {reading.opportunities.map((opportunity, index) => (
                  <li key={index} className="flex items-center text-green-800">
                    <Navigation className="w-4 h-4 mr-2 text-green-600" />
                    {opportunity}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-orange-900 mb-4">Life Challenges</h4>
              <ul className="space-y-3">
                {reading.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-center text-orange-800">
                    <BarChart2 className="w-4 h-4 mr-2 text-orange-600" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'patterns' && (
        <div className="space-y-6">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a"
              alt="Galaxy"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Your Cosmic Future</h3>
              <p className="text-lg">{reading.futureOutlook}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {reading.predictions.map((prediction, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-indigo-900 mb-4">{prediction.title}</h4>
                <p className="text-indigo-800 mb-4">{prediction.description}</p>
                <div className="flex flex-wrap gap-2">
                  {prediction.keywords.map((keyword, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}