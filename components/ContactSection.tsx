// components/ContactSection.tsx
'use client';

import React, { useState } from 'react';

const Icon = ({ type, className = "" }: { type: string; className?: string }) => {
  const icons: Record<string, string> = {
    // Contact Icons
    email: '✉️',
    phone: '📞',
    location: '📍',
    clock: '⏰',
    chat: '💬',
    support: '🛟',
    
    // Form Icons
    user: '👤',
    company: '🏢',
    message: '📝',
    send: '🚀',
    check: '✅',
    error: '❌',
    
    // Social Icons
    whatsapp: '💬',
    instagram: '📸',
    twitter: '🐦',
    
    // Feature Icons
    star: '⭐',
    sparkle: '✨',
    shield: '🛡️',
    rocket: '🚀',
    
    // Navigation
    arrowRight: '→',
    arrowLeft: '←',
    close: '✕'
  };
  
  return <span className={`inline-block ${className}`}>{icons[type] || '●'}</span>;
};

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  consent: boolean;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    consent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [activeTab, setActiveTab] = useState<'general' | 'support' | 'business'>('general');

  const contactOptions = [
    {
      icon: 'chat',
      title: 'Live Chat',
      description: 'Soforthilfe von unseren Experten',
      responseTime: 'Innerhalb von 5 Minuten',
      action: 'Jetzt chatten',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: 'email',
      title: 'E-Mail Support',
      description: 'Detaillierte Anfragen',
      responseTime: 'Innerhalb von 24 Stunden',
      action: 'support@Dripwerk.ai',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: 'phone',
      title: 'Telefon Support',
      description: 'Persönliche Beratung',
      responseTime: 'Mo-Fr, 9-18 Uhr',
      action: '+49 30 1234 5678',
      color: 'from-green-600 to-emerald-600'
    }
  ];

  const faqs = [
    {
      question: 'Wie funktioniert der KI-Tattoo-Generator?',
      answer: 'Unser KI-Algorithmus analysiert Ihre Beschreibung und erstellt einzigartige Designs basierend auf Millionen von Tattoo-Beispielen.'
    },
    {
      question: 'Kann ich meine Designs herunterladen?',
      answer: 'Ja, alle generierten Designs können in hoher Auflösung heruntergeladen werden.'
    },
    {
      question: 'Gibt es eine kostenlose Testversion?',
      answer: 'Ja, wir bieten eine 7-tägige kostenlose Testversion des Pro-Plans an.'
    },
    {
      question: 'Unterstützt ihr Tattoo-Studios?',
      answer: 'Ja, wir bieten spezielle Studio-Pläne mit mehreren Benutzerkonten und kommerziellen Lizenzen.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (formData.name && formData.email && formData.message && formData.consent) {
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        consent: false
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } else {
      setSubmitError('Bitte füllen Sie alle erforderlichen Felder aus.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-800/50 mb-6">
            <Icon type="sparkle" className="mr-2" />
            <span className="text-sm font-medium">Kontaktieren Sie uns</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lassen Sie uns <span className="gradient-text">zusammenarbeiten</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Wir helfen Ihnen bei allen Fragen rund um KI-gestützte Tattoo-Designs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8">
            {/* Form Tabs */}
            <div className="flex mb-8 border-b border-gray-800">
              {[
                { id: 'general', label: 'Allgemein' },
                { id: 'support', label: 'Support' },
                { id: 'business', label: 'Business' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-6 py-3 font-medium transition-all duration-300 relative ${
                    activeTab === tab.id
                      ? 'text-purple-400'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Success Message */}
            {submitSuccess && (
              <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-800/50 flex items-center">
                <Icon type="check" className="text-green-500 text-xl mr-3" />
                <div>
                  <div className="font-medium text-green-400">Nachricht gesendet!</div>
                  <div className="text-green-300 text-sm">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitError && (
              <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-red-900/30 to-pink-900/30 border border-red-800/50 flex items-center">
                <Icon type="error" className="text-red-500 text-xl mr-3" />
                <div className="text-red-300">{submitError}</div>
              </div>
            )}

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">
                    <Icon type="user" className="inline mr-2" />
                    Vollständiger Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Max Mustermann"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">
                    <Icon type="email" className="inline mr-2" />
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="max@beispiel.de"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  <Icon type="company" className="inline mr-2" />
                  Unternehmen (optional)
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Tattoo Studio Name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Betreff *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                  required
                >
                  <option value="">Bitte wählen...</option>
                  <option value="support">Technischer Support</option>
                  <option value="business">Business Anfrage</option>
                  <option value="partnership">Partnerschaft</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Sonstiges</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  <Icon type="message" className="inline mr-2" />
                  Ihre Nachricht *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Beschreiben Sie Ihr Anliegen..."
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all resize-none"
                  required
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="mt-1 mr-3 w-5 h-5 rounded border-gray-700 bg-gray-800 text-purple-600 focus:ring-purple-600 focus:ring-2"
                  required
                />
                <label className="text-gray-400 text-sm">
                  Ich stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage gespeichert und verarbeitet werden. *
                  <br />
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                    Datenschutzerklärung lesen
                  </a>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/40 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    Wird gesendet...
                  </>
                ) : (
                  <>
                    <Icon type="send" className="mr-3" />
                    Nachricht senden
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Options */}
            <div className="grid md:grid-cols-3 gap-6">
              {contactOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-purple-600 transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${option.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon type={option.icon} className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{option.description}</p>
                  <div className="text-gray-300 font-medium mb-4">
                    <Icon type="clock" className="inline mr-2" />
                    {option.responseTime}
                  </div>
                  <div className="text-purple-400 font-medium">
                    {option.action}
                  </div>
                </div>
              ))}
            </div>

            {/* Office Location */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl overflow-hidden">
              {/* Map Placeholder */}
              <div className="h-48 bg-gradient-to-r from-purple-900/20 to-blue-900/20 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-4">
                    <Icon type="location" className="text-2xl" />
                  </div>
                  <div className="font-bold text-xl">TattooVision HQ</div>
                  <div className="text-gray-300">Berlin, Deutschland</div>
                </div>
                
                {/* Map Pins */}
                <div className="absolute top-8 left-1/4 w-3 h-3 rounded-full bg-purple-600 animate-ping"></div>
                <div className="absolute bottom-12 right-1/3 w-3 h-3 rounded-full bg-pink-600 animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Unser Hauptsitz</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Icon type="location" className="mr-3 text-purple-500" />
                    <span>TattooVision AI GmbH<br />Musterstraße 123<br />10115 Berlin</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Icon type="phone" className="mr-3 text-blue-500" />
                    <span>+49 30 1234 5678</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Icon type="email" className="mr-3 text-green-500" />
                    <span>hello@Dripwerk.ai</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <h4 className="font-bold mb-3">Öffnungszeiten</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-gray-300">
                      <div className="font-medium">Support</div>
                      <div className="text-sm text-gray-400">24/7 per Chat & E-Mail</div>
                    </div>
                    <div className="text-gray-300">
                      <div className="font-medium">Telefon</div>
                      <div className="text-sm text-gray-400">Mo-Fr, 9:00-18:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-6">Häufig gestellte Fragen</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-800 pb-4 last:border-0">
                    <div className="font-medium text-gray-300 mb-2 flex items-center">
                      <Icon type="star" className="mr-2 text-purple-500" />
                      {faq.question}
                    </div>
                    <div className="text-gray-400 text-sm pl-7">
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-800">
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors flex items-center">
                  <span>Alle FAQ anzeigen</span>
                  <Icon type="arrowRight" className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/20 via-gray-900/50 to-blue-900/20 border border-gray-800 rounded-3xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-500 mb-2">24/7</div>
              <div className="text-gray-300">Support Verfügbarkeit</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-500 mb-2">15min</div>
              <div className="text-gray-300">Durchschn. Antwortzeit (Chat)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">98%</div>
              <div className="text-gray-300">Zufriedene Kunden</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">10k+</div>
              <div className="text-gray-300">Probleme gelöst</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        
        /* Custom scrollbar */
        textarea::-webkit-scrollbar {
          width: 8px;
        }
        
        textarea::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 4px;
        }
        
        textarea::-webkit-scrollbar-thumb {
          background: #8b5cf6;
          border-radius: 4px;
        }
        
        textarea::-webkit-scrollbar-thumb:hover {
          background: #7c3aed;
        }
        
        /* Select arrow color */
        select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%238b5cf6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1.5em;
          appearance: none;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;