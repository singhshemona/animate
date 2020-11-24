import React from 'react';
import './Menu.scss';

type Props = {
  heading?: string;
  selectItem: React.ReactEventHandler;
  text: string;
  subList?: React.ReactNode;
};

export const List = ({ heading, selectItem, text, subList }: Props) => {
  return (
    <li className={heading} tabIndex={0} onKeyPress={selectItem} onClick={selectItem}>
      {text}
      {subList}
    </li>
  );
};
