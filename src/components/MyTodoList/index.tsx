import React, { useMemo, useState, useCallback, useEffect } from 'react';
import EventBar from '../EventBar';
// import TaskBox from './TaskBox';

const App: React.FC = () => {
  const initEvent = useMemo(() => [
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

  return (
    <div className='App'>
      <EventBar
        events={events}
        setEvents={setEvents}
      />
    </div>
  );
};

export default App;
