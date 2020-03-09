import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import CustomizingMenuItems from './Menus/CustomizingMenuItems'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      < CustomizingMenuItems />
      </BrowserRouter>
    </div>
  );
}

export default App;
