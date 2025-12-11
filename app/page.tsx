"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";

import TattooVisionAI from "@/components/HeroDemo";
import TattooVisionComplete from "@/components/TattooVisionComplete"
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
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

      

      </div >

      {/* demo */}
      {/* <TattooVisionComplete/> */}
      <TattooVisionAI/>
      <TestimonialsSection/>
      <ContactSection/>
      <Footer/>
      
      {/* end demo */}

   

    


     
     
     
    </div >
  );
}