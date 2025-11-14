"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import Image from "next/image";
// import Link from "next/link";
// import Authentication from "./_components/Authentication";
// import { Button } from "@/components/ui/button";
// import { auth } from "@/configs/firebaseConfig";
// import ProfileAvatar from "./_components/ProfileAvatar";
// import { useAuthContext } from "./provider";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

// export default function Home() {
//   // const user = auth?.currentUser;
//   // console.log(user)
//   // const router =useRouter();
//   const user = useAuthContext();

//   useEffect( ()=>{
// // router.replace('/app')
//   },[]
// )
//   return (
//     <div>
// hey
//     </div>

//   );
// }

import Link from "next/link";

import { useState } from 'react';

export default function Homepage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-slate-900"></div>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 container mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <div >
              <Link href={"/app"} className="flex items-center">
                <div className='p-4 flex flex-col items-center'>
                  
                  <div className="relative w-20 h-20">
                    <Image
                      src="/driplogo.png"
                      alt="logo"
                      fill
                      className="object-contain"
                    />
                  </div>



                </div>

                <div className="flex items-center space-x-3">

                  <span className="text-2xl font-bold text-white hidden md:block">AdCraft Pro</span>
                </div>
              </Link>


            </div>


            <Link href={"/login"}>
              <button
                className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"

              >
                <span className="relative z-10 flex items-center">
                  Anmelden
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                {isHovered && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 blur-lg opacity-50"></div>
                )}
              </button>

            </Link>

          </div>
        </nav>

        {/* Main Hero Content */}
        <div className="relative z-10 container mx-auto px-6 pb-20 pt-1 text-center">
          <div className="max-w-6xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-white text-sm font-medium">KI-gestützte Werbegenerierung</span>
            </div>

            {/* Main Heading */}
         <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
  Erstellen
  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
    Atemberaubende Werbespots
  </span>
  In Sekunden
</h1>


            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
              Verwandeln Sie Ihre Produktbilder mit unserer fortschrittlichen KI-Technologie in hochkonvertierende Werbemittel. Designkenntnisse sind nicht erforderlich.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href={"/app"}>
                <button
                  className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span className="relative z-10 flex items-center">
                    Jetzt kostenlos erstellen
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  {isHovered && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 blur-lg opacity-50"></div>
                  )}
                </button>
              </Link>

              <button className="border-2 border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-lg">
                🎬 Demo ansehen
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { number: '10K+', label: 'Ads Created' },
                { number: '98%', label: 'Satisfaction' },
                { number: '2.3x', label: 'More Clicks' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div >

      {/* How It Works Section */}
      < div className="relative py-20 bg-white/5 backdrop-blur-lg" >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Wie es <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Werke</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Erstellen Sie beeindruckende Werbemittel in nur drei einfachen Schritten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                icon: '📸',
                title: 'Laden Sie Ihr Bild hoch',
                description: 'Laden Sie einfach Ihr Produktfoto hoch oder wählen Sie aus unserer Bildbibliothek.'
              },
              {
                step: '02',
                icon: '🎨',
                title: 'AI-Magie',
                description: 'Unsere KI analysiert Ihr Bild und erstellt mehrere kreative Varianten'
              },
              {
                step: '03',
                icon: '🚀',
                title: 'Herunterladen & Verwenden',
                description: 'Laden Sie Ihr Lieblingsdesign herunter und starten Sie sofort bessere Anzeigen'
              }
            ].map((step, index) => (
              <div key={index} className="relative group text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                  {step.step}
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 pt-12 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 h-full">
                  <div className="text-5xl mb-6">{step.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ div>

      {/* Platform Support Section */}
      <div className="relative py-20" >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perfekt für<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Alle Plattformen</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Optimierte Anzeigengrößen und -formate für jede Social-Media-Plattform
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Instagram', icon: '📱', color: 'from-pink-500 to-purple-500' },
              { name: 'Facebook', icon: '👥', color: 'from-blue-500 to-blue-600' },
              { name: 'TikTok', icon: '🎵', color: 'from-black to-gray-800' },
              { name: 'YouTube', icon: '📺', color: 'from-red-500 to-red-600' },
              { name: 'Twitter', icon: '🐦', color: 'from-blue-400 to-blue-500' },
              { name: 'LinkedIn', icon: '💼', color: 'from-blue-600 to-blue-700' }
            ].map((platform, index) => (
              <div key={index} className="group text-center">
                <div className={`bg-gradient-to-r ${platform.color} rounded-2xl p-6 aspect-square flex flex-col items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3`}>
                  <div className="text-3xl mb-2">{platform.icon}</div>
                  <div className="text-white font-semibold text-sm">{platform.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div >
      {/* AI Technology Section */}
      < div className="relative py-20 bg-gradient-to-br from-slate-900 to-purple-900" >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Angetrieben von <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Fortgeschrittene KI</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Unsere innovative Technologie versteht Ihre Marke und erstellt automatisch beeindruckende visuelle Darstellungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: '🧠',
                title: 'Computer Vision',
                description: 'Die KI analysiert Ihre Produktbilder, um Kontext und Funktionen zu verstehen'
              },
              {
                icon: '🎭',
                title: 'Style Transfer',
                description: 'Professionelle Designstile werden automatisch auf Ihre Bilder angewendet'
              },
              {
                icon: '📊',
                title: 'Performance AI',
                description: 'Machine Learning optimiert Ihre Creatives für maximale Engagement-Rate'
              },
              {
                icon: '🔮',
                title: 'Predictive Analytics',
                description: 'Die KI sagt voraus, welche Creatives bei Ihrem Publikum am besten performen'
              }

            ].map((tech, index) => (
              <div key={index} className="group text-center">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 h-full">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center p-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl">
              <div className="bg-slate-900/90 backdrop-blur-lg rounded-xl px-6 py-3">
                <p className="text-white/80 text-sm">
                  <span className="text-cyan-400 font-semibold">97% Genauigkeit</span> bei der Wiedererkennung des Markenstils •
                  <span className="text-blue-400 font-semibold ml-2">2.8x Schneller</span> als manuelles Design
                </p>
              </div>
            </div>
          </div>
        </div>
      </ div>

      {/* Use Cases Section */}
      <div className="relative py-20 bg-white/5 backdrop-blur-lg" >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perfekt für <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">jedes Unternehmen</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Von Startups bis hin zu Großunternehmen – AdCraft Pro hilft Unternehmen jeder Größe, bessere Anzeigen zu erstellen
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: '🛍️',
                title: 'E-Commerce-Shops',
                description: 'Erstellen Sie produktorientierte Anzeigen, die Verkäufe und Conversions steigern',
                features: ['Produktpräsentationen', 'Saisonale Kampagnen', 'Sale-Ankündigungen']
              },
              {
                icon: '📱',
                title: 'Mobile Apps',
                description: 'Generieren Sie App-Installationsanzeigen mit überzeugenden Visuals und CTAs',
                features: ['App-Screenshots', 'Funktions-Highlights', 'Download-Aufforderungen']
              },
              {
                icon: '🏢',
                title: 'Agenturen',
                description: 'Skalieren Sie Ihre kreative Produktion effizient für mehrere Kunden',
                features: ['White-Label-Optionen', 'Massen-Generierung', 'Kundenverwaltung']
              },
              {
                icon: '🎓',
                title: 'Bildungsbereich',
                description: 'Erstellen Sie ansprechende Anzeigen für Kurse, Webinare und Lerninhalte',
                features: ['Kurs-Promotionen', 'Webinar-Grafiken', 'Studenten-Testimonials']
              },
              {
                icon: '🏥',
                title: 'Gesundheitswesen',
                description: 'Professionelle Anzeigen für medizinische und Wellness-Dienstleistungen',
                features: ['Service-Promotionen', 'Gesundheitsaufklärung', 'Klinik-Updates']
              },
              {
                icon: '🍽️',
                title: 'Restaurants',
                description: 'Appetitliche Food-Visuals, die Reservierungen und Bestellungen fördern',
                features: ['Food-Fotografie', 'Menü-Highlights', 'Sonderangebote']
              }

            ].map((usecase, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{usecase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{usecase.title}</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">{usecase.description}</p>
                <ul className="space-y-2">
                  {usecase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white/60 text-sm">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border-2 border-white/20 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-lg">
              Alle Anwendungsfälle anzeigen →
            </button>
          </div>
        </div>
      </div >

      {/* Integration Section */}
      < div className="relative py-20" >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nahtlose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Integrationen</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Verbinden Sie sich mit Ihren bevorzugten Tools und optimieren Sie Ihren Workflow
            </p>
          </div>


          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Shopify', icon: '🛒', color: 'from-green-500 to-green-600' },
              { name: 'Meta', icon: '📘', color: 'from-blue-500 to-blue-600' },
              { name: 'Google', icon: '🔍', color: 'from-blue-400 to-blue-500' },
              { name: 'Slack', icon: '💬', color: 'from-purple-500 to-purple-600' },
              { name: 'Zapier', icon: '⚡', color: 'from-red-400 to-red-500' },
              { name: 'HubSpot', icon: '🎯', color: 'from-orange-500 to-orange-600' }
            ].map((integration, index) => (
              <div key={index} className="group text-center">
                <div className={`bg-gradient-to-r ${integration.color} rounded-2xl p-6 aspect-square flex flex-col items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-2 shadow-lg`}>
                  <div className="text-3xl mb-2 transform group-hover:scale-125 transition-transform">{integration.icon}</div>
                  <div className="text-white font-semibold text-sm   transition-opacity duration-300">
                    {integration.name}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/10">
              <span className="text-white/80">🔌</span>
              <span className="text-white font-semibold">API verfügbar</span>
              <span className="text-white/60 text-sm">• Individuelle Integrationen für Ihren Technologie-Stack</span>
            </div>
          </div>
        </div>
      </ div>

      {/* FAQ Section */}


      {/* Testimonials Section */}
      <div className="relative py-20 bg-white/5 backdrop-blur-lg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Geliebt von <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Marketing-Experten</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Sehen Sie, was unsere Kunden über ihre Erfahrungen sagen
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Sarah Chen',
                role: 'E-Commerce-Managerin',
                company: 'TechGadgets',
                image: '👩',
                text: 'AdCraft Pro hat unsere CTR um 156% erhöht. Die KI-generierten Creatives übertreffen jedes Mal unsere manuellen Designs.',
                rating: '★★★★★'
              },
              {
                name: 'Mike Rodriguez',
                role: 'Marketingdirektor',
                company: 'StyleBrand',
                image: '👨',
                text: 'Wir haben im letzten Quartal über 5.000 $ an Designkosten gespart. Die Qualität ist unglaublich und die Geschwindigkeit unschlagbar.',
                rating: '★★★★★'
              },
              {
                name: 'Emily Watson',
                role: 'Gründerin',
                company: 'BloomCosmetics',
                image: '👩',
                text: 'Als kleines Unternehmen war dieses Tool ein Game-Changer. Professionelle Anzeigen ohne Agenturpreis.',
                rating: '★★★★★'
              }

            ].map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500">
                <div className="text-4xl mb-4">{testimonial.image}</div>
                <div className="text-yellow-400 text-lg mb-4">{testimonial.rating}</div>
                <p className="text-white/80 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="text-white font-bold">{testimonial.name}</div>
                  <div className="text-white/60 text-sm">{testimonial.role} • {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
    Warum <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Dripwerk?</span> wählen?
  </h2>
  <p className="text-xl text-white/70 max-w-2xl mx-auto">
    Alles, was Sie brauchen, um professionelle Werbekreatives zu erstellen, die konvertieren
  </p>
</div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
  icon: '⚡',
  title: 'Blitzschnell',
  description: 'Erstellen Sie professionelle Werbekreatives in weniger als 30 Sekunden mit unserer KI-Technologie'
},
{
  icon: '🎨',
  title: 'Schöne Designs',
  description: 'Mehrere Stilvorlagen von professionellen Designern für maximale Wirkung'
},
{
  icon: '📈',
  title: 'Bewährte Ergebnisse',
  description: 'Optimiert für höhere Klickraten und bessere Conversion-Leistung'
},
{
  icon: '🔄',
  title: 'Mehrere Varianten',
  description: 'Erstellen Sie verschiedene Creative-Versionen, um zu testen, was für Ihr Publikum am besten funktioniert'
},
{
  icon: '🌍',
  title: 'Alle Plattformen',
  description: 'Perfekt formatierte Creatives für Instagram, Facebook, TikTok und mehr'
},
{
  icon: '💸',
  title: 'Kosteneffektiv',
  description: 'Sparen Sie Tausende bei Designkosten und erhalten gleichzeitig leistungsstärkere Creatives'
}

            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="relative py-20 bg-white/5 backdrop-blur-lg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
    Einfache <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Preise</span>
  </h2>
  <p className="text-xl text-white/70 max-w-2xl mx-auto">
    Wählen Sie den Plan, der am besten zu Ihrem Unternehmen passt
  </p>
</div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
  name: 'Starter',
  price: '$29',
  period: '/Monat',
  description: 'Perfekt für kleine Unternehmen',
  features: ['50 KI-Generierungen', '5 Designvorlagen', 'Basis-Support', '1 Benutzerkonto'],
  cta: 'Jetzt starten',
  popular: false
},
{
  name: 'Professional',
  price: '$79',
  period: '/Monat',
  description: 'Am besten für wachsende Teams',
  features: ['500 KI-Generierungen', 'Alle Designvorlagen', 'Priorisierter Support', '5 Benutzerkonten', 'Batch-Verarbeitung'],
  cta: '14 Tage kostenlos testen',
  popular: true
},
{
  name: 'Enterprise',
  price: '$199',
  period: '/Monat',
  description: 'Für große Organisationen',
  features: ['Unbegrenzte Generierungen', 'Alle Vorlagen + Anpassungen', '24/7 Support', 'Unbegrenzte Benutzer', 'API-Zugang', 'Individuelle Modelle'],
  cta: 'Vertrieb kontaktieren',
  popular: false
}

            ].map((plan, index) => (
              <div key={index} className={`relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border transition-all duration-500 hover:transform hover:scale-105 ${plan.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-white/10'
                }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                    Am beliebtesten
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/60 ml-2">{plan.period}</span>
                </div>
                <p className="text-white/70 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white/80">
                      <span className="text-green-400 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${plan.popular
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
    Bereit, Ihre Anzeigen zu transformieren?
  </h2>
  <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
    Schließen Sie sich tausenden von Marketern an, die leistungsstärkere Anzeigen mit KI erstellen
  </p>
  <button className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-12 py-4 rounded-2xl font-bold text-lg hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-2xl">
    Kostenlose Testversion starten
  </button>
  <p className="text-white/60 text-sm mt-4">Keine Kreditkarte erforderlich • 14 Tage kostenlos testen</p>
</div>

          </div>
        </div>
      </div>
      <div className="relative py-20 bg-white/5 backdrop-blur-lg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
    Häufig gestellte <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Fragen</span>
  </h2>
  <p className="text-xl text-white/70 max-w-2xl mx-auto">
    Alles, was Sie über AdCraft Pro wissen müssen
  </p>
</div>


          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
  question: "Wie erstellt die KI Werbekreatives?",
  answer: "Unsere KI analysiert Ihre Produktbilder, versteht den Kontext, wendet professionelle Designprinzipien an und erstellt mehrere kreative Varianten, die für Engagement und Conversions optimiert sind."
},
{
  question: "Kann ich meine eigenen Markenfarben und Schriftarten verwenden?",
  answer: "Ja! AdCraft Pro ermöglicht es Ihnen, Markenrichtlinien einschließlich Farben, Schriftarten und Logos festzulegen, um eine konsistente Markenführung über alle generierten Creatives hinweg zu gewährleisten."
},
{
  question: "Wie lange dauert es, Anzeigen zu erstellen?",
  answer: "Die meisten Werbekreatives werden in weniger als 30 Sekunden erstellt. Sie erhalten sofort mehrere Varianten zur Auswahl."
},
{
  question: "Brauche ich Design-Erfahrung, um dies zu nutzen?",
  answer: "Überhaupt nicht! AdCraft Pro ist für Marketingexperten und Unternehmer ohne Design-Erfahrung konzipiert. Die KI übernimmt die gesamte kreative Arbeit für Sie."
},
{
  question: "Kann ich die generierten Anzeigen bearbeiten?",
  answer: "Ja, Sie können jede generierte Anzeige problemlos mit unserem einfachen Drag-and-Drop-Editor anpassen oder herunterladen und in Ihrem bevorzugten Design-Tool bearbeiten."
}

            ].map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                  <span className="text-cyan-400 mr-3">•</span>
                  {faq.question}
                </h3>
                <p className="text-white/70 leading-relaxed pl-6">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4">
              <span className="text-white/60">Haben Sie noch Fragen?</span>
              <button className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                Support kontaktieren ↗
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
               <Link href={"/app"} className="flex items-center">
                <div className='p-4 flex flex-col items-center'>
                  {/* <Image src={'/driplogo.png'} alt='logo' width={100} height={100}
                        className='w-full h-full' /> */}
                  <div className="relative w-20 h-20">
                    <Image
                      src="/driplogo.png"
                      alt="logo"
                      fill
                      className="object-contain"
                    />
                  </div>



                </div>

                <div className="flex items-center space-x-3">

                  <span className="text-2xl font-bold text-white">AdCraft Pro</span>
                </div>
              </Link>
            </div>
            <div className="text-white/60 text-center">
              <p>© 2026 Dripwrek. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </div>


      </footer>
    </div >
  );
}