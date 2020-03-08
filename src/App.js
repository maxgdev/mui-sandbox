import React from 'react';
import ScalingIcons from './Icons/ScalingIcons'

function App() {
  return (
    <div className="App">
      < ScalingIcons fontSize='inherit'/>
      <br />
      < ScalingIcons fontSize='default'/>
      <br />
      < ScalingIcons />
      <br />
      < ScalingIcons fontSize='small'/>
      <br />
      < ScalingIcons fontSize='large'/>
    </div>
  );
}

export default App;
