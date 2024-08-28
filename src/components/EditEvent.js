import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { EventContext } from "../contexts/EventContext";
import styled from "styled-components";

// Define styled components or import if defined in another file
const FormContainer = styled.form`
  background-color: transparent;
  padding: 25px;
  border: 1px solid orange;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15);
  max-width: 450px;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
    border: 1px solid white;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: white;
  font-weight: 600;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 15px;
  background-color: #fafafa;
  transition: border-color 0.3s ease, background-color 0.3s ease;

  &:focus {
    border-color: #3f51b5;
    background-color: #fff;
    outline: none;
  }
`;

const Select = styled.select`
  width: calc(100% - 0.5px);
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 15px;
  background-color: #fafafa;
  transition: border-color 0.3s ease, background-color 0.3s ease;
  pointer-events: none; /* Disable the dropdown for manual selection */

  &:focus {
    border-color: #3f51b5;
    background-color: #fff;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 12px;
  border: none;
  border-radius: 8px;
  background-color: #3f51b5;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #303f9f;
    transform: translateY(-2px);
  }
`;

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
      // Set the status based on the date
      setStatus(getStatusBasedOnDate(eventToEdit.date));
    }
  }, [id, events]);

  // Function to determine status based on the date
  const getStatusBasedOnDate = (date) => {
    const selectedDate = new Date(date);
    const currentDate = new Date();
    return selectedDate < currentDate ? "Past" : "Upcoming";
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    setStatus(getStatusBasedOnDate(selectedDate)); // Automatically update status based on date
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEvent = { id: parseInt(id), title, date, city, status };
    updateEvent(updatedEvent);
    navigate("/events"); // Redirect to the events list after updating
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Edit Event</h2>
      <FormGroup>
        <Label>Title:</Label>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>Date:</Label>
        <Input
          type="date"
          value={date}
          onChange={handleDateChange} // Update this to handle date change
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>City:</Label>
        <Input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>Status:</Label>
        <Select value={status} disabled> {/* Disable the dropdown for manual selection */}
          <option value="Upcoming">Upcoming</option>
          <option value="Past">Past</option>
        </Select>
      </FormGroup>
      <SubmitButton type="submit">Update Event</SubmitButton>
    </FormContainer>
  );
};

export default EditEvent;
