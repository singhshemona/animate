import React from 'react';
import './Pagination.scss';

export const Pagination = () => {
  return (
    <div>
      <div className="slides">
        <div className="card">
          <h1>Some Title</h1>
          <p>Some Text</p>
        </div>
        <div className="card">
          <h1>Some Title</h1>
          <p>Some Text</p>
        </div>
        <div className="card">
          <h1>Some Title</h1>
          <p>Some Text</p>
        </div>
        <div className="card">
          <h1>Some Title</h1>
          <p>Some Text</p>
        </div>
      </div>
      <div className="counter"></div>
    </div>
  );
};
