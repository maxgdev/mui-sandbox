import React from 'react';
import ThemedIcons from './Icons/ThemedIcons'

function App() {
  return (
    <div className="App">
      < ThemedIcons theme='Filled'/>
      <br />
      < ThemedIcons theme='Outlined'/>
      <br />
      < ThemedIcons theme='Rounded'/>
      <br />
      < ThemedIcons theme='TwoTone'/>
      <br />
      < ThemedIcons theme='Sharp'/>
    </div>
  );
}

export default App;
