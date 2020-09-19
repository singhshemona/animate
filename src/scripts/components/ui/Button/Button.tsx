import React, { useState } from 'react';
import './Button.scss';

export const Button = () => {
  const [click, isClicked] = useState(false);

  const toggleButton = () => {
    isClicked((click) => !click);
  };

  return (
    <button onClick={toggleButton} className={'button ' + (click ? 'pressed' : 'unpressed')}>
      {click ? 'Action is Done!' : 'Do some action'}
    </button>
  );
};
