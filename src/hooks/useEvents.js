// src/hooks/useEvents.js

import { useState } from 'react';

const useEvents = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Conference", date: "2024-09-01", city: "Pune", status: "Upcoming" },
    { id: 2, title: "Workshop", date: "2024-08-01", city: "Mumbai", status: "Past" }
  ]);

  const addEvent = (event) => {
    setEvents([...events, event]); // Add the new event to the state
  };

  const editEvent = (id, updatedEvent) => {
    setEvents(events.map(event => event.id === id ? updatedEvent : event));
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return { events, addEvent, editEvent, deleteEvent };
};

export default useEvents;
