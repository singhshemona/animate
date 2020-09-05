import React, { useState, useEffect } from 'react';
import './Loading.scss';

type Props = {
  outcome: string;
  speed: string;
};

export const Loading = ({ outcome, speed }: Props) => {
  const [loading, hasLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
          // just to see if data request worked
          console.log(json);
          hasLoaded(true);
        });
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        'Data Loaded!'
      ) : (
        <svg className={'spinner' + ' ' + outcome + ' ' + speed} role="alert" aria-live="assertive">
          <circle cx="40" cy="40" r="30" className="circle" />
        </svg>
      )}
    </>
  );
};
