import React, { ReactNode, useCallback } from 'react'
import { DropResult, DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';

import './index.scss'

interface IEvent {
  title: string;
  [key: string]: any; // Assuming the columns (tags) are dynamic
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
          // init the event.
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

  const handleDragEnd = useCallback((result: DropResult) => {
    console.log(result);
    if (!result.destination) return;

    const { source, destination } = result;
    const curEvent = events.find((item) => item.title === currentEvent.title) as any;
    const taskCopy = curEvent[source.droppableId][source.index];

    setEvents((prev) =>
      prev.map((event: any) => {
        if (event.title === currentEvent.title) {
          let eventCopy = { ...event };
          // Remove from source
          const taskListSource = event[source.droppableId];
          taskListSource.splice(source.index, 1);
          eventCopy = { ...event, [source.droppableId]: taskListSource };
          // Add to destination
          const taskListDes = event[destination.droppableId];
          taskListDes.splice(destination.index, 0, taskCopy);
          eventCopy = { ...event, [destination.droppableId]: taskListDes };
          
          return eventCopy;
        } else {
          return event;
        }
      })
    );
  }, [events, setEvents, currentEvent])

  return (
    <div className='task-box'>
      <header className='task-box-header'>
        <h1 className='task-box-title'>所有待办事项</h1>
        <button className='remove-button' onClick={handleRemove}>
          移除该待办事项
        </button>
      </header>
      <DragDropContext onDragEnd={(result: DropResult) => handleDragEnd(result)}>
        <div className='task-box-body'>
        {
          ['待完成', '进行中', '已完成'].map(tag => (
            <Column
              key={tag}
              tag={tag}
              events={events}
              setEvents={setEvents}
              currentEvent={currentEvent}
            />
          ))
        }
        </div>
      </DragDropContext>
    </div>
  )
}

export default TaskBox;
