import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import ZodiacCalculator from '@/components/zodiac-calculator';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
          
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigationItems = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'services', label: 'Services', icon: '⭐' },
    { id: 'astrology', label: 'Astrology', icon: '🔮' },
    { id: 'palmistry', label: 'Palmistry', icon: '🤚' },
    { id: 'gemology', label: 'Gemology', icon: '💎' },
    { id: 'calculator', label: 'Calculator', icon: '📊' },
  ];

  return (
    <div className="bg-neo-white font-space min-h-screen">
      {/* Futuristic Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 elevation-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 cyber-blue rounded-xl flex items-center justify-center animate-glow">
                <span className="text-2xl font-orbitron font-bold text-white">A</span>
              </div>
              <div>
                <h1 className="font-orbitron font-bold text-xl text-gray-900">ACHARYA</h1>
                <p className="text-sm text-gray-500 font-space">Institute of Futurology</p>
              </div>
            </div>
            
            {/* Navigation Items */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? 'cyber-blue text-white elevation-2'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
              <Button className="cyber-blue text-white px-6 py-3 rounded-full elevation-2 hover:elevation-3 transition-all duration-300">
                Book Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className={`space-y-8 ${isVisible.hero ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="space-y-4">
                <Badge className="cyber-blue text-white px-4 py-2 text-sm font-medium">
                  🚀 Next-Gen Astrology
                </Badge>
                <h1 className="font-orbitron font-bold text-5xl lg:text-7xl text-gray-900 leading-tight">
                  Unlock the Secrets of the <span className="text-cyber-blue">Stars</span>
                </h1>
                <h2 className="font-space text-2xl lg:text-3xl text-gray-600 font-medium">
                  Discover the Power of Modern Astrology
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                  Experience the perfect fusion of ancient wisdom and cutting-edge technology. 
                  Our AI-powered astrological insights provide unprecedented accuracy in 
                  understanding your cosmic blueprint and future pathways.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('calculator')}
                  className="cyber-blue text-white px-8 py-4 rounded-full text-lg font-semibold elevation-3 hover:elevation-4 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="mr-2">🔮</span>
                  Start Your Journey
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('services')}
                  className="border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  <span className="mr-2">📱</span>
                  Explore Services
                </Button>
              </div>
            </div>

            {/* Right Content - 3D Visual */}
            <div className="relative">
              <div className={`relative ${isVisible.hero ? 'animate-float' : ''}`}>
                <div className="w-full max-w-lg mx-auto aspect-square rounded-3xl cyber-blue p-8 elevation-5 animate-glow">
                  <div className="w-full h-full bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <div className="text-center text-white space-y-4">
                      <div className="text-6xl animate-pulse-slow">🌌</div>
                      <h3 className="font-orbitron font-bold text-2xl">Cosmic AI</h3>
                      <p className="text-white/80">Powered by Quantum Analytics</p>
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        {['♈', '♉', '♊', '♋', '♌', '♍'].map((symbol, i) => (
                          <div key={i} className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-sm animate-hologram" style={{animationDelay: `${i * 0.5}s`}}>
                            {symbol}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 electric-purple rounded-full flex items-center justify-center text-white text-2xl animate-pulse-slow elevation-3">
                  🌟
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 neon-green rounded-full flex items-center justify-center text-white text-xl animate-pulse-slow elevation-3" style={{animationDelay: '1s'}}>
                  ✨
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center mb-20 ${isVisible.services ? 'animate-slide-up' : 'opacity-0'}`}>
            <Badge className="electric-purple text-white px-4 py-2 text-sm font-medium mb-6">
              🎯 Why Choose Us?
            </Badge>
            <h2 className="font-orbitron font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
              Advanced Astrological Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of cosmic guidance with our AI-enhanced readings and quantum-precision insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🤖',
                title: 'AI-Powered Analysis',
                description: 'Our quantum computing algorithms analyze millions of astrological patterns for unprecedented accuracy.',
                gradient: 'cyber-blue'
              },
              {
                icon: '⚡',
                title: 'Real-Time Insights',
                description: 'Get instant cosmic updates and live planetary influence notifications directly to your device.',
                gradient: 'electric-purple'
              },
              {
                icon: '🔒',
                title: 'Quantum Security',
                description: 'Your personal data is protected with military-grade encryption and blockchain verification.',
                gradient: 'neon-green'
              },
              {
                icon: '🌐',
                title: 'Global Precision',
                description: 'Accurate readings anywhere on Earth with GPS-integrated cosmic positioning technology.',
                gradient: 'plasma-pink'
              },
              {
                icon: '📊',
                title: 'Analytics Dashboard',
                description: 'Track your cosmic journey with detailed charts, predictions, and personalized insights.',
                gradient: 'quantum-orange'
              },
              {
                icon: '🎯',
                title: '24/7 Availability',
                description: 'Access your cosmic guidance anytime with our cloud-based AI consultation system.',
                gradient: 'cyber-blue'
              }
            ].map((service, index) => (
              <Card key={index} className={`group hover:elevation-4 transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2 ${isVisible.services ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${service.gradient} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 mx-auto group-hover:animate-glow transition-all duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="font-orbitron font-bold text-xl text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Astrology Section */}
      <section id="astrology" className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 ${isVisible.astrology ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white px-4 py-2 text-sm font-medium">
                  🌟 Advanced Astrology
                </Badge>
                <h2 className="font-orbitron font-bold text-4xl lg:text-5xl">
                  Quantum Astrology <span className="text-cyan-400">Readings</span>
                </h2>
                <p className="text-xl text-white/90 leading-relaxed">
                  Harness the power of quantum computing and AI to unlock deeper cosmic insights 
                  than ever before possible. Our advanced algorithms analyze multidimensional 
                  astrological data for unparalleled accuracy.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  { icon: '🧬', title: 'DNA-Level Analysis', desc: 'Personal cosmic blueprint mapping' },
                  { icon: '🌌', title: 'Multiverse Insights', desc: 'Parallel timeline probability analysis' },
                  { icon: '⚛️', title: 'Quantum Entanglement', desc: 'Universal connection patterns' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 text-xl backdrop-blur-sm">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-orbitron font-semibold text-lg mb-2">{feature.title}</h4>
                      <p className="text-white/70">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold elevation-3 hover:elevation-4 transition-all duration-300">
                <span className="mr-2">🚀</span>
                Start Quantum Reading
              </Button>
            </div>

            <div className="relative">
              <div className={`glass-card p-8 rounded-3xl ${isVisible.astrology ? 'animate-float' : ''}`}>
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-4xl animate-glow">
                    🔮
                  </div>
                  <h3 className="font-orbitron font-bold text-2xl">Neural Constellation Map</h3>
                  <div className="grid grid-cols-4 gap-3">
                    {['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'].map((sign, i) => (
                      <div key={i} className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm animate-hologram" style={{animationDelay: `${i * 0.2}s`}}>
                        <span className="text-lg">{sign}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-4 mt-6">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zodiac Calculator */}
      <ZodiacCalculator />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <div className="space-y-8">
            <Badge className="bg-white/20 text-white px-4 py-2 text-sm font-medium">
              🎯 Ready to Begin?
            </Badge>
            <h2 className="font-orbitron font-bold text-4xl lg:text-5xl">
              Book your reading today—and start unlocking your <span className="text-cyan-400">destiny</span>
            </h2>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Take the first step into the future of cosmic guidance. Our quantum-powered 
              insights are waiting to transform your understanding of your cosmic path.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { title: 'Quantum Birth Chart', price: '$149', features: ['AI-Enhanced Analysis', 'Multiverse Insights', '3D Visualization'] },
                { title: 'Neural Love Reading', price: '$199', features: ['Compatibility AI', 'Relationship Quantum Map', 'Future Timeline'] },
                { title: 'Career Quantum Path', price: '$179', features: ['Professional Guidance', 'Success Probability', 'Optimal Timing'] }
              ].map((package_, index) => (
                <Card key={index} className="glass-card text-white border-white/20 hover:elevation-4 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="font-orbitron text-xl">{package_.title}</CardTitle>
                    <div className="text-3xl font-bold text-cyan-400">{package_.price}</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {package_.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <span className="text-cyan-400">✓</span>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Button className="cyber-blue text-white px-12 py-6 rounded-full text-xl font-bold elevation-4 hover:elevation-5 transition-all duration-300 transform hover:-translate-y-1 mt-8">
              <span className="mr-3">🚀</span>
              Launch Your Cosmic Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 cyber-blue rounded-xl flex items-center justify-center">
                <span className="text-2xl font-orbitron font-bold text-white">A</span>
              </div>
              <div>
                <h3 className="font-orbitron font-bold text-xl">ACHARYA</h3>
                <p className="text-sm text-gray-400">Institute of Futurology</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">Pioneering the future of cosmic guidance through advanced technology</p>
            <Separator className="bg-gray-800 mb-6" />
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <p className="text-gray-500 text-xs mt-4">© 2025 Acharya Institute of Futurology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}