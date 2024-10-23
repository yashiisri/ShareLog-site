import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for the FAQ section
const FAQSection = styled.section`
  padding: 2rem;
  background-color: rgb(197, 252, 87);
  display: flex; /* Use flexbox for layout */
  flex-wrap: wrap; /* Allow items to wrap to the next line */
  justify-content: space-between; /* Space out the columns */
`;

const FAQHeading = styled.h2`
  text-align: center;
  width: 100%; /* Full width for heading */
  margin-bottom: 2rem;
`;

const FAQItem = styled.div`
  margin: 1rem;
  cursor: pointer; /* Change cursor to pointer for interactivity */
  border: 1px solid black; /* Black border for the question */
  border-radius: 5px;
  padding: 1rem;
  background-color: rgb(134, 197, 89); /* Background color for the question */
  display: flex;
  flex-direction: column; /* Stack question and answer vertically */
  align-items: flex-start; /* Align items to the left */
  width: 45%; /* Set width to 45% for two columns */

  &:hover {
    background-color: rgba(134, 197, 89, 0.8); /* Slightly darker on hover */
  }
`;

const Question = styled.div`
  display: flex;
  align-items: center; /* Center items vertically */
  justify-content: space-between; /* Space question and arrow */
  width: 100%; /* Full width for the question */
`;

const Answer = styled.div`
  padding: 0.5rem 1rem; /* Padding for the answer text */
  border-top: 1px solid black; /* Border between question and answer */
  display: ${props => (props.visible ? 'block' : 'none')}; /* Show or hide answer */
  width: 100%; /* Full width for the answer */
  background-color: rgb(134, 197, 89); /* Match background color */
`;

const Arrow = styled.span`
  transition: transform 0.3s ease; /* Smooth transition for the arrow */
  transform: ${props => (props.rotated ? 'rotate(180deg)' : 'rotate(0deg)')}; /* Rotate arrow */
  color: black; /* Change arrow color to black */
  margin-left: 1rem; /* Space between question and arrow */
`;

const questionsAndAnswers = [
  { question: "What assets do you cover?", answer: "Stocks, Options, Futures, Future Options, Forex, and Commodities." },
  { question: "Do You have a mobile App?", answer: "Yes, our mobile app is available for iOS and Android via the Apple App Store and Google Play Store." },
  { question: "How does the free/basic account work?", answer: "Click here to learn more about our free/basic account." },
  { question: "Can I track my account balance?", answer: "You can track account balance either by manually entering it or by importing credit/debit details." },
  { question: "Do you support option spreads?", answer: "Yes, if your broker makes that information available, we can support options spreads." },
  { question: "How secure is ShareLog?", answer: "Your trades are safely stored on the cloud with Amazon Servers." },
  { question: "Do you have tutorials?", answer: "Click on this link to view our library to help you get the most of the trading journal." },
  { question: "Do you offer refunds?", answer: "While we don’t offer a refund, we do offer a 7-day free trial to try out the platform." },
];

const Testimonials = () => {
  const [visibleAnswers, setVisibleAnswers] = useState(Array(questionsAndAnswers.length).fill(false)); // Array to track visibility of answers

  const toggleAnswer = index => {
    const updatedVisibility = [...visibleAnswers];
    updatedVisibility[index] = !updatedVisibility[index]; // Toggle visibility for the clicked question
    setVisibleAnswers(updatedVisibility);
  };

  return (
    <FAQSection id="testimonials">
      <FAQHeading>Frequently Asked Questions</FAQHeading>
      {questionsAndAnswers.map((item, index) => (
        <FAQItem key={index} onClick={() => toggleAnswer(index)}>
          <Question>
            <span>{item.question}</span>
            <Arrow rotated={visibleAnswers[index]}>&#9660;</Arrow> {/* Downward arrow */}
          </Question>
          <Answer visible={visibleAnswers[index]}>{item.answer}</Answer>
        </FAQItem>
      ))}
    </FAQSection>
  );
};

export default Testimonials;
