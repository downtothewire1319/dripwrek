'use client';
import React, { useState, useRef, useEffect, FC, use } from 'react';
import dynamic from 'next/dynamic';

// Dynamisch importierte Icons für bessere Performance
const FaRobot = dynamic(() => import('react-icons/fa').then(mod => mod.FaRobot), { ssr: false });
const FaMagic = dynamic(() => import('react-icons/fa').then(mod => mod.FaMagic), { ssr: false });
const FaPaintBrush = dynamic(() => import('react-icons/fa').then(mod => mod.FaPaintBrush), { ssr: false });
const FaShapes = dynamic(() => import('react-icons/fa').then(mod => mod.FaShapes), { ssr: false });
const FaDownload = dynamic(() => import('react-icons/fa').then(mod => mod.FaDownload), { ssr: false });
const FaClock = dynamic(() => import('react-icons/fa').then(mod => mod.FaClock), { ssr: false });
const FaLightbulb = dynamic(() => import('react-icons/fa').then(mod => mod.FaLightbulb), { ssr: false });
const FaSpinner = dynamic(() => import('react-icons/fa').then(mod => mod.FaSpinner), { ssr: false });
const FaCheck = dynamic(() => import('react-icons/fa').then(mod => mod.FaCheck), { ssr: false });
const FaTimes = dynamic(() => import('react-icons/fa').then(mod => mod.FaTimes), { ssr: false });
const FaInfoCircle = dynamic(() => import('react-icons/fa').then(mod => mod.FaInfoCircle), { ssr: false });

// ODER: Verwende Fa6 Icons (empfohlen für neuere Projekte)
import { 
  FaDragon,
  FaAnchor,
  FaStar,
  FaPlayCircle,
  FaFeather,
  FaFire,
  FaWater,
  FaPalette,
  FaHeart,
  FaGem,
  FaLeaf,
  FaCloudMoon,
  FaWolf,
  FaSkull,
  FaMoon,
  FaCrown,
  FaDragon as FaDragonIcon
} from 'react-icons/fa6';
import { FaFeatherAlt } from 'react-icons/fa';


interface StyleOption {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface ExamplePrompt {
  text: string;
  icon: React.ComponentType<{ className?: string }>;
  style: string;
}

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: PricingFeature[];
  buttonText: string;
  popular: boolean;
}

const TattooVisionAI: FC = () => {
  // State für die Demo
  const [tattooPrompt, setTattooPrompt] = useState<string>('Ein mystischer Wolf, der zum Mond heult, mit geometrischen Mustern');
  const [selectedStyle, setSelectedStyle] = useState<string>('geometric');
  const [complexity, setComplexity] = useState<number>(3);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generationProgress, setGenerationProgress] = useState<number>(0);
  const [showGeneratedDesign, setShowGeneratedDesign] = useState<boolean>(false);
  const [generationTime, setGenerationTime] = useState<string>('0');
  const [generatedText, setGeneratedText] = useState<string>('');
  const [TattooIcon, setTattooIcon] = useState<React.ComponentType<{ className?: string }>>(() => FaWolf);
  
  // State für Pricing
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const [activePlan, setActivePlan] = useState<string | null>(null);
  
  // Referenz für Progress-Interval
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Beispiel-Prompts
  const examplePrompts: ExamplePrompt[] = [
    { text: 'Japanischer Drache mit Wellen', icon: FaDragonIcon, style: 'japanese' },
    { text: 'Blumen-Ärmel mit Rosen und Dornen', icon: FaHeart, style: 'watercolor' },
    { text: 'Geometrischer Löwe mit Mandala-Mustern', icon: FaCrown, style: 'geometric' }
  ];
  
  // Style-Optionen
  const styleOptions: StyleOption[] = [
    { id: 'traditional', name: 'Traditional', icon: FaAnchor, color: 'text-purple-400' },
    { id: 'watercolor', name: 'Watercolor', icon: FaPaintBrush, color: 'text-blue-400' },
    { id: 'geometric', name: 'Geometrisch', icon: FaShapes, color: 'text-green-400' },
    { id: 'japanese', name: 'Japanisch', icon: FaDragon, color: 'text-red-400' }
  ];
  
  // Pricing-Pläne
  const pricingPlans: PricingPlan[] = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Für Tattoo-Enthusiasten',
      monthlyPrice: '9€',
      yearlyPrice: '7€',
      features: [
        { text: '25 KI-Generationen pro Monat', included: true },
        { text: 'Standard-Auflösung Downloads', included: true },
        { text: 'Grundlegende Stiloptionen', included: true },
        { text: 'Zugang zur Community-Galerie', included: true },
        { text: 'Keine Hochauflösung', included: false },
        { text: 'Keine kommerzielle Lizenz', included: false }
      ],
      buttonText: 'Jetzt starten',
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro Creator',
      description: 'Für ernsthafte Tattoo-Sammler & Künstler',
      monthlyPrice: '24€',
      yearlyPrice: '19€',
      features: [
        { text: 'Unbegrenzte KI-Generationen', included: true },
        { text: 'Hochauflösende Downloads (300 DPI)', included: true },
        { text: 'Alle Stiloptionen & erweiterte Kontrollen', included: true },
        { text: 'Maßgeschneiderte Größe & Platzierung', included: true },
        { text: 'KI-gestützte Design-Varianten', included: true },
        { text: 'Kommerzielle Lizenz für Tattoo-Künstler', included: true }
      ],
      buttonText: 'Pro Plan wählen',
      popular: true
    },
    {
      id: 'studio',
      name: 'Studio',
      description: 'Für Tattoo-Studios & Profis',
      monthlyPrice: '49€',
      yearlyPrice: '39€',
      features: [
        { text: 'Alles aus Pro plus:', included: true },
        { text: '5 Benutzerkonten', included: true },
        { text: 'Studio-Branding auf Exporten', included: true },
        { text: 'Priorisierte KI-Verarbeitung', included: true },
        { text: 'Kunden-Präsentations-Tools', included: true },
        { text: 'Dedizierter Support', included: true }
      ],
      buttonText: 'Vertrieb kontaktieren',
      popular: false
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
    const promptLower = tattooPrompt.toLowerCase();
    let icon = FaWolf;
    
    if (promptLower.includes('drache')) {
      icon = FaDragonIcon;
    } else if (promptLower.includes('rose') || promptLower.includes('blume') || promptLower.includes('blüte') || promptLower.includes('floral')) {
      icon = FaHeart;
    } else if (promptLower.includes('schädel')) {
      icon = FaSkull;
    } else if (promptLower.includes('mond') || promptLower.includes('stern')) {
      icon = FaMoon;
    } else if (promptLower.includes('edelstein') || promptLower.includes('diamant')) {
      icon = FaGem;
    } else if (promptLower.includes('blatt') || promptLower.includes('natur')) {
      icon = FaLeaf;
    } else if (promptLower.includes('wolke') || promptLower.includes('himmel')) {
      icon = FaCloudMoon;
    }
    
    setTattooIcon(() => icon);
    setGeneratedText(tattooPrompt.length > 30 ? tattooPrompt.substring(0, 30) + '...' : tattooPrompt);
    setGenerationTime((Math.random() * 2 + 1.5).toFixed(1));
  };

  // Beispiel laden
  const loadExample = (example: ExamplePrompt): void => {
    setTattooPrompt(example.text);
    setSelectedStyle(example.style);
  };

  // Design herunterladen
  const downloadDesign = (): void => {
    alert('In der Vollversion würde dies dein hochauflösendes Tattoo-Design herunterladen. Teste unseren Pro-Plan für unbegrenzte Downloads!');
  };

  // Plan auswählen
  const selectPlan = (planId: string): void => {
    setActivePlan(planId);
    alert(`Du hast den ${planId}-Plan ausgewählt! In einer echten Implementierung würde dies zur Kasse weiterleiten.`);
  };

  // Kostenlose Testphase starten
  const startFreeTrial = (): void => {
    alert('Starte deine 7-tägige kostenlose Testphase des Pro-Plans! In einer echten Implementierung würde dies ein Konto erstellen.');
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
      {/* Live Demo Section */}
      <section id="demo" className="py-20 px-4">
        <div className="container mx-auto">
          
          
          <div className="demo-container  mx-auto">
            <div className="p-1 bg-gradient-to-r from-purple-600 to-blue-600">
              <div className="bg-black p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Input Side */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Beschreibe deine Tattoo-Idee</h3>
                    
                    <div className="mb-8">
                      <label className="block text-gray-300 mb-3">Tattoo-Beschreibung</label>
                      <textarea
                        value={tattooPrompt}
                        onChange={(e) => setTattooPrompt(e.target.value)}
                        placeholder="Beispiel: Ein mystischer Wolf, der zum Mond heult, mit geometrischen Mustern im Blackwork-Stil"
                        className="w-full h-40 bg-gray-900 border border-gray-800 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
                      />
                      <div className="text-gray-500 text-sm mt-2">
                        Je detaillierter die Beschreibung, desto besser das Ergebnis
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <label className="block text-gray-300 mb-3">Stil auswählen</label>
                      <div className="grid grid-cols-2 gap-3">
                        {styleOptions.map((style) => {
                          const Icon = style.icon;
                          return (
                            <button
                              key={style.id}
                              onClick={() => setSelectedStyle(style.id)}
                              className={`bg-gray-900 border rounded-lg p-3 text-center transition-colors ${
                                selectedStyle === style.id
                                  ? 'border-purple-600'
                                  : 'border-gray-800 hover:border-purple-600'
                              }`}
                            >
                              <Icon className={`${style.color} mb-2 mx-auto text-xl`} />
                              <div className="font-medium">{style.name}</div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-gray-300 mb-3">Komplexität</label>
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-3">Einfach</span>
                        <input
                          type="range"
                          min="1"
                          max="5"
                          value={complexity}
                          onChange={(e) => setComplexity(parseInt(e.target.value))}
                          className="flex-1 h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer slider"
                        />
                        <span className="text-gray-500 ml-3">Detailliert</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={generateTattoo}
                      disabled={isGenerating}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isGenerating ? (
                        <>
                          <FaSpinner className="animate-spin mr-3" />
                          Generiere...
                        </>
                      ) : (
                        <>
                          <FaRobot className="mr-3" />
                          Tattoo-Design generieren
                        </>
                      )}
                    </button>
                  </div>
                  
                  {/* Output Side */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6">KI-generiertes Design</h3>
                    
                    <div className="tattoo-preview rounded-xl border-2 border-dashed border-gray-800 h-80 mb-6 flex items-center justify-center relative overflow-hidden">
                      {/* Default state */}
                      {!showGeneratedDesign && !isGenerating && (
                        <div className="text-center p-6">
                          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-900/30 to-blue-900/30 flex items-center justify-center mx-auto mb-6">
                            <FaFeatherAlt className="text-3xl text-gray-500" />
                          </div>
                          <h4 className="text-xl font-bold mb-2">Hier erscheint dein Design</h4>
                          <p className="text-gray-500">
                            Beschreibe deine Tattoo-Idee und klicke auf "Generieren", um das KI-Design zu sehen.
                          </p>
                        </div>
                      )}
                      
                      {/* Generated design */}
                      {showGeneratedDesign && !isGenerating && (
                        <div className="w-full h-full p-4">
                          <div className="w-full h-full rounded-lg bg-gradient-to-br from-gray-900 to-black flex flex-col">
                            <div className="flex-1 flex items-center justify-center">
                              <div className="relative">
                                <div className="w-48 h-48 rounded-full border-4 border-purple-600 flex items-center justify-center">
                                  <TattooIcon className="text-6xl text-white" />
                                  <div className="absolute inset-0 rounded-full border-2 border-blue-500 animate-ping opacity-20"></div>
                                </div>
                                <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-sm font-bold">
                                  KI
                                </div>
                              </div>
                            </div>
                            <div className="p-4 border-t border-gray-800">
                              <div className="text-gray-400 text-sm mb-1">KI-generiert:</div>
                              <div className="font-bold text-lg">{generatedText}</div>
                              <div className="flex justify-between items-center mt-3">
                                <div className="text-sm text-gray-500">
                                  <FaClock className="inline mr-1" />
                                  <span>{generationTime}</span> Sekunden
                                </div>
                                <button
                                  onClick={downloadDesign}
                                  className="text-sm bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-lg transition-colors"
                                >
                                  <FaDownload className="inline mr-1" />
                                  Speichern
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Loading state */}
                      {isGenerating && (
                        <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center rounded-xl">
                          <div className="w-16 h-16 border-4 border-t-purple-600 border-r-transparent border-b-purple-600 border-l-transparent rounded-full animate-spin mb-6"></div>
                          <h4 className="text-xl font-bold mb-2">KI generiert dein Tattoo</h4>
                          <p className="text-gray-400">
                            Analyse deiner Beschreibung und Erstellung eines einzigartigen Designs...
                          </p>
                          <div className="w-64 h-1 bg-gray-800 rounded-full mt-6 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300"
                              style={{ width: `${generationProgress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="text-center text-gray-500 text-sm">
                      <p>
                        <FaLightbulb className="inline mr-2" />
                        Probiere verschiedene Beschreibungen wie "Phönix mit Watercolor-Flügeln" oder "minimalistische Berg-Line-Art"
                      </p>
                    </div>
                    
                    <div className="mt-8">
                      <h4 className="font-bold mb-3">Letzte Generationen</h4>
                      <div className="grid grid-cols-3 gap-3">
                        {examplePrompts.map((example, index) => {
                          const ExampleIcon = example.icon;
                          return (
                            <div
                              key={index}
                              onClick={() => loadExample(example)}
                              className="bg-gray-900 rounded-lg p-3 cursor-pointer hover:bg-gray-800 transition-colors"
                            >
                              <div className="w-full h-16 bg-gradient-to-r from-red-900/50 to-orange-900/50 rounded-md flex items-center justify-center mb-2">
                                <ExampleIcon className="text-xl" />
                              </div>
                              <div className="text-xs truncate">{example.text.split(' ')[0]}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 text-gray-500">
            <p>
              <FaInfoCircle className="inline mr-2" />
              Die Demo generiert Vorschaudesigns. Für hochauflösende, anpassbare Designs siehe unsere Preispläne.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Einfache, <span className="gradient-text">transparente</span> Preise
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Wähle den Plan, der zu deinen Bedürfnissen passt. Alle Pläne enthalten unseren leistungsstarken KI-Tattoo-Generator.
            </p>
            
            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-gray-900 rounded-full p-1 mt-10">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  !isYearly
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600'
                    : 'bg-transparent'
                }`}
              >
                Monatlich
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  isYearly
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600'
                    : 'bg-transparent'
                }`}
              >
                Jährlich{' '}
                <span className="text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full ml-2">
                  20% sparen
                </span>
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`tattoo-card rounded-2xl p-8 border flex flex-col ${
                  plan.popular
                    ? 'border-purple-600 transform scale-105 relative z-10'
                    : 'border-gray-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                      BELIEBTESTE
                    </div>
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-baseline mb-4">
                    <span className="text-5xl font-bold">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-500 ml-2">/Monat</span>
                  </div>
                  <p className="text-gray-400">
                    Abrechnung <span>{isYearly ? 'jährlich' : 'monatlich'}</span>
                  </p>
                </div>
                
                <div className="flex-1 mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        {feature.included ? (
                          <FaCheck className="text-green-500 mr-3 mt-1" />
                        ) : (
                          <FaTimes className="text-gray-600 mr-3 mt-1" />
                        )}
                        <span className={feature.included ? '' : 'opacity-50'}>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button
                  onClick={() => selectPlan(plan.id)}
                  className={`w-full py-4 rounded-xl font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-bold shadow-lg'
                      : 'border-2 border-purple-600 hover:bg-purple-900/20'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-gray-900/50 rounded-xl p-6 max-w-3xl mx-auto">
              <div className="text-left">
                <h4 className="font-bold text-xl mb-2">Unsicher, welcher Plan passt?</h4>
                <p className="text-gray-400">
                  Teste unseren{' '}
                  <span className="text-purple-400 font-medium">7-tägigen kostenlosen Proben</span> des Pro-Plans ohne
                  Kreditkarte.
                </p>
              </div>
              <button
                onClick={startFreeTrial}
                className="ml-6 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-medium transition-all duration-300 whitespace-nowrap"
              >
                Kostenlose Testphase starten
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .tattoo-card {
          transition: all 0.3s ease;
          background: linear-gradient(145deg, #1a1a1a, #111111);
        }
        
        .tattoo-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2);
        }
        
        .demo-container {
          background: linear-gradient(145deg, #1a1a1a, #111111);
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #333;
        }
        
        .tattoo-preview {
          background: linear-gradient(
            45deg,
            #0f0f0f 25%,
            #1a1a1a 25%,
            #1a1a1a 50%,
            #0f0f0f 50%,
            #0f0f0f 75%,
            #1a1a1a 75%,
            #1a1a1a
          );
          background-size: 20px 20px;
        }
        
        .slider {
          -webkit-appearance: none;
        }
        
        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
          cursor: pointer;
          border: none;
        }
      `}</style>
      
      {/* Global Styles */}
      <style jsx global>{`
        body {
          background-color: #0a0a0a;
          overflow-x: hidden;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
        }
        
        .bg-black {
          background-color: #0a0a0a;
        }
        
        .tattoo-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238b5cf6' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
};

export default TattooVisionAI;