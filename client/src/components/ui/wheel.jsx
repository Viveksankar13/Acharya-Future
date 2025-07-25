import React, { useState, useEffect } from 'react';

export default function FuturisticVedicWheel() {
  const [hoveredSign, setHoveredSign] = useState(null);
  const [stars, setStars] = useState([]);
  const [mouseAngle, setMouseAngle] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Generate random stars for the background
  useEffect(() => {
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 300; i++) {
        starArray.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          animationDelay: Math.random() * 3,
        });
      }
      setStars(starArray);
    };
    generateStars();
  }, []);

  // Handle mouse movement over the wheel
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    setMouseAngle(angle);
  };

  const vedicSigns = [
    { name: 'Mesha', symbol: '♈', sanskrit: 'मेष', animal: '🐏', dates: 'Apr 13 - May 14', element: 'Agni', color: 'text-red-400', planet: 'Mangal', nakshatras: ['Ashwini', 'Bharani', 'Krittika'] },
    { name: 'Vrishabha', symbol: '♉', sanskrit: 'वृषभ', animal: '🐂', dates: 'May 15 - Jun 14', element: 'Prithvi', color: 'text-green-400', planet: 'Shukra', nakshatras: ['Krittika', 'Rohini', 'Mrigashira'] },
    { name: 'Mithuna', symbol: '♊', sanskrit: 'मिथुन', animal: '👫', dates: 'Jun 15 - Jul 16', element: 'Vayu', color: 'text-yellow-400', planet: 'Budha', nakshatras: ['Mrigashira', 'Ardra', 'Punarvasu'] },
    { name: 'Karka', symbol: '♋', sanskrit: 'कर्क', animal: '🦀', dates: 'Jul 17 - Aug 16', element: 'Jal', color: 'text-blue-400', planet: 'Chandra', nakshatras: ['Punarvasu', 'Pushya', 'Ashlesha'] },
    { name: 'Simha', symbol: '♌', sanskrit: 'सिंह', animal: '🦁', dates: 'Aug 17 - Sep 16', element: 'Agni', color: 'text-orange-400', planet: 'Surya', nakshatras: ['Magha', 'Purva Phalguni', 'Uttara Phalguni'] },
    { name: 'Kanya', symbol: '♍', sanskrit: 'कन्या', animal: '👩', dates: 'Sep 17 - Oct 17', element: 'Prithvi', color: 'text-emerald-400', planet: 'Budha', nakshatras: ['Uttara Phalguni', 'Hasta', 'Chitra'] },
    { name: 'Tula', symbol: '♎', sanskrit: 'तुला', animal: '⚖️', dates: 'Oct 18 - Nov 16', element: 'Vayu', color: 'text-pink-400', planet: 'Shukra', nakshatras: ['Chitra', 'Swati', 'Vishakha'] },
    { name: 'Vrishchika', symbol: '♏', sanskrit: 'वृश्चिक', animal: '🦂', dates: 'Nov 17 - Dec 15', element: 'Jal', color: 'text-purple-400', planet: 'Mangal', nakshatras: ['Vishakha', 'Anuradha', 'Jyeshtha'] },
    { name: 'Dhanus', symbol: '♐', sanskrit: 'धनुष', animal: '🏹', dates: 'Dec 16 - Jan 14', element: 'Agni', color: 'text-indigo-400', planet: 'Guru', nakshatras: ['Mula', 'Purva Ashadha', 'Uttara Ashadha'] },
    { name: 'Makara', symbol: '♑', sanskrit: 'मकर', animal: '🐐', dates: 'Jan 15 - Feb 12', element: 'Prithvi', color: 'text-gray-400', planet: 'Shani', nakshatras: ['Uttara Ashadha', 'Shravana', 'Dhanishta'] },
    { name: 'Kumbha', symbol: '♒', sanskrit: 'कुम्भ', animal: '🏺', dates: 'Feb 13 - Mar 14', element: 'Vayu', color: 'text-cyan-400', planet: 'Shani', nakshatras: ['Dhanishta', 'Shatabhisha', 'Purva Bhadrapada'] },
    { name: 'Meena', symbol: '♓', sanskrit: 'मीन', animal: '🐟', dates: 'Mar 15 - Apr 12', element: 'Jal', color: 'text-teal-400', planet: 'Guru', nakshatras: ['Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'] }
  ];

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-black overflow-hidden flex items-center justify-center">
      
      {/* Animated starfield background */}
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.animationDelay}s`,
          }}
        />
      ))}

      {/* Cosmic nebula effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-25 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main Vedic astrology wheel */}
      <div className="relative">
        {/* Outer holographic ring */}
        <div className="w-[520px] h-[520px] rounded-full shadow-2xl animate-spin-slow relative"
             style={{
               background: 'conic-gradient(from 0deg, rgba(255,140,0,0.2), rgba(255,215,0,0.3), rgba(255,69,0,0.2), rgba(138,43,226,0.2), rgba(0,255,255,0.1), rgba(255,140,0,0.2))',
               boxShadow: '0 0 80px rgba(255,140,0,0.4), inset 0 0 40px rgba(255,215,0,0.2)',
               animation: 'spin 120s linear infinite, vedic-glow 4s ease-in-out infinite alternate'
             }}
             onMouseMove={handleMouseMove}
             onMouseEnter={() => setIsHovering(true)}
             onMouseLeave={() => setIsHovering(false)}>
          
          {/* Mouse tracking beam */}
          {isHovering && (
            <div
              className="absolute top-1/2 left-1/2 origin-left h-0.5 bg-gradient-to-r from-orange-400 via-yellow-300 to-transparent opacity-80 transition-all duration-100 ease-out z-30"
              style={{
                width: '250px',
                transform: `translate(-1px, -1px) rotate(${mouseAngle}deg)`,
                boxShadow: '0 0 12px rgba(255,165,0,0.8)',
              }}
            />
          )}
          
          {/* Vedic grid pattern */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            {/* Sacred geometry lines */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-40"
                style={{
                  top: '50%',
                  transform: `rotate(${i * 30}deg)`,
                  transformOrigin: 'center',
                }}
              />
            ))}
            {/* Concentric circles */}
            {[...Array(3)].map((_, i) => (
              <div
                key={`circle-${i}`}
                className="absolute rounded-full border border-yellow-400 opacity-30"
                style={{
                  width: `${70 + i * 20}%`,
                  height: `${70 + i * 20}%`,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            ))}
          </div>
          
          {/* Scanning pulse effect */}
          <div 
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              background: 'conic-gradient(from 0deg, transparent 350deg, rgba(255,165,0,0.6) 355deg, rgba(255,215,0,0.8) 360deg, transparent 5deg)',
              animation: 'vedic-scan 6s linear infinite'
            }}
          />
          
          {/* Twinkling constellation border */}
          {[...Array(48)].map((_, i) => {
            const angle = i * 7.5;
            const radian = (angle * Math.PI) / 180;
            const radius = 250;
            const x = Math.cos(radian) * radius;
            const y = Math.sin(radian) * radius;
            
            return (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse shadow-sm"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: `${2 + Math.random()}s`,
                  opacity: 0.6 + Math.random() * 0.4,
                  boxShadow: '0 0 6px rgba(255,215,0,0.8)',
                }}
              />
            );
          })}
          
          {/* Vedic signs positioned around the wheel */}
          {vedicSigns.map((sign, index) => {
            const angle = (index * 30) - 90;
            const radian = (angle * Math.PI) / 180;
            const radius = 180;
            const x = Math.cos(radian) * radius;
            const y = Math.sin(radian) * radius;

            return (
              <div
                key={sign.name}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-125 group z-20"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
                onMouseEnter={() => setHoveredSign(sign)}
                onMouseLeave={() => setHoveredSign(null)}
              >
                {/* Holographic sector background */}
                <div className="absolute inset-0 w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm shadow-2xl" />
                
                {/* Vedic animal/symbol */}
                <div className="relative z-10 text-3xl mb-1 text-center filter drop-shadow-lg"
                     style={{
                       filter: 'drop-shadow(0 0 8px rgba(255,165,0,0.6))',
                       textShadow: '0 0 12px rgba(255,215,0,0.4)',
                     }}>
                  {sign.animal}
                </div>
                
                {/* Sanskrit symbol with holographic effect */}
                <div className={`text-2xl ${sign.color} text-center font-bold filter drop-shadow-md hover:text-yellow-300 transition-colors duration-300`}
                     style={{
                       filter: 'drop-shadow(0 0 6px rgba(255,165,0,0.5))',
                       textShadow: '0 0 8px rgba(255,140,0,0.3)',
                     }}>
                  {sign.symbol}
                </div>
              </div>
            );
          })}
          
          {/* Sacred center mandala */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-24 h-24">
              {/* Pulsing sacred core */}
              <div 
                className="w-full h-full rounded-full animate-pulse"
                style={{
                  background: 'radial-gradient(circle, rgba(255,215,0,0.9), rgba(255,140,0,0.6), rgba(138,43,226,0.3))',
                  boxShadow: '0 0 40px rgba(255,215,0,0.7), inset 0 0 20px rgba(255,165,0,0.4)',
                }}
              />
              
              {/* Rotating sacred rings */}
              <div 
                className="absolute inset-0 rounded-full border-2 border-yellow-400 opacity-60 animate-spin"
                style={{ animationDuration: '4s' }}
              />
              <div 
                className="absolute inset-2 rounded-full border border-orange-300 opacity-40 animate-spin"
                style={{ animationDuration: '3s', animationDirection: 'reverse' }}
              />
              
              {/* Sacred Om symbol */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-orange-900 z-10"
                   style={{
                     filter: 'drop-shadow(0 0 4px rgba(255,215,0,0.8))',
                     textShadow: '0 0 8px rgba(255,140,0,0.5)',
                   }}>
                ॐ
              </div>
              
              {/* Nakshatra dots */}
              {[...Array(27)].map((_, i) => {
                const dotAngle = i * (360 / 27);
                const dotRadian = (dotAngle * Math.PI) / 180;
                const dotRadius = 40;
                const dotX = Math.cos(dotRadian) * dotRadius;
                const dotY = Math.sin(dotRadian) * dotRadius;
                
                return (
                  <div
                    key={`nakshatra-${i}`}
                    className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
                    style={{
                      left: `calc(50% + ${dotX}px)`,
                      top: `calc(50% + ${dotY}px)`,
                      transform: 'translate(-50%, -50%)',
                      animationDelay: `${i * 0.1}s`,
                      boxShadow: '0 0 3px rgba(255,215,0,0.6)',
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Advanced Vedic info panel */}
        {hoveredSign && (
          <div className="absolute top-full mt-8 left-1/2 transform -translate-x-1/2 bg-gray-900 bg-opacity-90 backdrop-blur-md rounded-lg p-6 border-2 border-orange-400 shadow-xl animate-fade-in min-w-80"
               style={{ 
                 boxShadow: '0 0 30px rgba(255,140,0,0.4), inset 0 0 15px rgba(255,165,0,0.1)',
               }}>
            <div className="text-center text-white">
              <div className="text-4xl mb-3 filter drop-shadow-lg">
                {hoveredSign.animal}
              </div>
              <div className={`text-3xl ${hoveredSign.color} mb-2 font-bold`}
                   style={{
                     filter: 'drop-shadow(0 0 8px rgba(255,165,0,0.5))',
                     textShadow: '0 0 10px rgba(255,140,0,0.3)',
                   }}>
                {hoveredSign.symbol}
              </div>
              <div className="text-xl font-bold text-yellow-300 mb-2">{hoveredSign.name}</div>
              <div className="text-lg text-orange-200 mb-3 font-semibold">{hoveredSign.sanskrit}</div>
              <div className="text-sm text-gray-300 mb-2">{hoveredSign.dates}</div>
              <div className="text-sm text-orange-400 mb-1">Element: {hoveredSign.element}</div>
              <div className="text-sm text-yellow-400 mb-2">Graha: {hoveredSign.planet}</div>
              <div className="text-xs text-cyan-300 opacity-80">
                Nakshatras: {hoveredSign.nakshatras.join(', ')}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating cosmic energy particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full animate-float opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
              boxShadow: '0 0 6px rgba(255,165,0,0.6)',
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes vedic-glow {
          0% { box-shadow: 0 0 80px rgba(255,140,0,0.4), inset 0 0 40px rgba(255,215,0,0.2); }
          100% { box-shadow: 0 0 120px rgba(255,140,0,0.6), inset 0 0 60px rgba(255,215,0,0.3); }
        }
        
        @keyframes vedic-scan {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 0.8; }
        }
        
        .animate-spin-slow {
          animation: spin 120s linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
        
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}