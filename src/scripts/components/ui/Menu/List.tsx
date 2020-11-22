import React, { useState } from 'react';
import './Menu.scss';

type Props = {
  onKeyPress: () => void;
  onClick: () => void;
  text: string;
  sublist?: Element;
};

export const List = ({ onKeyPress, onClick, text, sublist }: Props) => {
  return (
    <li className="heading" tabIndex={0} onKeyPress={onKeyPress} onClick={onClick}>
      {text}
      {sublist}
    </li>
  );
};
