import React, { useCallback } from 'react'

import './index.scss'

interface IEvent {
  title: string;
  ['待完成']: string[];
  ['进行中']: string[];
  ['已完成']: string[];
}

interface ITaskBox {
  events: IEvent[];
  setEvents: React.Dispatch<React.SetStateAction<IEvent[]>>;
  currentEvent: IEvent;
  setCurrentEvent: React.Dispatch<React.SetStateAction<IEvent>>;
}

const TaskBox: React.FC<ITaskBox> = ({ events, setEvents, currentEvent, setCurrentEvent }) => {
  const handleRemove = useCallback(() => {
    // eslint-disable-next-line no-restricted-globals
    if(confirm!('你想删除该待办事项吗?')) {
      setEvents((prev: IEvent[]) => {
        const result = prev.filter((item) => item.title != currentEvent.title);

        if(!result.length) {
          // init the event
          const initEvent = [
            {
              title: '添加一个新待办事项',
              ['待完成']: [],
              ['进行中']: [],
              ['已完成']: [],
            },
          ];
          setEvents(initEvent);
        } else {
          setCurrentEvent(result[0]);
        }
        return result;
      })
    }
  }, [events, setEvents, currentEvent, setCurrentEvent]);

  return (
    <div className='task-box'>
      <header className='task-box-header'>
        <h1 className='task-box-title'>所有待办事项</h1>
        <button className='remove-button' onClick={handleRemove}>
          移除该待办事项
        </button>
      </header>
    </div>
  )
}

export default TaskBox;
