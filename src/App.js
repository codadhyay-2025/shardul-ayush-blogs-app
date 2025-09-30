import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './Component/Dashboard/Dashboard.js';
import CreateNewPost from './Component/CreatePost/CreateNewPost.js'
import Header from './Component/Header/Header';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
// import Dashboard from './Component/Dashboard/Dashboard';
import Blogs from './Component/Blogs/Blogs';
function App() {
  return (

    <div>
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

    </div>
  );
}

export default App;
