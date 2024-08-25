import React from "react";
import styled from "styled-components";

// Styled Components
const Card = styled.div`
  background-color: transparent;
  border-radius: 8px;
  padding: 20px;
  margin: auto;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content horizontally */

  &:hover {
    transform: scale(1.02);
    background-color: transparent;
  }
`;

const Title = styled.h3`
  margin-bottom: 10px;
  color: orange;
`;

const Details = styled.p`
  color: white;
  margin: 0; /* Ensures details are centered within the card */

  &:hover {
    color: black;
  }
`;

// New styled component for the button
const DetailButton = styled.button`
  margin-top: 15px; /* Adds space above the button */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: orange;
  color: black;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  
  &:hover {
    background-color: greenyellow; /* Color change on hover */
    color: black;
    
  }

  &:focus {
    outline: none;
  }
`;

// EventSummaryCard component
const EventSummaryCard = ({ event }) => {
  return (
    <Card>
      <Title>{event.title}</Title>
      <Details>{event.date}</Details>
      <Details>{event.city}</Details>
      {/* Adding the Event Detail button */}
      <DetailButton>Event Detail</DetailButton>
    </Card>
  );
};

export default EventSummaryCard;
