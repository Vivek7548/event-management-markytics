// src/components/EditEvent.js

import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { EventContext } from "../contexts/EventContext";
import "./EditEvent.css"; // Import the enhanced CSS

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { events, updateEvent } = useContext(EventContext);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [status, setStatus] = useState("Upcoming");

  useEffect(() => {
    // Find the event by ID and pre-fill the form
    const eventToEdit = events.find((event) => event.id === parseInt(id));
    if (eventToEdit) {
      setTitle(eventToEdit.title);
      setDate(eventToEdit.date);
      setCity(eventToEdit.city);
      setStatus(eventToEdit.status);
    }
  }, [id, events]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEvent = { id: parseInt(id), title, date, city, status };
    updateEvent(updatedEvent);
    navigate("/events"); // Redirect to the events list after updating
  };

  return (
    <form onSubmit={handleSubmit} className="edit-event-form">
      <h2>Edit Event</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Upcoming">Upcoming</option>
          <option value="Past">Past</option>
        </select>
      </div>
      <button type="submit">Update Event</button>
    </form>
  );
};

export default EditEvent;
