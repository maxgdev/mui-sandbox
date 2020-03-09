import React from 'react';
import UsingThemeColors from './Typography/UsingThemeColors'

function App() {
  return (
    <div className="App">
        < UsingThemeColors color='primary'/>
        < UsingThemeColors color='secondary'/>
        < UsingThemeColors color='error'/>
        < UsingThemeColors color='textSecondary'/>
    </div>
  );
}

export default App;
