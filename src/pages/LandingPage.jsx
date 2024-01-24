import React, { useState } from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import ResponsiveAppBar from '../components/NavBar/NavBar';
import Slider from '../components/Slider/Slider';
import WellnessStories from '../components/WellnessStories/WellnessStories';
import TherapeuticSection from '../components/TherapeuticSection/TherapeuticSection';
import Footer from '../components/Footer/Footer';
import FAQbanner from '../components/FAQbanner/FAQbanner';
import ContactBanner from '../components/ContactBanner/ContactBanner';
import BookNowOverlay from '../components/BookNowOverlay/BookNowOverlay';



const LandingPage = () => {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  const handleBookNowClick = () => {
    setIsBookingFormOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingFormOpen(false);
  };


  return (
    <div className="landing-page">
      <ResponsiveAppBar onBookNowClick={handleBookNowClick} />
      <HeroSection />
      {isBookingFormOpen && (
        <BookNowOverlay onClose={handleCloseBookingModal} />
      )}
      <Slider />
      <WellnessStories />
      < TherapeuticSection />
      <ContactBanner />
      <FAQbanner />
      <Footer />

    </div>
  );
};

export default LandingPage;
