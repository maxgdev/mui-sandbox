import React from 'react';
import SnackbarsWithActions from './Snackbars/SnackbarsWithActions'
import { BrowserRouter as Router, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <SnackbarsWithActions />
       </BrowserRouter>
    </div>
  );
}

export default App;
