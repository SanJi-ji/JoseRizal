
import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { BookOpen, FileText } from "lucide-react";

const chaptersData = [
  {
    id: "chapter-1",
    title: "Chapter 1: Understanding the Significance of the Rizal Law and the Philippines in the 19th Century",
    icon: <BookOpen className="mr-3 text-vintage-red" />,
    lessons: [
      {
        id: "lesson-1-1",
        title: "Rizal Law: Trials, Controversies, Significance",
        summary: "The Rizal Law (Republic Act No. 1425) mandates the inclusion of Jose Rizal's life, works, and writings in the curricula of all public and private schools, colleges, and universities. Its passage faced significant opposition, primarily from the Catholic Church, due to the anti-clerical themes in Rizal's novels. Despite controversies, the law was enacted to instill patriotism, moral character, and an understanding of Rizal's role in shaping Filipino identity. It emphasizes critical thinking about Philippine history and the importance of civic consciousness among the youth. The law's enduring significance lies in its continuous promotion of Rizal's ideals and contributions to national development."
      },
      {
        id: "lesson-1-2",
        title: "The Philippines in the 19th Century",
        summary: "The 19th century Philippines was a period of profound social, economic, and political transformation under Spanish colonial rule. Key developments included the opening of the Philippines to world trade, leading to economic growth but also exacerbating social inequalities. The rise of a Filipino educated class (ilustrados), including Rizal, fostered nationalist sentiments and calls for reform. This era saw increased abuses by Spanish authorities and friars, fueling discontent. The period was characterized by the emergence of liberal ideas, the Cavite Mutiny, and the Gomburza martyrdom, all of which significantly influenced Rizal and the burgeoning nationalist movement."
      }
    ]
  },
  {
    id: "chapter-2",
    title: "Chapter 2: Rizal’s Life: Family, Childhood, and Early Education",
    icon: <BookOpen className="mr-3 text-vintage-blue" />,
    lessons: [
      {
        id: "lesson-2-1",
        title: "The Alonso Realonda-Mercado Rizal Family",
        summary: "Jose Rizal was born into a prosperous and well-respected family in Calamba, Laguna. His parents, Francisco Mercado Rizal and Teodora Alonso Realonda, were educated and industrious, instilling in him values of hard work, discipline, and love for learning. The family was large, with Jose being the seventh of eleven children. They faced persecution from Spanish authorities, including the unjust imprisonment of Doña Teodora, which deeply impacted young Rizal. The family's experiences with colonial injustice shaped Rizal's views and fueled his desire for reform and justice for his people."
      },
      {
        id: "lesson-2-2",
        title: "Rizal’s Life: Higher Education and Life Overseas",
        summary: "Rizal pursued higher education at the Ateneo Municipal de Manila and later at the University of Santo Tomas. Seeking further knowledge, he traveled to Spain in 1882, studying medicine at the Universidad Central de Madrid. His time in Europe was transformative, exposing him to liberal ideas and allowing him to connect with other Filipino expatriates. He excelled in various fields, mastering multiple languages and engaging in intellectual pursuits. Rizal's experiences overseas, including witnessing the freedoms enjoyed in other countries, further solidified his commitment to advocating for reforms in the Philippines and exposing the abuses of the colonial regime."
      }
    ]
  },
  {
    id: "chapter-3",
    title: "Chapter 3: Rizal’s Life: Exile, Trial and Death",
    icon: <BookOpen className="mr-3 text-vintage-green" />,
    lessons: [
      {
        id: "lesson-3-1",
        title: "Exile in Dapitan",
        summary: "Upon his return to the Philippines in 1892, Rizal was arrested and exiled to Dapitan in Mindanao. During his four-year exile, he remained productive, practicing medicine, establishing a school, engaging in scientific research, and undertaking community projects. He demonstrated his practical skills and commitment to service, improving the lives of the local community. Despite his isolation, Rizal continued to correspond with scholars and family, and his time in Dapitan showcased his versatility and unwavering dedication to his country. This period also saw his relationship with Josephine Bracken blossom."
      },
      {
        id: "lesson-3-2",
        title: "Rizal’s Arrest and Trial",
        summary: "In 1896, Rizal was arrested en route to Cuba, where he had volunteered as a military doctor. He was implicated in the Philippine Revolution, which had broken out while he was in Dapitan. Accused of rebellion, sedition, and forming illegal associations, Rizal faced a biased military trial. Despite a eloquent defense, he was found guilty and sentenced to death. His trial was a mockery of justice, highlighting the Spanish colonial government's determination to silence him. Rizal's calm demeanor and intellectual defense during the trial further solidified his image as a martyr for the Filipino cause."
      }
    ]
  },
  {
    id: "chapter-4",
    title: "Chapter 4: Rizal’s Writings: Illuminating Philippine History and Society: Annotation of Antonio Morga’s Sucesos",
    icon: <FileText className="mr-3 text-vintage-gold" />,
    lessons: [
      {
        id: "lesson-4-1",
        title: "Annotation of Antonio Morga’s Sucesos de las Islas Filipinas",
        summary: "Rizal's annotation of Antonio Morga's 'Sucesos de las Islas Filipinas' (Events in the Philippine Islands) was a significant scholarly work. By republishing Morga's 17th-century account with his own extensive notes, Rizal aimed to correct Spanish misrepresentations of pre-colonial Filipino culture and society. He sought to demonstrate that Filipinos had a rich and advanced civilization before Spanish colonization, thereby refuting claims of inherent inferiority. This work was crucial in building Filipino historical consciousness and national pride, providing a historical basis for the struggle for reforms and self-determination. It highlighted the destructive impact of colonialism on Filipino identity and culture."
      },
      {
        id: "lesson-4-2",
        title: "The Noli Me Tangere",
        summary: "Noli Me Tángere (Touch Me Not), published in 1887, is Rizal's first novel and a scathing critique of Spanish colonial society in the Philippines. It vividly portrays the abuses of the friars, the corruption of government officials, and the suffering of the Filipino people. The story follows Crisostomo Ibarra, a young Filipino educated in Europe, who returns to his homeland with hopes of reform but encounters systemic oppression. The novel awakened Filipino national consciousness and exposed the injustices of the colonial regime to an international audience. It is considered a foundational work of Philippine literature and a catalyst for the nationalist movement."
      },
      {
        id: "lesson-4-3",
        title: "The El Filibusterismo",
        summary: "El Filibusterismo (The Subversive), published in 1891, is the sequel to Noli Me Tángere. This novel presents a darker and more revolutionary tone, reflecting Rizal's growing disillusionment with peaceful reform. The protagonist, Simoun (a disguised Crisostomo Ibarra), attempts to incite a violent revolution to overthrow the Spanish regime. El Filibusterismo explores themes of revenge, oppression, and the moral dilemmas of revolution. It further fueled Filipino nationalism and served as a powerful call to action, though Rizal himself advocated for education and gradual reform over violent uprising. The novel's impact was profound, contributing to the intellectual ferment that led to the Philippine Revolution."
      }
    ]
  },
  {
    id: "chapter-5",
    title: "Chapter 5: Rizal’s Writings: Illuminating Philippine History and Society: Three Significant Articles",
    icon: <FileText className="mr-3 text-vintage-purple" />,
    lessons: [
      {
        id: "lesson-5-1",
        title: "Three Significant Articles",
        summary: "Rizal penned numerous influential articles, among which 'The Indolence of the Filipinos,' 'The Philippines a Century Hence,' and 'Letter to the Young Women of Malolos' stand out. 'Indolence' refuted the Spanish stereotype of Filipino laziness, attributing it to colonial exploitation. 'Philippines a Century Hence' prophetically analyzed the future of the Philippines, predicting eventual independence or American intervention. The 'Letter to Malolos' praised the courage of women seeking education, advocating for female empowerment and enlightenment. These articles showcase Rizal's sharp intellect, patriotism, and progressive vision for his country, contributing significantly to the nationalist discourse."
      },
      {
        id: "lesson-5-2",
        title: "Jose Rizal and Philippine Nationalism: Bayani and Kabayanihan",
        summary: "Jose Rizal's life and works are central to the concept of 'Bayani' (hero) and 'Kabayanihan' (heroism) in the Philippines. He embodied the ideals of a hero not through violent warfare, but through intellectual resistance, moral courage, and profound love for his country. Rizal's writings exposed colonial injustices and awakened national consciousness, inspiring Filipinos to strive for freedom and dignity. His ultimate sacrifice transformed him into the foremost national hero, a symbol of peaceful struggle and intellectual prowess. The concept of Kabayanihan, as exemplified by Rizal, emphasizes service to the nation, critical thinking, and the pursuit of justice through enlightenment and reform."
      },
      {
        id: "lesson-5-3",
        title: "Jose Rizal and Philippine Nationalism: National Symbol",
        summary: "Jose Rizal is officially recognized as the national hero of the Philippines, and his image and ideals serve as powerful national symbols. Monuments in his honor are found throughout the country and even abroad, signifying his enduring influence. His birth and death anniversaries are commemorated, reinforcing his role in the nation's historical memory. Rizal symbolizes Filipino intelligence, resilience, and the quest for freedom and self-determination. His writings continue to be studied, promoting values of patriotism, critical thinking, and social responsibility. As a national symbol, Rizal unites Filipinos under a shared heritage of struggle and aspiration for a better future."
      }
    ]
  }
];

const ChaptersContent = () => {
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
            Chapters Overview
          </h1>
          <p className="max-w-3xl mx-auto text-lg">
            Explore the key themes and lessons about Jose Rizal's life, works, and enduring legacy.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-6">
            {chaptersData.map((chapter) => (
              <motion.div
                key={chapter.id}
                id={chapter.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <AccordionItem value={chapter.id} className="vintage-card !border-b-0">
                  <AccordionTrigger className="font-serif text-xl text-vintage-brown hover:text-vintage-red text-left">
                    <div className="flex items-center">
                      {chapter.icon}
                      {chapter.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base space-y-4 pt-4">
                    {chapter.lessons.map((lesson) => (
                      <div key={lesson.id} className="p-4 bg-vintage-paper/50 vintage-border rounded-md shadow-sm">
                        <h3 className="font-serif font-semibold text-vintage-brown mb-2">{lesson.title}</h3>
                        <p className="text-sm leading-relaxed">{lesson.summary}</p>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ChaptersContent;
