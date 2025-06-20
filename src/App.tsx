import React, { useEffect } from 'react';
import Header from './components/Header';
import Invitation from './components/Invitation';
import EventDetails from './components/EventDetails';
import CountdownTimer from './components/CountdownTimer';
import PhotoGallery from './components/PhotoGallery';
import RSVPForm from './components/RSVPForm';
import LocationMap from './components/LocationMap';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-up');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Invitation />
      <EventDetails />
      <CountdownTimer />
      <PhotoGallery />
      <RSVPForm />
      <LocationMap />
    </div>
  );
}

export default App;