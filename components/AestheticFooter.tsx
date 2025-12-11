// components/AestheticFooter.tsx
'use client';

import React from 'react';

const Icon = ({ type, className = "" }: { type: string; className?: string }) => {
  const icons: Record<string, string> = {
    // Social Icons
    twitter: '🐦',
    instagram: '📸',
    facebook: '📘',
    youtube: '📺',
    tiktok: '🎵',
    pinterest: '📌',
    
    // Contact Icons
    email: '✉️',
    phone: '📞',
    location: '📍',
    clock: '⏰',
    
    // Feature Icons
    shield: '🛡️',
    lock: '🔒',
    certificate: '📜',
    heart: '❤️',
    star: '⭐',
    sparkle: '✨',
    
    // Navigation Icons
    arrowRight: '→',
    check: '✅',
    info: 'ℹ️',
    
    // Payment Icons
    visa: '💳',
    mastercard: '💳',
    paypal: '💰',
    applePay: '🍎',
    googlePay: 'G',
    bitcoin: '₿'
  };
  
  return <span className={`inline-block ${className}`}>{icons[type] || '●'}</span>;
};

const AestheticFooter = () => {
  const currentYear = new Date().getFullYear();

  // Footer Links
  const footerLinks = {
    product: [
      { name: 'KI Tattoo Generator', href: '#' },
      { name: 'Design Galerie', href: '#' },
      { name: 'Stile & Vorlagen', href: '#' },
      { name: 'Mobile App', href: '#' },
      { name: 'API für Studios', href: '#' }
    ],
    company: [
      { name: 'Über uns', href: '#' },
      { name: 'Karriere', href: '#' },
      { name: 'Presse', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Partner werden', href: '#' }
    ],
    resources: [
      { name: 'Hilfe Center', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'Tattoo Guide', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Design Inspiration', href: '#' }
    ],
    legal: [
      { name: 'Datenschutz', href: '#' },
      { name: 'Nutzungsbedingungen', href: '#' },
      { name: 'Cookie-Richtlinie', href: '#' },
      { name: 'Impressum', href: '#' },
      { name: 'AGB', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Instagram', icon: 'instagram', href: '#' },
    { name: 'Twitter', icon: 'twitter', href: '#' },
    { name: 'Facebook', icon: 'facebook', href: '#' },
    { name: 'YouTube', icon: 'youtube', href: '#' },
    { name: 'TikTok', icon: 'tiktok', href: '#' },
    { name: 'Pinterest', icon: 'pinterest', href: '#' }
  ];

  const contactInfo = [
    { icon: 'email', text: 'support@tattoovision.ai', href: 'mailto:support@tattoovision.ai' },
    { icon: 'phone', text: '+49 30 12345678', href: 'tel:+493012345678' },
    { icon: 'location', text: 'Berlin, Deutschland', href: '#' },
    { icon: 'clock', text: '24/7 Support', href: '#' }
  ];

  const trustBadges = [
    { icon: 'shield', text: 'SSL verschlüsselt' },
    { icon: 'lock', text: 'DSGVO konform' },
    { icon: 'certificate', text: 'ISO 27001 zertifiziert' },
    { icon: 'heart', text: 'Made in Germany' }
  ];

  const paymentMethods = [
    { icon: 'visa', name: 'Visa' },
    { icon: 'mastercard', name: 'Mastercard' },
    { icon: 'paypal', name: 'PayPal' },
    { icon: 'applePay', name: 'Apple Pay' },
    { icon: 'googlePay', name: 'Google Pay' },
    { icon: 'bitcoin', name: 'Bitcoin' }
  ];

  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-white border-t border-gray-800">
      {/* Top Section with Newsletter */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238b5cf6' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Newsletter Section */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mr-4">
                  <Icon type="sparkle" className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Bleib inspiriert</h3>
                  <p className="text-gray-400">Erhalte wöchentlich neue Design-Ideen und exklusive Angebote</p>
                </div>
              </div>
              
              <form className="mt-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Deine E-Mail-Adresse"
                    className="flex-grow px-6 py-4 bg-gray-900 border border-gray-800 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/30 flex items-center justify-center"
                  >
                    <span>Abonnieren</span>
                    <Icon type="arrowRight" className="ml-2" />
                  </button>
                </div>
                <p className="text-gray-500 text-sm mt-3">
                  Mit der Anmeldung stimmst du unserer Datenschutzerklärung zu. Abmeldung jederzeit möglich.
                </p>
              </form>
            </div>

            {/* Trust Badges */}
            <div>
              <h4 className="text-xl font-bold mb-6">Von Tausenden vertraut</h4>
              <div className="grid grid-cols-2 gap-4">
                {trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-900/50 rounded-xl border border-gray-800">
                    <Icon type={badge.icon} className="text-purple-400 text-xl mr-3" />
                    <span className="text-sm">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mr-4">
                <span className="text-xl font-bold">TV</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  TattooVision AI
                </h2>
                <p className="text-gray-400 text-sm">KI-gestützte Tattoo-Designs</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6">
              Wir verwandeln kreative Visionen in einzigartige Tattoo-Designs mit fortschrittlicher künstlicher Intelligenz. 
              Für Enthusiasten und professionelle Künstler gleichermaßen.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Icon type={contact.icon} className="mr-3 text-purple-500" />
                  <span>{contact.text}</span>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-600 hover:bg-gradient-to-r hover:from-purple-900/20 hover:to-pink-900/20 transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon type={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-bold mb-6 text-white capitalize">
                {category === 'product' && 'Produkt'}
                {category === 'company' && 'Unternehmen'}
                {category === 'resources' && 'Ressourcen'}
                {category === 'legal' && 'Rechtliches'}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                    >
                      <Icon type="arrowRight" className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">
                © {currentYear} TattooVision AI. Alle Rechte vorbehalten.
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Made with <Icon type="heart" className="inline text-red-500" /> in Berlin
              </p>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-gray-500 text-sm mr-2">Sichere Zahlung mit:</span>
              <div className="flex space-x-2">
                {paymentMethods.map((method) => (
                  <div
                    key={method.name}
                    className="w-8 h-8 rounded bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 text-xs"
                    title={method.name}
                  >
                    <Icon type={method.icon} />
                  </div>
                ))}
              </div>
            </div>

            {/* Language Selector */}
            <div className="flex items-center">
              <div className="flex items-center mr-4">
                <div className="w-6 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded mr-2"></div>
                <span className="text-gray-300 text-sm">Deutsch</span>
              </div>
              
              <button className="text-gray-500 hover:text-white text-sm transition-colors">
                <span className="flex items-center">
                  <Icon type="info" className="mr-1" />
                  Hilfe & Support
                </span>
              </button>
            </div>
          </div>

          {/* Awards & Certifications */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex flex-wrap justify-center gap-6">
              {[
                'Google AI Partner',
                'AWS Advanced Technology Partner',
                'ISO 27001 Certified',
                'GDPR Compliant',
                'Tattoo Industry Award 2024',
                'Design Innovation Award'
              ].map((award) => (
                <div
                  key={award}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-gray-900 to-black border border-gray-800 text-gray-400 text-sm flex items-center"
                >
                  <Icon type="star" className="mr-2 text-yellow-500" />
                  {award}
                </div>
              ))}
            </div>
          </div>

          {/* App Download Links */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4">Jetzt auch mobil verfügbar</p>
            <div className="flex justify-center space-x-4">
              <button className="px-6 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 border border-gray-800 transition-colors duration-300 flex items-center">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mr-3">
                  <span className="font-bold">A</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="font-medium">App Store</div>
                </div>
              </button>
              
              <button className="px-6 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 border border-gray-800 transition-colors duration-300 flex items-center">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center mr-3">
                  <span className="font-bold">G</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="font-medium">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 z-50"
        aria-label="Nach oben scrollen"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

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
        
        /* Gradient border animation */
        .gradient-border {
          position: relative;
          border-radius: 1rem;
          padding: 1px;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6, #ec4899);
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .gradient-border > div {
          background: #111;
          border-radius: 0.875rem;
          padding: 1.5rem;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </footer>
  );
};

export default AestheticFooter;