import React, { useState } from 'react';
import { List } from './List';
import './Menu.scss';

export const Menu = () => {
  // const [first, setFirst] = useState(false);
  // const [second, setSecond] = useState(false);
  // const [third, setThird] = useState(false);
  // const [fourth, setFourth] = useState(false);

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

  const levelThree = ['Sprint Planning', 'Mission Statement', 'More Words'];

  return (
    <nav>
      <ul tabIndex={0} className="menu">
        {/* <li
          onKeyPress={() => setFirst((prevState) => !prevState)}
          tabIndex={0}
          onClick={() => setFirst(true)}
          onMouseLeave={() => setFirst(false)}
        >
          <span className="heading">Home</span>
          {first && (
            <ul tabIndex={0} className="level-two">
              <li tabIndex={0}>Current Projects</li>
              <li tabIndex={0}>Upcoming Visions</li>
              <li tabIndex={0}>Quarter 4 Goals</li>
            </ul>
          )}
        </li>
        <li
          onKeyPress={() => setSecond((prevState) => !prevState)}
          tabIndex={0}
          onClick={() => setSecond(true)}
          onMouseLeave={() => setSecond(false)}
        >
          <span className="heading">About Us</span>
          {second && (
            <ul tabIndex={0} className="level-two">
              <li tabIndex={0}>Current Projects</li>
              <li
                onKeyPress={() => setFourth((prevState) => !prevState)}
                tabIndex={0}
                className="level-two-heading"
                onClick={() => setFourth(true)}
                onMouseLeave={() => setFourth(false)}
              >
                Upcoming Visions
              </li>
              {fourth && (
                <ul tabIndex={0} className="level-three">
                  <li tabIndex={0}>Sprint Planning</li>
                  <li tabIndex={0}>Mission Statement</li>
                  <li tabIndex={0}>More Words</li>
                </ul>
              )}
              <li tabIndex={0}>Quarter 4 Goals</li>
            </ul>
          )}
        </li>
        <li
          onKeyPress={() => setThird((prevState) => !prevState)}
          tabIndex={0}
          onClick={() => setThird(true)}
          onMouseLeave={() => setThird(false)}
        >
          <span className="heading">Contact</span>
          {third && (
            <ul tabIndex={0} className="level-two">
              <li tabIndex={0}>Current Projects</li>
              <li tabIndex={0}>Upcoming Visions</li>
              <li tabIndex={0}>Quarter 4 Goals</li>
            </ul>
          )}
        </li> */}

        <List
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

        <List selectItem={() => updateItemSelected('about')} text={levelOne[1]} />
        <List selectItem={() => updateItemSelected('contact')} text={levelOne[2]} />
      </ul>
    </nav>
  );
};
