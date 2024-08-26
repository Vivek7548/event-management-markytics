import React from "react";
import styled from "styled-components";

const Item = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 8px 0;
`;

const EventItem = ({ event, onDelete }) => {
  return (
    <Item>
      <h4>{event.title}</h4>
      <p>
        {event.date} - {event.city}
      </p>
      <button onClick={onDelete}>Delete</button>
    </Item>
  );
};

export default EventItem;
