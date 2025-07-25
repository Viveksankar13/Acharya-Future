import { useState, useEffect } from 'react';
import ZodiacCalculator from '@/components/zodiac-calculator';

export default function Home() {
  const [activeSection, setActiveSection] = useState('astrology');

  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleScroll = () => {
      const sections = ['astrology', 'palmistry', 'gemology', 'calculator'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-divine-cream font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <i className="fas fa-star-and-crescent text-soft-gold text-2xl mr-3"></i>
              <span className="font-playfair font-bold text-xl dark-slate">Acharya Institute</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => scrollToSection('astrology')}
                  className={`transition-colors duration-300 ${activeSection === 'astrology' ? 'text-soft-gold' : 'muted-gray hover:text-soft-gold'}`}
                >
                  Astrology
                </button>
                <button 
                  onClick={() => scrollToSection('palmistry')}
                  className={`transition-colors duration-300 ${activeSection === 'palmistry' ? 'text-soft-gold' : 'muted-gray hover:text-soft-gold'}`}
                >
                  Palmistry
                </button>
                <button 
                  onClick={() => scrollToSection('gemology')}
                  className={`transition-colors duration-300 ${activeSection === 'gemology' ? 'text-soft-gold' : 'muted-gray hover:text-soft-gold'}`}
                >
                  Gemology
                </button>
                <button 
                  onClick={() => scrollToSection('calculator')}
                  className={`transition-colors duration-300 ${activeSection === 'calculator' ? 'text-soft-gold' : 'muted-gray hover:text-soft-gold'}`}
                >
                  Zodiac Calculator
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-soft-gold text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Book Reading
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <button className="muted-gray hover:text-soft-gold">
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="astrology" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-25 to-white"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3')] bg-cover bg-center"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold dark-slate mb-6 leading-tight">
                Unlock the Secrets of the <span className="text-soft-gold">Stars</span>
              </h1>
              <h2 className="font-playfair text-2xl sm:text-3xl muted-gray mb-8">
                Discover the Power of Astrology
              </h2>
              <p className="text-lg muted-gray mb-8 leading-relaxed max-w-2xl">
                Astrology offers a timeless and powerful way to connect with the universe—and with who 
                you truly are. Discover the cosmic forces that shape your destiny and unlock the secrets written in the stars.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-soft-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  <i className="fas fa-star mr-2"></i>
                  Start Your Journey
                </button>
                <button className="border-2 border-yellow-400 text-yellow-600 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-white transition-all duration-300">
                  <i className="fas fa-play mr-2"></i>
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative animate-float">
                <img 
                  src="https://pixabay.com/get/g36210201949f5ccda9faa0b9da5a965a724a55f1b40b6af48b284d11947bbb18127c22c8c6adf758bfb6626cb6fa6311639fb9134750fdb7234251852fd7c025_1280.jpg" 
                  alt="Mystical crystal ball with celestial energy" 
                  className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent rounded-3xl"></div>
              </div>
              
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-3 animate-gentle-pulse">
                <i className="fas fa-moon text-soft-gold text-2xl"></i>
              </div>
              <div className="absolute bottom-8 left-4 bg-white/80 backdrop-blur-sm rounded-full p-3 animate-gentle-pulse" style={{animationDelay: '1s'}}>
                <i className="fas fa-sun text-soft-gold text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold dark-slate mb-4">Why Choose Us?</h2>
            <p className="text-xl muted-gray max-w-3xl mx-auto">
              Experience the perfect blend of ancient wisdom and modern insight with our certified practitioners
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-soft-gold rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-certificate text-white text-2xl"></i>
              </div>
              <h3 className="font-playfair text-xl font-semibold dark-slate mb-4">Certified Experts</h3>
              <p className="muted-gray">Our practitioners are certified professionals with decades of experience in vedic astrology and ancient sciences.</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-soft-gold rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-clock text-white text-2xl"></i>
              </div>
              <h3 className="font-playfair text-xl font-semibold dark-slate mb-4">24/7 Availability</h3>
              <p className="muted-gray">Get guidance whenever you need it with our round-the-clock consultation services and instant readings.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-25 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-soft-gold rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="font-playfair text-xl font-semibold dark-slate mb-4">Complete Confidentiality</h3>
              <p className="muted-gray">Your personal information and readings are kept strictly confidential with our secure consultation process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Reading CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800/80 to-yellow-600/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-6">
            Book your reading today—and start unlocking your destiny
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards understanding your cosmic blueprint. Our expert astrologers are ready to guide you on your journey of self-discovery.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white hover:bg-white/20 transition-all duration-300">
              <i className="fas fa-star text-yellow-400 text-3xl mb-4"></i>
              <h3 className="font-playfair text-xl font-semibold mb-2">Birth Chart Reading</h3>
              <p className="text-white/80 mb-4">Complete analysis of your natal chart</p>
              <span className="text-yellow-400 font-bold text-2xl">$99</span>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white hover:bg-white/20 transition-all duration-300">
              <i className="fas fa-heart text-yellow-400 text-3xl mb-4"></i>
              <h3 className="font-playfair text-xl font-semibold mb-2">Love & Relationships</h3>
              <p className="text-white/80 mb-4">Discover your romantic compatibility</p>
              <span className="text-yellow-400 font-bold text-2xl">$79</span>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white hover:bg-white/20 transition-all duration-300">
              <i className="fas fa-briefcase text-yellow-400 text-3xl mb-4"></i>
              <h3 className="font-playfair text-xl font-semibold mb-2">Career Guidance</h3>
              <p className="text-white/80 mb-4">Find your professional path</p>
              <span className="text-yellow-400 font-bold text-2xl">$89</span>
            </div>
          </div>
          
          <button className="bg-soft-gold text-white px-12 py-5 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
            <i className="fas fa-calendar-check mr-3"></i>
            Book Your Reading Now
          </button>
        </div>
      </section>

      {/* Palmistry Section */}
      <section id="palmistry" className="py-20 bg-gradient-to-br from-orange-25 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://pixabay.com/get/g1486dcd9840cbf7619f29d37d0ae007b47d684b980e59becfdc9521c0e8b9ca39799fd3612fa6076d8c0f9ca7f6ef5e27525ff6f861967637992fd09a1371bb2_1280.jpg" 
                alt="Open palm showing palmistry lines and destiny marks" 
                className="rounded-3xl shadow-2xl w-full" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent rounded-3xl"></div>
              
              <div className="absolute top-6 left-6 bg-white rounded-full p-3 shadow-lg animate-gentle-pulse">
                <i className="fas fa-hand-paper text-soft-gold text-xl"></i>
              </div>
            </div>
            
            <div>
              <h2 className="font-playfair text-4xl font-bold dark-slate mb-6">
                Your Future Is in Your Hands: Discover the Magic of <span className="text-soft-gold">Palmistry</span>
              </h2>
              <p className="text-lg muted-gray mb-8 leading-relaxed">
                Palmistry reveals the secrets hidden in the lines of your hands. Every curve, every mark tells a story of your past, present, and future. Let our expert palm readers decode the mysteries written in your palms.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-soft-gold rounded-full p-2 mt-1">
                    <i className="fas fa-route text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold dark-slate mb-2">Life Line Analysis</h4>
                    <p className="muted-gray">Discover your vitality, major life changes, and life span indicators.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-soft-gold rounded-full p-2 mt-1">
                    <i className="fas fa-heart text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold dark-slate mb-2">Heart Line Reading</h4>
                    <p className="muted-gray">Understand your emotional nature, relationships, and love patterns.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-soft-gold rounded-full p-2 mt-1">
                    <i className="fas fa-brain text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold dark-slate mb-2">Head Line Insights</h4>
                    <p className="muted-gray">Explore your intellectual capacity, decision-making style, and wisdom.</p>
                  </div>
                </div>
              </div>
              
              <button className="mt-8 bg-soft-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <i className="fas fa-hand-sparkles mr-2"></i>
                Get Palm Reading
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Palmistry */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold dark-slate mb-4">
              Why Choose Palmistry with Acharya Institute of Futurology?
            </h2>
            <p className="text-xl muted-gray max-w-3xl mx-auto">
              Experience authentic palm reading with our certified palmists who combine traditional techniques with modern insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-25 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-eye text-soft-gold text-2xl"></i>
              </div>
              <h3 className="font-playfair text-xl font-semibold dark-slate mb-3">Detailed Analysis</h3>
              <p className="muted-gray">Comprehensive reading of all major and minor lines in your palm</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-25 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-graduation-cap text-soft-gold text-2xl"></i>
              </div>
              <h3 className="font-playfair text-xl font-semibold dark-slate mb-3">Expert Palmists</h3>
              <p className="muted-gray">Trained professionals with years of experience in classical palmistry</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-25 to-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-camera text-soft-gold text-2xl"></i>
              </div>
              <h3 className="font-playfair text-xl font-semibold dark-slate mb-3">Photo Analysis</h3>
              <p className="muted-gray">Submit palm photos for detailed analysis and written reports</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-25 to-yellow-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-file-alt text-soft-gold text-2xl"></i>
              </div>
              <h3 className="font-playfair text-xl font-semibold dark-slate mb-3">Written Reports</h3>
              <p className="muted-gray">Receive detailed written analysis you can reference anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gemology Section */}
      <section id="gemology" className="py-20 bg-gradient-to-br from-blue-25 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold dark-slate mb-6">
              Gemology: The Science and Beauty of <span className="text-soft-gold">Precious Stones</span>
            </h2>
            <p className="text-xl muted-gray max-w-4xl mx-auto leading-relaxed">
              Discover how gemstones can enhance your life force, balance your chakras, and attract positive energy. 
              Our certified gemologists will help you find the perfect stones for your unique astrological profile.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3" 
                alt="Beautiful red ruby gemstone" 
                className="w-full h-48 object-cover rounded-xl mb-4" 
              />
              <h3 className="font-playfair text-xl font-semibold dark-slate mb-3">Ruby - Stone of Passion</h3>
              <p className="muted-gray mb-4">Enhances vitality, courage, and leadership qualities. Perfect for Leo and Aries signs.</p>
              <div className="flex justify-between items-center">
                <span className="text-soft-gold font-semibold">From $299</span>
                <button className="text-soft-gold hover:text-slate-800 transition-colors duration-300">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3" 
                alt="Stunning blue sapphire gemstone" 
                className="w-full h-48 object-cover rounded-xl mb-4" 
              />
              <h3 className="font-playfair text-xl font-semibold dark-slate mb-3">Sapphire - Stone of Wisdom</h3>
              <p className="muted-gray mb-4">Promotes mental clarity, spiritual growth, and divine favor. Ideal for Virgo and Libra.</p>
              <div className="flex justify-between items-center">
                <span className="text-soft-gold font-semibold">From $399</span>
                <button className="text-soft-gold hover:text-slate-800 transition-colors duration-300">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3" 
                alt="Magnificent green emerald gemstone" 
                className="w-full h-48 object-cover rounded-xl mb-4" 
              />
              <h3 className="font-playfair text-xl font-semibold dark-slate mb-3">Emerald - Stone of Love</h3>
              <p className="muted-gray mb-4">Attracts love, prosperity, and emotional healing. Perfect for Taurus and Cancer signs.</p>
              <div className="flex justify-between items-center">
                <span className="text-soft-gold font-semibold">From $499</span>
                <button className="text-soft-gold hover:text-slate-800 transition-colors duration-300">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-soft-gold text-white px-10 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <i className="fas fa-gem mr-2"></i>
              Explore All Gemstones
            </button>
          </div>
        </div>
      </section>

      {/* Medical Palmistry Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-bold dark-slate mb-6">
                Medical Palmistry: Discover the Hidden Clues About Your <span className="text-soft-gold">Health</span>
              </h2>
              <p className="text-lg muted-gray mb-8 leading-relaxed">
                Medical palmistry is an ancient diagnostic art that reveals health patterns and potential concerns 
                through the analysis of your palms. Our certified medical palmists can identify early warning signs 
                and guide you toward preventive wellness measures.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
                  <div className="bg-soft-gold rounded-full p-2 mt-1 flex-shrink-0">
                    <i className="fas fa-heartbeat text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold dark-slate mb-2">Cardiovascular Health</h4>
                    <p className="muted-gray">Heart line analysis reveals circulation, heart strength, and cardiovascular risks.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-blue-25 rounded-xl">
                  <div className="bg-soft-gold rounded-full p-2 mt-1 flex-shrink-0">
                    <i className="fas fa-lungs text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold dark-slate mb-2">Respiratory System</h4>
                    <p className="muted-gray">Palm markings indicate lung capacity, breathing patterns, and respiratory health.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-xl">
                  <div className="bg-soft-gold rounded-full p-2 mt-1 flex-shrink-0">
                    <i className="fas fa-brain text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold dark-slate mb-2">Neurological Indicators</h4>
                    <p className="muted-gray">Head line patterns reveal mental health, stress levels, and neurological wellness.</p>
                  </div>
                </div>
              </div>
              
              <button className="mt-8 bg-soft-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <i className="fas fa-stethoscope mr-2"></i>
                Book Health Reading
              </button>
              
              <p className="text-sm muted-gray mt-4 italic">
                *Medical palmistry is for guidance only and should not replace professional medical advice.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3" 
                alt="Detailed palm reading diagram showing health lines" 
                className="rounded-3xl shadow-2xl w-full" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/10 to-transparent rounded-3xl"></div>
              
              <div className="absolute top-8 right-8 bg-white rounded-full p-3 shadow-lg">
                <i className="fas fa-plus-circle text-soft-gold text-xl"></i>
              </div>
              <div className="absolute bottom-8 left-8 bg-white rounded-full p-3 shadow-lg">
                <i className="fas fa-hand-holding-heart text-soft-gold text-xl"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zodiac Calculator */}
      <ZodiacCalculator />

      {/* Footer */}
      <footer id="contact" className="bg-dark-slate text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <i className="fas fa-star-and-crescent text-soft-gold text-2xl mr-3"></i>
                <span className="font-playfair font-bold text-xl">Acharya Institute</span>
              </div>
              <p className="text-white/80 mb-6">
                Unlocking the mysteries of the universe through ancient wisdom and modern insight.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-soft-gold hover:text-white transition-colors duration-300">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-soft-gold hover:text-white transition-colors duration-300">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-soft-gold hover:text-white transition-colors duration-300">
                  <i className="fab fa-youtube text-xl"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('astrology')} className="text-white/80 hover:text-soft-gold transition-colors duration-300">Astrology Readings</button></li>
                <li><button onClick={() => scrollToSection('palmistry')} className="text-white/80 hover:text-soft-gold transition-colors duration-300">Palmistry</button></li>
                <li><button onClick={() => scrollToSection('gemology')} className="text-white/80 hover:text-soft-gold transition-colors duration-300">Gemology</button></li>
                <li><a href="#" className="text-white/80 hover:text-soft-gold transition-colors duration-300">Medical Palmistry</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/80 hover:text-soft-gold transition-colors duration-300">About Us</a></li>
                <li><button onClick={() => scrollToSection('calculator')} className="text-white/80 hover:text-soft-gold transition-colors duration-300">Zodiac Calculator</button></li>
                <li><a href="#" className="text-white/80 hover:text-soft-gold transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="text-white/80 hover:text-soft-gold transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-phone text-soft-gold"></i>
                  <span className="text-white/80">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-envelope text-soft-gold"></i>
                  <span className="text-white/80">info@acharyainstitute.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fas fa-map-marker-alt text-soft-gold mt-1"></i>
                  <span className="text-white/80">123 Cosmic Avenue<br />Mystical City, MC 12345</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-white/60">
              &copy; 2024 Acharya Institute of Futurology. All rights reserved. | 
              <a href="#" className="text-soft-gold hover:text-white transition-colors duration-300 ml-2">Privacy Policy</a> | 
              <a href="#" className="text-soft-gold hover:text-white transition-colors duration-300 ml-2">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
