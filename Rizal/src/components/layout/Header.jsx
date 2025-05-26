
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Book, Feather, User, MapPin, Clock, Library, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-vintage-brown/10 hover:text-vintage-red focus:bg-vintage-brown/10 focus:text-vintage-red",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none font-serif">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-vintage-ink/80">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false); 
  }, [location]);

  const mainNavLinks = [
    { path: "/", label: "Home", icon: <Book className="w-4 h-4 mr-2" /> },
    { path: "/biography", label: "Biography", icon: <User className="w-4 h-4 mr-2" /> },
    { path: "/works", label: "Literary Works", icon: <Feather className="w-4 h-4 mr-2" /> },
    { path: "/timeline", label: "Timeline", icon: <Clock className="w-4 h-4 mr-2" /> },
    { path: "/places", label: "Historical Places", icon: <MapPin className="w-4 h-4 mr-2" /> },
  ];

  const chapterNavLinks = [
    { href: "/chapters#chapter-1", title: "Chapter 1", description: "Rizal Law & 19th Century Philippines." },
    { href: "/chapters#chapter-2", title: "Chapter 2", description: "Rizal’s Early Life & Education." },
    { href: "/chapters#chapter-3", title: "Chapter 3", description: "Exile, Trial, and Death." },
    { href: "/chapters#chapter-4", title: "Chapter 4", description: "Rizal's Annotations & Novels." },
    { href: "/chapters#chapter-5", title: "Chapter 5", description: "Significant Articles & Nationalism." },
  ];


  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-vintage-paper/95 shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-vintage-brown">
              <span className="text-vintage-red">Rizal</span> Library
            </h1>
          </motion.div>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {mainNavLinks.map((link) => (
              <NavigationMenuItem key={link.path}>
                <Link to={link.path}>
                  <NavigationMenuLink 
                    className={cn(navigationMenuTriggerStyle(), `font-serif text-sm uppercase tracking-wider transition-colors duration-300 ${
                      location.pathname === link.path
                        ? "text-vintage-red font-bold bg-vintage-brown/5"
                        : "text-vintage-ink hover:text-vintage-brown bg-transparent"
                    }`)}
                  >
                    {link.icon}
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <NavigationMenuTrigger className={cn(navigationMenuTriggerStyle(), `font-serif text-sm uppercase tracking-wider ${location.pathname === "/chapters" ? "text-vintage-red font-bold bg-vintage-brown/5" : "text-vintage-ink hover:text-vintage-brown bg-transparent"}`)}>
                <Library className="w-4 h-4 mr-2" /> Chapters
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-vintage-paper vintage-border shadow-lg">
                  {chapterNavLinks.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/contributions">
                <NavigationMenuLink 
                  className={cn(navigationMenuTriggerStyle(), `font-serif text-sm uppercase tracking-wider transition-colors duration-300 ${
                    location.pathname === "/contributions"
                      ? "text-vintage-red font-bold bg-vintage-brown/5"
                      : "text-vintage-ink hover:text-vintage-brown bg-transparent"
                  }`)}
                >
                  <Users className="w-4 h-4 mr-2" /> Contributions
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-vintage-brown" />
          ) : (
            <Menu className="h-6 w-6 text-vintage-brown" />
          )}
        </Button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-vintage-paper border-t border-vintage-brown/20"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {[...mainNavLinks, { path: "/chapters", label: "Chapters", icon: <Library className="w-4 h-4 mr-2" /> }, { path: "/contributions", label: "Contributions", icon: <Users className="w-4 h-4 mr-2" /> }].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center p-2 font-serif text-sm uppercase tracking-wider transition-colors duration-300 ${
                      location.pathname === link.path
                        ? "text-vintage-red font-bold bg-vintage-brown/10 rounded"
                        : "text-vintage-ink hover:text-vintage-brown hover:bg-vintage-brown/5 rounded"
                    }`}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
