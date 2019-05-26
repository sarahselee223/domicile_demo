import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logoContainer">
          <p className="logo">Domicile</p>
        </div>
        <div className="headerItemContainer">
          <p className="phoneNumber">206.310.8101</p>
          <p className="properties">Properties</p>
          <p className="contact">Contact</p>
        </div>
      </header>
      <body className="App-body">
        <p>body</p>
      </body>
      <footer className="App-footer">
        <p>footer</p>
      </footer>
    </div>
  );
}

export default App;
