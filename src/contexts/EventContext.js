import React, { createContext, useState, useEffect } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load events from localStorage on initial render
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
    setLoading(false);  // Set loading to false once data is loaded
  }, []);

  // Save events to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const updateEvent = (updatedEvent) => {
    setEvents(events.map(event => event.id === updatedEvent.id ? updatedEvent : event));
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <EventContext.Provider value={{ events, addEvent, updateEvent, deleteEvent, loading }}>
      {children}
    </EventContext.Provider>
  );
};
