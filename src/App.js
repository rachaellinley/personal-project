import React from 'react';
// import './App.css';

import './App.scss';
import NavBar from "./Components/Navbar/NavBar";
import routes from "./routes"

function App() {
  return (
    <div className="App">
     < NavBar/>
     {routes}
    
    </div>
  );
}

export default App;
