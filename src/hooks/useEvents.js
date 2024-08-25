import { useContext } from 'react';
import { EventContext } from '../contexts/EventContext';

const useEvents = () => {
  const { events, addEvent, updateEvent, deleteEvent } = useContext(EventContext);
  
  return { events, addEvent, editEvent: updateEvent, deleteEvent };
};

export default useEvents;
