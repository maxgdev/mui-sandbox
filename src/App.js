import React from 'react';
import ButtonSizes from './Buttons/ButtonSizes'

function App() {
  return (
    <div className="App">
      <ButtonSizes size='small' color='primary'/>
      <ButtonSizes size='medium' color='default' />
      <ButtonSizes size='large' color='secondary' />
    </div>
  );
}

export default App;
