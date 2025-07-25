import { useState } from 'react';
import { calculateZodiacSign } from '@/lib/zodiac-data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ZodiacCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [zodiacResult, setZodiacResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!birthDate) {
      alert('Please enter your birth date');
      return;
    }
    
    setIsCalculating(true);
    
    // Simulate AI calculation delay for better UX
    setTimeout(() => {
      const zodiacSign = calculateZodiacSign(birthDate);
      setZodiacResult(zodiacSign);
      setIsCalculating(false);
    }, 2000);
  };

  return (
    <section id="calculator" className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Neural Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-cyan-500/20 text-cyan-400 px-4 py-2 text-sm font-medium mb-6">
            🧬 Neural Analysis
          </Badge>
          <h2 className="font-orbitron font-bold text-4xl lg:text-5xl text-white mb-6">
            Quantum Zodiac <span className="text-cyan-400">Calculator</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Experience next-generation astrological analysis powered by quantum computing 
            and neural networks for unprecedented cosmic insights
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Form */}
          <Card className="glass-card border-white/20 shadow-2xl">
            <CardHeader>
              <CardTitle className="font-orbitron text-white text-2xl flex items-center">
                <span className="mr-3 text-2xl">🔮</span>
                Cosmic Data Input
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="birthDate" className="block text-white font-medium mb-3 font-space">
                      <span className="flex items-center">
                        <span className="w-8 h-8 cyber-blue rounded-lg flex items-center justify-center text-white text-sm mr-3">📅</span>
                        Birth Date
                      </span>
                    </Label>
                    <Input
                      type="date"
                      id="birthDate"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      className="w-full px-4 py-4 rounded-xl border border-white/20 bg-white/5 text-white placeholder-white/60 focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm text-lg"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="birthTime" className="block text-white font-medium mb-3 font-space">
                      <span className="flex items-center">
                        <span className="w-8 h-8 electric-purple rounded-lg flex items-center justify-center text-white text-sm mr-3">⏰</span>
                        Birth Time (Optional)
                      </span>
                    </Label>
                    <Input
                      type="time"
                      id="birthTime"
                      value={birthTime}
                      onChange={(e) => setBirthTime(e.target.value)}
                      className="w-full px-4 py-4 rounded-xl border border-white/20 bg-white/5 text-white placeholder-white/60 focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-sm text-lg"
                    />
                  </div>
                </div>
                
                <div className="text-center pt-4">
                  <Button
                    type="submit"
                    disabled={isCalculating}
                    className="cyber-blue text-white px-12 py-6 rounded-2xl font-bold text-lg hover:bg-opacity-90 transition-all duration-300 elevation-3 hover:elevation-4 transform hover:-translate-y-1 disabled:opacity-50 w-full lg:w-auto"
                  >
                    {isCalculating ? (
                      <span className="flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                        Analyzing Cosmic Data...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <span className="mr-3">🚀</span>
                        Calculate My Zodiac Sign
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Result Display */}
          <div className="space-y-8">
            {/* Neural Processing Visualization */}
            <Card className="glass-card border-white/20">
              <CardContent className="p-8 text-center">
                <h3 className="font-orbitron font-bold text-xl text-white mb-6">Neural Processing Status</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Quantum Analysis</span>
                    <div className={`w-3 h-3 rounded-full ${isCalculating ? 'bg-cyan-400 animate-pulse' : 'bg-gray-600'}`}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Cosmic Alignment</span>
                    <div className={`w-3 h-3 rounded-full ${isCalculating ? 'bg-purple-400 animate-pulse' : 'bg-gray-600'}`} style={{animationDelay: '0.5s'}}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Neural Synthesis</span>
                    <div className={`w-3 h-3 rounded-full ${isCalculating ? 'bg-pink-400 animate-pulse' : 'bg-gray-600'}`} style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Zodiac Result */}
            {zodiacResult && (
              <Card className="glass-card border-cyan-400/30 animate-slide-up">
                <CardHeader>
                  <CardTitle className="font-orbitron text-white text-2xl text-center">
                    Neural Analysis Complete
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    {/* Zodiac Symbol */}
                    <div className="relative">
                      <div className="w-32 h-32 mx-auto cyber-blue rounded-full flex items-center justify-center text-6xl text-white animate-glow">
                        {zodiacResult.symbol}
                      </div>
                      <div className="absolute inset-0 w-32 h-32 mx-auto border-2 border-cyan-400/30 rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Sign Name */}
                    <div>
                      <h3 className="font-orbitron font-bold text-3xl text-white mb-2">
                        {zodiacResult.name}
                      </h3>
                      <Badge className="bg-cyan-500/20 text-cyan-400 px-4 py-2">
                        Quantum Verified
                      </Badge>
                    </div>
                    
                    {/* Description */}
                    <p className="text-white/90 text-lg leading-relaxed max-w-md mx-auto">
                      {zodiacResult.description}
                    </p>
                    
                    {/* Cosmic Properties */}
                    <div className="grid grid-cols-3 gap-4 mt-8">
                      <div className="glass-card p-4 rounded-xl">
                        <div className="text-cyan-400 font-bold text-sm mb-1">Element</div>
                        <div className="text-white font-medium">{zodiacResult.element}</div>
                      </div>
                      <div className="glass-card p-4 rounded-xl">
                        <div className="text-purple-400 font-bold text-sm mb-1">Planet</div>
                        <div className="text-white font-medium">{zodiacResult.planet}</div>
                      </div>
                      <div className="glass-card p-4 rounded-xl">
                        <div className="text-pink-400 font-bold text-sm mb-1">Color</div>
                        <div className="text-white font-medium">{zodiacResult.color}</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                      <Button className="electric-purple text-white px-6 py-3 rounded-full font-semibold flex-1">
                        <span className="mr-2">📊</span>
                        Detailed Analysis
                      </Button>
                      <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-6 py-3 rounded-full font-semibold flex-1">
                        <span className="mr-2">💫</span>
                        Daily Horoscope
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Call to Action */}
            {!zodiacResult && !isCalculating && (
              <Card className="glass-card border-white/20">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4 animate-float">🌌</div>
                  <h3 className="font-orbitron font-bold text-xl text-white mb-4">
                    Ready to Discover Your Cosmic Blueprint?
                  </h3>
                  <p className="text-white/70 mb-6">
                    Enter your birth details to unlock personalized insights powered by advanced AI analysis
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {['🔮', '⭐', '🌙', '☄️', '🪐', '✨'].map((emoji, i) => (
                      <div key={i} className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center animate-hologram" style={{animationDelay: `${i * 0.3}s`}}>
                        <span className="text-xl">{emoji}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}