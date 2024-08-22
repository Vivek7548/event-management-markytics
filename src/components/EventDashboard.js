import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for background color animation
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

// Dashboard container styling with background animation
const DashboardContainer = styled.div`
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-attachment: fixed;
  animation: ${backgroundAnimation} 15s ease infinite;
`;

// Section title styling with animation
const SectionTitle = styled.h2`
  color: white;
  text-align: center;
  font-size: 28px;
  animation: fadeIn 1s ease-in-out;
  padding: 10px 0;
`;

// Event section container styled as flexbox to arrange event boxes in rows and center them
const EventSection = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: transparent; /* Set to transparent to see background animation */
  border: 10px;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1s ease-in-out;

  display: flex;
  justify-content: center;
  gap: 20px; /* Gap between event boxes */
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px; /* Limit the width to avoid stretching too much */
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    border: 1px solid orange;
  }
`;

// Styled event summary card
const StyledEventSummaryCard = styled.div`
  background: transparent;
  border: 1px solid #ffcc00;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 10px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  width: 250px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 230px; /* Reduced height to accommodate less spacing at the bottom */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  h3 {
    color: #505651;
    font-size: 20px;
  }

  p {
    margin: 5px 0;
    font-size: 14px;
  }

  .event-title {
    color: #ffcc00;
    font-weight: bold;
  }

  .event-date,
  .event-time,
  .event-city {
    color: white;
  }
`;

// Join button styling with hover effect
const JoinButton = styled.button`
  background-color: #e54646;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 6px 8px; /* Reduced padding to decrease button size */
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px; /* Adds space above the button */
  margin-bottom: 5px; /* Reduces the space below the button */
  transition: background-color 0.3s;

  &:hover {
    background-color: blue;
  }
`;

// Check button styling with hover effect
const CheckButton = styled.button`
  background-color: #e54646;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 6px 8px; /* Reduced padding to decrease button size */
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px; /* Adds space above the button */
  margin-bottom: 5px; /* Reduces the space below the button */
  transition: background-color 0.3s;

  &:hover {
    background-color: blue;
  }
`;

const EventDashboard = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Conference",
      date: "2024-09-01",
      city: "Pune",
      time: "At 5pm",
    },
    {
      id: 2,
      title: "Meetup",
      date: "2024-09-15",
      city: "Delhi",
      time: "At 7pm",
    },
    {
      id: 3,
      title: "Hackathon",
      date: "2024-10-10",
      city: "Bangalore",
      time: "At 10am",
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Workshop",
      date: "2024-08-01",
      city: "Mumbai",
      time: "Monday",
    },
    {
      id: 5,
      title: "Seminar",
      date: "2024-07-15",
      city: "Chennai",
      time: "At 3pm",
    },
    {
      id: 6,
      title: "Webinar",
      date: "2024-07-30",
      city: "Hyderabad",
      time: "At 6pm",
    },
  ];

  return (
    <DashboardContainer>
      <EventSection>
        <SectionTitle>Upcoming Events</SectionTitle>
        {upcomingEvents.map((event) => (
          <StyledEventSummaryCard key={event.id}>
            <h3 className="event-title">{event.title}</h3>
            <p className="event-date">{event.date}</p>
            <p className="event-time">{event.time}</p>
            <p className="event-city">{event.city}</p>
            <JoinButton>Join Event</JoinButton>
          </StyledEventSummaryCard>
        ))}
      </EventSection>

      <EventSection>
        <SectionTitle>Past Events</SectionTitle>
        {pastEvents.map((event) => (
          <StyledEventSummaryCard key={event.id}>
            <h3 className="event-title">{event.title}</h3>
            <p className="event-date">{event.date}</p>
            <p className="event-time">{event.time}</p>
            <p className="event-city">{event.city}</p>
            <CheckButton>Check Event</CheckButton>
          </StyledEventSummaryCard>
        ))}
      </EventSection>
    </DashboardContainer>
  );
};

export default EventDashboard;
