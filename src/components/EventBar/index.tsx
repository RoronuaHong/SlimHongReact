import React, { Fragment, useCallback } from 'react';
import AddEventButton from '../../widgets/AddEventButton';

// Define the shape of an event
interface IEvent {
  title: string;
  [key: string]: any; // Assuming the columns (tags) are dynamic
}

// Define the props type for EventBar
interface IEventBar {
  events: IEvent[];
  setEvents: React.Dispatch<React.SetStateAction<IEvent[]>>;
  currentEvent: IEvent;
  setCurrentEvent: React.Dispatch<React.SetStateAction<IEvent>>;
}

const EventBar: React.FC<IEventBar> = ({ events, setEvents, currentEvent, setCurrentEvent }) => {
  const handleAdd = useCallback(() => {
    const title = prompt('请输入待办事项:');

    if (
      events.find((event) => event?.title?.toLowerCase() === title?.toLowerCase())
    ) {
      alert('待办事项已存在');
      return;
    }
    // 添加一个新事项
    if(title) {
      setEvents((prev: IEvent[]) => [
        ...prev,
        {
          title,
          ['待完成']: [],
          ['进行中']: [],
          ['已完成']: [],
        },
      ])
    }
  }, [events, setEvents])

  console.log('currentEvent: ', currentEvent)

  return (
    <div className='event-bar'>
      <h1 className='event-bar-title'>SlimHong-TodoList</h1>
      <Fragment>
        <AddEventButton handleClick={handleAdd} />
      </Fragment>
      <div className='event-container'>
        {
          events.length > 0 ? (
            events.map((item: IEvent) => (
              <div
                key={item.title}
                className={`event over-hide ${currentEvent.title === item.title ? 'selected-event' : '' }`}
                onClick={() => setCurrentEvent(item)}
              >
                {item.title}
              </div>
            ))
          ) : (
            <p>No Events Found</p>
          )
        }
      </div>
    </div>
  )
}

export default EventBar;

