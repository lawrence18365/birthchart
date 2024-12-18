import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { Star, Moon, Sun } from 'lucide-react';
import { zodiacSigns } from '../../utils/zodiacData';

interface Props {
  activeSign: string;
  onSignSelect: (sign: string) => void;
}

export default function ZodiacExplorer({ activeSign, onSignSelect }: Props) {
  const [hoveredSign, setHoveredSign] = useState<string | null>(null);

  const springProps = useSpring({
    scale: hoveredSign ? 1.05 : 1,
    config: { tension: 300, friction: 10 }
  });

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {Object.entries(zodiacSigns).map(([sign, data]) => (
        <animated.div
          key={sign}
          style={springProps}
          className={`
            relative rounded-lg p-4 cursor-pointer
            ${activeSign === sign ? 'bg-purple-100' : 'bg-white'}
            hover:shadow-lg transition-shadow duration-200
          `}
          onMouseEnter={() => setHoveredSign(sign)}
          onMouseLeave={() => setHoveredSign(null)}
          onClick={() => onSignSelect(sign)}
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="text-2xl">{data.symbol}</div>
            <h3 className="text-sm font-semibold capitalize">{sign}</h3>
            
            <AnimatePresence>
              {hoveredSign === sign && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute inset-0 bg-purple-600/90 text-white rounded-lg p-4 flex flex-col items-center justify-center"
                >
                  <div className="text-xs space-y-1">
                    <p>Element: {data.element}</p>
                    <p>Quality: {data.quality}</p>
                    <p>Ruler: {data.ruler}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </animated.div>
      ))}
    </div>
  );
}