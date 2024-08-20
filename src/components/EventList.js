// src/components/EventList.js
import React, { useState } from "react";
import EventItem from "./EventItem";

const EventList = () => {
  const [filter, setFilter] = useState("All");
  const events = [
    { 
        id: 1,
        title: "Conference", 
        date: "2024-09-01", 
        status: "Upcoming" ,
        city: "Pune",
        time: "At 5pm"
    },

    {   id: 2, 
        title: "Workshop",
        date: "2024-08-01",
        status: "Past" ,
        city: "Mumbai",
        time: "monday"
    },
    
  ];

  const filteredEvents = events.filter(
    (event) => filter === "All" || event.status === filter
  );

  return (
    <>
    <div>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Upcoming">Upcoming</option>
        <option value="Past">Past</option>
      </select>
      {filteredEvents.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
      
    </div>
    </>
  );
};

export default EventList;
