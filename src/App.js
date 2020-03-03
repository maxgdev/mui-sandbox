import React from 'react';
import Breakpoints from './GridExamples/Breakpoints';
import BreakpointsAuto from './GridExamples/BreakpointsAuto';
function App() {
  return (
    <div className="App">
      <h1>Set Breakpoints</h1>
      <Breakpoints />
      <h1>Auto Breakpoints</h1>
      <BreakpointsAuto />
    </div>
  );
}

export default App;
