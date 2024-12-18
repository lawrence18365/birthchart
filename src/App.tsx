import React, { useState } from 'react';
import { BirthInfo, ChartData } from './types/chart';
import BirthInfoForm from './components/BirthInfoForm';
import ChartDisplay from './components/ChartDisplay';
import InterpretationPanel from './components/InterpretationPanel';
import LifePathAnalysis from './components/LifePathAnalysis';
import DeepInsightsPanel from './components/DeepInsightsPanel';
import EmailSignupOverlay from './components/EmailSignupOverlay';
import ProductRecommendation from './components/ProductRecommendation';
import { calculateChart } from './utils/chartCalculations';
import { Sparkles } from 'lucide-react';

function App() {
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSubmit = (birthInfo: BirthInfo) => {
    const chart = calculateChart(birthInfo);
    setChartData(chart);
    setBirthDate(birthInfo.date);
  };

  if (!isSignedUp) {
    return <EmailSignupOverlay onComplete={() => setIsSignedUp(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-purple-100">
      <div className="container mx-auto px-4 py-6 md:py-12">
        <header className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-purple-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-2 px-4">
            Celestial Insights: Your Personal Birth Chart
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto px-4 text-sm md:text-base">
            Discover your cosmic blueprint through an in-depth analysis of your birth chart
            and life path number. Uncover the unique planetary alignments and numerical vibrations
            that shape your destiny.
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
            <BirthInfoForm onSubmit={handleSubmit} />
          </div>
          
          {chartData && birthDate && (
            <div className="space-y-6 md:space-y-8">
              <ChartDisplay chartData={chartData} />
              <LifePathAnalysis birthDate={birthDate} />
              <InterpretationPanel chartData={chartData} />
              <DeepInsightsPanel chartData={chartData} />
              <ProductRecommendation chartData={chartData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;