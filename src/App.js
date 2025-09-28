import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';

import Dashboard from './Component/Dashboard/Dashboard.js';
import Header from './Component/Header/Header.js';
import CreateNewPost from './Component/CreatePost/CreateNewPost.js'
function App() {
  return (
    <div>
      <Header/>
    {/* <Dashboard/> */}
    <CreateNewPost/>
    
    </div>
  );
}

export default App;
