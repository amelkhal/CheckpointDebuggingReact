import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [parentState, setParentState] = useState('Initial Parent State');

  const updateParentState = (newState) => {
    setParentState(newState);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>State: {parentState}</p>
      <ChildComponent updateParentState={updateParentState} />
    </div>
  );
};

export default ParentComponent;
