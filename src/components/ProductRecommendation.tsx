import React from 'react';
import { ChartData } from '../types/chart';
import { getPersonalizedOffer } from '../utils/offerEngine';
import { ShoppingBag, Book, Star, Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  chartData: ChartData;
}

export default function ProductRecommendation({ chartData }: Props) {
  const offer = getPersonalizedOffer(chartData);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div 
        className="h-48 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${offer.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/50 to-purple-900/90" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            {offer.title}
          </h2>
          <p className="text-white/90">
            {offer.subtitle}
          </p>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">
              What You'll Discover
            </h3>
            <ul className="space-y-3">
              {offer.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Perfect For You Because
            </h3>
            <ul className="space-y-3">
              {offer.personalizedReasons.map((reason, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <div className="text-2xl md:text-3xl font-bold text-purple-600">
                {offer.price}
              </div>
              <p className="text-sm text-gray-500">
                {offer.priceDetails}
              </p>
            </div>

            <motion.a
              href={offer.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {offer.type === 'ebook' && <Book className="w-5 h-5" />}
              {offer.type === 'course' && <Download className="w-5 h-5" />}
              {offer.type === 'reading' && <Star className="w-5 h-5" />}
              <span>{offer.ctaText}</span>
            </motion.a>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 pt-4">
          <p>30-day money-back guarantee • Instant digital access</p>
        </div>
      </div>
    </div>
  );
}