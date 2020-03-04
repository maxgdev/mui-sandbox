import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import DrawerItemNavigation from './Drawer/DrawerItemNavigation';

function App() {
  return (
    <div className="App">
      <Router>
        <DrawerItemNavigation />
      </Router>
    </div>
  );
}

export default App;
