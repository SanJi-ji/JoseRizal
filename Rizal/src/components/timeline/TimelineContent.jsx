
import React from "react";
import { motion } from "framer-motion";

const TimelineContent = () => {
  const timelineEvents = [
    {
      id: 1,
      year: "1861",
      date: "June 19, 1861",
      title: "Birth of Jose Rizal",
      description: "José Protasio Rizal Mercado y Alonso Realonda was born in Calamba, Laguna, Philippines to Francisco Rizal Mercado and Teodora Alonso."
    },
    {
      id: 2,
      year: "1872",
      date: "1872",
      title: "Enters Ateneo Municipal",
      description: "Rizal began his studies at the Ateneo Municipal de Manila, where he excelled academically and received top marks in most subjects."
    },
    {
      id: 3,
      year: "1877",
      date: "March 1877",
      title: "Enters University of Santo Tomas",
      description: "After graduating from Ateneo, Rizal enrolled at the University of Santo Tomas to study medicine, following his mother's wishes to become a doctor."
    },
    {
      id: 4,
      year: "1882",
      date: "May 3, 1882",
      title: "Departure for Spain",
      description: "Rizal left the Philippines to pursue medical studies at the Universidad Central de Madrid, marking the beginning of his extensive travels throughout Europe."
    },
    {
      id: 5,
      year: "1884",
      date: "June 21, 1884",
      title: "Completes Medical Degree",
      description: "Rizal completed his medical degree at the Universidad Central de Madrid, specializing in ophthalmology."
    },
    {
      id: 6,
      year: "1886",
      date: "1886",
      title: "Begins Writing Noli Me Tángere",
      description: "While in Berlin, Germany, Rizal began writing his first novel, Noli Me Tángere, which would expose the corruption of Spanish colonial rule in the Philippines."
    },
    {
      id: 7,
      year: "1887",
      date: "March 1887",
      title: "Publication of Noli Me Tángere",
      description: "Rizal's first novel was published in Berlin. The novel was revolutionary in its honest portrayal of colonial abuses, particularly those committed by Spanish friars."
    },
    {
      id: 8,
      year: "1888",
      date: "January 1888",
      title: "Return to the Philippines",
      description: "Rizal returned to the Philippines after five years in Europe, despite warnings about the danger he faced due to the controversial nature of his novel."
    },
    {
      id: 9,
      year: "1888",
      date: "July 1888",
      title: "Departure for Europe",
      description: "After only six months in the Philippines, Rizal left again for Europe due to threats to his life following the publication of Noli Me Tángere."
    },
    {
      id: 10,
      year: "1891",
      date: "September 1891",
      title: "Publication of El Filibusterismo",
      description: "Rizal's second novel, El Filibusterismo, was published in Ghent, Belgium. The novel was darker and more pessimistic than its predecessor."
    },
    {
      id: 11,
      year: "1892",
      date: "June 26, 1892",
      title: "Founds La Liga Filipina",
      description: "Upon returning to the Philippines, Rizal established La Liga Filipina, a civic organization that aimed to unite the Philippines and create mutual protection and encourage education, agriculture, and commerce."
    },
    {
      id: 12,
      year: "1892",
      date: "July 7, 1892",
      title: "Exile to Dapitan",
      description: "Rizal was arrested and exiled to Dapitan, a remote town on the island of Mindanao, where he would spend four years (1892-1896)."
    },
    {
      id: 13,
      year: "1896",
      date: "July 31, 1896",
      title: "Departure for Cuba",
      description: "Rizal was granted permission to travel to Cuba as a volunteer physician for the Spanish army, hoping to distance himself from the brewing revolution in the Philippines."
    },
    {
      id: 14,
      year: "1896",
      date: "September 30, 1896",
      title: "Arrest and Imprisonment",
      description: "En route to Cuba, Rizal was arrested and returned to Manila to face charges of rebellion, sedition, and conspiracy, despite his non-involvement in the Philippine Revolution that had broken out."
    },
    {
      id: 15,
      year: "1896",
      date: "December 30, 1896",
      title: "Execution at Bagumbayan",
      description: "After a show trial, Rizal was executed by firing squad at Bagumbayan (now Luneta Park) in Manila. His martyrdom galvanized the revolutionary movement."
    },
    {
      id: 16,
      year: "1898",
      date: "June 12, 1898",
      title: "Philippine Declaration of Independence",
      description: "Less than two years after Rizal's execution, the Philippines declared its independence from Spain, though this was short-lived due to American colonization."
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="vintage-heading text-4xl md:text-5xl font-serif text-vintage-brown mb-4">
            Timeline of Rizal's Life
          </h1>
          <p className="max-w-3xl mx-auto text-lg">
            A chronological journey through the pivotal moments that shaped Jose Rizal's life
            and his enduring legacy in Philippine history.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-vintage-gold transform md:translate-x-[-0.5px]"></div>
          
          {timelineEvents.map((event, index) => (
            <motion.div 
              key={event.id}
              className={`relative mb-12 md:mb-24 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-[50%]' : 'md:pl-12 md:ml-[50%]'
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className={`absolute top-0 ${
                index % 2 === 0 ? 'right-[-21px] md:right-[-21px]' : 'left-[-21px]'
              } md:left-auto md:right-auto md:translate-x-[-50%] md:left-[-12px] w-6 h-6 rounded-full bg-vintage-gold border-4 border-vintage-paper z-10`}></div>
              
              {/* Content box */}
              <div className={`vintage-card relative ${index % 2 === 0 ? 'ml-8 md:ml-0' : 'ml-8'}`}>
                <div className="absolute top-3 -left-3 bg-vintage-red text-vintage-paper px-3 py-1 text-sm font-serif">
                  {event.date}
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-serif font-bold text-vintage-brown mb-2">{event.title}</h3>
                  <p className="text-sm">{event.description}</p>
                  
                  {/* Special highlights for key events */}
                  {[1, 7, 10, 15].includes(event.id) && (
                    <div className="mt-4 p-3 bg-vintage-gold/10 border-l-2 border-vintage-gold">
                      <p className="text-xs italic">
                        {event.id === 1 && "This date is celebrated as Rizal Day in the Philippines, a national holiday honoring the birth of the national hero."}
                        {event.id === 7 && "Noli Me Tángere became a crucial catalyst for Philippine nationalism, awakening Filipinos to the realities of Spanish colonial rule."}
                        {event.id === 10 && "El Filibusterismo further fueled Filipino nationalism with its more radical message, exploring themes of revenge and revolution."}
                        {event.id === 15 && "December 30 is observed as Rizal Day in the Philippines, commemorating Rizal's martyrdom and his contributions to Philippine independence."}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineContent;
