import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';

import Dashboard from './Component/Dashboard/Dashboard.js';
import Header from './Component/Header/Header.js';
import CreateNewPost from './Component/CreatePost/CreateNewPost.js'
=======
import Header from './Component/Header/Header';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import Dashboard from './Component/Dashboard/Dashboard';
import Blogs from './Component/Blogs/Blogs';
<<<<<<< HEAD
import { BrowserRouter as  Router, Routes,Route } from 'react-router-dom';
=======
>>>>>>> a0c7d3a59735d6ad435b61d6d9052ea26406e722
>>>>>>> b6541949d6e735b7a38fe814c6f36f44d1960523
function App() {
  return (

    <div>
<<<<<<< HEAD
      
      <Router>
        <Header/>
        <Routes>
          <Route path="/register" element={<Register/>}  />
          <Route path="/login" element={<Login/>}  />
          <Route path="/blogs" element={<Blogs/>}  />
          <Route path="/" element={<Dashboard/>}  />
          {/* <Route path="/register" element={<Register/>} /> */}

          
        </Routes>
      </Router>
      
=======
<<<<<<< HEAD
      <Header/>
    {/* <Dashboard/> */}
    <CreateNewPost/>
    
=======
      <Header />/
>>>>>>> b6541949d6e735b7a38fe814c6f36f44d1960523
      {/* <Dashboard /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Blogs /> */}
>>>>>>> a0c7d3a59735d6ad435b61d6d9052ea26406e722
    </div>
  );
}

export default App;
