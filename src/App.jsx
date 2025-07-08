import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

// Shared site sections
import NavigationBar from './components/navigation-bar'
import Header from './components/header'
import About from './components/about'
import WorkHistory from './components/work-history'
import QualificationAwards from './components/qualification-awards'
import Testimonial from './components/testimonial'
import SuccessStory from './components/success-story'
import LatestEventsShow from './components/latest-events'
import CallToAction from './components/call-to-action'
import Footer from './components/footer'

// Page components
import AboutPage from './pages/AboutPage.jsx'
import AchievementsPage from './pages/AchievementsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

// Home page that stitches together all the sections
const HomePage = () => (
  <div className="homepage">
    <NavigationBar />
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
)

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="achievements" element={<AchievementsPage />} />
      <Route path="contact" element={<ContactPage />} />

      {/* Fallback for any unknown route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
