import { useState } from 'react';
import { calculateZodiacSign } from '@/lib/zodiac-data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

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
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      const zodiacSign = calculateZodiacSign(birthDate);
      setZodiacResult(zodiacSign);
      setIsCalculating(false);
    }, 1500);
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-slate-800 to-slate-600 relative overflow-hidden">
      {/* Cosmic background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3')] bg-cover bg-center"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-white mb-4">
            Discover Your <span className="text-soft-gold">Zodiac Sign</span>
          </h2>
          <p className="text-xl text-white/90">
            Enter your birth details to discover your zodiac sign and unlock cosmic insights
          </p>
        </div>
        
        <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="birthDate" className="block text-white font-medium mb-2">
                    <i className="fas fa-calendar mr-2"></i>Date of Birth
                  </Label>
                  <Input
                    type="date"
                    id="birthDate"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/60 focus:ring-2 focus:ring-yellow-400 focus:border-transparent backdrop-blur-sm"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="birthTime" className="block text-white font-medium mb-2">
                    <i className="fas fa-clock mr-2"></i>Time of Birth (Optional)
                  </Label>
                  <Input
                    type="time"
                    id="birthTime"
                    value={birthTime}
                    onChange={(e) => setBirthTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/60 focus:ring-2 focus:ring-yellow-400 focus:border-transparent backdrop-blur-sm"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isCalculating}
                  className="bg-soft-gold text-white px-10 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50"
                >
                  {isCalculating ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Calculating...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-star mr-2"></i>
                      Calculate My Zodiac Sign
                    </>
                  )}
                </Button>
              </div>
            </form>
            
            {/* Zodiac Result Display */}
            {zodiacResult && (
              <div className="mt-8 animate-in slide-in-from-bottom-4 duration-500">
                <div className="bg-yellow-400/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-6xl mb-4">{zodiacResult.symbol}</div>
                  <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                    Your Zodiac Sign: <span className="text-yellow-400">{zodiacResult.name}</span>
                  </h3>
                  <p className="text-white/90 mb-6 text-lg">
                    {zodiacResult.description}
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white/10 rounded-xl p-3">
                      <div className="text-yellow-400 font-semibold">Element</div>
                      <div className="text-white">{zodiacResult.element}</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3">
                      <div className="text-yellow-400 font-semibold">Ruling Planet</div>
                      <div className="text-white">{zodiacResult.planet}</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3">
                      <div className="text-yellow-400 font-semibold">Lucky Color</div>
                      <div className="text-white">{zodiacResult.color}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
