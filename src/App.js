import React from 'react';
import './App.css';

function App() {
  // Define the Exhibit component as a nested component
  function Exhibit({ heading, children }) {
    return (
      <div className="Exhibit">
        <h2>{heading}</h2>
        <div className="Exhibit-content">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* Use the Exhibit component */}
        <Exhibit heading="Sample Exhibit">
          <p>This is the content of the exhibit.</p>
          <button>Click Me</button>
          {/* You can add more child components here */}
        </Exhibit>
      </header>
    </div>
  );
}

export default App;
