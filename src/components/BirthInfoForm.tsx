import React, { useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { BirthInfo } from '../types/chart';
import { format } from 'date-fns';

interface Props {
  onSubmit: (info: BirthInfo) => void;
}

export default function BirthInfoForm({ onSubmit }: Props) {
  const [birthInfo, setBirthInfo] = useState<BirthInfo>({
    date: new Date(),
    time: '12:00',
    latitude: 0,
    longitude: 0,
    location: ''
  });

  const [locationError, setLocationError] = useState<string>('');
  const [dateString, setDateString] = useState(format(new Date(), 'yyyy-MM-dd'));

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = e.target.value;
    setDateString(dateValue);
    if (dateValue) {
      const [year, month, day] = dateValue.split('-').map(Number);
      const newDate = new Date(year, month - 1, day);
      if (!isNaN(newDate.getTime())) {
        setBirthInfo({ ...birthInfo, date: newDate });
      }
    }
  };

  const handleLocationChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const location = e.target.value;
    setBirthInfo({ ...birthInfo, location });
    
    if (location.length > 2) {
      try {
        // For demo purposes, using Dublin's coordinates
        const coordinates = {
          latitude: 53.3498,
          longitude: -6.2603
        };
        
        setBirthInfo(prev => ({
          ...prev,
          location,
          latitude: coordinates.latitude,
          longitude: coordinates.longitude
        }));
        setLocationError('');
      } catch (error) {
        setLocationError('Please enter a valid location');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!locationError && birthInfo.date) {
      onSubmit(birthInfo);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="inline-block w-4 h-4 mr-2" />
            Birth Date
          </label>
          <input
            type="date"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 bg-white"
            value={dateString}
            onChange={handleDateChange}
            required
          />
          <div className="absolute right-3 top-9 pointer-events-none">
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Clock className="inline-block w-4 h-4 mr-2" />
            Birth Time
          </label>
          <input
            type="time"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 bg-white"
            value={birthInfo.time}
            onChange={(e) => setBirthInfo({ ...birthInfo, time: e.target.value })}
            required
          />
          <div className="absolute right-3 top-9 pointer-events-none">
            <Clock className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <MapPin className="inline-block w-4 h-4 mr-2" />
          Birth Location
        </label>
        <input
          type="text"
          placeholder="Enter city name (e.g., Dublin, Ireland)"
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 bg-white ${
            locationError ? 'border-red-500' : ''
          }`}
          value={birthInfo.location}
          onChange={handleLocationChange}
          required
        />
        <div className="absolute right-3 top-9 pointer-events-none">
          <MapPin className="w-5 h-5 text-gray-400" />
        </div>
        {locationError && (
          <p className="mt-1 text-sm text-red-600">{locationError}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-md hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
      >
        <Calendar className="w-5 h-5" />
        <span>Generate Your Birth Chart</span>
      </button>
    </form>
  );
}