import React, { useState } from 'react';

const ChildComponent = ({ updateParentState }) => {
  const [childState, setChildState] = useState('Initial Child State');

  const handleClick = () => {
    setChildState('Updated Child State');
    updateParentState('Updated Parent State');
  };

  return (
    <div>
      <h2>Child Component</h2>
      <p>State: {childState}</p>
      <button onClick={handleClick}>Update State</button>
    </div>
  );
};

export default ChildComponent;
