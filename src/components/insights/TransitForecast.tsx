import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { ChartData } from '../../types/chart';
import { calculateTransits } from '../../utils/transitCalculations';
import { Calendar, Compass, Star, TrendingUp } from 'lucide-react';

interface Props {
  chartData: ChartData;
}

export default function TransitForecast({ chartData }: Props) {
  const transits = calculateTransits(chartData);
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
      <h2 className="text-2xl font-bold text-purple-900 flex items-center gap-2">
        <Compass className="w-6 h-6" />
        Current Planetary Influences
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {transits.map((transit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 bg-white rounded-full">
                <Star className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-purple-900">{transit.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{transit.description}</p>
                
                <div className="mt-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-purple-500" />
                  <span className="text-sm text-purple-700">{transit.timing}</span>
                </div>

                <div className="mt-2">
                  <div className="text-xs text-gray-500">Influence Strength</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${transit.strength}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="bg-purple-600 h-2 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {transits[0].metrics.map((metric, index) => (
          <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-600">{metric.label}</div>
            <div className="text-2xl font-bold text-purple-600 mt-1">
              <CountUp end={metric.value} duration={2} />
              {metric.unit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}