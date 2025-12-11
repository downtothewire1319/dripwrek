// components/TestimonialsSection.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Emoji-Fallback falls react-icons Probleme macht
const Icon = ({ type, className = "" }: { type: string; className?: string }) => {
  const icons: Record<string, string> = {
    quoteLeft: '❝',
    star: '⭐',
    chevronLeft: '‹',
    chevronRight: '›',
    sparkle: '✨',
    heart: '❤️',
    check: '✅',
    artist: '👨‍🎨',
    tattooGun: '💉',
    palette: '🎨'
  };
  
  return <span className={`inline-block ${className}`}>{icons[type] || '❓'}</span>;
};

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
  date: string;
  style: string;
  location: string;
}

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Maximilian Schmidt",
      role: "Tattoo-Künstler",
      avatar: "MS",
      rating: 5,
      content: "Als professioneller Tattoo-Künstler habe ich schon viele Design-Tools ausprobiert, aber TattooVision AI ist einfach ein Game-Changer. Die KI versteht genau, was Kunden wollen und liefert designs, die ich direkt umsetzen kann.",
      date: "vor 2 Wochen",
      style: "Realism / Watercolor",
      location: "Berlin"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Tattoo-Enthusiastin",
      avatar: "SC",
      rating: 5,
      content: "Ich wollte schon lange ein personalisiertes Tattoo, wusste aber nicht, wie ich meine Idee visualisieren soll. Mit TattooVision AI konnte ich endlich sehen, wie mein Traumtattoo aussehen würde! Der Prozess war super einfach und das Ergebnis atemberaubend.",
      date: "vor 1 Monat",
      style: "Geometrisch / Minimalistisch",
      location: "Hamburg"
    },
    {
      id: 3,
      name: "Leon Wagner",
      role: "Studio-Besitzer",
      avatar: "LW",
      rating: 5,
      content: "Wir nutzen TattooVision AI in unserem Studio für Kundenberatungen. Es spart uns Stunden an Vorbereitungszeit und die Kunden sind begeistert, ihre Ideen sofort visualisiert zu sehen. Eine fantastische Investition!",
      date: "vor 3 Wochen",
      style: "Traditional / Japanese",
      location: "München"
    },
    {
      id: 4,
      name: "Anna Müller",
      role: "Erstes Tattoo",
      avatar: "AM",
      rating: 5,
      content: "Ich war sehr nervös vor meinem ersten Tattoo, aber mit den Designs von TattooVision AI konnte ich genau zeigen, was ich mir vorstelle. Mein Tätowierer war beeindruckt von der Detailgenauigkeit!",
      date: "vor 5 Tagen",
      style: "Fine Line / Schrift",
      location: "Köln"
    },
    {
      id: 5,
      name: "Tom Richter",
      role: "Tattoo-Sammler",
      avatar: "TR",
      rating: 4,
      content: "Ich habe über 20 Tattoos und dachte, ich hätte alles gesehen. TattooVision AI hat mich mit neuen Stilkombinationen überrascht, die ich selbst nie in Betracht gezogen hätte. Großartiges Tool für Inspiration!",
      date: "vor 2 Monaten",
      style: "Blackwork / Tribal",
      location: "Frankfurt"
    },
    {
      id: 6,
      name: "Lena Hoffmann",
      role: "Freiberufliche Künstlerin",
      avatar: "LH",
      rating: 5,
      content: "Die KI-generierten Designs sind nicht nur praktisch, sondern auch künstlerisch wertvoll. Ich nutze sie als Ausgangspunkt für meine eigenen Kreationen. Eine perfekte Symbiose aus Technologie und Kunst.",
      date: "vor 3 Tagen",
      style: "Surrealism / Abstract",
      location: "Wien, Österreich"
    }
  ];

  // Auto-rotation für den Slider
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900/30 to-black">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-800/50 mb-6">
            <Icon type="sparkle" className="mr-2" />
            <span className="text-sm font-medium">Kundenstimmen</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Was unsere <span className="gradient-text">Kunden sagen</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tausende von Tattoo-Enthusiasten und professionellen Künstlern vertrauen auf TattooVision AI
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl">
            <div className="text-3xl md:text-4xl font-bold text-purple-500 mb-2">4.9/5</div>
            <div className="text-gray-300">Durchschnittliche Bewertung</div>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} type="star" className="text-yellow-500 mx-0.5" />
              ))}
            </div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl">
            <div className="text-3xl md:text-4xl font-bold text-pink-500 mb-2">2.4K+</div>
            <div className="text-gray-300">5-Sterne Bewertungen</div>
            <div className="text-sm text-gray-500 mt-2">Glückliche Kunden</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl">
            <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">98%</div>
            <div className="text-gray-300">Empfehlungsrate</div>
            <div className="text-sm text-gray-500 mt-2">Würden weiterempfehlen</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl">
            <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">50+</div>
            <div className="text-gray-300">Tattoo-Studios</div>
            <div className="text-sm text-gray-500 mt-2">Nutzen unsere Software</div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            onMouseEnter={() => setIsAutoPlaying(false)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
          >
            <Icon type="chevronLeft" className="text-white text-xl" />
          </button>
          
          <button
            onClick={nextTestimonial}
            onMouseEnter={() => setIsAutoPlaying(false)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
          >
            <Icon type="chevronRight" className="text-white text-xl" />
          </button>

          {/* Testimonial Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card bg-gradient-to-br from-gray-900 to-black border rounded-2xl p-6 transition-all duration-500 ${
                  index === 1 ? 'border-purple-600 scale-105 z-10' : 'border-gray-800'
                }`}
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-900/30 to-pink-900/30 flex items-center justify-center">
                    <Icon type="quoteLeft" className="text-purple-400 text-xl" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      type="star"
                      className={`text-sm ${
                        i < testimonial.rating ? 'text-yellow-500' : 'text-gray-700'
                      }`}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-6 italic line-clamp-4">
                  "{testimonial.content}"
                </p>

                {/* User Info */}
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    <div className="flex items-center mt-1">
                      <span className="text-xs px-2 py-1 rounded-full bg-purple-900/30 text-purple-300 mr-2">
                        {testimonial.style}
                      </span>
                      <span className="text-xs text-gray-500">
                        {testimonial.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Date */}
                <div className="mt-4 text-right text-gray-500 text-sm">
                  {testimonial.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.slice(0, 6).map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              onMouseEnter={() => setIsAutoPlaying(false)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 w-8'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>

       

    
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .testimonial-card {
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2);
          border-color: rgba(139, 92, 246, 0.5);
        }
        
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .testimonial-card {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;