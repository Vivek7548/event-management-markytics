import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h3`
  margin-bottom: 10px;
  color: #333;
`;

const Details = styled.p`
  color: #777;
`;

const EventSummaryCard = ({ event }) => {
  return (
    <Card>
      <Title>{event.title}</Title>
      <Details>{event.date}</Details>
      <Details>{event.city}</Details>
      <Details><i>{event.time}</i></Details>
    </Card>
  );
};

export default EventSummaryCard;
