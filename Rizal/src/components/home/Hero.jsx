
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <img  alt="Vintage map of the Philippines from the 1800s" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544947680-bfd032ea5641" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-vintage-brown mb-6">
              The Life and Works of 
              <span className="text-vintage-red block mt-2">Dr. Jose Rizal</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-xl">
              Explore the extraordinary legacy of the Philippines' national hero, 
              whose writings and advocacy ignited a revolution and shaped a nation's identity.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/biography" 
                className="vintage-button flex items-center"
              >
                Explore Biography <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
              <Link 
                to="/works" 
                className="flex items-center px-6 py-3 border-2 border-vintage-brown text-vintage-brown rounded-sm font-serif uppercase tracking-wider text-sm transition-all duration-300 hover:bg-vintage-brown hover:text-vintage-paper"
              >
                View Literary Works <BookOpen className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="vintage-border p-2 bg-vintage-paper rotate-3 shadow-xl">
              <img  alt="Portrait of Jose Rizal" className="w-full h-auto" src="https://aboutrizal.weebly.com/uploads/9/4/3/9/9439575/1109971.jpg?307" />
              <div className="absolute -bottom-4 -right-4 bg-vintage-gold text-vintage-ink px-4 py-2 rotate-3 font-serif text-sm">
                Circa 1890
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 vintage-border p-2 bg-vintage-paper -rotate-6 shadow-xl hidden md:block">
              <img  alt="Handwritten manuscript page from Noli Me Tangere" className="w-full h-auto max-w-[200px]" src="https://images.unsplash.com/photo-1612268248551-f698e0c67ac0" />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 md:mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <blockquote className="text-xl md:text-2xl font-serif italic max-w-3xl mx-auto text-vintage-brown">
            "I die without seeing the dawn brighten over my native land. You who have it to see, welcome it and forget not those who have fallen during the night!"
            <footer className="text-base mt-4 font-normal text-vintage-ink">— Jose Rizal, <cite>Mi Último Adiós (My Last Farewell)</cite></footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
