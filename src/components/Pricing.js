// Hero.js
import React from 'react';
import styled from 'styled-components';
import yourImage from '../assests/mobile.png';
import { FaApple, FaGooglePlay } from 'react-icons/fa'; // Import icons

const Hero = () => {
  return (
    <HeroSection>
      <ImageWrapper>
        <img src={yourImage} alt="Trading Edge" />
      </ImageWrapper>
      <TextWrapper>
        <h1>Journal on the Go</h1>
        <p>
          Record and review your trades with the<br />
          ShareLog App from your mobile phone.
        </p>
        
        {/* Store Buttons Section */}
        <StoreButtons>
          <AppStoreButton>
            <FaApple />
            <div>
              <span>Download on the</span><br />
              <strong>App Store</strong>
            </div>
          </AppStoreButton>
          <PlayStoreButton>
            <FaGooglePlay />
            <div>
              <span>Get it on</span><br />
              <strong>Play Store</strong>
            </div>
          </PlayStoreButton>
        </StoreButtons>
      </TextWrapper>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  height: 70vh; /* Adjust as needed */
  background-color: rgb(134, 197, 89); /* Adjust if needed */
  padding: 2rem;
`;

const ImageWrapper = styled.div`
  flex: 1; /* Takes up half of the space */
  display: flex;
  justify-content: center; /* Center the image horizontally */
  align-items: center; /* Center the image vertically */
  
  img {
    width: 80%; /* Adjust to control the image size */
    height: auto; /* Maintain aspect ratio */
  }
`;

const TextWrapper = styled.div`
  flex: 1; /* Takes up half of the space */
  padding: 2rem;
  color: black; /* Change text color if needed */
  text-align: left; /* Align text to the left */
  margin-left: 9rem;

  h1 {
    font-size: 2rem; /* Adjusted for smaller size */
    
    margin-bottom: 0.5rem; /* Reduced margin for better spacing */
  }

  p {
    font-size: 1rem; /* Adjusted for smaller size */
    margin-bottom: 1rem; /* Margin below paragraph for spacing */
  }

  /* Ensure text wraps correctly */
  h1, p {
    max-width: 100%; /* Prevents overflow */
    overflow-wrap: break-word; /* Allows breaking of long words */
  }
`;

const StoreButtons = styled.div`
  display: flex;
  flex-direction: column; /* Stack buttons vertically */
  align-items: flex-start; /* Align buttons to the left */
  gap: 1rem; /* Space between buttons */
  margin-top: 1rem; /* Space above the buttons */
  width: 40%; /* Ensure buttons take full width */
`;

const ButtonBase = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  padding: 0.8rem 1.5rem; /* Adjusted padding for better fit */
  background-color: black; /* Change to black */
  color: white;
  border: 2px solid white; /* Change border color to white */
  border-radius: 5px;
  cursor: pointer;
  width: 100%; /* Make buttons take full width */
  text-align: center; /* Center text within buttons */

  &:hover {
    background-color: white;
    color: black;
  }
`;

const AppStoreButton = styled(ButtonBase)`
  /* Specific styles for App Store button if needed */
`;

const PlayStoreButton = styled(ButtonBase)`
  /* Specific styles for Play Store button if needed */
`;

export default Hero;
