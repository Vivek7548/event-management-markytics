// src/components/EventDetails.js

import React from "react";
import { useParams } from "react-router-dom";
import useEvents from "../hooks/useEvents";

const EventDetails = () => {
  const { id } = useParams();
  const { events } = useEvents();
  const event = events.find((event) => event.id === parseInt(id));

  if (!event) return <p>Event not found</p>;

  return (
    <div>
      <h2>{event.title}</h2>
      <p>Date: {event.date}</p>
      <p>Location: {event.city}</p>
      <p>Status: {event.status}</p>
    </div>
  );
};

export default EventDetails;
