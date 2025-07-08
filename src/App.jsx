// src/App.jsx - COMPLETE WEBSITE WITH UNIFIED NAVIGATION
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import ALL your beautiful components
import NavigationBar from './components/navigation-bar'; // Use unified navigation
import Header from './components/header';
import About from './components/about';
import WorkHistory from './components/work-history';
import QualificationAwards from './components/qualification-awards';
import Testimonial from './components/testimonial';
import SuccessStory from './components/success-story';
import LatestEventsShow from './components/latest-events';
import CallToAction from './components/call-to-action';
import Footer from './components/footer';

// Import your page components
import AboutPage from './pages/AboutPage.jsx';
import AchievementsPage from './pages/AchievementsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

// Complete Professional Homepage
const HomePage = () => {
  return (
    <div className="homepage">
      {/* Professional Navigation Bar */}
      <NavigationBar />
      
      {/* Hero Section with Doctor's Photo and Credentials */}
      <Header />
      
      {/* About Section with Professional Background */}
      <About />
      
      {/* Professional Journey and Career Timeline */}
      <WorkHistory />
      
      {/* Education, Qualifications & Awards */}
      <QualificationAwards />
      
      {/* Medical Colleague Testimonials */}
      <Testimonial />
      
      {/* Patient Success Stories */}
      <SuccessStory />
      
      {/* Latest Medical Events & Conferences */}
      <LatestEventsShow />
      
      {/* Call to Action for Consultation Booking */}
      <CallToAction />
      
      {/* Footer with Complete Contact Information */}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;