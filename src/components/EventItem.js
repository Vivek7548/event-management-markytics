import React from "react";
import styled from "styled-components";

const Item = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 8px 0;
`;

const EventItem = ({ event }) => {
  return (
    <Item>
      <h4>{event.title}</h4>
      <p>
        {event.date} - {event.status}
      </p>
      <p>{event.city} - {event.time}</p>
    </Item>
  );
};

export default EventItem;
