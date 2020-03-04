import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TabNavigationWithRoutes from './Tabs/TabNavigationWithRoutes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TabNavigationWithRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
