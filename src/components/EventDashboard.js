import React from "react";
import styled from "styled-components";
import EventSummaryCard from "./EventSummaryCard";

const DashboardContainer = styled.div`
  padding: 20px;
`;

const SectionTitle = styled.h2`
  color: #4CAF50;
  text-align: center;
  margin-top: 40px;
`;

const EventDashboard = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Conference",
      date: "2024-09-01",
      city: "Pune",
      time: "At 5pm"
    },
  ];

  const pastEvents = [
    {
      id: 2,
      title: "Workshop",
      date: "2024-08-01",
      city: "Mumbai",
      time: "Monday"
    }
  ];

  return (
    <DashboardContainer>
      <SectionTitle>Upcoming Events</SectionTitle>
      {upcomingEvents.map((event) => (
        <EventSummaryCard key={event.id} event={event} />
      ))}

      <SectionTitle>Past Events</SectionTitle>
      {pastEvents.map((event) => (
        <EventSummaryCard key={event.id} event={event} />
      ))}
    </DashboardContainer>
  );
};

export default EventDashboard;
