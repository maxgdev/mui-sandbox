import React from 'react';
import IconColorAndState from './Icons/IconColorAndState'

function App() {
  return (
    <div className="App">
      <IconColorAndState />
      <br />
      <IconColorAndState color='primary'/>
      <br />
      <IconColorAndState color='secondary'/>
      <br />
      <IconColorAndState color='error'/>
      <br />
      <IconColorAndState color='action'/>
      <br />
      <IconColorAndState color='disabled'/>
    </div>
  );
}

export default App;
