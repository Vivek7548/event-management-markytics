import React, { useState, useContext } from "react";
import { EventContext } from "../contexts/EventContext";
import styled from "styled-components";

// Styled components
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

const AddEvent = () => {
  const { addEvent, events } = useContext(EventContext);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [status, setStatus] = useState("Upcoming");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { id: Date.now(), title, date, city, status };
    addEvent(newEvent);

    // Save updated events to localStorage
    const updatedEvents = [...events, newEvent];
    localStorage.setItem("events", JSON.stringify(updatedEvents));

    setTitle("");
    setDate("");
    setCity("");
    setStatus("Upcoming");
  };

  // Function to automatically set status based on date
  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const currentDate = new Date();
    setDate(e.target.value);

    if (selectedDate < currentDate) {
      setStatus("Past");
    } else {
      setStatus("Upcoming");
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
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
        <Input type="date" value={date} onChange={handleDateChange} required />
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
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          disabled
        >
          <option value="Upcoming">Upcoming</option>
          <option value="Past">Past</option>
        </Select>
      </FormGroup>
      <SubmitButton type="submit">Add Event</SubmitButton>
    </FormContainer>
  );
};

export default AddEvent;
