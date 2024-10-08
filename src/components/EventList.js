import React, { useContext, useEffect, useState } from "react";
import { EventContext } from "../contexts/EventContext";
import { Link } from "react-router-dom";
import "./EventList.css";

const EventList = () => {
  const { events, deleteEvent, setEvents } = useContext(EventContext);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("events"));
    if (savedEvents) {
      setEvents(savedEvents);
    }
  }, [setEvents]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    const currentDate = new Date();

    if (filter === "Upcoming") {
      return eventDate >= currentDate;
    } else if (filter === "Past") {
      return eventDate < currentDate;
    }
    return true; // 'All' case
  });

  return (
    <div className="event-list">
      <h2>Event List</h2>
      <div className="filter-options">
        <button
          className={filter === "All" ? "active-filter" : ""}
          onClick={() => handleFilterChange("All")}
        >
          All
        </button>
        <button
          className={filter === "Upcoming" ? "active-filter" : ""}
          onClick={() => handleFilterChange("Upcoming")}
        >
          Upcoming
        </button>
        <button
          className={filter === "Past" ? "active-filter" : ""}
          onClick={() => handleFilterChange("Past")}
        >
          Past
        </button>
      </div>
      {filteredEvents.length === 0 ? (
        <p>No events found. Add a new event to get started!</p>
      ) : (
        <ul>
          {filteredEvents.map((event) => (
            <li key={event.id} className="event-item">
              <h4 className="event-title">{event.title}</h4>
              <div className="event-details">
                <p>Date: {event.date}</p>
                <p>Location: {event.city}</p>
                <p>Status: {event.status}</p>
              </div>
              <div className="event-buttons">
                <button
                  className="delete"
                  onClick={() => deleteEvent(event.id)}
                >
                  Delete
                </button>
                <Link to={`/edit-event/${event.id}`}>
                  <button>Edit</button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventList;
