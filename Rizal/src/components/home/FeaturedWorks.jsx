
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FeaturedWorks = () => {
  const works = [
    {
      id: 1,
      title: "Noli Me Tángere",
      year: "1887",
      description: "A social commentary on Spanish colonial rule in the Philippines, exposing the corruption of the colonial government and the Catholic Church.",
      image: "noli-me-tangere-cover",
      link: "/works/noli-me-tangere"
    },
    {
      id: 2,
      title: "El Filibusterismo",
      year: "1891",
      description: "The sequel to Noli Me Tángere, darker in tone and more revolutionary in its message, advocating for political reforms.",
      image: "el-filibusterismo-cover",
      link: "/works/el-filibusterismo"
    },
    {
      id: 3,
      title: "Mi Último Adiós",
      year: "1896",
      description: "Rizal's final poem written on the eve of his execution, expressing his love for his country and his hopes for its future.",
      image: "mi-ultimo-adios-manuscript",
      link: "/works/mi-ultimo-adios"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-16 md:py-24 bg-vintage-pattern bg-opacity-5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="vintage-heading text-3xl md:text-4xl font-serif text-vintage-brown mb-4">
            Notable Literary Works
          </h2>
          <p className="max-w-2xl mx-auto text-lg">
            Rizal's writings were instrumental in forming Filipino national identity and 
            inspiring the Philippine Revolution against Spanish colonization.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {works.map((work) => (
            <motion.div 
              key={work.id} 
              className="vintage-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              variants={item}
            >
              <div className="mb-4 overflow-hidden vintage-border">
                <img  alt={`Cover of ${work.title}`} className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1662716044311-311cc16f7009" />
              </div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-serif font-bold text-vintage-brown">{work.title}</h3>
                <span className="text-sm font-serif bg-vintage-gold/20 text-vintage-brown px-2 py-1 rounded-sm">
                  {work.year}
                </span>
              </div>
              <p className="mb-4 text-sm">{work.description}</p>
              <Link 
                to={work.link} 
                className="inline-flex items-center text-vintage-blue hover:text-vintage-red transition-colors duration-300 text-sm font-medium"
              >
                Read more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link 
            to="/works" 
            className="vintage-button inline-flex items-center"
          >
            Explore All Works <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
