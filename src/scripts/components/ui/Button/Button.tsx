import React, { useState } from 'react';
import './Button.scss';

type Props = {
  activeMessage: string;
  deactiveMessage: string;
};

export const Button = ({ activeMessage, deactiveMessage }: Props) => {
  const [click, isClicked] = useState(false);

  const toggleButton = () => {
    isClicked((click) => !click);
  };

  return (
    <div className="background-of-button">
      <button onClick={toggleButton} className={'button ' + (click ? 'pressed' : 'unpressed')}>
        {/* to understand difference between activeMessage and 
        deactiveMessage, see knobs of the button story */}
        {click ? activeMessage : deactiveMessage}
      </button>
    </div>
  );
};
