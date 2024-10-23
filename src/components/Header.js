import React from 'react';
import styled from 'styled-components';
import { FaApple, FaGooglePlay, FaBook, FaChartLine, FaRocket } from 'react-icons/fa'; // Import icons

import logo from '../assests/logo.png'; // Ensure the path to your logo is correct
import image from '../assests/image.png'; // Import your desired image here


const Header = () => {
  return (
    <div>
      <Nav>
        <LogoWrapper>
          <img src={logo} alt="Custom Logo" />
          <TextWrapper>
            <h1 className="title">
              <span className="share">Share</span>Log
            </h1>
            <h2 className="tagline">Make Better Mistakes</h2>
          </TextWrapper>
        </LogoWrapper>
        <NavMenu>
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Tutorials</a>
          <a href="#">Sign Up</a>
          <a href="#">Login</a>
        </NavMenu>
      </Nav>

      {/* Main content */}
      <MainContent>
        <Headline>The Trading Journal To Boost Your Performance</Headline>
        <br />
        <SubHeadline>The Best Trading Journal Software to Help You Find Your Edge</SubHeadline>
        <TryButton>TRY IT FREE FOR 7 DAYS</TryButton>
        <Footnote>*No Credit Card Required</Footnote>

        {/* Image below the footnote */}
        <ImageWrapper>
          <img src={image} alt="Promotional" />
        </ImageWrapper>

        {/* App Store and Play Store buttons */}
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
        <br></br>
        <br></br>

        {/* Watch Demo Button */}
        <WatchDemoButton>WATCH DEMO</WatchDemoButton>
        

        {/* 3 Easy Steps */}
        <SectionTitle>3 Easy Steps To Improve Your Performance</SectionTitle>
        <StepsContainer>
          <StepCard>
           
            <FaBook size={100} />
            <StepLabel>Step 1</StepLabel>
            <h3>Journal Your Trades</h3>
            <p>Journal your trades in seconds. Have peace of mind knowing your data is fully backed up and secured. The more you use your trading journal, the more ShareLog can help sharpen your trading edge.</p>
          </StepCard>
          <StepCard>
            
            <FaChartLine size={100} />
            <StepLabel>Step 2</StepLabel>
            <h3>Identify Your Patterns</h3>
            <p>Our trading journal software identifies patterns in your trading and reports them back to you. Use these patterns to determine what works and what doesn’t for you.</p>
          </StepCard>
          <StepCard>
           
            <FaRocket size={100} />
            <StepLabel>Step 3</StepLabel>
            <h3>Boost Your Performance</h3>
            <p>Most trading losses come from mistakes. Analyze your patterns, avoid mistakes, and boost your performance on your next trading day.</p>
          </StepCard>
        </StepsContainer>
      </MainContent>
    </div>
  );
};

// Styles

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgb(197, 252, 87);
  color: black;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;

  img {
    width: 50px;
    height: auto;
    margin-right: 1rem;
  }
`;

const TextWrapper = styled.div`
  color: black;

  .title {
    margin: 0;
    font-size: 1.5rem;
  }

  .share {
    color: #28a745;
  }

  .tagline {
    margin: 0;
    font-size: 1rem;
    color: black;
  }
`;

const NavMenu = styled.div`
  display: flex;
  margin-left: -2rem;

  a {
    margin-left: 1.5rem;
    color: black;
    text-decoration: none;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 5px;

    &:hover {
      color: #ff7300;
    }
  }

  a:nth-last-child(-n+2) {
    border: 2px solid black;
  }
`;

const MainContent = styled.div`
  text-align: center;
  background-color: rgb(197, 252, 87);
  padding: 2rem 0;
`;

const Headline = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: black;
`;

const SubHeadline = styled.h2`
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 1.5rem;
`;

const TryButton = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.8rem 2rem;
  background-color: green;
  color: white;
  border: 2px solid green;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    background-color: transparent;
    color: #ff7300;
  }
`;

const Footnote = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

// Image Style
const ImageWrapper = styled.div`
  margin-top: 1rem;

  img {
    width: 100%; // Keep the image big as requested
    max-width: 1200px; // Increased the max size
    height: auto;
    border-radius: 10px;
  }
`;

// Store Buttons Style
const StoreButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const AppStoreButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  padding: 0.8rem 2rem;
  background-color: black; // Change to black
  color: white;
  
   border: 2px solid white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const PlayStoreButton = styled(AppStoreButton)`
  background-color: black; // Change to black

  &:hover {
    background-color: white;
    color: black;
  }
`;

const WatchDemoButton = styled.button`
  font-size: 1.2rem;
  padding: 0.8rem 2rem;
  margin: 2rem 0;
  background-color: transparent; // Set to transparent
  color: black;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

// Section Title Style
const SectionTitle = styled.h2`
  font-size: 2rem;
  color: green; // Set to green
  margin-top: 3rem;
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  padding: 0 2rem;
`;

const StepCard = styled.div`
  background-color: black; // Set to black
  padding: 3rem 2rem; // Increased padding for vertical space
  width: 20%;
  color: white; // White text
  border: none; // No rounded corners
  text-align: left; // Align text to left
  display: flex;
  flex-direction: column;
  align-items: center; // Center content horizontally
  gap: 1.5rem; // Increased gap between items

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.52rem;
    color: green; // Set heading color to green
  }

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
  }

  svg {
    margin-bottom: 1rem;
    align-self: center; // Center icon horizontally
  }
`;

const StepLabel = styled.div`
  font-size: 1.5rem;
  color: grey; // Set Step 1, 2, 3 to grey
  margin-bottom: 1rem;
  align-self: flex-start; // Align step label to the left
`;

export default Header;
