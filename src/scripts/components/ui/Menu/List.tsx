import React from 'react';
import './Menu.scss';

type Props = {
  selectItem: React.ReactEventHandler;
  text: string;
  subList?: React.ReactNode;
};

export const List = ({ selectItem, text, subList }: Props) => {
  return (
    <li className="heading" tabIndex={0} onKeyPress={selectItem} onClick={selectItem}>
      {text}
      {subList}
    </li>
  );
};
