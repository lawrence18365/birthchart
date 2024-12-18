import React from 'react';
import { ChartData } from '../types/chart';
import { getDeepPersonalizedInsights } from '../utils/personalizedInsights';
import { Star, Heart, Briefcase, Compass, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  chartData: ChartData;
}

export default function DeepInsightsPanel({ chartData }: Props) {
  const insights = getDeepPersonalizedInsights(chartData);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const renderInsightCard = (
    insight: ReturnType<typeof getDeepPersonalizedInsights>[keyof ReturnType<typeof getDeepPersonalizedInsights>],
    icon: React.ReactNode,
    bgColor: string
  ) => (
    <motion.div
      {...fadeIn}
      className={`${bgColor} p-6 rounded-xl shadow-lg space-y-4`}
    >
      <div className="flex items-center space-x-3">
        {icon}
        <h3 className="text-xl font-bold">{insight.title}</h3>
      </div>
      
      <p className="text-gray-700 leading-relaxed">
        {insight.description}
      </p>

      <div className="space-y-2">
        <h4 className="font-semibold text-gray-800">Key Advice:</h4>
        <ul className="space-y-1">
          {insight.advice.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center space-x-2 text-gray-600">
        <Calendar className="w-4 h-4" />
        <span>{insight.timing}</span>
      </div>

      <div className="space-y-2">
        <h4 className="font-semibold text-gray-800">Daily Affirmations:</h4>
        <ul className="space-y-1">
          {insight.affirmations.map((affirmation, index) => (
            <li key={index} className="italic text-gray-600">"{affirmation}"</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderInsightCard(
          insights.soulPurpose,
          <Star className="w-6 h-6 text-purple-600" />,
          'bg-purple-50'
        )}
        
        {renderInsightCard(
          insights.lifeDestiny,
          <Compass className="w-6 h-6 text-blue-600" />,
          'bg-blue-50'
        )}
        
        {renderInsightCard(
          insights.loveAndRelationships,
          <Heart className="w-6 h-6 text-red-600" />,
          'bg-red-50'
        )}
        
        {renderInsightCard(
          insights.careerAndPurpose,
          <Briefcase className="w-6 h-6 text-green-600" />,
          'bg-green-50'
        )}
      </div>
    </div>
  );
}