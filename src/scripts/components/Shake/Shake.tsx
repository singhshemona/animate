import React, { useState } from 'react';
import './Shake.scss';

type Props = {
  prompt: string;
  confirmation: string;
  error: string;
};

export const Shake = ({ prompt, confirmation, error }: Props) => {
  const [value, setValue] = useState('');
  const [shake, setShake] = useState(false);
  const [submitted, setSubmitted] = useState('default');

  const approval = (event: any) => {
    event.preventDefault();
    if (value === '') {
      setShake(true);
      setSubmitted('empty');
    } else {
      setSubmitted('filled');
    }
  };

  return (
    <form className="shake-form">
      <p className="prompt">{prompt}</p>
      <div onAnimationEnd={() => setShake(false)} className={'flex ' + (shake && 'shaking')}>
        <input
          className="input"
          name="generic textbox"
          onChange={(event) => setValue(event.target.value)}
          type="text"
          value={value}
          aria-label={prompt}
        />
        <button className="submit" onClick={approval}>
          Submit
        </button>
      </div>
      {submitted === 'filled' && <p className="thanks">{confirmation}</p>}
      {submitted === 'empty' && <p className="error">{error}</p>}
    </form>
  );
};
