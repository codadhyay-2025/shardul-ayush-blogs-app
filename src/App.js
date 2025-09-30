import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';

=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './Component/Dashboard/Dashboard.js';
>>>>>>> 40dc1b94e955b752698012f820e8f0f8d1693a6c
import CreateNewPost from './Component/CreatePost/CreateNewPost.js'
import Header from './Component/Header/Header';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
// import Dashboard from './Component/Dashboard/Dashboard';
import Blogs from './Component/Blogs/Blogs';
<<<<<<< HEAD

=======
>>>>>>> 40dc1b94e955b752698012f820e8f0f8d1693a6c
function App() {
  return (

    <div>
<<<<<<< HEAD
      
=======
>>>>>>> 40dc1b94e955b752698012f820e8f0f8d1693a6c
      <Router>
        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/createnewpost" element={<CreateNewPost/>} />


        </Routes>
      </Router>
<<<<<<< HEAD
  
=======

>>>>>>> 40dc1b94e955b752698012f820e8f0f8d1693a6c
    </div>
  );
}

export default App;
