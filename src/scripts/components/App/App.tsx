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
      {/* <Pagination numberOfItems={5} /> */}

      {/* ========== the following still need comments and stories ========== */}

      {/* stories can be layers of menu, ex. one layer dropdown menu, two layer dropdown menu */}
      {/* <Menu /> */}

      {/* for this one, see if you can make the height/width be stories, 
          ex. expanding horizontally and expanding vertically
          instead of taking up full screen, maybe put it in a container that you can set the
          height/width of and it always takes the full height/width of container */}
      <CardEnlarge />
    </>
  );
}
