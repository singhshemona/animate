import React, { useState, useRef, useEffect } from 'react';
import { List } from './List';
import './Menu.scss';

type Props = {
  levels: number;
};

export const Menu = ({ levels }: Props) => {
  // The ref, handleClick, and useEffect are to close any open menus if the
  // user clicks anywhere outside of the menu
  const ref = useRef(null);

  const handleClick = (event: any) => {
    if ((ref.current as any).contains(event.target)) {
      return;
    } else setItem('');
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const [item, setItem] = useState('');

  // this updates what menu item was selected and opens its
  // corresponding dropdown
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
    <nav ref={ref}>
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
                    // this third level menu only appears if we pass '3' to the levels prop
                    levels === 3 && (
                      <ul tabIndex={0} className="level-three">
                        <li tabIndex={0}>{levelThree[0]}</li>
                        <li tabIndex={0}>{levelThree[1]}</li>
                        <li tabIndex={0}>{levelThree[2]}</li>
                      </ul>
                    )
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
