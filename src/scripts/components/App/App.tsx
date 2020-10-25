import React from 'react';
import './App.scss';
import { Accordion } from '../ui/Accordion/Accordion';
import { Button } from '../ui/Button/Button';
import { CardEnlarge } from '../ui/CardEnlarge/CardEnlarge';
import { ItemSelection } from '../ui/ItemSelection/ItemSelection';
import { Loading } from '../ui/Loading/Loading';
import { Menu } from '../ui/Menu/Menu';
import { Pagination } from '../ui/Pagination/Pagination';
import { Progress } from '../ui/Progress/Progress';
import { Range } from '../ui/Range/Range';
import { Shake } from '../ui/Shake/Shake';

export default function App() {
  return (
    <>
      {/* <Accordion />
      <Button />
      <CardEnlarge />
      <ItemSelection />
      <Loading endingMsg="Data Loaded!" outcome="success" />
      <Menu /> */}
      {/* <Pagination /> still needs to get done*/}
      {/* <Progress endingMsg="Data Loaded!" outcome="success" /> */}
      {/* <Range /> */}
      <Shake />
    </>
  );
}
