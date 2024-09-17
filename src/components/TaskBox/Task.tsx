import React from 'react';
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';

interface ITaskProps {
  name: string;
  details: string;
  id: string;
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
  handleRemove: (id: string, e: any) => void;
  handleUpdate: (id: string) => void;
}

const Task: React.FC<ITaskProps> = ({
  name,
  details,
  id,
  provided,
  snapshot,
  handleRemove,
  handleUpdate,
}) => (
  <div
    className='task'
    ref={provided.innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    onClick={() => handleUpdate(id)}
  >
    <h2 className='task-name over-hide'>{name}</h2>
    <p className='task-details'>{details}</p>
    <div className='remove-bar' onClick={(e) => handleRemove(id, e)}>
      -
    </div>
  </div>
);

export default Task;
