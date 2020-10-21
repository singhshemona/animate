import React, { useState } from 'react';
import './Shake.scss';

export const Shake = () => {
  const [value, setValue] = useState('');
  const [thanks, setThanks] = useState(false);
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const approval = (event: any) => {
    event.preventDefault();
    if (value === '') {
      setShake(true);
      setError(true);
    } else {
      setThanks(true);
      setError(false);
    }
  };

  return (
    <>
      <form onAnimationEnd={() => setShake(false)} className={'form ' + (shake ? 'shake' : null)}>
        <p>Enter some text here. If you don&apos;t, the box will be mad</p>
        <input name="generic textbox" onChange={(event) => setValue(event.target.value)} type="text" value={value} />
        <button onClick={approval}>Submit</button>
      </form>
      {thanks && <p>Thank you for completing the form!</p>}
      {error && <p className="error">Please enter something</p>}
    </>
  );
};
