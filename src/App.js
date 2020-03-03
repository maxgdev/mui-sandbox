import React from 'react';
import Breakpoints from './GridExamples/Breakpoints';
import BreakpointsAuto from './GridExamples/BreakpointsAuto';
import FillingSpace from './GridExamples/FillingSpace';
function App() {
  return (
    <div className="App">
      <h1>Set Breakpoints</h1>
      <Breakpoints />
      <h1>Auto Breakpoints</h1>
      <BreakpointsAuto />
      <h1>Using Justify</h1>
      <FillingSpace />
    </div>
  );
}

export default App;
