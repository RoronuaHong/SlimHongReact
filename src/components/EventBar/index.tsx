import React, { Fragment, useCallback } from 'react';
import AddEventButton from '../../widgets/AddEventButton';

// Define the shape of an event
interface Event {
  title: string;
  toDo: any[]; // Replace 'any' with specific type if possible
  inProgress: any[];
  completed: any[];
}

// Define the props type for EventBar
interface EventBarProps {
  events: Event[];
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
}

const EventBar: React.FC<EventBarProps> = ({ events, setEvents }) => {
  const handleAdd = useCallback(() => {
    const title = prompt('请输入待办事项:')!;

    if (
      events.find((event) => event.title.toLowerCase() === title.toLowerCase())
    ) {
      alert('Event Already Existed');
      return;
    }
  }, [events, setEvents])

  return (
    <div className='event-bar'>
      <h1 className='event-bar-title'>TodoList</h1>
      <Fragment>
        <AddEventButton handleClick={handleAdd} />
      </Fragment>
    </div>
  )
}

export default EventBar;
