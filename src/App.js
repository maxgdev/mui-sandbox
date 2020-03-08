import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import LinkButtons from './Buttons/LinkButtons'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <LinkButtons />
      </BrowserRouter>
    </div>
  );
}

export default App;
