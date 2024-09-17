import React from 'react';
import AddTaskButton from './AddTaskButton';
import Task from './Task';
import { Droppable, Draggable, DraggableProvided, DroppableProvided, DraggableStateSnapshot, DroppableStateSnapshot } from 'react-beautiful-dnd';
import uuid from 'react-uuid';

interface ITask {
  name: string;
  id: string;
  details: string;
}

interface IEvent {
  title: string;
  [key: string]: any; // Assuming the columns (tags) are dynamic
}

interface IColumnProps {
  tag: string;
  currentEvent: IEvent;
  events: IEvent[];
  setEvents: React.Dispatch<React.SetStateAction<IEvent[]>>;
}

const Column: React.FC<IColumnProps> = ({ tag, currentEvent, events, setEvents }) => {
  const handleAdd = () => {
    const name = prompt('Enter task name:');
    const details = prompt('Enter details:');

    if (!(name && details)) return;

    setEvents(prev => {
      const arrCopy = [...prev];
      const index = prev.findIndex(event => event.title === currentEvent.title);
      const eventCopy = arrCopy[index];

      arrCopy.splice(index, 1, {
        ...eventCopy,
        [tag]: [
          ...eventCopy[tag],
          { name: name, id: uuid(), details: details },
        ],
      });

      return arrCopy;
    });
  };

  const handleRemove = (id: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setEvents(prev => prev.map(event => {
      if (event.title === currentEvent.title) {
        const taskList = event[tag] as ITask[];
        const index = taskList.findIndex(item => item.id === id);
        taskList.splice(index, 1);

        return { ...event, [tag]: [...taskList] };
      } else {
        return event;
      }
    }));
  };

  const handleUpdate = (id: string) => {
    const name = prompt('Update task name:');
    const details = prompt('Update details:');
    if (!(name && details)) return;
    setEvents(prev => prev.map(event => {
      if (event.title === currentEvent.title) {
        const taskList = event[tag] as ITask[];
        const index = taskList.findIndex(item => item.id === id);
        const updatedTask = {
          ...taskList[index],
          name,
          details,
        };
        taskList.splice(index, 1);
        return { ...event, [tag]: [...taskList, updatedTask] };
      } else {
        return event;
      }
    }));
  };

  return (
    <div className='column'>
      {tag}
      <AddTaskButton handleClick={handleAdd} />
      <Droppable droppableId={tag}>
        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <div
              className='task-container'
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {events
                .find(event => event.title === currentEvent.title)
                ?.[tag]?.map((item: ITask, index: number) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id}
                    index={index}
                  >
                    {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                      <Task
                        name={item.name}
                        details={item.details}
                        id={item.id}
                        provided={provided}
                        snapshot={snapshot}
                        handleRemove={handleRemove}
                        handleUpdate={handleUpdate}
                      />
                    )}
                  </Draggable>
                )
              )}
            {provided.placeholder}
          </div>)
        }
      </Droppable>
    </div>
  );
};

export default Column;
