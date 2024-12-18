import React from 'react';
import { ChartData } from '../types/chart';
import { Sun, Moon, ArrowUp, Star, Flame, Waves } from 'lucide-react';
import ChartWheel from './ChartWheel';

interface PlanetCardProps {
  icon: React.ReactNode;
  title: string;
  sign: string;
  degree: number;
  color: string;
}

function PlanetCard({ icon, title, sign, degree, color }: PlanetCardProps) {
  return (
    <div className={`text-center p-4 md:p-6 rounded-lg bg-gradient-to-br ${color} hover:shadow-lg transition-shadow`}>
      <div className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2">{icon}</div>
      <h3 className="text-xs md:text-sm font-medium text-gray-600">{title}</h3>
      <p className="text-lg md:text-xl font-bold text-gray-900 capitalize">{sign}</p>
      <p className="text-xs md:text-sm text-gray-600">{degree.toFixed(2)}°</p>
    </div>
  );
}

export default function ChartDisplay({ chartData }: { chartData: ChartData }) {
  const planetConfigs = [
    {
      icon: <Sun className="w-full h-full text-orange-500" />,
      title: 'Sun Sign',
      data: chartData.sun,
      color: 'from-orange-50 to-yellow-50'
    },
    {
      icon: <Moon className="w-full h-full text-blue-500" />,
      title: 'Moon Sign',
      data: chartData.moon,
      color: 'from-blue-50 to-indigo-50'
    },
    {
      icon: <Star className="w-full h-full text-purple-500" />,
      title: 'Mercury',
      data: chartData.mercury,
      color: 'from-purple-50 to-pink-50'
    },
    {
      icon: <Flame className="w-full h-full text-red-500" />,
      title: 'Mars',
      data: chartData.mars,
      color: 'from-red-50 to-orange-50'
    },
    {
      icon: <Star className="w-full h-full text-green-500" />,
      title: 'Venus',
      data: chartData.venus,
      color: 'from-green-50 to-emerald-50'
    },
    {
      icon: <Star className="w-full h-full text-yellow-500" />,
      title: 'Jupiter',
      data: chartData.jupiter,
      color: 'from-yellow-50 to-amber-50'
    },
    {
      icon: <Waves className="w-full h-full text-gray-500" />,
      title: 'Saturn',
      data: chartData.saturn,
      color: 'from-gray-50 to-slate-50'
    }
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Planetary Positions</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {planetConfigs.map(({ icon, title, data, color }) => (
            <PlanetCard
              key={title}
              icon={icon}
              title={title}
              sign={data.sign}
              degree={data.degree}
              color={color}
            />
          ))}
          
          <div className="text-center p-4 md:p-6 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow">
            <ArrowUp className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" />
            <h3 className="text-xs md:text-sm font-medium text-gray-600">Ascendant</h3>
            <p className="text-lg md:text-xl font-bold text-gray-900 capitalize">{chartData.ascendant}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Birth Chart Wheel</h2>
        <ChartWheel chartData={chartData} />
      </div>
    </div>
  );
}