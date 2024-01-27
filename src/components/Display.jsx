import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {
  const user = useSelector((state) => state.user)

  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default Display;