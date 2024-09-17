import React from 'react';

interface IAddTaskButton {
  handleClick: () => void; // 修正类型为 () => void
}

const AddTaskButton: React.FC<IAddTaskButton> = ({ handleClick }) => {
  return (
    <div className='add-task-button' onClick={handleClick}>
      +
    </div>
  );
};

export default AddTaskButton;
