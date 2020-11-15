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
      {/* <Accordion /> */}
      {/* <Button activeMessage="Action is Done!" deactiveMessage="Do some action" /> */}
      {/* <Loading endingMsg="Data Loaded!" outcome="success" /> */}
      {/* <Progress endingMsg="Data Loaded!" outcome="success" /> */}
      {/* <ItemSelection /> */}
      {/* <Range showValue={true} /> */}
      {/* <Shake
        prompt="Enter some text here. If you it remains empty, the form will be mad."
        confirmation="Thank you for completing the form!"
        error="Please enter something."
      /> */}

      {/* the following still need comments and stories */}

      {/* for this one, see if you can make the height/width the props of the story */}
      {/* <CardEnlarge /> */}

      <Menu />
      {/* <Pagination /> */}
    </>
  );
}
