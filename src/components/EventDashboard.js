import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { EventContext } from "../contexts/EventContext";
import EventSummaryCard from "./EventSummaryCard";
import styled, { keyframes } from "styled-components";

// Keyframes for animations
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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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

// Styled Components
const EventDashboardContainer = styled.div`
  padding: 20px;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(
    to right,
    rgb(48, 48, 39),
    rgb(104, 8, 104)
  );
  animation: ${backgroundAnimation} 15s ease infinite;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: black;
  padding: 10px;
  border-radius: 8px;
`;

const Section = styled.section`
  margin-bottom: 40px;
  padding: 20px;
  border-radius: 10px;
  background-color: transparent;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 2s ease-in-out;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.7);
  }
`;

const EventsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
  animation: ${fadeIn} 1s ease-in-out;
  max-width: 800px;
  margin: 0 auto;  /* Centers the EventsList container */

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    padding: 10px;  /* Adds padding around the container on small screens */
    max-width: 100%;  /* Ensures it takes full width on small screens */
  }

  @media (max-width: 320px) {
    padding: 5px;  /* Further reduces padding on very small screens */
  }
`;

const SectionHeading = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  color: #fff;
  padding: 8px;
  border-radius: 6px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const EventCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid orange;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.5s ease,
    color 0.3s ease;
  animation: ${cardBackgroundChange} 10s infinite alternate;
  height: 200px;
  width: 100%;  /* Makes sure the card takes full width on small screens */
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  margin: 10px 0;  /* Adjust margin to keep spacing consistent */

  &:hover {
    transform: scale(1.05);
    border-color: greenyellow;
    background: rgba(255, 255, 255, 0.2);
    color: black;
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.15);
  }

  &:hover * {
    color: black;
  }

  @media (max-width: 576px) {
    background-image: linear-gradient(
      to bottom right,
      rgba(255, 105, 180, 0.8),
      rgba(0, 172, 238, 0.8)
    );
    border: 1px solid #ff69b4;
    width: 100%;
    max-width: 100%;
    height: auto;
    padding: 15px;
    margin: 10px 0;  /* Ensures even margin on all sides */
  }

  @media (max-width: 320px) {
    background-image: linear-gradient(
      to bottom,
      rgba(218, 57, 74, 0.8),
      rgba(38, 115, 77, 0.8)
    );
    border: 1px solid #da394a;
    width: 100%;
    max-width: 100%;
    height: auto;
    padding: 10px;  /* Further reduces padding for extra small screens */
    margin: 5px 0;  /* Adjust margin for better spacing on very small screens */
  }
`;


const EventDashboard = () => {
  const { events } = useContext(EventContext);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    const today = new Date();
    const past = events.filter((event) => new Date(event.date) < today);
    const upcoming = events.filter((event) => new Date(event.date) >= today);

    setPastEvents(past);
    setUpcomingEvents(upcoming);
  }, [events]);

  return (
    <EventDashboardContainer>
      <Heading>Event Dashboard</Heading>

      {/* Upcoming Events Section */}
      <Section>
        <SectionHeading>Upcoming Events</SectionHeading>
        <EventsList>
          {upcomingEvents.map((event) => (
            <Link
              to={`/event-details/${event.id}`}
              key={event.id}
              style={{ textDecoration: "none" }}
            >
              <EventCard>
                <EventSummaryCard event={event} />
              </EventCard>
            </Link>
          ))}
        </EventsList>
      </Section>

      {/* Past Events Section */}
      <Section>
        <SectionHeading>Past Events</SectionHeading>
        <EventsList>
          {pastEvents.map((event) => (
            <Link
              to={`/event-details/${event.id}`}
              key={event.id}
              style={{ textDecoration: "none" }}
            >
              <EventCard>
                <EventSummaryCard event={event} />
              </EventCard>
            </Link>
          ))}
        </EventsList>
      </Section>
    </EventDashboardContainer>
  );
};

export default EventDashboard;
