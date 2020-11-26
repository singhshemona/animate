import React from 'react';
import './App.scss';
import { Accordion } from '../components/Accordion/Accordion';
import { Button } from '../components/Button/Button';
import { CardEnlarge } from '../components/CardEnlarge/CardEnlarge';
import { ItemSelection } from '../components/ItemSelection/ItemSelection';
import { Loading } from '../components/Loading/Loading';
import { Menu } from '../components/Menu/Menu';
import { Pagination } from '../components/Pagination/Pagination';
import { Progress } from '../components/Progress/Progress';
import { Range } from '../components/Range/Range';
import { Shake } from '../components/Shake/Shake';

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
      {/* <CardEnlarge text={'some text to test'} /> */}
      {/* <Menu levels={3} /> */}
      <p>If you&apos;re only seeing this text, it&apos;s because all the components are commented out.</p>
      <p>Go to App.tsx to uncomment the component of your choice.</p>
    </>
  );
}
