
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import FeaturedVideos from './components/FeaturedVideos';
import Strengths from './components/Strengths';
import NewsletterCTA from './components/NewsletterCTA';
import Mission from './components/Mission';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-gray-light font-sans text-brand-gray-dark">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <FeaturedVideos />
        <Strengths />
        <NewsletterCTA />
        <Mission />
      </main>
      <Footer />
    </div>
  );
};

export default App;
