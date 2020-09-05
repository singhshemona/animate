import React from 'react';
import './App.scss';
import { Loading } from '../ui/Loading/Loading';

function App() {
  return (
    <div>
      <Loading outcome="success" speed="slow" />
    </div>
  );
}

export default App;
