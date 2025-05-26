
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HomePage from "@/pages/HomePage";
import BiographyPage from "@/pages/BiographyPage";
import WorksPage from "@/pages/WorksPage";
import TimelinePage from "@/pages/TimelinePage";
import PlacesPage from "@/pages/PlacesPage";
import ChaptersPage from "@/pages/ChaptersPage";
import ContributionsPage from "@/pages/ContributionsPage";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/biography" element={<BiographyPage />} />
            <Route path="/works" element={<WorksPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/places" element={<PlacesPage />} />
            <Route path="/chapters" element={<ChaptersPage />} />
            <Route path="/contributions" element={<ContributionsPage />} />
          </Routes>
        </div>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
};

export default App;
