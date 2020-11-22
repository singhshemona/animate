import React, { useState } from 'react';
import { List } from './List';
import './Menu.scss';

export const Menu = () => {
  // const [first, setFirst] = useState(false);
  // const [second, setSecond] = useState(false);
  // const [third, setThird] = useState(false);
  // const [fourth, setFourth] = useState(false);

  const [item, setItem] = useState('');

  // const changeItem = (event: any) => {
  //   setItem(event.target.value);
  //   console.log(item);
  // };

  const levelOne = ['Home', 'About Us', 'Contact'];

  const levelTwo = [
    ['Current Projects', 'Upcoming Visions', 'Quarter 4 Goals'],
    ['How', 'Can I Make', 'These Words Different'],
    ['Oh Wow', 'Look At This', 'Even More Words'],
  ];

  const levelThree = ['Sprint Planning', 'Mission Statement', 'More Words'];

  // const menu = {
  //   levelOne: {
  //     home: 'Home',
  //     about: 'About Us',
  //     contact: 'Contact',
  //   },
  //   levelTwo: {
  //     home: ['Current Projects', 'Upcoming Visions', 'Quarter 4 Goals'],
  //     about: ['How', 'Can I Make', 'These Words Different'],
  //     contact: ['How', 'Can I Make', 'These Words Different'],
  //   },
  //   levelThree: {
  //     home: ['Sprint Planning', 'Mission Statement', 'More Words'],
  //     about: ['How', 'Can I Make', 'These Words Different'],
  //   },
  // };

  // const menu = [
  //   {
  //     level: 'one',
  //     home: 'Home',
  //     about: 'About Us',
  //     contact: 'Contact',
  //   },
  //   {
  //     level: 'two',
  //     home: ['Current Projects', 'Upcoming Visions', 'Quarter 4 Goals'],
  //     about: ['How', 'Can I Make', 'These Words Different'],
  //     contact: ['How', 'Can I Make', 'These Words Different'],
  //   },
  //   {
  //     level: 'three',
  //     home: ['Sprint Planning', 'Mission Statement', 'More Words'],
  //     about: ['How', 'Can I Make', 'These Words Different'],
  //   },
  // ];

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

        {console.log(levelOne[2])}
        {console.log(item)}

        <List onKeyPress={() => setItem('home')} onClick={() => setItem('home')} text={levelOne[0]} />
        {item === 'home' && (
          <ul tabIndex={0} className="level-two">
            <List onKeyPress={() => setItem('projects')} onClick={() => setItem('projects')} text={levelTwo[0][0]} />
            <List onKeyPress={() => setItem('visions')} onClick={() => setItem('visions')} text={levelTwo[0][1]} />
            <List onKeyPress={() => setItem('goals')} onClick={() => setItem('goals')} text={levelTwo[0][2]} />
          </ul>
        )}
        <List onKeyPress={() => setItem('about')} onClick={() => setItem('about')} text={levelOne[1]} />
        <List onKeyPress={() => setItem('contact')} onClick={() => setItem('contact')} text={levelOne[2]} />
      </ul>
    </nav>
  );
};
