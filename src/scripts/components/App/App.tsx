import React from 'react';
import './App.scss';
import { Loading } from '../ui/Loading/Loading';
import { Progress } from '../ui/Progress/Progress';

function App() {
  return (
    <div>
      <Loading endingMsg="Data Loaded!" outcome="success" />
      <Progress endingMsg="Data Loaded!" outcome="success" />
    </div>
  );
}

export default App;
