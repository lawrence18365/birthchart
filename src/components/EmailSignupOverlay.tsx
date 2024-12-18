import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Mail, User, X, Sparkles } from 'lucide-react';

interface Props {
  onComplete: () => void;
}

export default function EmailSignupOverlay({ onComplete }: Props) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setError('All fields are required');
      return;
    }

    if (!isValidEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    console.log('Form submitted:', formData);
    onComplete();
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-xl shadow-2xl w-full max-w-md p-4 md:p-8 relative overflow-y-auto max-h-[90vh]"
        >
          <div className="absolute top-4 right-4 flex space-x-2">
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
            <Star className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
          </div>

          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Begin Your Celestial Journey
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Join thousands discovering their cosmic destiny through personalized astrological insights.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="space-y-3 md:space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="pl-9 md:pl-10 w-full px-3 md:px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 text-sm md:text-base"
                    placeholder="Enter your first name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="pl-9 md:pl-10 w-full px-3 md:px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 text-sm md:text-base"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-9 md:pl-10 w-full px-3 md:px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 text-sm md:text-base"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-xs md:text-sm">{error}</p>
            )}

            <div className="space-y-4">
              <div className="bg-purple-50 p-3 md:p-4 rounded-lg text-xs md:text-sm text-purple-800">
                <h4 className="font-semibold mb-2">What you'll receive:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0" />
                    <span>Weekly personalized horoscope readings</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0" />
                    <span>Monthly celestial event notifications</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0" />
                    <span>Exclusive astrological insights and guidance</span>
                  </li>
                </ul>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2.5 md:py-3 px-4 rounded-md hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm md:text-base"
              >
                <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                <span>Unlock Your Cosmic Destiny</span>
              </button>
            </div>

            <div className="space-y-2 md:space-y-3 text-[10px] md:text-xs text-gray-500">
              <p className="text-center">
                By signing up, you agree to receive our weekly newsletter featuring personalized 
                astrological insights, cosmic updates, and exclusive content. You can unsubscribe at any time.
              </p>
              <p className="text-center">
                We value your privacy and will never share your information with third parties. 
                Your data is securely stored and protected in accordance with our privacy policy.
              </p>
              <p className="text-center">
                Frequency: Weekly newsletter + occasional special event notifications. 
                Message and data rates may apply.
              </p>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}