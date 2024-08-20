// src/components/EventDashboard.js
import React from "react";
import EventSummaryCard from "./EventSummaryCard";

const EventDashboard = () => {
  // Dummy data for events
  const upcomingEvents = [
    {
      id: 1,
      title: "Conference",
      date: "2024-09-01",
      city: "Pune",
      time: "At 5pm"
    },
  ];
  const pastEvents = 
  [
    { 
      id: 2, 
      title: "Workshop", 
      date: "2024-08-01" ,
      city: "Mumbai",
      time: "monday"


    }
  ];

  return (
    <div>
      <h2>Upcoming Events</h2>
      {upcomingEvents.map((event) => (
        <EventSummaryCard key={event.id} event={event} />
      ))}

      <h2>Past Events</h2>
      {
        pastEvents.map((event) => (
          <EventSummaryCard key={event.id} event={event} />
        ))
      }
      
    </div>
  );
};

export default EventDashboard;
