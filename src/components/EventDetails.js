import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EventContext } from "../contexts/EventContext";
import styled, { keyframes } from "styled-components";

// Keyframes for background gradient animation for the PageWrapper
const backgroundAnimation = keyframes`
  0% {
    background-image: linear-gradient(to right, rgb(48, 48, 39), rgb(104, 8, 104));
  }
  25% {
    background-image: linear-gradient(to right, rgb(104, 8, 104), rgb(0, 172, 238));
  }
  50% {
    background-image: linear-gradient(to right, rgb(0, 172, 238), rgb(38, 115, 77));
  }
  75% {
    background-image: linear-gradient(to right, rgb(38, 115, 77), rgb(218, 57, 74));
  }
  100% {
    background-image: linear-gradient(to right, rgb(218, 57, 74), rgb(48, 48, 39));
  }
`;

// Keyframes for card background color change animation
const cardBackgroundChange = keyframes`
  0% {
    background: rgba(255, 255, 255, 0.1);
  }
  50% {
    background: rgba(255, 255, 255, 0.3);
  }
  100% {
    background: rgba(255, 255, 255, 0.1);
  }
`;

// Styled Components for Event Details Card
const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Full viewport height */
  background-image: linear-gradient(
    to right,
    rgb(48, 48, 39),
    rgb(104, 8, 104)
  );
  background-size: 400% 400%;
  animation: ${backgroundAnimation} 20s ease infinite; /* Gradient animation */
  background-attachment: fixed;
  transition: background-image 1s ease-in-out; /* Smooth transition for background */
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* Center content vertically */
  padding: 15px;
  background: rgba(109, 103, 103, 0.2); /* Initial transparent background */
  border: 1px solid orange; /* Black border */
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  max-width: 300px; /* Adjusted width */
  text-align: center;
  height: auto; /* Adjust height to fit content */
  animation: ${cardBackgroundChange} 10s ease infinite; /* Card background color animation */
  transition: background 1s ease-in-out, box-shadow 0.3s ease-in-out,
    border-color 0.3s ease-in-out; /* Smooth transitions for background, box-shadow, and border-color */

  &:hover {
    background: rgba(
      130,
      210,
      139,
      0.3
    ); /* Slightly lighter background on hover */
    border-color: greenyellow; /* Change border color on hover */
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5); /* Enhanced box shadow on hover */
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem; /* Smaller font size */
  color: black; /* Black color for title */
`;

const Detail = styled.p`
  font-size: 1rem; /* Smaller font size for details */
  margin: 8px 0;
  color: white; /* White color for details */
`;

const EventDetails = () => {
  const { id } = useParams();
  const { events } = useContext(EventContext);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const selectedEvent = events.find((event) => event.id === parseInt(id, 10));
    setEvent(selectedEvent);
  }, [id, events]);

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <PageWrapper>
      <CardContainer>
        <div>
          <Title>{event.title}</Title>
          <Detail>Date: {event.date}</Detail>
          <Detail>Location: {event.city}</Detail>
          <Detail>Status: {event.status}</Detail>
          {/* Add more details as needed */}
        </div>
      </CardContainer>
    </PageWrapper>
  );
};

export default EventDetails;
