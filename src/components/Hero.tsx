
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 animate-fade-in-up">
            <h1 className="heading-xl mb-6">
              <span className="text-gradient">Efficient, Reliable,</span> and Organized
            </h1>
            <p className="heading-md font-normal text-muted-foreground mb-8">
              Your Trusted Virtual Assistant
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              I help busy professionals and entrepreneurs reclaim their time by providing premium 
              virtual assistance services tailored to their unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                Let's Work Together
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                View Services
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur-xl opacity-70 animate-pulse-soft"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Tabitha - Virtual Assistant" 
                className="rounded-full w-64 h-64 sm:w-80 sm:h-80 object-cover border-4 border-white shadow-xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
