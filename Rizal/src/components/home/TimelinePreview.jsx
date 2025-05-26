
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const TimelinePreview = () => {
  const timelineEvents = [
    {
      id: 1,
      year: "1861",
      title: "Birth of Jose Rizal",
      description: "Born on June 19 in Calamba, Laguna, Philippines to Francisco Rizal Mercado and Teodora Alonso."
    },
    {
      id: 2,
      year: "1882",
      title: "Departure for Spain",
      description: "Left the Philippines to pursue medical studies at the Universidad Central de Madrid."
    },
    {
      id: 3,
      year: "1887",
      title: "Publication of Noli Me Tángere",
      description: "Published his first novel in Berlin, exposing the corruption of Spanish colonial rule."
    },
    {
      id: 4,
      year: "1896",
      title: "Execution at Bagumbayan",
      description: "Executed by firing squad on December 30, becoming a martyr for Philippine independence."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-vintage-brown text-vintage-paper">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4 relative inline-block">
            Key Moments in Rizal's Life
            <span className="block h-1 bg-vintage-gold mt-2 w-full"></span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg">
            Explore the pivotal events that shaped Rizal's journey from a young scholar to the national hero of the Philippines.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {timelineEvents.map((event, index) => (
            <motion.div 
              key={event.id}
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-date">{event.year}</div>
              <h3 className="text-xl font-serif font-bold mb-2">{event.title}</h3>
              <p className="text-vintage-paper/80">{event.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link 
            to="/timeline" 
            className="inline-flex items-center bg-vintage-gold text-vintage-ink px-6 py-3 rounded-sm font-serif uppercase tracking-wider text-sm transition-all duration-300 hover:bg-vintage-paper"
          >
            View Complete Timeline <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelinePreview;
