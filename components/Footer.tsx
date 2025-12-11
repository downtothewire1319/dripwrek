'use client';
import React, { useState } from "react";
import { FaRobot, FaChevronRight, FaMagic, FaExpandAlt, FaPalette, FaProjectDiagram, FaUserEdit, FaPaperPlane, FaShieldAlt, FaExclamationTriangle } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaPinterest, FaTiktok } from "react-icons/fa";
import Image from "next/image";

const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-gray-900 pt-12 pb-8 px-4 md:px-8 lg:px-16 tattoo-pattern tattoo-border text-skin-tone">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center mb-6">
              <Image src="/driplogo.png" alt="InkAI Logo" width={100} height={40} className="mr-3" />
            </div>
            <p className="text-skin-tone/70 mb-6">
              Nutzen Sie künstliche Intelligenz, um die Tattoo-Gestaltung zu revolutionieren. Erstellen Sie Ihr perfektes Tattoo mit unserem AI-Generator.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-skin-tone/10 flex items-center justify-center hover:bg-red-600 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-skin-tone/10 flex items-center justify-center hover:bg-blue-500 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-skin-tone/10 flex items-center justify-center hover:bg-purple-600 transition-colors">
                <FaPinterest />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-skin-tone/10 flex items-center justify-center hover:bg-green-600 transition-colors">
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-6 pb-2 border-b border-skin-tone/20">Schnellzugriff</h3>
            <ul className="space-y-3">
              {["AI Tattoo Generator", "Design Galerie", "Stilreferenzen", "Künstler-Kollaboration", "Tattoo Pflegehinweise"].map((item) => (
                <li key={item}>
                  <a href="#" className="footer-link flex items-center text-skin-tone/80 hover:text-red-600 transition-colors">
                    <FaChevronRight className="text-xs mr-2 text-red-600" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Features */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-6 pb-2 border-b border-skin-tone/20">AI Funktionen</h3>
            <ul className="space-y-3">
              {[
                { name: "Stiltransfer", icon: <FaMagic className="text-xs mr-2 text-blue-500" /> },
                { name: "Körperplatzierung Vorschau", icon: <FaExpandAlt className="text-xs mr-2 text-blue-500" /> },
                { name: "Farb-KI", icon: <FaPalette className="text-xs mr-2 text-blue-500" /> },
                { name: "Muster-Generierung", icon: <FaProjectDiagram className="text-xs mr-2 text-blue-500" /> },
                { name: "Personalisierungs-Engine", icon: <FaUserEdit className="text-xs mr-2 text-blue-500" /> },
              ].map((item) => (
                <li key={item.name}>
                  <a href="#" className="footer-link flex items-center text-skin-tone/80 hover:text-blue-400 transition-colors">
                    {item.icon} {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-6 pb-2 border-b border-skin-tone/20">Bleiben Sie informiert</h3>
            <p className="text-skin-tone/70 mb-4">
              Abonnieren Sie unseren Newsletter für AI-Tattoo-Trends, Design-Tipps und exklusive Funktionen.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="w-full px-4 py-3 rounded-lg text-skin-tone placeholder-skin-tone/50 bg-gray-800 border border-gray-600 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600"
                required
              />
              <button
                type="submit"
                className={`w-full px-4 py-3 rounded-lg font-semibold text-white ${subscribed ? "bg-green-600" : "bg-gradient-to-r from-red-600 to-purple-600 hover:shadow-lg transition-all"}`}
              >
                {subscribed ? <><FaPaperPlane className="inline mr-2" /> Abonniert!</> : <>Abonnieren <FaPaperPlane className="inline ml-2" /></>}
              </button>
            </form>
            <div className="mt-6 pt-6 border-t border-skin-tone/20">
              <p className="text-sm text-skin-tone/60">
                <FaShieldAlt className="mr-2 text-blue-500 inline" /> Ihre Daten sind sicher. Wir respektieren Ihre Privatsphäre.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-skin-tone/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-skin-tone/60 text-sm mb-4 md:mb-0">&copy; 2026 Dripwerk Tattoo Generator. Alle Rechte vorbehalten.</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-skin-tone/60">
              {["Datenschutz", "Nutzungsbedingungen", "Cookie-Richtlinie", "AI Ethik", "Kontakt"].map((item) => (
                <a key={item} href="#" className="hover:text-red-600 transition-colors">{item}</a>
              ))}
            </div>
          </div>
          <div className="mt-6 text-center text-xs text-skin-tone/50">
            <FaExclamationTriangle className="mr-1 text-red-600 inline" /> AI-generierte Designs dienen nur als Inspiration. Konsultieren Sie einen professionellen Tätowierer, bevor Sie sich tätowieren lassen.
          </div>
          <div className="mt-4 flex justify-center items-center text-xs text-skin-tone/50 gap-6">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span>AI-Systemstatus: <span className="text-green-400">Betriebsbereit</span></span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
              <span>Aktive Modelle: <span className="text-blue-500">StyleGAN2, DALL-E 2, Stable Diffusion</span></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
