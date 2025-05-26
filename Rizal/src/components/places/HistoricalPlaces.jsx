import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Info } from "lucide-react";

const HistoricalPlaces = () => {
  const places = [
    {
      id: 1,
      name: "Rizal Shrine in Calamba",
      location: "Calamba, Laguna",
      description: "A replica of Rizal's ancestral house where he was born on June 19, 1861. The two-story Spanish colonial style house has been reconstructed and now serves as a museum containing memorabilia of the Rizal family.",
      significance: "As Rizal's birthplace, this site provides insights into his early life and the influences that shaped his character and thinking.",
      image: "https://travelthroughparadise.com/images/Articles/Rizal_Shrine/Jose%20Rizal%20Shrine%207.jpg"
    },
    {
      id: 2,
      name: "Rizal Park (Luneta)",
      location: "Manila",
      description: "Formerly known as Bagumbayan, this is where Rizal was executed by firing squad on December 30, 1896. The park now features the Rizal Monument, which contains his remains and is guarded by sentries 24 hours a day.",
      significance: "The site of Rizal's martyrdom has become the Philippines' most significant public park and a symbol of national identity.",
      image: "https://t4.ftcdn.net/jpg/02/60/41/39/360_F_260413947_QRVed7fRxvjPfZhRegX5jDytjk0Y5PIL.jpg"
    },
    {
      id: 3,
      name: "Fort Santiago",
      location: "Intramuros, Manila",
      description: "A citadel built by Spanish conquistador Miguel López de Legazpi, Fort Santiago served as Rizal's prison cell before his execution. The fort now houses the Rizal Shrine museum, which includes memorabilia and a recreation of his cell.",
      significance: "In this fortress, Rizal spent his final days and wrote 'Mi Último Adiós' (My Last Farewell), his final poem.",
      image: "https://gttp.images.tshiftcdn.com/198622/x/0/fort-santiago.jpg?ar=1.91%3A1&w=1200&fit=crop"
    },
    {
      id: 4,
      name: "Rizal Shrine in Dapitan",
      location: "Dapitan City, Zamboanga del Norte",
      description: "This shrine preserves the site where Rizal was exiled from 1892 to 1896. It includes his house, clinic, and school, as well as the land he purchased and developed during his exile.",
      significance: "Despite being in exile, Rizal made significant contributions to Dapitan, establishing a school, hospital, and water system, and conducting scientific research.",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Jose_Rizal_Shrine%2C_Dapitan%2C_Zamboanga_del_Norte.JPG"
    },
    {
      id: 5,
      name: "Ateneo de Manila University",
      location: "Quezon City, Metro Manila",
      description: "Originally the Ateneo Municipal de Manila where Rizal studied from 1872 to 1877. Though the original building no longer exists, the university preserves Rizal's legacy as one of its most distinguished alumni.",
      significance: "Rizal excelled academically at the Ateneo, where he received a well-rounded Jesuit education that influenced his intellectual development.",
      image: "https://www.wheninmanila.com/wp-content/uploads/2017/02/Ateneo-Campus-Tour-6.png"
    },
    {
      id: 6,
      name: "University of Santo Tomas",
      location: "Manila",
      description: "Founded in 1611, this is the oldest university in Asia where Rizal studied medicine before continuing his education in Europe.",
      significance: "Though Rizal was critical of some aspects of his education here, UST played an important role in his academic formation and early exposure to scientific thinking.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f7/77/23/main-building-this-edifice.jpg?w=900&h=500&s=1"
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
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="vintage-heading text-4xl md:text-5xl font-serif text-vintage-brown mb-4">
            Historical Places
          </h1>
          <p className="max-w-3xl mx-auto text-lg">
            Explore the significant locations that shaped Rizal's life journey and now stand as 
            monuments to his enduring legacy in Philippine history.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {places.map((place) => (
            <motion.div 
              key={place.id} 
              className="vintage-card hover:shadow-xl transition-all duration-300"
              variants={item}
            >
              <div className="mb-4 overflow-hidden vintage-border relative">
                <img  alt={place.name} className="w-full h-64 object-cover" src={place.image} />
                <div className="absolute top-3 right-3 bg-vintage-paper text-vintage-brown px-3 py-1 rounded-sm text-sm font-serif flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> {place.location}
                </div>
              </div>
              
              <h3 className="text-xl font-serif font-bold text-vintage-brown mb-2 flex items-center">
                <Navigation className="w-5 h-5 mr-2 text-vintage-red" /> {place.name}
              </h3>
              
              <p className="mb-4 text-sm">{place.description}</p>
              
              <div className="bg-vintage-paper/50 p-3 border-l-4 border-vintage-blue flex">
                <Info className="w-5 h-5 text-vintage-blue mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold mb-1 text-sm">Historical Significance:</h4>
                  <p className="text-sm italic">{place.significance}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HistoricalPlaces;