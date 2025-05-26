
import React from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    {
      id: 1,
      alt: "Rizal Monument in Luneta Park",
      description: "The iconic monument in Luneta Park, Manila, marking the site of Rizal's execution"
    },
    {
      id: 2,
      alt: "Rizal's childhood home in Calamba",
      description: "Reconstruction of Rizal's ancestral house in Calamba, Laguna"
    },
    {
      id: 3,
      alt: "Original manuscript page from Noli Me Tangere",
      description: "A page from the original manuscript of Noli Me Tangere with Rizal's handwriting"
    },
    {
      id: 4,
      alt: "Rizal's personal belongings",
      description: "Collection of Rizal's personal items including his spectacles, books, and medical instruments"
    },
    {
      id: 5,
      alt: "Dapitan exile site",
      description: "The place where Rizal was exiled in Dapitan from 1892 to 1896"
    },
    {
      id: 6,
      alt: "Rizal's execution at Bagumbayan",
      description: "Historical illustration depicting Rizal's execution by firing squad on December 30, 1896"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="vintage-heading text-3xl md:text-4xl font-serif text-vintage-brown mb-4">
            Historical Gallery
          </h2>
          <p className="max-w-2xl mx-auto text-lg">
            A visual journey through the life, works, and legacy of Dr. Jose Rizal.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {images.map((image) => (
            <motion.div 
              key={image.id} 
              className="gallery-item group"
              variants={item}
            >
              <div className="relative overflow-hidden">
                <img  alt={image.alt} className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1572987339176-b65c4ec9838e" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
