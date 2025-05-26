
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BiographyPreview = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        <img  alt="Vintage Filipino landscape" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1643291741916-c99dd98385ed" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="vintage-heading text-3xl md:text-4xl font-serif text-vintage-brown mb-6">
              The Life of a National Hero
            </h2>
            
            <div className="space-y-4 mb-6">
              <p>
                Born on June 19, 1861, in Calamba, Laguna, José Protasio Rizal Mercado y Alonso Realonda was a Filipino nationalist, writer, and reformist whose works and advocacy played a crucial role in the Philippines' fight for independence from Spanish colonization.
              </p>
              
              <p>
                Educated in Manila and Europe, Rizal was a polymath who excelled as a physician, sculptor, painter, educator, farmer, historian, playwright, and journalist. His travels and education abroad exposed him to liberal and nationalist ideas that shaped his vision for his homeland.
              </p>
              
              <p>
                Through his novels <em>Noli Me Tángere</em> and <em>El Filibusterismo</em>, Rizal exposed the injustices of Spanish colonial rule and called for reforms. His writings inspired a nationalist movement and eventually led to his arrest and execution by Spanish authorities on December 30, 1896.
              </p>
            </div>
            
            <Link 
              to="/biography" 
              className="vintage-button inline-flex items-center"
            >
              Full Biography <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="vintage-border p-3 bg-vintage-paper -rotate-2 shadow-xl">
                <img  alt="Jose Rizal in European attire" className="w-full h-auto" src="https://www.gutenberg.org/cache/epub/73848/images/frontispiece.jpg" />
              </div>
              
              <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 rotate-12 bg-vintage-paper p-4 vintage-border shadow-lg hidden lg:block">
                <img  alt="Rizal's handwriting sample" className="w-48 h-auto" src="https://images.unsplash.com/photo-1597953162884-829e5affd25f" />
              </div>
              
              <div className="absolute -bottom-10 -left-10 bg-vintage-paper p-2 vintage-border shadow-lg rotate-6 hidden md:block">
                <div className="text-sm font-serif text-vintage-brown p-2">
                  <p className="italic">"I have recommended that we Filipinos be granted liberties..."</p>
                  <p className="text-right mt-1">— From a letter to Marcelo H. del Pilar, 1890</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BiographyPreview;
