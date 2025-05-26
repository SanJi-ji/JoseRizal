
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Book, Heart, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-vintage-brown text-vintage-paper py-12 border-t-4 border-vintage-gold relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="flex items-center text-2xl font-serif font-bold mb-4">
                <Book className="mr-2" /> Rizal Library
              </span>
              <p className="text-sm mb-4">
                A digital learning portal dedicated to preserving and sharing the legacy of Dr. Jose Rizal, 
                national hero of the Philippines and a prominent advocate for reforms during the Spanish colonial era.
              </p>
              <p className="text-sm flex items-center">
                <Heart className="w-4 h-4 mr-2 text-vintage-red" /> 
                Created with appreciation for history
              </p>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-xl font-serif font-bold mb-4 block">Quick Links</span>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-sm hover:text-vintage-gold transition-colors duration-300 flex items-center">
                    <ExternalLink className="w-3 h-3 mr-2" /> Home
                  </Link>
                </li>
                <li>
                  <Link to="/biography" className="text-sm hover:text-vintage-gold transition-colors duration-300 flex items-center">
                    <ExternalLink className="w-3 h-3 mr-2" /> Biography
                  </Link>
                </li>
                <li>
                  <Link to="/works" className="text-sm hover:text-vintage-gold transition-colors duration-300 flex items-center">
                    <ExternalLink className="w-3 h-3 mr-2" /> Literary Works
                  </Link>
                </li>
                <li>
                  <Link to="/timeline" className="text-sm hover:text-vintage-gold transition-colors duration-300 flex items-center">
                    <ExternalLink className="w-3 h-3 mr-2" /> Timeline
                  </Link>
                </li>
                <li>
                  <Link to="/places" className="text-sm hover:text-vintage-gold transition-colors duration-300 flex items-center">
                    <ExternalLink className="w-3 h-3 mr-2" /> Historical Places
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="text-xl font-serif font-bold mb-4 block">Contact</span>
              <p className="text-sm mb-4">
                Have questions or suggestions about our digital library? We'd love to hear from you.
              </p>
              <a 
                href="mailto:contact@rizallibrary.com" 
                className="inline-flex items-center text-sm bg-vintage-gold text-vintage-ink px-4 py-2 rounded-sm hover:bg-vintage-paper transition-colors duration-300"
              >
                <Mail className="w-4 h-4 mr-2" /> Contact Us
              </a>
            </motion.div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-vintage-gold/30 text-center text-sm">
          <p>© {currentYear} Life and Works of Rizal Digital Library. All rights reserved.</p>
          <p className="mt-2 text-vintage-gold/70">
            "The glory of saving a country is not for him who has contributed to its ruin."
            <span className="block italic mt-1">- Dr. Jose Rizal</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
