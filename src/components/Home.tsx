import React, { useMemo, useState, useCallback, useEffect } from 'react';
import EventBar from './EventBar';
// import TaskBox from './TaskBox';

interface Event {
  title: string;
  ['To do']: string[];
  ['In progress']: string[];
  ['Completed']: string[];
}

const App: React.FC = () => {
  const initEvent: Event[] = useMemo(() => [
    {
      title: 'Add a new Event',
      ['To do']: [],
      ['In progress']: [],
      ['Completed']: [],
    },
  ], []);

  const [events, setEvents] = useState<Event[]>(() => {
    const storedEvents = localStorage.getItem('events');
    return storedEvents ? JSON.parse(storedEvents) : initEvent;
  });

  const [currentEvent, setCurrentEvent] = useState<Event>(events[0]);

  const updateEvents = useCallback(async () => {
    try {
      if (!events.length) {
        await localStorage.setItem('events', JSON.stringify(initEvent));
        setEvents(JSON.parse(localStorage.getItem('events') || '[]'));
      } else {
        await localStorage.setItem('events', JSON.stringify(events));
      }
    } catch (e) {
      console.error('Failed to modify events!', e);
    }
  }, [events, initEvent]);

  useEffect(() => {
    updateEvents();
  }, [events, updateEvents]);

  return (
    <div className='App'>
      Home
    </div>
  );
};

export default App;
