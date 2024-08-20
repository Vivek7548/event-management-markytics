// src/components/EventSummaryCard.js
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #65e94b;
  padding: 16px;
  margin: 8px 0;
  border-radius: 8px;
`;

const EventSummaryCard = ({ event }) => {
  return (
    <Card>
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <p>{event.city}</p>
      <p><i>{event.time}</i></p>
    </Card>
  );
};

export default EventSummaryCard;
