import React, { useState } from 'react';
import './Accordion.scss';

type Props = {
  status: boolean;
};

export const Accordion = ({ status }: Props) => {
  const [open, isOpen] = useState(false);

  return <button className={status ? 'open' : 'close'}></button>;
};
