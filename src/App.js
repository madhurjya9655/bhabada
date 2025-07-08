// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your existing home page components
import Header from './components/header/Header';
import About from './components/about/About';
import WorkHistory from './components/work-history/WorkHistory';
import QualificationAwards from './components/qualification-awards/QualificationAwards';
import Testimonial from './components/testimonial/Testimonial';
import SuccessStory from './components/success-story/SuccessStory';
import LatestEventsShow from './components/latest-events/LatestEventsShow';
import CallToAction from './components/call-to-action/CallToAction';
import Footer from './components/footer/Footer';

// Import new page components (create these files if they don't exist yet)
import AboutPage from './pages/AboutPage';
import AchievementsPage from './pages/AchievementsPage';
import ContactPage from './pages/ContactPage';

// Home Page Component
const HomePage = () => {
  return (
    <div>
      <Header />
      <About />
      <WorkHistory />
      <QualificationAwards />
      <Testimonial />
      <SuccessStory />
      <LatestEventsShow />
      <CallToAction />
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