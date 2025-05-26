import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const BiographyContent = () => {
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
            Biography of Jose Rizal
          </h1>
          <p className="max-w-3xl mx-auto text-lg">
            The life story of the Philippines' most influential hero, whose writings and advocacy 
            sparked a revolution and shaped the Filipino national identity.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="early-life" className="w-full">
            <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 bg-vintage-paper vintage-border mb-8">
              <TabsTrigger value="early-life" className="font-serif">Early Life</TabsTrigger>
              <TabsTrigger value="education" className="font-serif">Education</TabsTrigger>
              <TabsTrigger value="writings" className="font-serif">Writings</TabsTrigger>
              <TabsTrigger value="final-years" className="font-serif">Final Years</TabsTrigger>
            </TabsList>
            
            <TabsContent value="early-life" className="book-page">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3">
                    <div className="vintage-border p-2 bg-vintage-paper shadow-lg">
                      <img  alt="Young Jose Rizal in Calamba" className="w-full h-auto" src="https://userscontent2.emaze.com/images/8b1fbb02-c8cd-444a-8d39-bfc0fa9939f8/244e82f8-f552-4d7d-9ed2-2976b267dcd0.jpg" />
                      <p className="text-xs italic mt-2 text-center">Rizal's childhood home and surroundings in Calamba</p>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-serif text-vintage-brown mb-4">Childhood in Calamba</h2>
                    
                    <div className="space-y-4">
                      <p>
                        José Protasio Rizal Mercado y Alonso Realonda was born on June 19, 1861, in Calamba, Laguna, Philippines. He was the seventh child of Francisco Rizal Mercado and Teodora Alonso Realonda, both educated Filipinos belonging to distinguished families.
                      </p>
                      
                      <p>
                        From an early age, Rizal showed remarkable intellectual abilities. He learned to read and write by the age of five and grew up speaking several languages including Tagalog, Spanish, and Latin. His mother, who was highly educated for a woman of her time, was his first teacher and had a profound influence on his intellectual development.
                      </p>
                      
                      <p>
                        The young Rizal also displayed artistic talent, creating clay sculptures and drawings. He was deeply influenced by the stories his mother told him, particularly those about Filipino folklore and the abuses suffered by natives under Spanish rule.
                      </p>
                      
                      <p>
                        A pivotal moment in Rizal's childhood occurred when his mother was falsely accused of attempting to poison her sister-in-law and was imprisoned for two years. This injustice deeply affected the young Rizal and likely contributed to his later advocacy for justice and reform.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="education" className="book-page">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3">
                    <div className="vintage-border p-2 bg-vintage-paper shadow-lg">
                      <img  alt="Rizal during his academic years" className="w-full h-auto" src="https://i.pinimg.com/564x/21/cd/01/21cd01f6f1c96a17c72e99d4e6972400.jpg" />
                      <p className="text-xs italic mt-2 text-center">Representation of Rizal's academic pursuits</p>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-serif text-vintage-brown mb-4">Academic Journey</h2>
                    
                    <div className="space-y-4">
                      <p>
                        Rizal's formal education began at the Ateneo Municipal de Manila in 1872, where he excelled academically and received top marks in most subjects. He later enrolled at the University of Santo Tomas to study medicine, following his mother's wishes to become a doctor so he could treat her failing eyesight.
                      </p>
                      
                      <p>
                        In 1882, at the age of 21, Rizal traveled to Spain to continue his medical studies at the Universidad Central de Madrid. This journey marked the beginning of his extensive travels throughout Europe, where he was exposed to liberal ideas and movements that would profoundly influence his thinking.
                      </p>
                      
                      <p>
                        While in Europe, Rizal demonstrated his remarkable intellectual versatility. Beyond medicine, he studied philosophy, literature, and languages. He became fluent in at least ten languages including Spanish, French, German, English, Italian, and Dutch, in addition to his native Tagalog.
                      </p>
                      
                      <p>
                        Rizal also pursued studies in painting, sculpture, and the sciences. He attended lectures on history, geography, and anthropology, developing a holistic understanding of society and culture that would inform his later writings and advocacy.
                      </p>
                      
                      <p>
                        In 1885, after completing his medical degree, Rizal traveled to Paris to specialize in ophthalmology under the renowned Dr. Louis de Wecker. He later continued his studies in Germany, where he began writing his first novel, <em>Noli Me Tángere</em>.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="writings" className="book-page">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3">
                    <div className="vintage-border p-2 bg-vintage-paper shadow-lg">
                      <img  alt="Original cover of Noli Me Tangere" className="w-full h-auto" src="https://images.unsplash.com/photo-1434295995239-0d0f0a600db3" />
                      <p className="text-xs italic mt-2 text-center">First edition cover of Noli Me Tángere, 1887</p>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-serif text-vintage-brown mb-4">Literary Legacy</h2>
                    
                    <div className="space-y-4">
                      <p>
                        Rizal's most significant contributions to Philippine nationalism came through his writings. His two novels, <em>Noli Me Tángere</em> (Touch Me Not) published in 1887 and its sequel <em>El Filibusterismo</em> (The Subversive) published in 1891, exposed the corruption and abuses of Spanish colonial rule in the Philippines.
                      </p>
                      
                      <p>
                        <em>Noli Me Tángere</em> tells the story of Juan Crisóstomo Ibarra, who returns to the Philippines after studying in Europe and finds his homeland under the oppressive colonial regime. The novel vividly portrays the social injustices, corruption of the Spanish friars, and the colonial government's abuses.
                      </p>
                      
                      <p>
                        <em>El Filibusterismo</em> continues Ibarra's story, now transformed into the mysterious jeweler Simoun who plans a violent revolution against the Spanish authorities. The novel is darker and more pessimistic than its predecessor, reflecting Rizal's growing disillusionment with the possibility of peaceful reform.
                      </p>
                      
                      <p>
                        Beyond his novels, Rizal was a prolific writer of essays, poems, and letters. His essay "The Indolence of the Filipinos" challenged the colonial stereotype of Filipinos as lazy, arguing that any perceived indolence was the result of oppressive colonial policies rather than inherent character.
                      </p>
                      
                      <p>
                        His final poem, "Mi Último Adiós" (My Last Farewell), written on the eve of his execution, is considered a masterpiece of Philippine literature. In it, Rizal bids farewell to his country and countrymen, expressing his hope for the Philippines' future freedom.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="final-years" className="book-page">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3">
                    <div className="vintage-border p-2 bg-vintage-paper shadow-lg">
                      <img  alt="Rizal's execution at Bagumbayan" className="w-full h-auto" src="https://images.unsplash.com/photo-1578924825332-401f6a5f73be" />
                      <p className="text-xs italic mt-2 text-center">Illustration of Rizal's execution, December 30, 1896</p>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-serif text-vintage-brown mb-4">Exile and Martyrdom</h2>
                    
                    <div className="space-y-4">
                      <p>
                        In 1892, Rizal returned to the Philippines, hoping to establish a Filipino colony in Borneo where his countrymen could live free from Spanish oppression. However, he was immediately arrested by Spanish authorities who viewed him as a dangerous revolutionary due to his writings.
                      </p>
                      
                      <p>
                        Rizal was exiled to Dapitan, a remote town on the island of Mindanao, where he spent four years (1892-1896). Despite his exile, Rizal remained productive, establishing a school for boys, treating patients as a physician, engaging in scientific research, and undertaking civic projects such as a water supply system for the town.
                      </p>
                      
                      <p>
                        In 1896, with the outbreak of the Philippine Revolution led by the Katipunan, Rizal requested permission to travel to Cuba as a volunteer physician for the Spanish army, hoping to distance himself from the revolution. However, en route to Cuba, he was arrested and returned to Manila to face charges of rebellion, sedition, and conspiracy.
                      </p>
                      
                      <p>
                        After a show trial, Rizal was convicted on all charges and sentenced to death. On the morning of December 30, 1896, he was executed by firing squad at Bagumbayan (now Luneta Park) in Manila. He was 35 years old.
                      </p>
                      
                      <p>
                        Rizal's execution only served to inflame Filipino nationalism. His martyrdom galvanized the revolutionary movement, and within two years of his death, the Philippines declared its independence from Spain. Though this independence was short-lived due to American colonization, Rizal's sacrifice had planted the seeds of Filipino nationalism that would eventually lead to true independence.
                      </p>
                      
                      <p>
                        Today, Rizal is honored as the Philippines' national hero. December 30 is observed as Rizal Day, a national holiday, and numerous monuments, schools, streets, and towns throughout the country bear his name, ensuring that his legacy continues to inspire generations of Filipinos.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default BiographyContent;