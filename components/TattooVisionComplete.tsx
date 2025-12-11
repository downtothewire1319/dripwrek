// components/TattooVisionComplete.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  FaRobot, 
  FaMagic, 
  FaPaintBrush, 
  FaShapes,
  FaDownload, 
  FaClock, 
  FaLightbulb, 
  FaSpinner, 
  FaCheck, 
  FaTimes,
  FaInfoCircle,
  FaBars,
  FaTimes as FaClose,
  FaArrowRight,
  FaStar,
  FaUsers,
  FaRocket,
  FaShieldAlt,
  FaPalette as FaPaletteIcon,
  FaBolt,
  FaTrophy,
  FaHeart
} from 'react-icons/fa';
import Image from 'next/image';
// Emoji-Fallback für fehlende Icons
const EmojiIcon = ({ type, className = "" }: { type: string; className?: string }) => {
  const emojiMap: Record<string, string> = {
    dragon: '🐉',
    anchor: '⚓',
    playCircle: '▶️',
    featherAlt: '✒️',
    fire: '🔥',
    water: '💧',
    palette: '🎨',
    gem: '💎',
    leaf: '🍃',
    cloudMoon: '☁️🌙',
    wolf: '🐺',
    skull: '💀',
    moon: '🌙',
    crown: '👑',
    rose: '🌹',
    sparkle: '✨',
    tattoo: '💉',
    art: '🎨',
    lightning: '⚡',
    star: '⭐',
    heart: '❤️'
  };
  
  return <span className={`inline-block ${className}`}>{emojiMap[type] || '❓'}</span>;
};

const TattooVisionComplete = () => {
  // State für Mobile Menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // State für die Demo
  const [tattooPrompt, setTattooPrompt] = useState<string>('Ein mystischer Wolf, der zum Mond heult, mit geometrischen Mustern');
  const [selectedStyle, setSelectedStyle] = useState<string>('geometric');
  const [complexity, setComplexity] = useState<number>(3);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generationProgress, setGenerationProgress] = useState<number>(0);
  const [showGeneratedDesign, setShowGeneratedDesign] = useState<boolean>(false);
  const [generationTime, setGenerationTime] = useState<string>('0');
  const [generatedText, setGeneratedText] = useState<string>('');
  
  // State für Pricing
  const [isYearly, setIsYearly] = useState<boolean>(false);
  
  // Referenz für Progress-Interval
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Navigation Items
  const navItems = [
    { name: 'Demo', href: '#demo' },
    { name: 'Features', href: '#features' },
    { name: 'Preise', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontakt', href: '#contact' },
  ];

  // Features
  const features = [
    {
      icon: <FaBolt className="text-3xl text-purple-500" />,
      title: 'Blitzschnelle Generierung',
      description: 'Erhalte einzigartige Tattoo-Designs in unter 10 Sekunden'
    },
    {
      icon: <FaPaletteIcon className="text-3xl text-blue-500" />,
      title: '120+ Stile',
      description: 'Von Traditional bis Watercolor, Japanisch bis Geometrisch'
    },
    {
      icon: <FaShieldAlt className="text-3xl text-green-500" />,
      title: 'KI-gestützte Präzision',
      description: 'Professionelle Ergebnisse dank fortschrittlicher KI-Technologie'
    },
    {
      icon: <FaUsers className="text-3xl text-pink-500" />,
      title: 'Community-gesteuert',
      description: 'Lerne von den Designs tausender Tattoo-Enthusiasten'
    },
    {
      icon: <FaRocket className="text-3xl text-orange-500" />,
      title: 'Ständige Updates',
      description: 'Neue Stile und Features werden regelmäßig hinzugefügt'
    },
    {
      icon: <FaTrophy className="text-3xl text-yellow-500" />,
      title: 'Preisgekrönte Technologie',
      description: 'Ausgezeichnet mit dem AI Design Innovation Award 2024'
    }
  ];

  // Tattoo generieren
  const generateTattoo = (): void => {
    if (!tattooPrompt.trim()) {
      alert('Bitte gib eine Tattoo-Beschreibung ein');
      return;
    }

    setIsGenerating(true);
    setShowGeneratedDesign(false);
    setGenerationProgress(0);

    // Fortschrittsbalken simulieren
    progressIntervalRef.current = setInterval(() => {
      setGenerationProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
          }
          
          // Design generieren
          setTimeout(() => {
            setIsGenerating(false);
            setShowGeneratedDesign(true);
            updateGeneratedDesign();
          }, 300);
          
          return 100;
        }
        return newProgress;
      });
    }, 100);
  };

  // Generiertes Design aktualisieren
  const updateGeneratedDesign = (): void => {
    setGeneratedText(tattooPrompt.length > 30 ? tattooPrompt.substring(0, 30) + '...' : tattooPrompt);
    setGenerationTime((Math.random() * 2 + 1.5).toFixed(1));
  };

  // Cleanup bei Unmount
  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-2 ">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Image
            src="/driplogo.png"
      alt="Logo"
      width={100}
      height={10}
            />
           

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium">
                Jetzt starten
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaClose size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium mt-4">
                  Jetzt starten
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-[15rem] pb-20 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></span>
                <span className="ml-2 text-sm">Revolutionäre KI-Technologie</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="gradient-text">Transformiere deine</span>
                <br />
                <span className="text-white">Ideen in Kunst</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-2xl">
                TattooVision AI verwandelt deine kreativen Visionen mit fortschrittlicher künstlicher Intelligenz in einzigartige, tattooklare Designs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl hover:shadow-purple-500/40 flex items-center justify-center"
                >
                  <FaMagic className="mr-3" />
                  Kostenlose Demo testen
                </button>
                <button className="px-8 py-4 rounded-full border-2 border-purple-600 hover:bg-purple-900/20 font-medium text-lg transition-colors duration-300 flex items-center justify-center">
                  <FaTrophy className="mr-3" />
                  Video ansehen
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500">50K+</div>
                  <div className="text-gray-400 text-sm">Tattoos generiert</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500">98%</div>
                  <div className="text-gray-400 text-sm">Zufriedenheit</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">120+</div>
                  <div className="text-gray-400 text-sm">Künstlerische Stile</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image/Animation */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 to-black">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-sm text-gray-400">KI-Tattoo Preview</div>
                  </div>
                  
                  <div className="relative h-64 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 flex items-center justify-center">
                    {/* Animated Tattoo Design */}
                    <div className="relative">
                      <div className="w-48 h-48 rounded-full border-4 border-dashed border-purple-500/50 flex items-center justify-center animate-spin-slow">
                        <div className="w-40 h-40 rounded-full border-2 border-pink-500/50 flex items-center justify-center">
                          <div className="text-center">
                            <EmojiIcon type="wolf" className="text-5xl mb-2" />
                            <div className="text-purple-300 font-semibold">Live Preview</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center animate-bounce">
                        <FaStar className="text-white" />
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                        <FaHeart className="text-white text-sm" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-lg">Mystischer Wolf Design</h3>
                        <p className="text-gray-400 text-sm">Geometrischer Stil • Ärmel Platzierung</p>
                      </div>
                      <div className="flex items-center text-yellow-500">
                        <FaStar />
                        <span className="ml-1 font-bold">4.9</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 border-2 border-gray-900"></div>
                        ))}
                        <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-900 flex items-center justify-center text-xs">
                          +12
                        </div>
                      </div>
                      <button className="text-sm px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors flex items-center">
                        <FaDownload className="mr-2" />
                        Speichern
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating AI Badge */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center shadow-2xl">
                <FaRobot className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Warum <span className="gradient-text">TattooVision AI</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Die fortschrittlichste KI-Technologie für Tattoo-Designs, entwickelt für Künstler und Enthusiasten
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-purple-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
   

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Bereit, dein <span className="gradient-text">Traumtattoo</span> zu erstellen?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Schließe dich Tausenden von Tattoo-Enthusiasten und Künstlern an, die TattooVision AI nutzen, um Ideen in
              tattooklare Designs zu verwandeln.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-12 py-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-3xl hover:shadow-purple-500/40 flex items-center justify-center"
              >
                <FaMagic className="mr-3 group-hover:rotate-12 transition-transform" />
                Kostenlose Demo testen
              </button>
              <button className="px-12 py-6 rounded-full border-2 border-purple-600 hover:bg-purple-900/30 font-medium text-xl transition-colors duration-300 flex items-center justify-center">
                <FaArrowRight className="mr-3" />
                Jetzt loslegen
              </button>
            </div>
          </div>
        </div>
      </section>

    

      {/* Custom CSS */}
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 8px;
          border-radius: 4px;
          background: #374151;
          outline: none;
        }
        
        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
          cursor: pointer;
          border: none;
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TattooVisionComplete;