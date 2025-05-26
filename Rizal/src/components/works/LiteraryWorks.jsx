
import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Book, BookOpen, FileText, Feather } from "lucide-react";

const LiteraryWorks = () => {
  const novels = [
    {
      id: "noli",
      title: "Noli Me Tángere (Touch Me Not)",
      year: "1887",
      description: "Rizal's first novel exposed the corruption of Spanish colonial rule in the Philippines. It tells the story of Juan Crisóstomo Ibarra, who returns to the Philippines after studying in Europe and finds his homeland under the oppressive colonial regime.",
      significance: "The novel was revolutionary in its honest portrayal of colonial abuses, particularly those committed by Spanish friars. It awakened Filipino national consciousness and is considered the first major artistic expression of Asian resistance to European colonialism.",
      image: "noli-me-tangere-cover"
    },
    {
      id: "fili",
      title: "El Filibusterismo (The Subversive)",
      year: "1891",
      description: "The sequel to Noli Me Tángere follows the return of Ibarra as the wealthy jeweler Simoun, who plans a violent revolution against the Spanish authorities. Darker and more pessimistic than its predecessor, it reflects Rizal's growing disillusionment with the possibility of peaceful reform.",
      significance: "El Filibusterismo further fueled Filipino nationalism and was more radical in its message. It explored themes of revenge, revolution, and redemption, questioning whether violence was justified in the pursuit of freedom.",
      image: "el-filibusterismo-cover"
    }
  ];

  const essays = [
    {
      id: "indolence",
      title: "The Indolence of the Filipinos",
      year: "1890",
      description: "This essay challenged the colonial stereotype of Filipinos as lazy, arguing that any perceived indolence was the result of oppressive colonial policies rather than inherent character.",
      significance: "It was a scientific and sociological defense of the Filipino people against Spanish prejudice, demonstrating Rizal's analytical thinking and advocacy."
    },
    {
      id: "philippines",
      title: "The Philippines A Century Hence",
      year: "1889-1890",
      description: "A series of articles where Rizal predicted the future of the Philippines in the next hundred years, including the possibility of Spain losing the colony to another power (which happened with the American occupation).",
      significance: "Demonstrated Rizal's political foresight and understanding of historical patterns and colonial dynamics."
    },
    {
      id: "blumentritt",
      title: "Letter to the Young Women of Malolos",
      year: "1889",
      description: "Written to congratulate the young women of Malolos who had petitioned to establish a night school where they could learn Spanish, against the wishes of local friars.",
      significance: "Advocated for women's education and rights, showing Rizal's progressive views on gender equality."
    }
  ];

  const poems = [
    {
      id: "adios",
      title: "Mi Último Adiós (My Last Farewell)",
      year: "1896",
      description: "Written on the eve of his execution, this poem expresses Rizal's love for his country and his hope for its future freedom.",
      significance: "Considered a masterpiece of Philippine literature, it continues to be memorized by Filipino schoolchildren and stands as a testament to Rizal's patriotism and sacrifice.",
      image: "mi-ultimo-adios-manuscript"
    },
    {
      id: "youth",
      title: "A La Juventud Filipina (To The Filipino Youth)",
      year: "1879",
      description: "Written when Rizal was only 18 years old, this poem calls on Filipino youth to use their talents for the betterment of the nation.",
      significance: "Won a poetry contest at the Liceo Artístico-Literario de Manila, marking Rizal's early literary success and his emerging nationalist sentiments."
    },
    {
      id: "flowers",
      title: "Flores de Heidelberg (Flowers of Heidelberg)",
      year: "1886",
      description: "Written during Rizal's stay in Heidelberg, Germany, this poem expresses his homesickness and love for his native land.",
      significance: "Reveals Rizal's deep attachment to the Philippines even while abroad and his poetic sensitivity."
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
            Literary Works of Jose Rizal
          </h1>
          <p className="max-w-3xl mx-auto text-lg">
            Explore the writings that ignited a revolution and shaped Filipino national identity.
            Rizal's pen proved mightier than the sword in the struggle for Philippine independence.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-serif text-vintage-brown mb-6 flex items-center">
              <Book className="mr-3 text-vintage-red" /> Novels
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {novels.map((novel) => (
                <div key={novel.id} className="vintage-card">
                  <div className="mb-4 overflow-hidden vintage-border">
                    <img  alt={`Cover of ${novel.title}`} className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1691563804798-59bcd4058f5d" />
                  </div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-serif font-bold text-vintage-brown">{novel.title}</h3>
                    <span className="text-sm font-serif bg-vintage-gold/20 text-vintage-brown px-2 py-1 rounded-sm">
                      {novel.year}
                    </span>
                  </div>
                  <p className="mb-4 text-sm">{novel.description}</p>
                  <div className="bg-vintage-paper/50 p-3 border-l-4 border-vintage-red">
                    <h4 className="font-serif font-bold mb-1 text-sm">Historical Significance:</h4>
                    <p className="text-sm italic">{novel.significance}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-serif text-vintage-brown mb-6 flex items-center">
              <FileText className="mr-3 text-vintage-blue" /> Essays and Articles
            </h2>
            
            <div className="vintage-card">
              <Accordion type="single" collapsible className="w-full">
                {essays.map((essay) => (
                  <AccordionItem key={essay.id} value={essay.id} className="border-b border-vintage-brown/20 last:border-0">
                    <AccordionTrigger className="font-serif text-vintage-brown hover:text-vintage-red">
                      <div className="flex justify-between items-center w-full pr-4">
                        <span>{essay.title}</span>
                        <span className="text-sm bg-vintage-gold/20 text-vintage-brown px-2 py-1 rounded-sm">
                          {essay.year}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm space-y-3">
                      <p>{essay.description}</p>
                      <div className="bg-vintage-paper/50 p-3 border-l-4 border-vintage-blue">
                        <h4 className="font-serif font-bold mb-1 text-sm">Historical Significance:</h4>
                        <p className="italic">{essay.significance}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-serif text-vintage-brown mb-6 flex items-center">
              <Feather className="mr-3 text-vintage-green" /> Poetry
            </h2>
            
            <div className="space-y-6">
              {poems.map((poem, index) => (
                <div key={poem.id} className="vintage-card">
                  <div className="flex flex-col md:flex-row gap-6">
                    {poem.image && (
                      <div className="md:w-1/3">
                        <div className="vintage-border overflow-hidden">
                          <img  alt={`Manuscript of ${poem.title}`} className="w-full h-auto" src="https://images.unsplash.com/photo-1685478237191-1fc67e72f9a1" />
                        </div>
                      </div>
                    )}
                    
                    <div className={poem.image ? "md:w-2/3" : "w-full"}>
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-serif font-bold text-vintage-brown">{poem.title}</h3>
                        <span className="text-sm font-serif bg-vintage-gold/20 text-vintage-brown px-2 py-1 rounded-sm">
                          {poem.year}
                        </span>
                      </div>
                      <p className="mb-4 text-sm">{poem.description}</p>
                      <div className="bg-vintage-paper/50 p-3 border-l-4 border-vintage-green">
                        <h4 className="font-serif font-bold mb-1 text-sm">Historical Significance:</h4>
                        <p className="text-sm italic">{poem.significance}</p>
                      </div>
                      
                      {poem.id === "adios" && (
                        <div className="mt-4 p-4 bg-vintage-brown/10 border-l-2 border-vintage-gold">
                          <p className="text-sm italic font-serif">
                            "Land that I love, farewell! O land the sun loves,<br />
                            Pearl in the sea of the Orient, Eden lost to your brood!<br />
                            Gaily go I to present you this faded life's best,<br />
                            And were it more brilliant, more fresh, more florid,<br />
                            Still for you would I give it, would give it for your good!"
                          </p>
                          <p className="text-right mt-2 text-xs">— From "Mi Último Adiós" (English translation)</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LiteraryWorks;
