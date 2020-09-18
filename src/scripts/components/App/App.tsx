import React from 'react';
import './App.scss';
// import { Loading } from '../ui/Loading/Loading';
// import { Progress } from '../ui/Progress/Progress';
// import { CardEnlarge } from '../ui/CardEnlarge/CardEnlarge';
// import { ItemSelection } from '../ui/ItemSelection/ItemSelection';
import { Accordion } from '../ui/Accordion/Accordion';

function App() {
  return (
    <div>
      {/* <Loading endingMsg='Data Loaded!' outcome='success' /> */}
      {/* <Progress endingMsg='Data Loaded!' outcome='success' /> */}
      {/* <CardEnlarge/> */}
      {/* <ItemSelection /> */}
      <Accordion />
    </div>
  );
}

export default App;
