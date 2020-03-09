import React from 'react';
import AligningText from './Typography/AligningText'

function App() {
  return (
    <div className="App">
      < AligningText verticalAlign='center' horizontalAlign='center'/>
      < AligningText verticalAlign='flex-end' horizontalAlign='flex-end'/>
    </div>
  );
}

export default App;
