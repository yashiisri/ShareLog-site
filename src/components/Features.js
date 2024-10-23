// Hero.js
import React from 'react';
import styled from 'styled-components';
import yourImage from '../assests/journal.png';

const Feature = () => {
  return (
    <HeroSection>
      <TextWrapper>
        <h1>Smart Trades Feedback</h1>
        <p1>
          Evaluate your current and future setup performances.<br></br> Take the right direction based on your trading patterns.
        </p1>
        <h2>Simulator</h2>
        <p>
          Create various trading scenarios based on your trading <br></br>journal data, allowing you to quickly find your edge.
        </p>
        <h2>Evaluator</h2>
        <p>
          Easily evaluate how each of your strategies<br></br> performs in comparison to one another.
        </p>
      </TextWrapper>
      <ImageWrapper>
        <img src={yourImage} alt="Trading Edge" />
      </ImageWrapper>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  display: flex;
 
  align-items: center;
  height: 70vh; /* Full viewport height */
  background-color: rgb(197, 252, 87);
  padding: 2rem;
`;

const ImageWrapper = styled.div`
  flex: 1; /* Takes up half of the space */
  display: flex;
  justify-content: center; /* Center the image horizontally */
  align-items: center; /* Center the image vertically */

  img {
    width: 80%; /* Adjust image size */
    height: auto; /* Maintain aspect ratio */
  }
`;

const TextWrapper = styled.div`
  flex: 1; /* Takes up half of the space */
  padding: 1rem;
  color: black; /* Text color */
  text-align: left; /* Align text to the left */
  
  /* Shift the entire text wrapper to the right */
  padding-left: 4rem; /* Adjust this value to control the shift to the right */

  h1 {
    font-size: 2rem; /* Heading size */
    margin-bottom: 0.5rem; /* Margin below heading */
  }

  h2 {
    font-size: 1.5rem; /* Subheading size */
    margin-top: 1.5rem; /* Margin above subheading */
    margin-left: 4rem; /* Add left margin to shift h2 right relative to h1 */
  }

  p {
    font-size: 1rem; /* Paragraph size */
    margin-left: 4rem; /* No left margin */
  }

  /* Ensure text wraps correctly */
  h1, h2, p {
    max-width: 100%; /* Prevent overflow */
    overflow-wrap: break-word; /* Allow breaking of long words */
  }
`;


export default Feature;
