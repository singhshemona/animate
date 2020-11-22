import React, { useState } from 'react';
import { List } from './List';
import './Menu.scss';

export const Menu = () => {
  const [item, setItem] = useState('');

  const updateItemSelected = (selected: string) => {
    if (item === selected) {
      setItem('');
    } else setItem(selected);
  };

  const levelOne = ['Home', 'About Us', 'Contact'];

  const levelTwo = [
    ['Current Projects', 'Upcoming Visions', 'Quarter 4 Goals'],
    ['How', 'Can I Make', 'These Words Different'],
    ['Oh Wow', 'Look At This', 'Even More Words'],
  ];

  const levelThree = ['Sprint Planning', 'Mission Statement', 'Forward Trajectory'];

  return (
    <nav>
      <ul tabIndex={0} className="menu">
        <List
          heading="dropdown"
          selectItem={() => updateItemSelected('home')}
          text={levelOne[0]}
          subList={
            item === 'home' && (
              <ul tabIndex={0} className="level-two">
                <List selectItem={() => updateItemSelected('projects')} text={levelTwo[0][0]} />
                <List selectItem={() => updateItemSelected('visions')} text={levelTwo[0][1]} />
                <List selectItem={() => updateItemSelected('goals')} text={levelTwo[0][2]} />
              </ul>
            )
          }
        />

        <List
          heading="dropdown"
          selectItem={() => updateItemSelected('about')}
          text={levelOne[1]}
          subList={
            item === 'about' && (
              <ul tabIndex={0} className="level-two">
                <List selectItem={() => updateItemSelected('how')} text={levelTwo[1][0]} />
                <List
                  selectItem={() => updateItemSelected('can')}
                  text={levelTwo[1][1]}
                  subList={
                    <ul tabIndex={0} className="level-three">
                      <li>{levelThree[0]}</li>
                      <li>{levelThree[1]}</li>
                      <li>{levelThree[2]}</li>
                    </ul>
                  }
                />
                <List selectItem={() => updateItemSelected('words')} text={levelTwo[1][2]} />
              </ul>
            )
          }
        />

        <List
          heading="dropdown"
          selectItem={() => updateItemSelected('contact')}
          text={levelOne[2]}
          subList={
            item === 'contact' && (
              <ul tabIndex={0} className="level-two">
                <List selectItem={() => updateItemSelected('wow')} text={levelTwo[2][0]} />
                <List selectItem={() => updateItemSelected('look')} text={levelTwo[2][1]} />
                <List selectItem={() => updateItemSelected('more')} text={levelTwo[2][2]} />
              </ul>
            )
          }
        />
      </ul>
    </nav>
  );
};
