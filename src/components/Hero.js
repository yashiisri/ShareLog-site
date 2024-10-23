// Hero.js
import React from 'react';
import styled from 'styled-components';
import yourImage from  '../assests/image2.png';

const Hero = () => {
  return (
    <HeroSection>
      <ImageWrapper>
        <img src={yourImage} alt="Trading Edge" />
      </ImageWrapper>
      <TextWrapper>
        <h1>Find Your Trading Edge</h1>
        <p1>
          Forget trying to interpret hundreds of spreadsheets of stock trading data.<br></br> Replace those spreadsheets with our easy-to-use reports to understand<br></br> your trading behavior quickly.
        </p1>
        <h2>Find and Refine Your Trading Edge</h2>
        <p>
          We have synthesized everything you need to know into two reports.<br></br> Refine your stock trading from feedback generated reports<br></br> designed to provide quick and useful information.
        </p>
        <h2>Understand Your Numbers</h2>
        <p>
          We give you feedback in plain English.<br></br> Let our trading journal software interpret your data.
        </p>
        <h2>Get Powerful Feedback</h2>
        <p>
          Have a clear picture of your trading patterns<br></br> with customizable reports that help you understand<br></br> your unique trading edge.
        </p>
      </TextWrapper>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  display: flex;
 
  align-items: center;
  height: 80vh; /* Adjust as needed */
  background-color: rgb(134, 197, 89); /* Adjust if needed */
  padding: 2rem;
`;
const ImageWrapper = styled.div`
  flex: 1; /* Takes up half of the space */
  display: flex;
  justify-content: center; /* Center the image horizontally */
  align-items: center; /* Center the image vertically */
  
  img {
    width: 70%; /* Adjust to control the image size */
    height: auto; /* Maintain aspect ratio */
  }
`;

const TextWrapper = styled.div`
  flex: 1; /* Takes up half of the space */
  padding: 2rem;
  color: black; /* Change text color if needed */
  text-align: left; /* Align text to the left */

  h1 {
    font-size: 2rem; /* Adjusted for smaller size */
    margin-bottom: 0.5rem; /* Reduced margin for better spacing */
  }

  h2 {
    font-size: 1.5rem; /* Adjusted for smaller size */
    margin-top: 1.5rem;
   
    margin-left: 5rem; /* Add left margin to h2 */
  }

  p {
    font-size: 1rem; /* Adjusted for smaller size */
 
    margin-left: 5rem; /* Add left margin to p */
  }

  /* Ensure text wraps correctly */
  h1, h2, p {
    max-width: 100%; /* Prevents overflow */
    overflow-wrap: break-word; /* Allows breaking of long words */
  }
`;



export default Hero;
