import React from 'react';
import Breakpoints from './GridExamples/Breakpoints';
import BreakpointsAuto from './GridExamples/BreakpointsAuto';
import FillingSpace from './GridExamples/FillingSpace';
import AbstractingContainersAndItems from './GridExamples/AbstractingContainersAndItems';
import AbstractingContainersAndItemsAndProps from './GridExamples/AbstractingContainersAndItemsAndProps';
import FixedColumnLayout from './GridExamples/FixedColumnLayout';
import FixedColumnLayoutHeaderAndFooter from './GridExamples/FixedColumnLayoutHeaderAndFooter'
import ColumnDirection from './GridExamples/ColumnDirection'

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
      <h3>Abstracting Containers, Items and Props</h3>
      <AbstractingContainersAndItemsAndProps />
      <h3>Fixed Number of Columns Layout</h3>
      <FixedColumnLayout width={6} />
      <h3>Fixed Number of Columns Layout with Header and Footer</h3>
      <FixedColumnLayoutHeaderAndFooter width={6} />
      <h3>Change Column Direction</h3>
      <ColumnDirection />
    </div>
  );
}

export default App;
