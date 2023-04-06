//DOM Events - onClick

import React from 'react';
import './style.css';

export default function App() {
  const handleShowMessage = () => {
    alert('Hello World');
  };

  return (
    <div>
      <button onClick={handleShowMessage}> Show Hello World </button>
    </div>
  );
}
