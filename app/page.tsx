"use client"
import { Button } from "@/components/ui/button";
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

            <Link href={"/app"}>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">AI</span>
                </div>
                <span className="text-2xl font-bold text-white">AdCraft Pro</span>
              </div>


            </Link>
            <Link href={"/login"}>
              <button
                className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"

              >
                <span className="relative z-10 flex items-center">
                  Sign In
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
        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-white text-sm font-medium">AI-Powered Ad Generation</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Create
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Stunning Ads
              </span>
              In Seconds
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
              Transform your product images into high-converting ad creatives with our advanced AI technology. No design skills required.
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
                  🚀 Start Creating Free
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
                🎬 Watch Demo
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
              How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Works</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Create stunning ad creatives in just three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                icon: '📸',
                title: 'Upload Your Image',
                description: 'Simply upload your product photo or choose from our stock library'
              },
              {
                step: '02',
                icon: '🎨',
                title: 'AI Magic',
                description: 'Our AI analyzes your image and generates multiple creative variations'
              },
              {
                step: '03',
                icon: '🚀',
                title: 'Download & Use',
                description: 'Download your favorite design and start running better ads immediately'
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
              Perfect for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">All Platforms</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Optimized ad sizes and formats for every social media platform
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
              Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Advanced AI</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Our cutting-edge technology understands your brand and creates stunning visuals automatically
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: '🧠',
                title: 'Computer Vision',
                description: 'AI analyzes your product images to understand context and features'
              },
              {
                icon: '🎭',
                title: 'Style Transfer',
                description: 'Apply professional design styles to your images automatically'
              },
              {
                icon: '📊',
                title: 'Performance AI',
                description: 'Machine learning optimizes creatives for maximum engagement'
              },
              {
                icon: '🔮',
                title: 'Predictive Analytics',
                description: 'AI predicts which creatives will perform best for your audience'
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
                  <span className="text-cyan-400 font-semibold">97% accuracy</span> in brand style recognition •
                  <span className="text-blue-400 font-semibold ml-2">2.8x faster</span> than manual design
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
              Perfect for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Every Business</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              From startups to enterprises, AdCraft Pro helps businesses of all sizes create better ads
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: '🛍️',
                title: 'E-commerce Stores',
                description: 'Create product-focused ads that drive sales and conversions',
                features: ['Product showcases', 'Seasonal campaigns', 'Sale announcements']
              },
              {
                icon: '📱',
                title: 'Mobile Apps',
                description: 'Generate app install ads with compelling visuals and CTAs',
                features: ['App screenshots', 'Feature highlights', 'Download prompts']
              },
              {
                icon: '🏢',
                title: 'Agencies',
                description: 'Scale your creative production for multiple clients efficiently',
                features: ['White-label options', 'Bulk generation', 'Client management']
              },
              {
                icon: '🎓',
                title: 'Education',
                description: 'Create engaging ads for courses, webinars, and educational content',
                features: ['Course promotions', 'Webinar graphics', 'Student testimonials']
              },
              {
                icon: '🏥',
                title: 'Healthcare',
                description: 'Professional medical and wellness service advertisements',
                features: ['Service promotions', 'Health awareness', 'Clinic updates']
              },
              {
                icon: '🍽️',
                title: 'Restaurants',
                description: 'Mouth-watering food visuals that drive reservations and orders',
                features: ['Food photography', 'Menu highlights', 'Special offers']
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
              View All Use Cases →
            </button>
          </div>
        </div>
      </div >

      {/* Integration Section */}
      < div className="relative py-20" >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Integrations</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Connect with your favorite tools and streamline your workflow
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
              <span className="text-white font-semibold">API Available</span>
              <span className="text-white/60 text-sm">• Custom integrations for your stack</span>
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
              Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Marketers</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              See what our customers say about their experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Sarah Chen',
                role: 'E-commerce Manager',
                company: 'TechGadgets',
                image: '👩',
                text: 'AdCraft Pro increased our CTR by 156%. The AI-generated creatives outperform our manual designs every time.',
                rating: '★★★★★'
              },
              {
                name: 'Mike Rodriguez',
                role: 'Marketing Director',
                company: 'StyleBrand',
                image: '👨',
                text: 'We saved over $5,000 in design costs last quarter. The quality is incredible and the speed is unmatched.',
                rating: '★★★★★'
              },
              {
                name: 'Emily Watson',
                role: 'Founder',
                company: 'BloomCosmetics',
                image: '👩',
                text: 'As a small business, this tool has been game-changing. Professional ads without the agency price tag.',
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
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Dripwrek?</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Everything you need to create professional ad creatives that convert
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Generate professional ad creatives in under 30 seconds with our AI technology'
              },
              {
                icon: '🎨',
                title: 'Beautiful Designs',
                description: 'Multiple style templates crafted by professional designers for maximum impact'
              },
              {
                icon: '📈',
                title: 'Proven Results',
                description: 'Optimized for higher click-through rates and better conversion performance'
              },
              {
                icon: '🔄',
                title: 'Multiple Variations',
                description: 'Generate different creative versions to test what works best for your audience'
              },
              {
                icon: '🌍',
                title: 'All Platforms',
                description: 'Perfectly sized creatives for Instagram, Facebook, TikTok, and more'
              },
              {
                icon: '💸',
                title: 'Cost Effective',
                description: 'Save thousands on design costs while getting better performing creatives'
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
              Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Pricing</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Choose the plan that works best for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '$29',
                period: '/month',
                description: 'Perfect for small businesses',
                features: ['50 AI Generations', '5 Design Templates', 'Basic Support', '1 User Account'],
                cta: 'Get Started',
                popular: false
              },
              {
                name: 'Professional',
                price: '$79',
                period: '/month',
                description: 'Best for growing teams',
                features: ['500 AI Generations', 'All Design Templates', 'Priority Support', '5 User Accounts', 'Batch Processing'],
                cta: 'Try Free for 14 Days',
                popular: true
              },
              {
                name: 'Enterprise',
                price: '$199',
                period: '/month',
                description: 'For large organizations',
                features: ['Unlimited Generations', 'All Templates + Custom', '24/7 Support', 'Unlimited Users', 'API Access', 'Custom Models'],
                cta: 'Contact Sales',
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className={`relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border transition-all duration-500 hover:transform hover:scale-105 ${plan.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-white/10'
                }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
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
                Ready to Transform Your Ads?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join thousands of marketers creating better-performing ads with AI
              </p>
              <button className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-12 py-4 rounded-2xl font-bold text-lg hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Start Free Trial Today
              </button>
              <p className="text-white/60 text-sm mt-4">No credit card required • 14-day free trial</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative py-20 bg-white/5 backdrop-blur-lg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Questions</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Everything you need to know about AdCraft Pro
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How does the AI generate ad creatives?",
                answer: "Our AI analyzes your product images, understands context, applies professional design principles, and generates multiple creative variations optimized for engagement and conversions."
              },
              {
                question: "Can I use my own brand colors and fonts?",
                answer: "Yes! AdCraft Pro allows you to set brand guidelines including colors, fonts, and logos to maintain consistent branding across all generated creatives."
              },
              {
                question: "How long does it take to generate ads?",
                answer: "Most ad creatives are generated in under 30 seconds. You'll get multiple variations to choose from instantly."
              },
              {
                question: "Do I need design experience to use this?",
                answer: "Not at all! AdCraft Pro is designed for marketers and business owners without design experience. The AI handles all the creative work for you."
              },
              {
                question: "Can I edit the generated ads?",
                answer: "Yes, you can easily customize any generated ad with our simple drag-and-drop editor or download and edit in your preferred design tool."
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
              <span className="text-white/60">Still have questions?</span>
              <button className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                Contact Support ↗
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
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-white font-bold text-xl">Dripwrek</span>
            </div>
            <div className="text-white/60 text-center">
              <p>© 2026 Dripwrek. All rights reserved.</p>
            </div>
          </div>
        </div>


      </footer>
    </div >
  );
}