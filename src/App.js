import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
//import { faGithub, faLinkedIn } from '@fortawesome/free-solid-svg-icons'
import HomePage from './components/homepage'
function App() {
  return (
    <div className="App">
     <HomePage/>
    </div>
  );
}
library.add(fab)

export default App;
