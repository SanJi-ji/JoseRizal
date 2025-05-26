
import React from "react";
import { motion } from "framer-motion";
import { Users, Award } from "lucide-react";

const contributorsData = [
  {
    groupName: "Group 1",
    members: [
      "ABEJUELA, Khyl Travis U",
      "ABELO, Marc Lawrence B",
      "ACERO, Jolly Mae None",
      "BANTUG, Reynold I",
      "CAGAS, Eric Joshua A",
      "CALUMPANG, Karl Luis A",
      "CANTRE, Jefferson D"
    ]
  },
  {
    groupName: "Group 2",
    members: [
      "CARRASCO, Lorebina C II",
      "CASTILLO, Romeo Gesta",
      "CULASTE, Ella Stephanie C",
      "CUMBA, Ivan James M",
      "DELFIN, Jc Sean G",
      "DESTURA, Jush lawrence P",
      "DOSOL, Myl",
      "EALA, Joshua Mark P"
    ]
  },
  {
    groupName: "Group 3",
    members: [
      "EBDAO, Ramon Jr. M",
      "EMEMENCI, Angelika C",
      "GALINADA, Stella Marie B",
      "GUIÑARES, Kenneth chester A",
      "GUZMAN, Karl Marcus R",
      "INDINO, Sam Henrie U",
      "JAMORA, Yashanta Maica B"
    ]
  },
  {
    groupName: "Group 4",
    members: [
      "JANDAYAN, Jun Kert Niño P",
      "LAO, Dwight Ashley P",
      "LIBRON, Rochill D",
      "LUZAGA, DANIEL REY L",
      "MACALAGUING, Teofredo L",
      "MALOLOT, Angel Mae B.",
      "MONTAÑEZ, Gabriela Shaine D"
    ]
  },
  {
    groupName: "Group 5",
    members: [
      "ORDIZ, Ralph John M.",
      "PADIOS, Bernie Boy B.",
      "PESCANTE, Abegiel L.",
      "RUBIO, Raiza",
      "SABIT, Jassel Raica A.",
      "SINTO, Chona Mae S .",
      "VALLESPIN, Justin P.",
      "VILLAPAÑA, James Ryan L ."
    ]
  }
];

const ContributionsContent = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="vintage-heading text-4xl md:text-5xl font-serif text-vintage-brown mb-4 flex items-center justify-center">
            <Award className="w-10 h-10 mr-3 text-vintage-gold" />
            Project Contributors
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            This digital library is made possible by the dedicated efforts of the following individuals.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contributorsData.map((group, index) => (
            <motion.div
              key={group.groupName}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="vintage-card p-6"
            >
              <h2 className="text-2xl font-serif text-vintage-brown mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2 text-vintage-red" />
                {group.groupName}
              </h2>
              <ul className="space-y-2">
                {group.members.map((member) => (
                  <li key={member} className="text-sm font-serif text-vintage-ink/90">
                    {member}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContributionsContent;
