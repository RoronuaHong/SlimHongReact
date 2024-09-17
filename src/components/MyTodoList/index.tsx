import React, { useMemo, useState, useCallback, useEffect } from 'react';
import EventBar from '../EventBar';
import TaskBox from '../TaskBox';

import './index.scss'

interface IEvent {
  title: string;
  ['待完成']: string[];
  ['进行中']: string[];
  ['已完成']: string[];
}

const App: React.FC = () => {
  const initEvent: IEvent[] = useMemo(() => [
    {
      title: '添加一个新待办事项',
      ['待完成']: [],
      ['进行中']: [],
      ['已完成']: [],
    },
  ], []);

  const [events, setEvents] = useState(() => {
    const storedEvents = localStorage.getItem('events');
    return storedEvents ? JSON.parse(storedEvents) : initEvent;
  });

  const [currentEvent, setCurrentEvent] = useState(events[0]);

  const updateEvents = useCallback(async() => {
    try {
      if(!events.length) {
        const storedEvents = localStorage.getItem('events')!;
        await localStorage.setItem('events', JSON.stringify(initEvent));
        setEvents(JSON.parse(storedEvents));
      } else {
        await localStorage.setItem('events', JSON.stringify(events));
      }
    } catch(e) {
      console.error('Failed to modify events!');
    }
  }, [events])

  // Set localStorage
  useEffect(() => {
    updateEvents();
  }, [events]);

  return (
    <div className='App'>
      <EventBar
        events={events}
        setEvents={setEvents}
        currentEvent={currentEvent}
        setCurrentEvent={setCurrentEvent}
      />
      <TaskBox 
        events={events}
        setEvents={setEvents}
        currentEvent={currentEvent}
        setCurrentEvent={setCurrentEvent}
      />
    </div>
  );
};

export default App;
