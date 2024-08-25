// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EventDashboard from "./components/EventDashboard";
import EventList from "./components/EventList";
import AddEvent from "./components/AddEvent";
import EditEvent from "./components/EditEvent";
import "./App.css";
import EventDetails from './components/EventDetails'; 
import { EventProvider } from "./contexts/EventContext";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <EventProvider>
          <Routes>
            <Route path="/" element={<EventDashboard />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/add-event" element={<AddEvent />} />
            <Route path="/event-details/:id" element={<EventDetails />} />
            <Route path="/edit-event/:id" element={<EditEvent />} /> {/* Edit Event Route */}
          </Routes>
        </EventProvider>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
