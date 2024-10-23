// Home.js
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

import FooterSection from '../components/FootersSection';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FooterSection/>
      
      
      
      <Footer />
    </>
  );
};

export default Home;
