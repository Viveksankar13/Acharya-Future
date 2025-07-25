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
    { id: 'calculator', label: 'Calculator', icon: '📊' },
    { id: 'palmistry', label: 'Palmistry', icon: '🤚' },
    { id: 'gemology', label: 'Gemology', icon: '💎' },
    { id: 'medical-palmistry', label: 'Medical Palmistry', icon: '🏥' },
  ];

  return (
    <div className="bg-neo-white font-space min-h-screen m-0 p-0">
      {/* Futuristic Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 elevation-2">
        <div className="max-w-auto mx-auto px-6 lg:px-8">
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
      <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20 pb-0">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12">
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
                      <h3 className="font-orbitron font-bold text-2xl">Acharya</h3>
                      <p className="text-white/80">Institute of Futurology</p>
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
      <section id="services" className="py-16 bg-gradient-to-br from-gray-50 to-white -mt-1">
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

      {/* Palmistry Section */}
      <section id="palmistry" className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="cyber-blue text-white px-4 py-2 text-sm font-medium mb-6">
              🤚 Quantum Palm Reading
            </Badge>
            <h2 className="font-orbitron font-bold text-4xl lg:text-6xl mb-8">
              Advanced <span className="text-cyan-400">Palmistry</span> Analysis
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Unlock the secrets written in your palms through our AI-enhanced palmistry system. 
              Your hands hold the quantum blueprint of your destiny.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <h3 className="font-orbitron font-bold text-3xl">Neural Hand Analysis</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Life Line Analysis",
                    desc: "Advanced AI scanning reveals your vitality patterns, health indicators, and life energy distribution across multiple dimensional planes.",
                    icon: "💫"
                  },
                  {
                    title: "Heart Line Decode",
                    desc: "Quantum emotional mapping through advanced heart line analysis reveals love patterns, relationship compatibility, and emotional DNA.",
                    icon: "💖"
                  },
                  {
                    title: "Head Line Intelligence",
                    desc: "Neural pathway analysis of your mental patterns, decision-making style, and cognitive strengths through palm geometry.",
                    icon: "🧠"
                  },
                  {
                    title: "Fate Line Trajectory",
                    desc: "Destiny probability calculations based on fate line characteristics, revealing career paths and major life turning points.",
                    icon: "🎯"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 glass-card p-6 rounded-2xl hover:elevation-3 transition-all duration-300">
                    <div className="text-3xl">{feature.icon}</div>
                    <div>
                      <h4 className="font-orbitron font-semibold text-xl mb-2 text-cyan-300">{feature.title}</h4>
                      <p className="text-white/70 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass-card p-8 rounded-3xl text-center">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-6xl animate-glow mb-8">
                  🤚
                </div>
                <h3 className="font-orbitron font-bold text-2xl mb-4">Palm Scanner Ready</h3>
                <p className="text-white/70 mb-6">Upload your palm image for instant quantum analysis</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {['Mount of Venus', 'Mount of Jupiter', 'Mount of Saturn', 'Mount of Apollo'].map((mount, i) => (
                    <div key={i} className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                      <div className="text-sm font-semibold">{mount}</div>
                      <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                        <div className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full animate-pulse" style={{width: `${Math.random() * 40 + 60}%`}}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold">
                  Start Palm Analysis
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic Palm Reading",
                price: "$89",
                features: ["Major Lines Analysis", "Mount Identification", "Basic Predictions", "Digital Report"],
                popular: false
              },
              {
                title: "Advanced Quantum Reading",
                price: "$179",
                features: ["Complete Hand Analysis", "Fingerprint Patterns", "Career Guidance", "Relationship Insights", "Health Indicators", "Future Timeline"],
                popular: true
              },
              {
                title: "Master Palm Consultation",
                price: "$299",
                features: ["Expert Live Session", "Detailed Video Analysis", "Personalized Remedies", "Annual Predictions", "Priority Support", "Follow-up Sessions"],
                popular: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`glass-card text-white border-white/20 hover:elevation-4 transition-all duration-300 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-2 text-sm font-semibold rounded-t-lg">
                    Most Popular ⭐
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-orbitron text-xl">{plan.title}</CardTitle>
                  <div className="text-3xl font-bold text-cyan-400">{plan.price}</div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <span className="text-cyan-400">✓</span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  <Button className={`w-full mt-6 ${plan.popular ? 'bg-gradient-to-r from-cyan-500 to-purple-600' : 'bg-white/20'} hover:bg-white/30 text-white py-2 rounded-lg font-semibold`}>
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gemology Section */}
      <section id="gemology" className="py-24 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-500/20 text-emerald-300 px-4 py-2 text-sm font-medium mb-6">
              💎 Quantum Gemology
            </Badge>
            <h2 className="font-orbitron font-bold text-4xl lg:text-6xl mb-8">
              Sacred <span className="text-emerald-400">Gemstone</span> Science
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Harness the cosmic power of gemstones through our advanced gemological analysis. 
              Each stone resonates with specific planetary frequencies to enhance your life force.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="glass-card p-8 rounded-3xl">
                <div className="text-center mb-8">
                  <h3 className="font-orbitron font-bold text-2xl mb-6">Planetary Gemstone Matrix</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { gem: "💎", name: "Diamond", planet: "Venus", color: "from-white to-pink-200" },
                      { gem: "🔴", name: "Ruby", planet: "Sun", color: "from-red-400 to-red-600" },
                      { gem: "🔵", name: "Sapphire", planet: "Saturn", color: "from-blue-400 to-blue-600" },
                      { gem: "💚", name: "Emerald", planet: "Mercury", color: "from-green-400 to-green-600" },
                      { gem: "🟡", name: "Yellow Sapphire", planet: "Jupiter", color: "from-yellow-400 to-yellow-600" },
                      { gem: "🤍", name: "Pearl", planet: "Moon", color: "from-gray-200 to-white" },
                      { gem: "🟤", name: "Hessonite", planet: "Rahu", color: "from-orange-400 to-orange-600" },
                      { gem: "🟣", name: "Cat's Eye", planet: "Ketu", color: "from-purple-400 to-purple-600" },
                      { gem: "🔴", name: "Red Coral", planet: "Mars", color: "from-red-300 to-red-500" }
                    ].map((stone, i) => (
                      <div key={i} className="relative group">
                        <div className={`w-16 h-16 bg-gradient-to-br ${stone.color} rounded-xl flex items-center justify-center text-2xl animate-glow hover:scale-110 transition-all duration-300 cursor-pointer`}>
                          {stone.gem}
                        </div>
                        <div className="absolute inset-x-0 -bottom-12 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="text-xs font-semibold">{stone.name}</div>
                          <div className="text-xs text-emerald-300">{stone.planet}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3 rounded-full font-semibold">
                    Find Your Perfect Gemstone
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="font-orbitron font-bold text-3xl">Advanced Gemstone Analysis</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Quantum Resonance Testing",
                    desc: "Advanced frequency analysis determines which gemstones align with your personal energy signature and planetary positions.",
                    icon: "⚡"
                  },
                  {
                    title: "Chakra Alignment Mapping",
                    desc: "Precision gemstone recommendations for each chakra point, optimizing your energy flow and spiritual balance.",
                    icon: "🌀"
                  },
                  {
                    title: "Astrological Compatibility",
                    desc: "Birth chart analysis reveals your primary and secondary gemstones based on planetary strengths and weaknesses.",
                    icon: "🪐"
                  },
                  {
                    title: "Healing Properties Analysis",
                    desc: "Comprehensive breakdown of each stone's therapeutic benefits, healing frequencies, and optimal wearing methods.",
                    icon: "🧘"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 glass-card p-6 rounded-2xl hover:elevation-3 transition-all duration-300">
                    <div className="text-3xl">{feature.icon}</div>
                    <div>
                      <h4 className="font-orbitron font-semibold text-xl mb-2 text-emerald-300">{feature.title}</h4>
                      <p className="text-white/70 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-black/30 rounded-3xl p-8 mb-16">
            <h3 className="font-orbitron font-bold text-2xl text-center mb-8">Gemstone Benefits Matrix</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { category: "Wealth & Prosperity", stones: ["Yellow Sapphire", "Emerald", "Green Tourmaline"], icon: "💰" },
                { category: "Love & Relationships", stones: ["Rose Quartz", "Diamond", "Ruby"], icon: "💕" },
                { category: "Health & Vitality", stones: ["Red Coral", "Bloodstone", "Garnet"], icon: "❤️‍🔥" },
                { category: "Spiritual Growth", stones: ["Amethyst", "Clear Quartz", "Lapis Lazuli"], icon: "🔮" }
              ].map((benefit, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl text-center hover:elevation-3 transition-all duration-300">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h4 className="font-orbitron font-semibold text-lg mb-3 text-emerald-300">{benefit.category}</h4>
                  <div className="space-y-2">
                    {benefit.stones.map((stone, i) => (
                      <div key={i} className="text-sm bg-white/10 px-3 py-1 rounded-full">{stone}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Gemstone Consultation",
                price: "$129",
                features: ["Personal Birth Chart Analysis", "Primary Gemstone Recommendation", "Wearing Guidelines", "Activation Rituals", "Digital Certificate"],
                description: "Perfect for beginners seeking their first authentic gemstone guidance"
              },
              {
                title: "Complete Gemstone Package",
                price: "$299",
                features: ["Multiple Stone Analysis", "Chakra Balancing Kit", "Seasonal Recommendations", "Energy Cleansing Guide", "Monthly Follow-ups", "Authentic Gemstone Sourcing"],
                description: "Comprehensive gemological guidance for serious practitioners",
                popular: true
              }
            ].map((service, index) => (
              <Card key={index} className={`glass-card text-white border-white/20 hover:elevation-4 transition-all duration-300 ${service.popular ? 'ring-2 ring-emerald-400' : ''}`}>
                {service.popular && (
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-center py-2 text-sm font-semibold rounded-t-lg">
                    Recommended Choice ⭐
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-orbitron text-xl">{service.title}</CardTitle>
                  <div className="text-3xl font-bold text-emerald-400">{service.price}</div>
                  <p className="text-sm text-white/70">{service.description}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <span className="text-emerald-400">✓</span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  <Button className={`w-full mt-6 ${service.popular ? 'bg-gradient-to-r from-emerald-500 to-teal-600' : 'bg-white/20'} hover:bg-white/30 text-white py-2 rounded-lg font-semibold`}>
                    Get Consultation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Palmistry Section */}
      <section id="medical-palmistry" className="py-24 bg-gradient-to-br from-red-900 via-pink-900 to-purple-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-red-500/20 text-red-300 px-4 py-2 text-sm font-medium mb-6">
              🏥 Medical Palmistry
            </Badge>
            <h2 className="font-orbitron font-bold text-4xl lg:text-6xl mb-8">
              Advanced <span className="text-red-400">Health</span> Analysis
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Revolutionary medical palmistry combines ancient wisdom with modern AI to reveal health patterns, 
              potential concerns, and wellness recommendations through palm analysis.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Cardiovascular Indicators",
                desc: "Heart line analysis reveals cardiovascular health patterns, circulation issues, and heart rhythm indicators.",
                icon: "❤️",
                markers: ["Heart Line Depth", "Branch Patterns", "Color Variations", "Flexibility Points"]
              },
              {
                title: "Neurological Mapping",
                desc: "Head line characteristics indicate mental health, neurological patterns, and cognitive wellness markers.",
                icon: "🧠",
                markers: ["Mental Clarity", "Stress Patterns", "Memory Indicators", "Focus Levels"]
              },
              {
                title: "Digestive System Signs",
                desc: "Palm mount analysis reveals digestive health, metabolic patterns, and nutritional absorption indicators.",
                icon: "🫁",
                markers: ["Digestive Strength", "Metabolism Rate", "Nutrient Absorption", "Gut Health"]
              }
            ].map((health, index) => (
              <div key={index} className="glass-card p-8 rounded-3xl hover:elevation-3 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{health.icon}</div>
                  <h3 className="font-orbitron font-bold text-xl text-red-300">{health.title}</h3>
                </div>
                <p className="text-white/70 mb-6 leading-relaxed">{health.desc}</p>
                <div className="space-y-3">
                  {health.markers.map((marker, i) => (
                    <div key={i} className="flex items-center justify-between bg-white/10 p-3 rounded-lg">
                      <span className="text-sm font-medium">{marker}</span>
                      <div className="w-16 bg-white/20 rounded-full h-2">
                        <div className="bg-gradient-to-r from-red-400 to-pink-500 h-2 rounded-full animate-pulse" style={{width: `${Math.random() * 30 + 70}%`}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-black/30 rounded-3xl p-8 mb-16">
            <h3 className="font-orbitron font-bold text-2xl text-center mb-8 text-red-300">Health Prediction Timeline</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { period: "Immediate (0-6 months)", focus: "Current Health State", indicators: ["Energy Levels", "Immune System", "Sleep Patterns"] },
                { period: "Short Term (6-18 months)", focus: "Developing Patterns", indicators: ["Stress Impact", "Lifestyle Effects", "Early Warnings"] },
                { period: "Medium Term (1-5 years)", focus: "Health Trajectory", indicators: ["Chronic Conditions", "System Strength", "Preventive Needs"] },
                { period: "Long Term (5+ years)", focus: "Life Wellness", indicators: ["Longevity Patterns", "Major Health Events", "Genetic Expressions"] }
              ].map((timeline, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl">
                  <h4 className="font-orbitron font-semibold text-lg mb-2 text-red-300">{timeline.period}</h4>
                  <div className="text-sm text-white/60 mb-4">{timeline.focus}</div>
                  <div className="space-y-2">
                    {timeline.indicators.map((indicator, i) => (
                      <div key={i} className="text-xs bg-white/10 px-2 py-1 rounded">{indicator}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Card className="glass-card text-white border-white/20 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="font-orbitron text-2xl text-red-300">Complete Medical Palm Analysis</CardTitle>
                <div className="text-4xl font-bold text-red-400">$249</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80">Comprehensive health analysis with personalized wellness recommendations</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {[
                    "Complete Health Scan", "Organ System Analysis", "Disease Predisposition", "Wellness Recommendations",
                    "Nutritional Guidance", "Exercise Suggestions", "Stress Management", "Preventive Care Plan"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <span className="text-red-400">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-red-500/20 p-4 rounded-lg mt-6">
                  <p className="text-xs text-white/70">
                    <strong>Disclaimer:</strong> Medical palmistry is for guidance only and should not replace professional medical advice. 
                    Always consult healthcare providers for medical concerns.
                  </p>
                </div>
                <Button className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white py-3 rounded-lg font-semibold mt-4">
                  Schedule Health Analysis
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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