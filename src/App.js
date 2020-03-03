import React from 'react';
import Breakpoints from './GridExamples/Breakpoints';
import BreakpointsAuto from './GridExamples/BreakpointsAuto';
import FillingSpace from './GridExamples/FillingSpace';
import AbstractingContainersAndItems from './GridExamples/AbstractingContainersAndItems';
function App() {
  return (
    <div className="App">
      <h3>Set Breakpoints</h3>
      <Breakpoints />
      <h3>Auto Breakpoints</h3>
      <BreakpointsAuto />
      <h3>Using Justify</h3>
      <FillingSpace />
      <h3>Abstracting Containers and Items</h3>
      <AbstractingContainersAndItems />
    </div>
  );
}

export default App;
